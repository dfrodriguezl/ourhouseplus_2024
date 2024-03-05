import React, { Fragment } from 'react';
import { Grid, Theme, Typography } from '@mui/material';
import makeStyles from '@mui/styles/makeStyles';
import { Project } from "../models";
import { useNavigate } from 'react-router-dom';
import { useAppDispatch } from 'app/hooks';
import { setCurrentProject } from '../coreSlice';


const useStyles = makeStyles((theme: Theme) => ({
  containerStyle: {
    background: '#FFFFFF99 0% 0% no-repeat padding-box',
    color: 'gray',
    border: '1px solid #707070',
    margin: '3vh',
    borderRadius: '5px'
  },
  textContainerStyle: {
    padding: '20px'
  },
  containerButtonStyle: {
    textAlign: 'center'
  }
}));

interface OwnProps {
  project?: Project;
  children?: any;
}

type Props = OwnProps;
export default function ProjectContainer(props: Props) {
  const { project, children } = props;
  const classes = useStyles();
  const history = useNavigate();
  const dispatch = useAppDispatch();

  const goToRooms = () => {
    dispatch(setCurrentProject(project!))
    history("/rooms")
  }

  return (
    <Grid container className={classes.containerStyle} direction="column" style={project ? { width: '400px' } : {}} >
      {project ?
        <Fragment>
          <div onClick={() => goToRooms()}>
            <div className={classes.textContainerStyle}>
              <Typography variant="subtitle2">{project.name}</Typography>
              <Typography variant="subtitle2">{project.location}</Typography>
              <Typography variant="subtitle2">{project.deliveryDueDate}</Typography>
            </div>
            <img src={project.picture} alt="project" />
          </div>
        </Fragment>
        :
        <div className={classes.containerButtonStyle}>
          {children}
        </div>}

    </Grid>
  );
}