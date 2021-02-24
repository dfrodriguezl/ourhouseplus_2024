import _ from 'lodash';
import React from 'react';
import { compose } from 'recompose';
import { RootState } from 'app/store';
import { connect } from 'react-redux';
import { RouteComponentProps, withRouter } from 'react-router-dom';
import { Api } from 'shapediver-types';
import { Parameters } from 'domains/shapeDiver/models';
import { setOptions } from 'domains/shapeDiver/slice';

interface StateProps {
  terrain: string | undefined;
  density: string | undefined;
  regen: number | undefined
}

interface ComponentProps {
  isLoaded: boolean;
}

interface DispatchProps {
  setOptions: typeof setOptions
}

type Props = StateProps & DispatchProps & RouteComponentProps;
class ShapeDiverWrapper extends React.Component<Props, ComponentProps> {
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
    const { terrain, density, regen } = this.props;

    if (this.state.isLoaded) {
      const response = await this.api!.parameters.updateAsync([
        {
          id: Parameters.Terrain,
          value: terrain
        },
        {
          id: Parameters.Density,
          value: density
        },
        {
          id: Parameters.Regen,
          value: regen
        },
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
    const { terrain, density, setOptions } = this.props;
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
          ticket: process.env.REACT_APP_SHAPE_DIVER_TICKET!,
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

        setOptions({
          regen: _.find(this.parameters, x => x.id === Parameters.Regen).choices,
          terrain: _.find(this.parameters, x => x.id === Parameters.Terrain).choices
        });

        // // refresh (load geometry), because the initial parameter update might not have changed any values
        await this.api.plugins.refreshPluginAsync('CommPlugin_1');

        await this.api!.parameters.updateAsync([
          {
            id: Parameters.Terrain,
            value: terrain
          },
          {
            id: Parameters.Density,
            value: density
          }
        ]);

        // // finally show the scene
        await this.api.updateSettingAsync('scene.show', true);
        this.setState({ isLoaded: true });
      }
    }
  }

  render() {
    return (
      <div ref={this.containerSD} className="shapediver-container-flex" style={{ width: '98%', height: '100%', background: 'white' }}>
        <div className='shapediver-viewport-flex'>
          <div id='sdv-container-viewport' style={{ opacity: 0 }}>
          </div>
        </div>
      </div >
    );
  }
}

const container = compose<Props, {}>(
  withRouter,
  connect<StateProps, DispatchProps, {}, RootState>(
    (state: RootState) => ({
      terrain: state.domains.shapediver.terrain,
      density: state.domains.shapediver.density,
      regen: state.domains.shapediver.regen,
    }),
    {
      setOptions
    }
  )
)(ShapeDiverWrapper)

export default container;
