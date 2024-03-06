import React, { useState } from 'react';
import { Button, Grid, Switch, Theme, Typography } from '@mui/material';
import { PageContainer } from '.';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme: Theme) => ({
  containerStyle: {
    padding: '60px 30px',
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
    background: '#707070 0% 0% no-repeat padding-box !important',
    borderRadius: '5px',
    font: 'normal normal normal 20px/23px Centaur !important',
    color: '#FFFFFF !important',
    letterSpacing: '0px',
    padding: '5px 50px !important',
    marginTop: '50px !important'
  }
}));


interface OwnProps {
  children?: any;
}

type Props = OwnProps;
const CreateRoom = (props: Props) => {
  const classes = useStyles();
  const [livingRoom, setLivingRoom] = useState<boolean>(false);
  const [dinningRoom, setDinningRoom] = useState<boolean>(false);
  const [bedRoom, setBedRoom] = useState<boolean>(false);
  const [toilets, setToilets] = useState<boolean>(false);

  const handleChangeSwitchLiving = (e: any) => {
    setLivingRoom(e.target.checked);
  }

  const handleChangeSwitchDinning = (e: any) => {
    setDinningRoom(e.target.checked);
  }

  const handleChangeSwitchBed = (e: any) => {
    setBedRoom(e.target.checked);
  }

  const handleChangeSwitchToilet = (e: any) => {
    setToilets(e.target.checked);
  }

  return (
    <PageContainer background="create-project">
      <Grid container justifyContent="center">
        <Grid container justifyContent="center" alignContent='space-between' alignItems='center' className={classes.containerStyle} direction="column">
          <Typography variant="subtitle1">NEW ROOM</Typography>
          <Grid container justifyContent="space-between" className={classes.containerFormStyle} direction="column" alignContent='center' alignItems='center'>
            <form>
              <Grid container className={classes.elementFormStyle} direction="row" justifyContent="space-between" alignItems='center'>
                <label>Living Room</label>
                <Switch name="living-room-switch" onChange={handleChangeSwitchLiving} checked={livingRoom}/>
              </Grid>
              <Grid container className={classes.elementFormStyle} direction="row" justifyContent="space-between" alignItems='center'>
                <label>Dinning Room</label>
                <Switch name="dinning-room-switch" onChange={handleChangeSwitchDinning} checked={dinningRoom}/>
              </Grid>
              <Grid container className={classes.elementFormStyle} direction="row" justifyContent="space-between" alignItems='center'>
                <label>Bed Rooms</label>
                <Switch name="bed-room-switch" onChange={handleChangeSwitchBed} checked={bedRoom}/>
              </Grid>
              <Grid container className={classes.elementFormStyle} direction="row" justifyContent="space-between" alignItems='center'>
                <label>Toilets / Bathrooms</label>
                <Switch name="bath-room-switch" onChange={handleChangeSwitchToilet} checked={toilets}/>
              </Grid>
            </form>
          </Grid>
          <Button className={classes.buttonStyle}>ADD ROOM</Button>
        </Grid>
      </Grid>
    </PageContainer>
  );
}

export default CreateRoom;