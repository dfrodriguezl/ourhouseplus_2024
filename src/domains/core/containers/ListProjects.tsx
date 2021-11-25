import { Fragment, useState, useEffect } from 'react';
import { Grid, makeStyles, createStyles, IconButton, Typography, Button, Box, Link, LinearProgress } from '@material-ui/core';
import { RouteComponentProps, withRouter } from 'react-router-dom';
import { PageContainer, FullPageOverlay } from 'domains/core/containers';
import { height_6, download_white, height_12, height_13, suburban } from 'assets';
import AddIcon from '@material-ui/icons/Add';
import AddSharpIcon from '@material-ui/icons/AddSharp';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import { deleteProjectById, loadProjectsByUsername, setInitialParams, setSaveSuccess, setNameProject, setDensityGeneral, setIdProject, setImportModel, setTerrain } from 'domains/shapeDiver/slice';
import { RootState } from 'app/store';
import { connect } from 'react-redux';
import { compose } from 'recompose';
import { TopPanel } from 'domains/core/components';
import { useAuth0 } from '@auth0/auth0-react';
import { CloudUpload } from '@material-ui/icons';
import { Project } from 'domains/shapeDiver/models';
import { Densities, Density } from 'domains/core/models';
import _ from 'lodash';
import { setOption } from '../coreSlice';
import JSZip from 'jszip';

const useStyles = makeStyles(() =>
  createStyles({
    topPanel: {
      background: 'transparent linear-gradient(93deg, #D6D5E4 0%, #D9D7E1 52%, #E5DED0 100%) 0% 0% no-repeat padding-box',
      height: '60px'
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
      width: '60%',
      padding: '2px 5px',
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
      height: '15vh',
      width: '100%',
      marginTop: 10,
      display: 'flex'
    },
    AddBox: {
      background: '#FFFFFF 0% 0% no-repeat padding-box',
      opacity: 0.9,
      border: '1px solid #707070',
      marginBottom: 2,
      height: '6vh',
      width: '6vh',
      display: 'flex'
    },
    AddBoxRound: {
      background: '#FFFFFF 0% 0% no-repeat padding-box',
      opacity: 0.9,
      border: '1px solid #707070',
      marginTop: 6,
      height: '6vh',
      width: '15vh',
      display: 'flex',
      borderRadius: 45
    },
    text: {
      color: 'white',
      marginTop: 10
    },
    backgroundProject: {
      background: '#FFFFFF1A 0% 0% no-repeat padding-box',
      width: '100%',
      marginTop: 10,
      display: 'flex',
      '&:hover': {
        backgroundColor: '#FFFFFF33',
        cursor: 'pointer'
      }
    },
    optionsProject: {
      color: '#FFFFFFB3',
      fontSize: 15,
      cursor: 'pointer'
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
    linearProgress: {
      height: '2px',
      color: "#FFFDFD",
      backgroundColor: '#707070',
      marginBottom: 30
    },
    textStatus: {
      fontSize: 10,
      color: 'white',
      textAlign: 'center'
    }
  })
);

interface StateProps {
  searchClick?: Object;
  projects: any[];
  loading: boolean;
}

interface DispatchProps {
  loadProjectsByUsername: typeof loadProjectsByUsername;
  deleteProjectById: typeof deleteProjectById;
  setInitialParams: typeof setInitialParams;
  setSaveSuccess: typeof setSaveSuccess;
  setNameProject: typeof setNameProject;
  setDensityGeneral: typeof setDensityGeneral;
  setIdProject: typeof setIdProject;
  setOption: typeof setOption;
  setImportModel: typeof setImportModel;
  setTerrain: typeof setTerrain;
}

type Props = RouteComponentProps & StateProps & DispatchProps;
export const ListProjects = (props: Props) => {
  const { loadProjectsByUsername, deleteProjectById, history, projects, loading, setInitialParams, setSaveSuccess, setNameProject, setDensityGeneral, setIdProject,
    setOption, setImportModel, setTerrain } = props;
  const { user, isAuthenticated, loginWithRedirect } = useAuth0();
  const classes = useStyles();
  const [hover, setHover] = useState(0);

  const goToHome = () => {
    history.push("/home")
  }

  const goToProject = (id: string) => {
    history.push("/details/" + id)
  }

  const goToUploadShape = () => {
    if (isAuthenticated && user) {
      if (user['https://www.rea-web.com/roles'].includes('Administrator')) {
        history.push("/uploadShape")
      } else {
        history.push("/home")
      }

    }

  }
  const getDensityType = (value: number) => {
    const den = _.find(Densities, (x: Density) => x.value === value);
    return den;
  }

  const gotTo3DView = (id: string, project: Project) => {
    const locationSaved: any = project?.location;
    const densityGeneral = project?.location?.densityGeneral !== undefined ? project?.location?.densityGeneral! : project?.location?.density!;
    const densityLocal = densityGeneral === 0 ? "suburban" : "urban";

    if (isAuthenticated && user) {

      if (user['https://www.rea-web.com/roles'].includes('Administrator')) {

        setInitialParams({
          location: locationSaved![densityLocal] ?
            {
              id: locationSaved?.id!,
              city: locationSaved?.city!,
              densityGeneral: locationSaved?.density!,
              description: locationSaved?.description!,
              maxPriFloors: locationSaved![densityLocal].maxPriFloors,
              maxSecFloors: locationSaved![densityLocal].maxSecFloors,
              streetFloors: locationSaved![densityLocal].streetFloors,
              windowPercentage: locationSaved![densityLocal].windowPercentage,
              unitsNumberType: locationSaved![densityLocal].unitsNumberType,
              density: locationSaved![densityLocal].density,
              flatSize: locationSaved![densityLocal].flatSize,
              flatType: locationSaved![densityLocal].flatType,
              regen: locationSaved![densityLocal].regen,
              lat: locationSaved![densityLocal].lat,
              lon: locationSaved![densityLocal].lon,
              p_vivs: locationSaved![densityLocal].p_vivs,
              axisSelection: locationSaved![densityLocal].axisSelection,
              typologies: locationSaved![densityLocal].typologies,
              emptySpaceSelection: locationSaved![densityLocal].emptySpaceSelection,
              undefinedTower: locationSaved![densityLocal].undefinedTower,
              streetDensity: locationSaved![densityLocal].streetDensity,
              islandSpacings: locationSaved![densityLocal].islandSpacings,
              floorsAlignment: locationSaved![densityLocal].floorsAlignment,
              unitsOrganization: locationSaved![densityLocal].unitsOrganization,
            } :
            project?.location,
          area: project.area === 0 && project.pathTerrain && !project.modelData ? 1 : project.area === 0 && project.modelData?.totalLandArea ? project.modelData?.totalLandArea/10000 : project?.area!,
          density: getDensityType(densityGeneral)!
        });
        setDensityGeneral(densityGeneral);
        setSaveSuccess(false)
        setNameProject(project?.projectName!)
        setIdProject(id);
        setOption("edit");
        
        
        if (!project.area && project.pathTerrain) {
          unzipFile(project.pathTerrain, id, project.terrain);
        } else {
          window.importFile = undefined;
          setImportModel('')
        }
        history.push('/models/step1');
      }
    } else {
      loginWithRedirect();
    }
  }

  async function unzipFile(zip: any,id: string, terrain: number | undefined) {
    const jsDecodeZip = new JSZip();
    const unzipped = await jsDecodeZip.loadAsync(zip);
    const content = await unzipped.file(unzipped.files['undefined'].name)?.async("blob").then(function (fileData) {
      return new File([fileData], id + '.dxf')
    })
    window.importFile = content;
    setTerrain(terrain);
    setImportModel(id + '.dxf');
  }

  useEffect(() => {
    if (user?.email) {
      loadProjectsByUsername(user.email);
      setTerrain(1)
    }
  }, [loadProjectsByUsername, user, setTerrain])

  return (
    <Fragment>
      {
        loading &&
        <FullPageOverlay />
      }
      <PageContainer background="black-model">
        <Grid container xs={12} className={classes.topPanel} >
          <TopPanel />
          <Grid item xs={12}>
            <Typography className={classes.textProfile}>
              Finish setting up your profile to create sharable links and pdf documents
            </Typography>
          </Grid>
          <Grid item container xs={3} direction="column">
            <Button
              className={classes.becomeMember}
              startIcon={<AddIcon />}>
              Finish your profile
            </Button>
            <Button className={classes.compareButton}>
              Compare your projects
            </Button>
            <Typography variant="h6" className={classes.subtitleProjects}>
              Your projects
            </Typography>
          </Grid>
          <Grid item container xs={12}>
            <Grid item container xs={2} justify="center" alignItems="center">
              <Grid item container xs={12} className={classes.backgroundNew} direction="column" justify="center" alignItems="center">
                <Box component="div" className={classes.AddBox} alignItems="center" justifyContent="center">
                  <IconButton onClick={() => goToHome()}>
                    <AddSharpIcon style={{ fontSize: 40 }} />
                  </IconButton>
                </Box>
                <Typography variant="body2" className={classes.text}>
                  Create new
                </Typography>
              </Grid>
              <Grid item container xs={12} className={classes.backgroundNew} direction="column" justify="center" alignItems="center">
                <Box component="div" className={classes.AddBoxRound} alignItems="center" justifyContent="center">
                  <IconButton onClick={() => goToUploadShape()}>
                    <CloudUpload style={{ fontSize: 40 }} />
                  </IconButton>
                </Box>
                <Typography variant="body2" className={classes.text}>
                  Upload your terrain shape
                </Typography>
                <br />
              </Grid>
            </Grid>

            <Grid item xs={1}></Grid>
            {projects.map((p, i) => {
              const locationSaved: any = p?.location;
              const densityGeneral = p?.location?.densityGeneral! ? p?.location?.densityGeneral! : p?.location?.density!;
              const densityLocal = densityGeneral === 0 ? "suburban" : "urban";

              return (
                <Fragment key={i}>
                  <Grid item container xs={2}>
                    <Grid item container className={classes.backgroundProject} direction="column" justify="center" alignItems="center"
                      onClick={() =>
                        p.area === 0 && p.pathTerrain && !p.modelData?
                          gotTo3DView(p.id, p) :
                          p.modelData ?
                            goToProject(String(p.id)) : null
                      }>
                      <Box component="div" alignItems="center" justifyContent="center">
                        <IconButton>
                          {
                            locationSaved.densityGeneral === 0 ?
                              <img alt={p.name} src={suburban} style={{ width: '70%', borderRadius: '50%' }} />
                              : locationSaved[densityLocal] ?
                                locationSaved[densityLocal].maxPriFloors <= 6 ?
                                  <img alt={p.name} src={height_6} style={{ width: '70%', borderRadius: '50%' }} /> :
                                  locationSaved[densityLocal].maxPriFloors <= 12 ?
                                    <img alt={p.name} src={height_12} style={{ width: '70%', borderRadius: '50%' }} /> :
                                    <img alt={p.name} src={height_13} style={{ width: '70%', borderRadius: '50%' }} /> :
                                p?.location.maxPriFloors <= 6 ?
                                  <img alt={p.name} src={height_6} style={{ width: '70%', borderRadius: '50%' }} /> :
                                  p?.location.maxPriFloors <= 12 ?
                                    <img alt={p.name} src={height_12} style={{ width: '70%', borderRadius: '50%' }} /> :
                                    <img alt={p.name} src={height_13} style={{ width: '70%', borderRadius: '50%' }} />
                          }

                        </IconButton>
                      </Box>
                      <Typography variant="body2" className={classes.text}>
                        {p.projectName}
                      </Typography>
                      <br />
                      <Box style={{ width: '60%' }}>
                        <Typography variant="body2" className={classes.textStatus}>
                          {p.area === 0 && p.pathTerrain && !p.modelData ?
                            "terrain" :
                            p.modelData ?
                              "project" :
                              "published"
                          }
                        </Typography>
                        <LinearProgress variant="determinate" value={p.area === 0 && p.pathTerrain && !p.modelData ? 33 : p.modelData ? 67 : 100} className={classes.linearProgress} />
                      </Box>
                    </Grid>
                    <Grid item className={classes.containerOptions}>
                      <Link onClick={() => gotTo3DView(p.id, p)}>
                        <Typography className={classes.optionsProject}>
                          Edit
                          <EditIcon className={classes.optionsIcon} />
                        </Typography>
                      </Link>
                      <Link href="#" onMouseEnter={() => setHover(p.id)} onMouseLeave={() => setHover(0)}>
                        <Typography className={classes.optionsProject}>
                          {
                            hover === p.id ?
                              "Create and download pdf" :
                              "Download pdf"
                          }
                          <img alt="download-pdf" src={download_white} className={classes.imgIcon} />
                        </Typography>
                      </Link>
                      <div className={classes.optionsProject} onClick={() => deleteProjectById(p.id, user.email)}>
                        Delete
                        <DeleteIcon className={classes.optionsIcon} />
                      </div>
                    </Grid>
                  </Grid>
                  <Grid item xs={1}></Grid>
                </Fragment>
              )
            })}
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
      loading: state.domains.shapediver.loading,
      projects: state.domains.shapediver.projects
    }),
    {
      loadProjectsByUsername,
      deleteProjectById,
      setInitialParams,
      setSaveSuccess,
      setNameProject,
      setDensityGeneral,
      setIdProject,
      setOption,
      setImportModel,
      setTerrain
    }
  )
)(ListProjects);

export default container;



