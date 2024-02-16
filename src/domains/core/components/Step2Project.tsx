import React, { Fragment, useState } from 'react';
import { Button, Grid, makeStyles, Switch, TextField, Theme, Typography } from '@material-ui/core';
import { Project } from "../models";
import { ProjectSummary } from '.';
import { StepsContainer } from '../containers';


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
    width: '88px',
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
  project?: Project;
  children?: any;
  setStep: any;
  setProject: any;
}

type Props = OwnProps;
export default function Step2Project(props: Props) {
  const { project, children, setStep, setProject } = props;
  const classes = useStyles();
  const [livingRoom, setLivingRoom] = useState<boolean>(false);
  const [livingRoomNumber, setLivingRoomNumber] = useState<number>(0);
  const [dinningRoom, setDinningRoom] = useState<boolean>(false);
  const [bedRoom, setBedRoom] = useState<boolean>(false);
  const [bedRoomNumber, setBedRoomNumber] = useState<number>(0);
  const [toilets, setToilets] = useState<boolean>(false);
  const [toiletsNumber, setToiletsNumber] = useState<number>(0);

  const handleChangeSwitchLiving = (e: any) => {
    setLivingRoom(e.target.checked);
  }

  const handleChangeNumberLiving = (e: any) => {
    setLivingRoomNumber(e.target.value);
  }

  const handleChangeSwitchDinning = (e: any) => {
    setDinningRoom(e.target.checked);
  }

  const handleChangeSwitchBed = (e: any) => {
    setBedRoom(e.target.checked);
  }

  const handleChangeNumberBed = (e: any) => {
    setBedRoomNumber(e.target.value);
  }

  const handleChangeSwitchToilet = (e: any) => {
    setToilets(e.target.checked);
  }

  const handleChangeNumberToilets = (e: any) => {
    setToiletsNumber(e.target.value);
  }

  const goToStep3 = () => {
    let projectLocal: Project = project!;

    projectLocal.livingRoom = livingRoom;
    projectLocal.livingRoomNumber = livingRoomNumber;
    projectLocal.dinningRoom = dinningRoom;
    projectLocal.bedRoom = bedRoom;
    projectLocal.bedRoomNumber = bedRoomNumber;
    projectLocal.toilet = toilets;
    projectLocal.toiletNumber = toiletsNumber;
    
    setProject(projectLocal);
    setStep(3);
  }

  return (
    <Grid container justify="center" alignContent='space-between' alignItems='center' className={classes.containerStyle} direction="column">
      <Typography variant="subtitle1">MAIN ROOMS</Typography>
      <Grid container justify="space-between" className={classes.containerFormStyle} direction="column" alignContent='center' alignItems='center'>
        <form>
          <Grid container className={classes.elementFormStyle} direction="row" justify="space-between" alignItems='center'>
            <label>Living Room</label>
            <Switch name="living-room-switch" onChange={handleChangeSwitchLiving} />
            <Typography variant="subtitle2">No.</Typography>
            <input id="living-room-number" className={classes.inputStyle} onChange={handleChangeNumberLiving}></input>
          </Grid>
          <Grid container className={classes.elementFormStyle} direction="row" justify="space-between" alignItems='center'>
            <label>Dinning Room</label>
            <Switch name="dinning-room-switch" onChange={handleChangeSwitchDinning}/>
            <div></div>
            <div></div>
          </Grid>
          <Grid container className={classes.elementFormStyle} direction="row" justify="space-between" alignItems='center'>
            <label>Bed Rooms</label>
            <Switch name="bed-room-switch" onChange={handleChangeSwitchBed}/>
            <Typography variant="subtitle2">No.</Typography>
            <input id="bed-room-number" className={classes.inputStyle} onChange={handleChangeNumberBed}></input>
          </Grid>
          <Grid container className={classes.elementFormStyle} direction="row" justify="space-between" alignItems='center'>
            <label>Toilets / Bathrooms</label>
            <Switch name="bath-room-switch" onChange={handleChangeSwitchToilet}/>
            <Typography variant="subtitle2">No.</Typography>
            <input id="bath-room-number" className={classes.inputStyle} onChange={handleChangeNumberToilets}></input>
          </Grid>
        </form>
      </Grid>
      <Button className={classes.buttonStyle} onClick={() => goToStep3()}>NEXT STEP</Button>
    </Grid>
  );
}