import React from 'react';
import { Button, Grid, makeStyles, Theme, Typography } from '@material-ui/core';
import { Project } from "../models";


const useStyles = makeStyles((theme: Theme) => ({
  containerStyle: {
    padding: '60px 30px'
  },
  textContainerStyle: {
    padding: '20px'
  },
  containerButtonStyle: {
    textAlign: 'center'
  },
  containerProjectSummary: {
    borderRight: '1px solid #707070'
  },
  containerFormStyle: {
    marginTop: '50px',
  },
  inputStyle: {
    background: '#FFFFFF 0% 0% no-repeat padding-box',
    border: '1px solid #707070',
    borderRadius: '5px',
    width: '360px',
    height: '40px',
    marginLeft: "30px"
  },
  elementFormStyle: {
    margin: '30px'
  },
  buttonStyle: {
    background: '#707070 0% 0% no-repeat padding-box',
    borderRadius: '5px',
    font: 'normal normal normal 20px/23px Centaur',
    color: '#FFFFFF',
    letterSpacing: '0px',
    padding: '5px 50px',
    marginTop: '50px'
  },
  dragDropStyle: {
    border: "1px solid gray",
    width: "217px",
    height: "217px",
    borderRadius: "10px"
  }
}));

interface OwnProps {
  project?: Project;
  children?: any;
}

type Props = OwnProps;
export default function Step3Project(props: Props) {
  const classes = useStyles();

  return (
    <Grid container justify="center" alignContent='space-between' alignItems='center' className={classes.containerStyle} direction="column">
      <Typography variant="subtitle1">PROJECT IMAGE</Typography>
      <Grid container justify="space-between" className={classes.containerFormStyle} direction="column" alignContent='center' alignItems='center' >
        <Grid container className={classes.dragDropStyle} justify="center" alignContent='center'>
          <Typography variant="subtitle1">DRAG AND DROP</Typography>
        </Grid>

        <Grid container className={classes.elementFormStyle} direction="row" justify="center" alignItems='center'>
          <label>Project Style*</label>
          <input id="living-room-number" className={classes.inputStyle}></input>
        </Grid>
      </Grid>
      <Button className={classes.buttonStyle}>START PROJECT</Button>
    </Grid>
  );
}