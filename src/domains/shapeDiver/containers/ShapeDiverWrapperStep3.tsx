import _ from 'lodash';
import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import { compose } from 'recompose';
import { RootState } from 'app/store';
import { RouteComponentProps, withRouter } from 'react-router-dom';
import { Api } from 'shapediver-types';
import { Parameters } from 'domains/shapeDiver/models';
import { setFloorSelectionOptions, setFloorSelection } from 'domains/shapeDiver/slice';
import { FullPageOverlay } from 'domains/core/containers';
import { LocationSimple } from 'domains/core/models';

const styles = {
  container: {
    width: '98%',
    height: '60%',
  }
};

interface StateProps {
  roomType: number;
  location: LocationSimple | undefined;
  floorSelection: number;
}

interface ComponentProps {
  isLoaded: boolean;
}

interface DispatchProps {
  setFloorSelectionOptions: typeof setFloorSelectionOptions;
  setFloorSelection: typeof setFloorSelection;
}

type Props = StateProps & DispatchProps & RouteComponentProps;
class ShapeDiverWrapperStep3 extends React.Component<Props, ComponentProps> {
  private containerSD: React.RefObject<HTMLDivElement>;
  private api: Api.ApiInterfaceV2 | null;
  private parameters: any | null;

  constructor(props: Props) {
    super(props);
    // create a reference to the viewer container created in render
    this.containerSD = React.createRef();
    // ShapeDiver Viewer API object
    this.api = null;
    // Parameter definitions, will get set once model has been loaded and parameters are registered
    this.parameters = null;

    this.state = {
      isLoaded: false
    }
  }

  public async componentDidUpdate(_: Props) {
    const { location, roomType, floorSelection } = this.props;

    if (this.state.isLoaded) {
      const response = await this.api!.parameters.updateAsync([
        { name: Parameters.Density2, value: location.density },
        { name: Parameters.Regen, value: location.regen },
        { name: Parameters.MaxPrimaryFloors2, value: location.maxPriFloors },
        { name: Parameters.MaxSecondaryFloors2, value: location.maxSecFloors },
        { name: Parameters.NumberStreetFloors2, value: location.streetFloors },
        { name: Parameters.FlatSize, value: location.flatSize },
        { name: Parameters.RoomType, value: roomType },
        { name: Parameters.FloorSelection, value: floorSelection },
      ]);

      if (response.err) {
        console.log(response.err);
      }

      if (response.data) {
        console.log(response.data)
      }
    }
  }

  public async componentDidMount() {
    const { location, roomType } = this.props;
    const { setFloorSelectionOptions, setFloorSelection, floorSelection } = this.props;

    // container for the viewer
    // here the reference works and the container is loaded correctly
    const container = this.containerSD.current;

    // ShapeDiver Viewer constructor settings
    // Refer to https://app.shapediver.com/api for details
    const settings = {
      container,
      showSceneMode: 1 // do not show the scene automatically
    };
    // construct an instance of the viewer

    if (window.SDVApp?.ParametricViewer) {
      this.api = new window.SDVApp.ParametricViewer(settings).getApiV2();

      if (this.api) {
        // register a ShapeDiver CommPlugin
        await this.api.plugins.registerCommPluginAsync({
          ticket: process.env.REACT_APP_SHAPE_DIVER_TICKET_STEP_3!,
          // URL of the ShapeDiver backend system used
          // runtime id to use for this CommPlugin (you might register several)
          runtimeId: 'CommPlugin_1',
          modelViewUrl: 'eu-central-1',
          // the following setting tells the viewer to wait with loading of geometry
          deferGeometryLoading: true
        });

        // get parameters of the model
        this.parameters = this.api.parameters.get().data;

        console.log('Available model parameters', this.parameters);
        const floorSelections = _.find(this.parameters, x => x.name === Parameters.FloorSelection);
        setFloorSelectionOptions(floorSelections.choices);
        setFloorSelection(floorSelections.defval);

        // // refresh (load geometry), because the initial parameter update might not have changed any values
        await this.api.plugins.refreshPluginAsync('CommPlugin_1');

        await this.api.parameters.updateAsync([
          { name: Parameters.Regen, value: location.regen },
          { name: Parameters.Density2, value: location.density },
          { name: Parameters.MaxPrimaryFloors2, value: location.maxPriFloors },
          { name: Parameters.MaxSecondaryFloors2, value: location.maxSecFloors },
          { name: Parameters.NumberStreetFloors2, value: location.streetFloors },
          { name: Parameters.FlatSize, value: location.flatSize },
          { name: Parameters.RoomType, value: roomType },
          { name: Parameters.RoomType, value: roomType },
          { name: Parameters.FloorSelection, value: floorSelection },
        ]);

        // // finally show the scene
        await this.api.updateSettingAsync('scene.show', true);
        this.setState({ isLoaded: true });
      }
    }
  }

  render() {
    return (
      <Fragment>
        {
          !this.state.isLoaded &&
          <FullPageOverlay />
        }
        <div ref={this.containerSD} className="shapediver-container-flex" style={styles.container}>
          <div className='shapediver-viewport-flex'>
            <div id='sdv-container-viewport' style={{ opacity: 0 }}>
            </div>
          </div>
        </div >
      </Fragment>
    );
  }
}

const container = compose<Props, {}>(
  withRouter,
  connect<StateProps, DispatchProps, {}, RootState>(
    (state: RootState) => ({
      location: state.domains.shapediver.location,
      roomType: state.domains.shapediver.roomType,
      floorSelection: state.domains.shapediver.floorSelection,
      densityGeneral: state.domains.shapediver.densityGeneral
    }),
    {
      setFloorSelectionOptions,
      setFloorSelection
    }
  )
)(ShapeDiverWrapperStep3)

export default container;
