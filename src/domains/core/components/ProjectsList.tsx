import React from 'react';
import { Grid, IconButton, makeStyles, Theme, Typography } from '@material-ui/core';
import { Project } from "../models";
import ProjectContainer from './ProjectContainer';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import { RouteComponentProps, withRouter } from 'react-router-dom';

const useStyles = makeStyles((theme: Theme) => ({
  containerStyle: {
    backgroundColor: 'white',
    color: 'gray',
  },
  buttonStyle: {
    fontSize: "114px"
  }
}));

interface OwnProps {
  projects: Project[];
}

type Props = RouteComponentProps & OwnProps;
function ProjectsList(props: Props) {
  const { projects, history } = props;
  const classes = useStyles();

  const goToCreateProject = () => {
    history.push("/createProject")
  }

  return (
    <Grid container className={classes.containerStyle} justify="space-between">
      {projects.map((project: Project) => {
        return (
          <Grid item >
            <ProjectContainer project={project} />
          </Grid>
        )
      }, [])}
      <Grid item>
          <ProjectContainer>
            <Typography variant="subtitle1">CREATE NEW PROJECT</Typography>
            <IconButton aria-label="create project" component="div">
              <AddCircleIcon fontSize='large' className={classes.buttonStyle} onClick={() => goToCreateProject()}/>
            </IconButton>
          </ProjectContainer>
      </Grid>
    </Grid>
  );
}

export default withRouter(ProjectsList);