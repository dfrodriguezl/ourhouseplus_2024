import React from 'react';
import { Grid, IconButton, makeStyles, Theme, Typography } from '@material-ui/core';
import { Project } from "../models";
import ProjectContainer from './ProjectContainer';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import { useNavigate } from 'react-router-dom';

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

type Props = OwnProps;
function ProjectsList(props: Props) {
  const { projects } = props;
  const classes = useStyles();
  const history = useNavigate();

  const goToCreateProject = () => {
    history("/createProject")
  }

  return (
    <Grid container className={classes.containerStyle} justify="space-between">
      {projects.map((project: Project, index: number) => {
        return (
          <Grid item key={index}>
            <ProjectContainer project={project} />
          </Grid>
        )
      }, [])}
      <Grid item>
        <ProjectContainer>
          <Typography variant="subtitle1">CREATE NEW PROJECT</Typography>
          <IconButton aria-label="create project" component="div" onClick={() => goToCreateProject()}>
            <AddCircleIcon fontSize='large' className={classes.buttonStyle} />
          </IconButton>
        </ProjectContainer>
      </Grid>
    </Grid>
  );
}

export default ProjectsList;