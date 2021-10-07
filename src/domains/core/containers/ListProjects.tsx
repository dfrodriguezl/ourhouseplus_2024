import { Fragment, useState, useEffect } from 'react';
import { Grid, makeStyles, createStyles, IconButton, Typography, Button, Box, Link } from '@material-ui/core';
import { RouteComponentProps, withRouter } from 'react-router-dom';
import { PageContainer, FullPageOverlay } from 'domains/core/containers';
import { height_6, download_white, height_12, height_13 } from 'assets';
import AddIcon from '@material-ui/icons/Add';
import AddSharpIcon from '@material-ui/icons/AddSharp';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import { deleteProjectById, loadProjectsByUsername } from 'domains/shapeDiver/slice';
import { RootState } from 'app/store';
import { connect } from 'react-redux';
import { compose } from 'recompose';
import { TopPanel } from 'domains/core/components';
import { useAuth0 } from '@auth0/auth0-react';

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
      height: '30vh',
      width: '100%',
      marginTop: 10,
      display: 'flex',
      '&:hover': {
        backgroundColor: '#FFFFFF33'
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
}

type Props = RouteComponentProps & StateProps & DispatchProps;
export const ListProjects = (props: Props) => {
  const { loadProjectsByUsername, deleteProjectById, history, projects, loading } = props;
  const { user } = useAuth0();
  const classes = useStyles();
  const [hover, setHover] = useState(0);

  const goToHome = () => {
    history.push("/home")
  }

  const goToProject = (id: string) => {
    history.push("/details/" + id)
  }

  useEffect(() => {
    if (user?.email) {
      loadProjectsByUsername(user.email);
    }
  }, [loadProjectsByUsername, user])

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
            <Grid item container xs={2} className={classes.backgroundNew} direction="column" justify="center" alignItems="center">
              <Box component="div" className={classes.AddBox} alignItems="center" justifyContent="center">
                <IconButton onClick={() => goToHome()}>
                  <AddSharpIcon style={{ fontSize: 80 }} />
                </IconButton>
              </Box>
              <Typography variant="body2" className={classes.text}>
                Create new
              </Typography>
            </Grid>
            <Grid item xs={1}></Grid>
            {projects.map((p, i) => {
              const locationSaved: any = p?.location;
              const densityGeneral = p?.location?.densityGeneral! ? p?.location?.densityGeneral! : p?.location?.density!;
              const densityLocal = densityGeneral === 0 ? "suburban" : "urban";

              return (
                <Fragment key={i}>
                  <Grid item container xs={2}>
                    <Grid item container className={classes.backgroundProject} direction="column" justify="center" alignItems="center">
                      <Box component="div" alignItems="center" justifyContent="center">
                        <IconButton onClick={() => goToProject(String(p.id))}>
                          {
                            locationSaved[densityLocal] ?
                              locationSaved[densityLocal].maxPriFloors <= 6 ?
                                <img alt={p.name} src={height_6} style={{ width: '90%', borderRadius: '50%' }} /> :
                                locationSaved[densityLocal].maxPriFloors <= 12 ?
                                  <img alt={p.name} src={height_12} style={{ width: '90%', borderRadius: '50%' }} /> :
                                  <img alt={p.name} src={height_13} style={{ width: '90%', borderRadius: '50%' }} /> :
                              p?.location.maxPriFloors <= 6 ?
                                <img alt={p.name} src={height_6} style={{ width: '90%', borderRadius: '50%' }} /> :
                                p?.location.maxPriFloors <= 12 ?
                                  <img alt={p.name} src={height_12} style={{ width: '90%', borderRadius: '50%' }} /> :
                                  <img alt={p.name} src={height_13} style={{ width: '90%', borderRadius: '50%' }} />
                          }

                        </IconButton>
                      </Box>
                      <Typography variant="body2" className={classes.text}>
                        {p.projectName}
                      </Typography>
                    </Grid>
                    <Grid item className={classes.containerOptions}>
                      <Link href="#">
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
      deleteProjectById
    }
  )
)(ListProjects);

export default container;



