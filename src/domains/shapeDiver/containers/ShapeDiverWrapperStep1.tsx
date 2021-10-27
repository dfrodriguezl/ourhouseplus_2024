import _ from 'lodash';
import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import { compose } from 'recompose';
import { RootState } from 'app/store';
import { RouteComponentProps, withRouter } from 'react-router-dom';
import { Api } from 'shapediver-types';
import { DataParameters, Parameters } from 'domains/shapeDiver/models';
import { getArea, setModelData, setOptions } from 'domains/shapeDiver/slice';
import { LocationSimple } from 'domains/core/models';
import { FullPageOverlay } from 'domains/core/containers';

const styles = {
  container: {
    width: '98%',
    height: '70%',
  }
};


interface StateProps {
  terrain: number;
  area: number | undefined;
  location: LocationSimple | undefined;
  importModel: string;
  densityGeneral: string;
}

interface ComponentProps {
  isLoaded: boolean;
}

interface DispatchProps {
  setOptions: typeof setOptions;
  setModelData: typeof setModelData;
}


type Props = StateProps & DispatchProps & RouteComponentProps;
class ShapeDiverWrapperStep1 extends React.Component<Props, ComponentProps> {
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

  public async componentDidUpdate(_props: Props) {
    const { terrain, area, location, setModelData, densityGeneral } = this.props;
    const typeDensity = densityGeneral === 'suburban' ? 'suburban' : 'urban';


    if (this.state.isLoaded) {
      const payload: { name: string, value: any }[] =
        typeDensity === "urban" ?
          [
            { name: Parameters.Terrain, value: terrain },
            { name: Parameters.Density, value: location.density },
            { name: Parameters.Area, value: area?.toString() },
            { name: Parameters.Regen, value: location.regen },
            { name: Parameters.UnitsNumberType, value: location.unitsNumberType },
            { name: Parameters.MaxPrimaryFloors, value: location.maxPriFloors },
            { name: Parameters.MaxSecondaryFloors, value: location.maxSecFloors },
            { name: Parameters.NumberStreetFloors, value: location.streetFloors },
            { name: Parameters.Typologies, value: location.typologies },
            { name: Parameters.EmptySpaceSelection, value: location.emptySpaceSelection },
            { name: Parameters.UndefinedTower, value: location.undefinedTower },
            { name: Parameters.AxisSelection, value: location.axisSelection },
            { name: Parameters.StreetDensity, value: location.streetDensity },
            { name: Parameters.IslandSpacings, value: location.islandSpacings },
            { name: Parameters.FloorsAlignment, value: location.floorsAlignment === undefined ? 0 : location.floorsAlignment },
            { name: Parameters.UnitsNumberType, value: location.unitsOrganization === undefined ? 0 : location.unitsOrganization },
          ] :
          [
            { name: Parameters.Terrain, value: terrain },
            { name: Parameters.Density, value: location.density },
            { name: Parameters.Area, value: area?.toString() },
            { name: Parameters.UnitsNumberType, value: location.unitsNumberType },
            { name: Parameters.MaxPrimaryFloors, value: location.maxPriFloors },
            // { name: Parameters.MaxSecondaryFloors, value: location.maxSecFloors },
            { name: Parameters.NumberStreetFloors, value: location.streetFloors },
            { name: Parameters.Typologies, value: location.typologies },
            { name: Parameters.AxisSelection, value: location.axisSelection },
            { name: Parameters.StreetDensity, value: location.streetDensity },
            { name: Parameters.IslandSpacings, value: location.islandSpacings },
            { name: Parameters.FloorsAlignment, value: location.floorsAlignment === undefined ? 0 : location.floorsAlignment },
            { name: Parameters.UnitsNumberType, value: location.unitsOrganization === undefined ? 0 : location.unitsOrganization },
          ];


      if (window.importFile) {
        payload.push({ name: Parameters.ImportModel, value: window.importFile })
      } else {
        payload.push({ name: Parameters.ImportModel, value: '' })
      }


      const response = await this.api!.parameters.updateAsync(payload);


      if (response.err) {
        console.log(response.err);
        return;
      }

      if (response.data) {
        console.log(response.data)
      }

      const modelData = this.api!.scene.getData().data;

      console.log("MODEL DATA", modelData)

      setModelData({
        totalLandArea: _.find(modelData, x => x.name === DataParameters.GrossLandArea)?.data ?? 0,
        totalGrossFloorArea: _.find(modelData, x => x.name === DataParameters.GrossFloorArea)?.data ?? 0,
        totalGrossLeasableArea: _.find(modelData, x => x.name === DataParameters.GrossLeasableArea)?.data ?? 0,
        plotRatio: _.find(modelData, x => x.name === DataParameters.PlotArea)?.data ?? 0,
        totalHousingUnits: _.find(modelData, x => x.name === DataParameters.TotalHousingUnits)?.data ?? 0,
        dwellingsDensity: _.find(modelData, x => x.name === DataParameters.DwellingsDensity)?.data ?? 0,
        averageInhabitantPerDwelling: _.find(modelData, x => x.name === DataParameters.AverageInhabitantPerDwelling)?.data ?? 0,
        averageBedroomPerDwelling: _.find(modelData, x => x.name === DataParameters.AverageBedroomPerDwelling)?.data ?? 0,
        greenSpacePerInhabitant: _.find(modelData, x => x.name === DataParameters.GreenSpacePerInhabitant)?.data ?? 0,
        greenSpaceDensity: _.find(modelData, x => x.name === DataParameters.GreenSpaceDensity)?.data ?? 0,
        roadDensity: _.find(modelData, x => x.name === DataParameters.RoadDensity)?.data ?? 0,
        floorAreaRatio: _.find(modelData, x => x.name === DataParameters.FloorAreaRatio)?.data ?? 0,
        landUserRatio: _.find(modelData, x => x.name === DataParameters.LandUserRatio)?.data ?? 0,
        studios: _.find(modelData, x => x.name === DataParameters.Studios)?.data ?? 0,
        largeStudios: _.find(modelData, x => x.name === DataParameters.LargeStudios)?.data ?? 0,
        oneBedroom: _.find(modelData, x => x.name === DataParameters.OneBedroom)?.data ?? 0,
        twoBedroom: _.find(modelData, x => x.name === DataParameters.TwoBedroom)?.data ?? 0,
        threeBedroom: _.find(modelData, x => x.name === DataParameters.ThreeBedroom)?.data ?? 0,
        fourBedroom: _.find(modelData, x => x.name === DataParameters.FourBedroom)?.data ?? 0,
        groundFloorFreeSpace: _.find(modelData, x => x.name === DataParameters.GroundFloorFreeSpace)?.data ?? 0,
        multipleFloorFreeSpace: _.find(modelData, x => x.name === DataParameters.MultipleFloorFreeSpace)?.data ?? 0,
        mostHeightBuilding: _.find(modelData, x => x.name === DataParameters.MostHeightBuilding)?.data ?? 0,
        landUserRatioNet: _.find(modelData, x => x.name === DataParameters.LandUserRatioNet)?.data ?? 0,
        landUserRatioGross: _.find(modelData, x => x.name === DataParameters.LandUserRatioGross)?.data ?? 0,
        floorAreaRatioNet: _.find(modelData, x => x.name === DataParameters.FloorAreaRatioNet)?.data ?? 0,
        floorAreaRatioGross: _.find(modelData, x => x.name === DataParameters.FloorAreaRatioGross)?.data ?? 0,
        populationDensity: _.find(modelData, x => x.name === DataParameters.PopulationDensity)?.data ?? 0,
        roadDensitym2: _.find(modelData, x => x.name === DataParameters.RoadDensitym2)?.data ?? 0,
        greenSpaceDensitym2: _.find(modelData, x => x.name === DataParameters.GreenSpaceDensitym2)?.data ?? 0,
        studiosm2: _.find(modelData, x => x.name === DataParameters.Studiosm2)?.data ?? 0,
        studiosPorc: _.find(modelData, x => x.name === DataParameters.StudiosPorc)?.data ?? 0,
        largeStudiosm2: _.find(modelData, x => x.name === DataParameters.LargeStudiosm2)?.data ?? 0,
        largeStudiosPorc: _.find(modelData, x => x.name === DataParameters.LargeStudiosPorc)?.data ?? 0,
        oneBedroomm2: _.find(modelData, x => x.name === DataParameters.OneBedroomm2)?.data ?? 0,
        oneBedroomPorc: _.find(modelData, x => x.name === DataParameters.OneBedroomPorc)?.data ?? 0,
        twoBedroomm2: _.find(modelData, x => x.name === DataParameters.TwoBedroomm2)?.data ?? 0,
        twoBedroomPorc: _.find(modelData, x => x.name === DataParameters.TwoBedroomPorc)?.data ?? 0,
        threeBedroomm2: _.find(modelData, x => x.name === DataParameters.ThreeBedroomm2)?.data ?? 0,
        threeBedroomPorc: _.find(modelData, x => x.name === DataParameters.ThreeBedroomPorc)?.data ?? 0,
        fourBedroomm2: _.find(modelData, x => x.name === DataParameters.FourBedroomm2)?.data ?? 0,
        fourBedroomPorc: _.find(modelData, x => x.name === DataParameters.FourBedroomPorc)?.data ?? 0,
      });
    }
  }

  public async componentDidMount() {
    const { terrain, area, location, setOptions, setModelData, densityGeneral } = this.props;
    const typeDensity = densityGeneral === 'suburban' ? 'suburban' : 'urban';


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
          ticket: typeDensity === 'suburban' ? process.env.REACT_APP_SHAPE_DIVER_TICKET_STEP_1_SUB! : process.env.REACT_APP_SHAPE_DIVER_TICKET_STEP_1!,
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
          regen: typeDensity === "urban" ?
            _.find(this.parameters, x => x.name === Parameters.Regen).choices :
            [],
          terrain: _.find(this.parameters, x => x.name === Parameters.Terrain).choices
        });

        setModelData({
          floorAreaRatio: 0, landUserRatio: 0, totalGrossFloorArea: 0, totalHousingUnits: 0, averageBedroomPerDwelling: 0,
          averageInhabitantPerDwelling: 0, dwellingsDensity: 0, greenSpaceDensity: 0, greenSpacePerInhabitant: 0,
          plotRatio: 0, roadDensity: 0, totalGrossLeasableArea: 0, totalLandArea: 0,
          studios: 0, largeStudios: 0, oneBedroom: 0, twoBedroom: 0, threeBedroom: 0, fourBedroom: 0,
          groundFloorFreeSpace: 0, multipleFloorFreeSpace: 0, mostHeightBuilding: 0, landUserRatioNet: 0, landUserRatioGross: 0,
          floorAreaRatioNet: 0, floorAreaRatioGross: 0, populationDensity: 0, roadDensitym2: 0, greenSpaceDensitym2: 0,
          studiosm2: 0, studiosPorc: 0, largeStudiosm2: 0, largeStudiosPorc: 0, oneBedroomm2: 0, oneBedroomPorc: 0,
          twoBedroomm2: 0, twoBedroomPorc: 0, threeBedroomm2: 0, threeBedroomPorc: 0, fourBedroomm2: 0, fourBedroomPorc: 0,
        });

        // // refresh (load geometry), because the initial parameter update might not have changed any values
        await this.api.plugins.refreshPluginAsync('CommPlugin_1');

        await this.api.parameters.updateAsync(
          typeDensity === "urban" ?
            [
              { name: Parameters.Terrain, value: terrain },
              { name: Parameters.Density, value: location.density },
              { name: Parameters.Area, value: area?.toString() },
              { name: Parameters.Regen, value: location.regen },
              { name: Parameters.UnitsNumberType, value: location.unitsNumberType },
              { name: Parameters.MaxPrimaryFloors, value: location.maxPriFloors },
              { name: Parameters.MaxSecondaryFloors, value: location.maxSecFloors },
              { name: Parameters.NumberStreetFloors, value: location.streetFloors },
              { name: Parameters.Typologies, value: location.typologies },
              { name: Parameters.EmptySpaceSelection, value: location.emptySpaceSelection },
              { name: Parameters.UndefinedTower, value: location.undefinedTower },
              { name: Parameters.AxisSelection, value: location.axisSelection },
              { name: Parameters.StreetDensity, value: location.streetDensity },
              { name: Parameters.FloorsAlignment, value: location.floorsAlignment === undefined ? 0 : location.floorsAlignment },
              { name: Parameters.UnitsNumberType, value: location.unitsOrganization === undefined ? 0 : location.unitsOrganization },
            ] :
            [
              { name: Parameters.Terrain, value: terrain },
              { name: Parameters.Density, value: location.density },
              { name: Parameters.Area, value: area?.toString() },
              { name: Parameters.UnitsNumberType, value: location.unitsNumberType },
              { name: Parameters.MaxPrimaryFloors, value: location.maxPriFloors },
              { name: Parameters.MaxSecondaryFloors, value: location.maxSecFloors },
              { name: Parameters.NumberStreetFloors, value: location.streetFloors },
              { name: Parameters.Typologies, value: location.typologies },
              { name: Parameters.AxisSelection, value: location.axisSelection },
              { name: Parameters.StreetDensity, value: location.streetDensity },
              { name: Parameters.FloorsAlignment, value: location.floorsAlignment === undefined ? 0 : location.floorsAlignment },
              { name: Parameters.UnitsNumberType, value: location.unitsOrganization === undefined ? 0 : location.unitsOrganization },
            ]
        );

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
      terrain: state.domains.shapediver.terrain,
      location: state.domains.shapediver.location,
      importModel: state.domains.shapediver.importModel,
      area: getArea(state),
      densityGeneral: state.domains.shapediver.densityGeneral
    }),
    {
      setOptions,
      setModelData,
    }
  )
)(ShapeDiverWrapperStep1)

export default container;
