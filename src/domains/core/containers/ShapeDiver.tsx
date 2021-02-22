import React from 'react';
import { RouteComponentProps, withRouter } from 'react-router-dom';
import { compose } from 'recompose';
import { Api } from 'shapediver-types';

const parameters = {
  terrain: '3847e53d-d31c-42f6-b595-66ecb574df28',
  custom: '6169b442-5afb-4369-997d-0ff1cfaf6c08',
  regen: 'bb4dabce-cad9-4395-a979-af2cca882dad',
  density: 'e253b8f5-1114-4210-a525-0f9edbf41cc4',
}

type Props = RouteComponentProps;
class ShapeDiver extends React.Component<Props, {}> {
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
  }

  public async componentDidMount() {
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

    this.api = new window.SDVApp.ParametricViewer(settings);

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
      this.parameters = await this.api.parameters.get().data;
      console.log('Available model parameters', this.parameters);

      // optionally change parameter values before showing the scene
      // await this.api.parameters.updateAsync([
      //   { name: 'Back plates', value: false },
      //   // { id: INSERT_ID_OF_PARAMETER, value: INSERT_VALUE },
      // ]);

      // // refresh (load geometry), because the initial parameter update might not have changed any values
      await this.api.plugins.refreshPluginAsync('CommPlugin_1');

      // // finally show the scene
      await this.api.updateSettingAsync('scene.show', true);
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
  withRouter
)(ShapeDiver)

export default container;
