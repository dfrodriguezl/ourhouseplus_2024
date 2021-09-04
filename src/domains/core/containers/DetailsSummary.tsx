import { Fragment } from 'react';
import { Grid, makeStyles, createStyles, Typography, Button, Box, Divider } from '@material-ui/core';
import { RouteComponentProps, withRouter } from 'react-router-dom';
import { PageContainer } from 'domains/core/containers';
import { MapGeo, TopPanel } from 'domains/core/components';
import { download, height_6, height_12, height_13 } from 'assets';
import EditIcon from '@material-ui/icons/Edit';
import VisibilityOffIcon from '@material-ui/icons/VisibilityOff';
import clsx from 'clsx';
import { GeneralParameters } from 'domains/common/components';
import { loadProjectById, setInitialParams } from 'domains/shapeDiver/slice';
import { connect } from 'react-redux';
import { RootState } from 'app/store';
import { Project } from 'domains/shapeDiver/models';
import { compose } from 'recompose';
import { useEffect } from 'react';
import { Densities, Density } from 'domains/core/models';
import { useAuth0 } from '@auth0/auth0-react';
import _ from 'lodash';
import WhitePill from 'domains/common/components/WhitePill';

const useStyles = makeStyles(() =>
  createStyles({
    topPanel: {
      background: 'transparent linear-gradient(93deg, #D6D5E4 0%, #D9D7E1 52%, #E5DED0 100%) 0% 0% no-repeat padding-box',
      height: '60px'
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
    imgProject: {
      borderRadius: 32,
      width: '100%'
    },
    imgContainer: {
      padding: 20
    },
    whiteText: {
      color: 'white'
    },
    containerMiddle: {
      marginTop: 50
    },
    divider: {
      backgroundColor: '#707070',
      margin: '10px 0px'
    },
    containerEnd: {
      padding: '0px 100px'
    },
    lightContainer: {
      background: '#D6D5E4 0% 0% no-repeat padding-box',
      padding: '20px 60px',
      borderRadius: 32
    },
    boldText: {
      fontWeight: 'bolder',
    },
    groupText: {
      marginTop: 20
    },
    blackContainer: {
      padding: '20px 60px',
    },
    numberResult: {
      float: 'right'
    }
  })
);

interface StateProps {
  currentProject: Project | undefined;
}

interface RouteProps {
  id: string;
}


interface DispatchProps {
  loadProjectById: typeof loadProjectById;
  setInitialParams: typeof setInitialParams;
}

type Props = DispatchProps & StateProps & RouteComponentProps<RouteProps>;
const DetailsSummary = (props: Props) => {
  const { currentProject, loadProjectById, setInitialParams, match: { params }, history } = props;
  const classes = useStyles();
  const { isAuthenticated, loginWithRedirect, user } = useAuth0();

  useEffect(() => {
    loadProjectById(params.id);
  }, [loadProjectById, params])

  const gotTo3DView = () => {
    if (isAuthenticated && user) {

      if (user['https://www.rea-web.com/roles'].includes('Administrator')) {

        setInitialParams({
          location: currentProject?.location,
          area: currentProject?.area!,
          density: getDensity(currentProject?.location?.density!)!
        });

        history.push('/shapediver/step1');
      }
    } else {
      loginWithRedirect();
    }
  }

  const getDensity = (value: number) => {
    const den = _.find(Densities, (x: Density) => x.value === value);
    return den;
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
                endIcon={<img alt="icon-download" src={download} width={15} />}>
                Download pdf
              </Button>
            </Grid>
          </Grid>
          <GeneralParameters project={currentProject} />
          <Grid item container xs={12}>
            <Grid item xs={4} className={classes.imgContainer}>
              {
                currentProject?.location?.maxPriFloors! <= 6 ?
                  <img alt="img-project" src={height_6} className={classes.imgProject}></img>:
                  currentProject?.location?.maxPriFloors!  <= 12 ?
                  <img alt="img-project" src={height_12} className={classes.imgProject}></img>:
                  <img alt="img-project" src={height_13} className={classes.imgProject}></img>
              }
            </Grid>
            <Grid item xs={4} style={{ padding: '0px 75px' }}>
              <Typography variant="h6" className={classes.whiteText}>
                Project Name
              </Typography>
              <Typography variant="body1" className={classes.whiteText}>
                {currentProject?.projectName}
              </Typography>
              <Box className={clsx(classes.whiteText, true && classes.containerMiddle, true)}>
                <Typography variant="body2">
                  Site area (ha) <span className={classes.numberResult}> {currentProject?.area} </span>
                </Typography>
                <Divider className={classes.divider} />
                <Typography variant="body2">
                  Total dwellings  <span className={classes.numberResult}> {currentProject?.modelData?.totalHousingUnits} </span>
                </Typography>
                <Typography variant="body2">
                  Density u/ha <span className={classes.numberResult}> {currentProject?.modelData?.dwellingsDensity} </span>
                </Typography>
                <Typography variant="body2">
                  Density hr/ha <span className={classes.numberResult}> {currentProject?.modelData?.dwellingsDensity} </span>
                </Typography>
                <Divider className={classes.divider} />
                <Typography variant="body2">
                  Plot ratio <span className={classes.numberResult}> {currentProject?.modelData?.plotRatio} </span>
                </Typography>
                <Divider className={classes.divider} />
                <Typography variant="body2">
                  Max floors <span className={classes.numberResult}> {
                    currentProject?.location?.maxPriFloors !== undefined && currentProject?.location?.maxSecFloors !== undefined ?
                      currentProject?.location?.maxPriFloors + currentProject?.location?.maxSecFloors :
                      currentProject?.location?.maxPriFloors === undefined ? currentProject?.location?.maxSecFloors :
                        currentProject?.location?.maxSecFloors === undefined ? currentProject?.location?.maxPriFloors : 0} </span>
                </Typography>
              </Box>
            </Grid>
            <Grid item container xs={4} className={clsx(classes.whiteText, true && classes.containerEnd, true)} alignItems="center">
              <Box style={{ width: '100%' }}>
                <Typography variant="body2">
                  Studios <span className={classes.numberResult}> {currentProject?.modelData?.studios} </span>
                </Typography>
                <Typography variant="body2">
                  Large studios <span className={classes.numberResult}> {currentProject?.modelData?.largeStudios} </span>
                </Typography>
                <Typography variant="body2">
                  One bedroom <span className={classes.numberResult}> {currentProject?.modelData?.oneBedroom} </span>
                </Typography>
                <Typography variant="body2">
                  Two bedroom <span className={classes.numberResult}> {currentProject?.modelData?.twoBedroom} </span>
                </Typography>
                <Typography variant="body2">
                  Three bedroom <span className={classes.numberResult}> {currentProject?.modelData?.threeBedroom} </span>
                </Typography>
                <Typography variant="body2">
                  Four bedroom <span className={classes.numberResult}> {currentProject?.modelData?.fourBedroom} </span>
                </Typography>
              </Box>
            </Grid>
          </Grid>
          <Grid item container xs={12} className={classes.backgroundProject} style={{ padding: 20 }} direction="row">
            <Grid item container xs={6} className={classes.lightContainer}>
              <Grid item container xs={12} direction="column">
                <Typography variant="body1" className={classes.boldText}>
                  Project area summary
                </Typography>
              </Grid>
              <Grid item container xs={4}>
                <Typography variant="body2" className={classes.groupText}>
                  <span className={classes.boldText}>Plot price</span>
                  <br />
                  Brut plot area
                  <br />
                  Net plot area
                </Typography>
                <Typography variant="body2" className={classes.groupText}>
                  <span className={classes.boldText}>Urbanism</span>
                  <br />
                  Roads
                  <br />
                  Green space (parks)
                  <br />
                  Side walks
                </Typography>
                <Typography variant="body2" className={classes.groupText}>
                  <span className={classes.boldText}>Project</span>
                  <br />
                  Building total area
                  <br />
                  Selling total area
                  <br />
                  Leasing total area
                </Typography>
              </Grid>
              <Grid item xs={4}></Grid>
              <Grid item xs={4}>
                <Typography variant="body2" className={classes.groupText}>
                  <br />
                  <WhitePill text="XXX" />
                  <WhitePill text="XXX" />
                </Typography>
                <Typography variant="body2" className={classes.groupText}>
                  <br />
                  <WhitePill text="XXX" />
                  <WhitePill text="XXX" />
                  <WhitePill text="XXX" />
                </Typography>
                <Typography variant="body2" className={classes.groupText}>
                  <br />
                  <WhitePill text="XXX" />
                  <WhitePill text="XXX" />
                  <WhitePill text="XXX" />
                </Typography>
              </Grid>
            </Grid>
            <Grid item container xs={6} className={classes.blackContainer}>
              <Grid item container xs={12} direction="column">
                <Typography variant="body1" className={clsx(classes.boldText, true && classes.whiteText, true)}>
                  Project summary
                </Typography>
              </Grid>
              <Grid item container xs={6} direction="column">
                <Typography variant="body2" className={clsx(classes.groupText, true && classes.whiteText, true)}>
                  <span className={classes.boldText}>Facade</span>
                  <br />
                  Facade linear meters
                  <br />
                  Facade materials
                  <br />
                </Typography>
                <Typography variant="body2" className={clsx(classes.groupText, true && classes.whiteText, true)}>
                  <span className={classes.boldText}>Dwellings</span>
                  <br />
                  Type
                  <br />
                  Studios size
                  <br />
                  Large studios
                  <br />
                  One bedroom
                  <br />
                  Two bedroom
                  <br />
                  Three bedroom
                </Typography>
              </Grid>
              <Grid item container xs={6} direction="column">
                <Typography variant="body2" className={clsx(classes.groupText, true && classes.whiteText, true)}>
                  <br />
                  xxxx
                  <br />
                  brick, glass, aluminum, concrete
                  <br />
                </Typography>
                <Typography variant="body2" className={clsx(classes.groupText, true && classes.whiteText, true)}>
                  <br />
                  small, open kitchen
                  <br />
                  {currentProject?.modelData?.studios}
                  <br />
                  {currentProject?.modelData?.largeStudios}
                  <br />
                  {currentProject?.modelData?.oneBedroom}
                  <br />
                  {currentProject?.modelData?.twoBedroom}
                  <br />
                  {currentProject?.modelData?.threeBedroom}
                </Typography>
              </Grid>
              <Grid item container xs={12} justify="flex-end">
                <Button className={classes.compareButton} onClick={() => gotTo3DView()}>
                  View project 3D
                </Button>
              </Grid>

            </Grid>
            <Grid item container xs={12} style={{ height: '30vh', marginTop: 25 }}>
              <MapGeo location={currentProject?.location?.city} />
            </Grid>
          </Grid>
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
      loadProjectById,
      setInitialParams
    }
  )
)(DetailsSummary)

export default container;


