import React, { Fragment } from 'react';
import { Button, Grid, Theme, Typography } from '@mui/material';
import makeStyles from '@mui/styles/makeStyles';
import { Room } from "../models";
import ItemsContainer from './ItemsContainer';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch } from 'app/hooks';
import { setCurrentRoom } from '../coreSlice';


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
  buttonStyle: {
    color: 'black',
    padding: 0
  }
}));

interface OwnProps {
  room?: Room;
  children?: any;
}

type Props = OwnProps;
export default function RoomContainer(props: Props) {
  const { room, children } = props;
  const classes = useStyles();
  const history = useNavigate();
  const dispatch = useAppDispatch();

  const goToRoom = () => {
    dispatch(setCurrentRoom(room!))
    history("/editRoom")
  }

  return (
    <Grid container className={classes.containerStyle} direction="column" style={room ? { width: '450px' } : {}} >
      {room ?
        <Fragment>
          <Grid container className={classes.textContainerStyle} direction="row" justifyContent="space-between">
            <Typography variant="subtitle2">{room.order}. {room.name.toUpperCase()}</Typography>
            <Typography variant="subtitle2">TOTAL: ${room.total} </Typography>
            <Button className={classes.buttonStyle} onClick={() => goToRoom()}>EDIT ROOM</Button>
            <ItemsContainer items={room.furnitures}/>
          </Grid>
        </Fragment>
        :
        <div className={classes.containerButtonStyle}>
          {children}
        </div>}

    </Grid>
  );
}