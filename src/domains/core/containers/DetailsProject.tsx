import { Fragment, useState } from 'react';
import { Grid, makeStyles, createStyles, Theme, Typography, Button } from '@material-ui/core';
import { RouteComponentProps, withRouter } from 'react-router-dom';
import { PageContainer } from 'domains/core/containers';
import { download, img_basic_volume, img_facade, img_interior } from 'assets';
import EditIcon from '@material-ui/icons/Edit';
import VisibilityOffIcon from '@material-ui/icons/VisibilityOff';
import clsx from 'clsx';
import { TopPanel } from '../components';
import { loadProjectById } from 'domains/shapeDiver/slice';
import { connect } from 'react-redux';
import { RootState } from 'app/store';
import { compose } from 'recompose';
import { Project } from 'domains/shapeDiver/models';
import { useEffect } from 'react';
import { GeneralParameters } from 'domains/common/components';


const varsBasicVolume = [
  { name: "totalLandArea", label: "Total gross floor area", column: 1 },
  { name: "landUserRatio", label: "Land use ratio (LUR)", column: 1 },
  { name: "floorAreaRatio", label: "Floor area ratio (FAR)", column: 1 },
  { name: "totalHousingUnits", label: "Total Units", column: 1, bottom: 2 },
  { name: "terrain", label: "Lot shape", column: 1 },
  { name: "density", label: "Level of density", column: 1 },
  { name: "unitsNumberType", label: "Number of unit types", column: 1 },
  { name: "averageBedroomPerDwelling", label: "Avg bedroom per dwelling (hr/du)", column: 2 },
  { name: "greenSpacePerInhabitant", label: "Green space per inhabitant (m2)", column: 2, bottom: 2 },
  { name: "greenSpaceDensity", label: "Green space density (%)", column: 2 },
  { name: "roadDensity", label: "Road density (%)", column: 2, bottom: 2 },
  { name: "studios", label: "Studios", column: 2 },
  { name: "largeStudios", label: "Large studios", column: 2 },
  { name: "oneBedroom", label: "One bedroom", column: 2 },
  { name: "twoBedroom", label: "Two bedroom", column: 2 },
  { name: "threeBedroom", label: "Three bedroom", column: 2 },
  { name: "fourBedroom", label: "Four bedroom", column: 2 },
]

const varsFacade = [
  { name: "windowPercentage", label: "Windows size", column: 1 },
  { name: "facadeDirection", label: "Facade direction", column: 1 },
  { name: "maxPriFloors", label: "Max primary floors", column: 2 },
  { name: "maxSecFloors", label: "Max secondary floors", column: 2 },
  { name: "streetFloors", label: "Street floors", column: 2 },
]

const varsInterior = [
  { name: "flatSize", label: "Flat size", column: 1 },
  { name: "roomType", label: "Room type", column: 1 },
  { name: "totalLandArea", label: "Gross land area", column: 2, bottom: 2 },
  { name: "totalGrossFloorArea", label: "Gross floor area (GFA)", column: 2 },
  { name: "totalGrossLeasableArea", label: "Gross leasable area (GLA)", column: 2, bottom: 2 },
  { name: "landUserRatio", label: "Land user ratio (LUR)", column: 2 },
  { name: "plotRatio", label: "Plot ratio", column: 2, bottom: 2 },
  { name: "totalHousingUnits", label: "Total units (nbr)", column: 2 },
  { name: "dwellingsDensity", label: "Dwellings density (du/ha)", column: 2 },
  { name: "averageInhabitantPerDwelling", label: "Avg. inhabitant per dwelling", column: 2 },
]

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    topPanel: {
      background: 'transparent linear-gradient(93deg, #D6D5E4 0%, #D9D7E1 52%, #E5DED0 100%) 0% 0% no-repeat padding-box',
      height: '60px'
    },
    iconTop: {
      width: 15,
      height: 15
    },
    textTop: {
      fontSize: 10
    },
    textProfile: {
      color: 'white',
      marginTop: 30,
      fontSize: 12
    },
    becomeMember: {
      borderRadius: 15,
      color: 'white',
      textTransform: 'none',
      border: '2px solid white',
      padding: '0px',
      width: '50%',
      fontSize: 10,
      marginTop: 5
    },
    compareButton: {
      borderRadius: 15,
      color: 'black',
      textTransform: 'none',
      marginLeft: 10,
      padding: '2px 30px',
      marginTop: 30,
      background: '#D6D5E4 0% 0% no-repeat padding-box',
      fontSize: 15,
      letterSpacing: '0.69px',
      opacity: 1,
      fontWeight: 'bold',
      '&:hover': {
        color: 'white',
      }
    },
    subtitleProjects: {
      color: 'white',
      marginTop: 30
    },
    backgroundNew: {
      background: '#FFFFFF33 0% 0% no-repeat padding-box',
      height: '30vh',
      width: '100%',
      marginTop: 10,
      display: 'flex'
    },
    AddBox: {
      background: '#FFFFFF 0% 0% no-repeat padding-box',
      opacity: 0.9,
      border: '1px solid #707070',
      marginBottom: 10,
      height: '10vh',
      width: '10vh',
      display: 'flex'
    },
    text: {
      color: 'white',
      marginTop: 10
    },
    backgroundProject: {
      background: '#FFFFFF1A 0% 0% no-repeat padding-box',
      width: '100%',
      marginTop: 20,
      display: 'flex',
      padding: '15px 0px',
      marginBottom: 50,
      '&:hover': {
        backgroundColor: '#FFFFFF33'
      },
    },
    optionsProject: {
      color: '#FFFFFFB3',
      fontSize: 15
    },
    containerOptions: {
      marginTop: 10
    },
    optionsIcon: {
      marginLeft: 10,
      fontSize: 15
    },
    imgIcon: {
      height: '15px',
      marginLeft: 10,
    },
    nameProject: {
      color: 'white',
      marginTop: 30,
      fontWeight: 400
    },
    summaryText: {
      fontWeight: 100,
      color: 'white',
      opacity: 0.8,
      marginRight: 5
    },
    principalParameters: {
      color: 'white',
      fontWeight: 400
    },
    infoContainer: {
      padding: '0px 20px'
    },
    titleContainer: {
      color: "white"
    },
    rigthContainer: {
      borderLeft: '0.5px solid #ffffff33',
      paddingLeft: 30,
      paddingRight: 30
    }
  })
);

interface RouteProps {
  id: string;
}

interface containerInfo {
  img?: any;
  vars?: any;
  title?: string;
  project: any;
}

interface StateProps {
  currentProject: Project | undefined;
}

interface DispatchProps {
  loadProjectById: typeof loadProjectById;
}

type Props = StateProps & DispatchProps & RouteComponentProps<RouteProps>;
export const DetailsProjects = (props: Props) => {
  const { history, loadProjectById, currentProject, match: { params } } = props;

  const classes = useStyles();

  const goToSummary = (id: string) => {
    history.push("/detailsSum/" + id)
  }


  useEffect(() => {
    loadProjectById(params.id);
  }, [loadProjectById, params])

  const projectObj = {
    totalLandArea: currentProject?.modelData?.totalLandArea,
    landUserRatio: currentProject?.modelData?.landUserRatio,
    floorAreaRatio: currentProject?.modelData?.floorAreaRatio,
    totalHousingUnits: currentProject?.modelData?.totalHousingUnits,
    terrain: currentProject?.terrain,
    terr: currentProject?.terrain,
    averageBedroomPerDwelling: currentProject?.modelData?.averageBedroomPerDwelling,
    greenSpacePerInhabitant: currentProject?.modelData?.greenSpacePerInhabitant,
    greenSpaceDensity: currentProject?.modelData?.greenSpaceDensity,
    roadDensity: currentProject?.modelData?.roadDensity,
    studios: currentProject?.modelData?.studios,
    largeStudios: currentProject?.modelData?.largeStudios,
    oneBedroom: currentProject?.modelData?.oneBedroom,
    twoBedroom: currentProject?.modelData?.twoBedroom,
    threeBedroom: currentProject?.modelData?.threeBedroom,
    fourBedroom: currentProject?.modelData?.fourBedroom,
    windowPercentage: currentProject?.location?.windowPercentage,
    windowPc: currentProject?.location?.windowPercentage,
    facadeDirection: currentProject?.facadeDirection,
    facadeDir: currentProject?.facadeDirection,
    maxPriFloors: currentProject?.location?.maxPriFloors,
    maxSecFloors: currentProject?.location?.maxSecFloors,
    streetFloors: currentProject?.location?.streetFloors,
    flatSize: currentProject?.location?.flatSize,
    flatS: currentProject?.location?.flatSize,
    density: currentProject?.location?.density,
    den: currentProject?.location?.density,
    unitsNumberType: currentProject?.location?.unitsNumberType,
    unitsNumberT: currentProject?.location?.unitsNumberType,
    roomType: currentProject?.roomType,
    roomT: currentProject?.roomType,
    totalGrossFloorArea: currentProject?.modelData?.totalGrossFloorArea,
    totalGrossLeasableArea: currentProject?.modelData?.totalGrossLeasableArea,
    plotRatio: currentProject?.modelData?.plotRatio,
    dwellingsDensity: currentProject?.modelData?.dwellingsDensity,
    averageInhabitantPerDwelling: currentProject?.modelData?.averageInhabitantPerDwelling,
  }



  return (
    <Fragment>
      <PageContainer background="black-model">
        <Grid container xs={12} className={classes.topPanel} >
          <TopPanel />
          <Grid item container xs={12} direction="row">
            <Grid item container xs={5}>
              <Typography variant="h6" className={classes.nameProject}>
                {currentProject?.projectName} <span className={classes.summaryText}>Summary</span>
              </Typography>
            </Grid>
            <Grid item container xs={7} style={{ justifyContent: 'flex-end' }}>
              <Button className={classes.compareButton}
                endIcon={<VisibilityOffIcon />}>
                Publish
              </Button>
              <Button className={classes.compareButton}
                endIcon={<EditIcon />}>
                Edit
              </Button>
              <Button className={classes.compareButton}
                endIcon={<img alt="downlaod-icon" src={download} width={15} />}
                onClick={() => goToSummary(params.id)}>
                Download pdf
              </Button>
            </Grid>
          </Grid>
          <GeneralParameters project={currentProject} />
          <ContainerInfo img={img_basic_volume} vars={varsBasicVolume} title={"Basic volume"} project={projectObj} />
          <ContainerInfo img={img_facade} vars={varsFacade} title={"Facade"} project={projectObj} />
          <ContainerInfo img={img_interior} vars={varsInterior} title={"Interior"} project={projectObj} />
        </Grid>
      </PageContainer>
    </Fragment>
  )
}

const container = compose<Props, {}>(
  withRouter,
  connect<StateProps, DispatchProps, {}, RootState>(
    (state: RootState) => ({
      currentProject: state.domains.shapediver.currentProject
    }),
    {
      loadProjectById
    }
  ))
  (DetailsProjects);

export default container;

const ContainerInfo = (props: containerInfo) => {
  const classes = useStyles();
  const { img, vars, title, project } = props;

  if (project.terr === 0) {
    project.terrain = "Square"
  } else if (project.terr === 1) {
    project.terrain = "Rectangle"
  } else {
    project.terrain = "Custom"
  }


  if (project.windowPc === 0) {
    project.windowPercentage = "50%"
  } else if (project.windowPc === 1) {
    project.windowPercentage = "60%"
  } else {
    project.windowPercentage = "70%"
  }

  if (project.facadeDir === 0) {
    project.facadeDirection = "Horizontal"
  } else if (project.facadeDir === 1) {
    project.facadeDirection = "Vertical"
  }

  if (project.den === 0) {
    project.density = "Suburban"
  } else if (project.den === 1) {
    project.density = "Urban City"
  } else {
    project.density = "Center City"
  }

  if (project.flatS === 0) {
    project.flatSize = "Small"
  } else if (project.flatS === 1) {
    project.flatSize = "Medium"
  } else {
    project.flatSize = "Large"
  }

  if (project.roomT === 0) {
    project.roomType = "Close"
  } else if (project.roomType === 1) {
    project.roomT = "Open"
  } else {
    project.roomType = "Work"
  }

  if (project.unitsNumberT === 0) {
    project.unitsNumberType = "2"
  } else if (project.unitsNumberT === 1) {
    project.unitsNumberType = "3"
  } else {
    project.unitsNumberType = "4"
  }

  return (
    <Grid item container xs={12} direction="row">
      <Grid item container xs={5} justify="center">
        <img alt="basic-volume" src={img} width="80%" />
      </Grid>
      <Grid item container xs={7} className={classes.backgroundProject}>
        <Grid item container xs={6} className={classes.infoContainer}>
          <Typography variant="h6" className={classes.titleContainer}>
            {title}
          </Typography>
          <Grid item container direction="column">
            {vars.map((v: any) => {
              return (
                v.column === 1 ?
                  v.bottom ?
                    <Typography variant="body2" style={{ marginBottom: 15 }} className={classes.titleContainer}>
                      {v.label} <span style={{ float: 'right' }}>
                        {project[v.name]}
                      </span>
                    </Typography> :
                    <Typography variant="body2" style={{ marginBottom: 2 }} className={classes.titleContainer}>
                      {v.label} <span style={{ float: 'right' }}>
                        {project[v.name]}
                      </span>
                    </Typography> : null

              )
            })}
          </Grid>
        </Grid>
        <Grid item container xs={6} className={clsx(classes.infoContainer && classes.rigthContainer)} direction="column">
          {vars.map((v: any) => {
            return (
              v.column === 2 ?
                v.bottom ?
                  <Typography variant="body2" style={{ marginBottom: 15 }} className={classes.titleContainer}>
                    {v.label} <span style={{ float: 'right' }}>
                      {project[v.name]}
                    </span>
                  </Typography> :
                  <Typography variant="body2" style={{ marginBottom: 2 }} className={classes.titleContainer}>
                    {v.label} <span style={{ float: 'right' }}>
                      {project[v.name]}
                    </span>
                  </Typography> : null
            )
          })}
        </Grid>
      </Grid>
    </Grid>
  )
}


