import React from 'react';
import { Grid, makeStyles, Theme } from '@material-ui/core';
import { Project } from "../models";
import { ProjectSummary } from '../components';


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
  },
  containerProjectSummary: {
    borderRight: '1px solid #707070'
  }
}));

interface OwnProps {
  project?: Project;
  children?: any;
  step: number;
}

type Props = OwnProps;
export default function StepsContainer(props: Props) {
  const { project, children, step } = props;
  const classes = useStyles();

  return (
    <Grid container className={classes.containerStyle} direction="row" >
      <Grid item xs={4} className={classes.containerProjectSummary}>
        <ProjectSummary step={step} project={project}/>
      </Grid>
      <Grid item xs={8}>
        {children}
      </Grid>
    </Grid>
  );
}