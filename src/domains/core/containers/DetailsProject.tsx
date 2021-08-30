import { Fragment } from 'react';
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
  { name: "landUserRatio", label: "Floor area ratio (FAR)", column: 1 },
  { name: "totalHousingUnits", label: "Total Units", column: 1, bottom: 2 },
  { name: "terrain", label: "Lot shape", column: 1 },
  { name: "density", label: "Level of density", column: 1 },
  { name: "unitTypes", label: "Number of unit types", column: 1 },
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
  { name: "WindowPercentage", label: "Windows size", column: 1 },
  { name: "FacadeDirection", label: "Facade direction", column: 1 },
  { name: "landUserRatio", label: "Max primary floors", column: 2 },
  { name: "totalHousingUnits", label: "Max secondary floors", column: 2 },
  { name: "terrain", label: "Street floors", column: 2 },
]

const varsInterior = [
  { name: "FlatSize", label: "Flat size", column: 1 },
  { name: "RoomType", label: "Room type", column: 1 },
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
      paddingLeft: 30
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

  return (
    <Fragment>
      <PageContainer background="black-model">
        <Grid container xs={12} className={classes.topPanel} >
          <TopPanel />
          <Grid item container xs={12} direction="row">
            <Grid item container xs={5}>
              <Typography variant="h6" className={classes.nameProject}>
                Project 1 <span className={classes.summaryText}>Summary</span>
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
          <ContainerInfo img={img_basic_volume} vars={varsBasicVolume} title={"Basic volume"} />
          <ContainerInfo img={img_facade} vars={varsFacade} title={"Facade"} />
          <ContainerInfo img={img_interior} vars={varsInterior} title={"Interior"} />
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
  const { img, vars, title } = props;

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
                      {v.label}
                    </Typography> :
                    <Typography variant="body2" style={{ marginBottom: 2 }} className={classes.titleContainer}>
                      {v.label}
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
                    {v.label}
                  </Typography> :
                  <Typography variant="body2" style={{ marginBottom: 2 }} className={classes.titleContainer}>
                    {v.label}
                  </Typography> : null
            )
          })}
        </Grid>
      </Grid>
    </Grid>
  )
}


