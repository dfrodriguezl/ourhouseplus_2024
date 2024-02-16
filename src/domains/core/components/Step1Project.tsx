import React, { useState } from 'react';
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
    marginTop: '50px'
  },
  inputStyle: {
    background: '#FFFFFF 0% 0% no-repeat padding-box',
    border: '1px solid #707070',
    borderRadius: '5px',
    width: '360px',
    height: '40px'
  },
  elementFormStyle: {
    margin: '10px'
  },
  buttonStyle: {
    background: '#707070 0% 0% no-repeat padding-box',
    borderRadius: '5px',
    font: 'normal normal normal 20px/23px Centaur',
    color: '#FFFFFF',
    letterSpacing: '0px',
    padding: '5px 50px',
    marginTop: '50px'
  }
}));

interface OwnProps {
  children?: any;
  setStep: any;
  setProject: any;
}

type Props = OwnProps;
export default function Step1Project(props: Props) {
  const { setStep, setProject } = props;
  const [nameProject, setNameProject] = useState("");
  const [locationProject, setLocationProject] = useState("");
  const [deliveryDueDate, setDeliveryDueDate] = useState("");
  const classes = useStyles();

  const goToStep2 = () => {
    let project: Project = {
      name: nameProject,
      location: locationProject,
      deliveryDueDate: deliveryDueDate
    }
    setProject(project);
    setStep(2);
  }

  const handleChange1 = (e: any) => {
    setNameProject(e.target.value)
  }

  const handleChange2 = (e: any) => {
    setLocationProject(e.target.value)
  }

  const handleChange3 = (e: any) => {
    setDeliveryDueDate(e.target.value)
  }

  return (
    <Grid container justify="center" alignContent='space-between' alignItems='center' className={classes.containerStyle} direction="column">
      <Typography variant="subtitle1">CREATE NEW PROJECT</Typography>
      <Grid container justify="space-between" className={classes.containerFormStyle} direction="column" alignContent='center' alignItems='center'>
        <form>
          <Grid container className={classes.elementFormStyle} direction="row" justify="space-between" alignItems='center'>
            <label>Name Project*</label>
            <input id="name-project" className={classes.inputStyle} onChange={handleChange1}></input>
          </Grid>
          <Grid container className={classes.elementFormStyle} direction="row" justify="space-between" alignItems='center'>
            <label>Location Project*</label>
            <input id="location-project" className={classes.inputStyle} onChange={handleChange2}></input>
          </Grid>
          <Grid container className={classes.elementFormStyle} direction="row" justify="space-between" alignItems='center'>
            <label>Delivery Due Date</label>
            <input id="delivery-due-date" className={classes.inputStyle} onChange={handleChange3}></input>
          </Grid>
        </form>
      </Grid>
      <Button className={classes.buttonStyle} onClick={() => goToStep2()}>NEXT STEP</Button>
    </Grid>
  );
}