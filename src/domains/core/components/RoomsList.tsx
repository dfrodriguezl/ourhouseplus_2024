import React from 'react';
import { Grid, IconButton, Theme, Typography } from '@mui/material';
import makeStyles from '@mui/styles/makeStyles';
import { Room } from "../models";
import ProjectContainer from './ProjectContainer';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import { useNavigate } from 'react-router-dom';
import RoomContainer from './RoomContainer';

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
  rooms: Room[];
}

type Props = OwnProps;
function RoomsList(props: Props) {
  const { rooms } = props;
  const classes = useStyles();
  const history = useNavigate();

  const goToCreateProject = () => {
    history("/createProject")
  }

  return (
    <Grid container className={classes.containerStyle} justifyContent="space-between">
      {rooms.map((room: Room, index: number) => {
        return (
          <Grid item key={index}>
            <RoomContainer room={room} />
          </Grid>
        )
      }, [])}
      <Grid item>
        <ProjectContainer>
          <Typography variant="subtitle1">CREATE NEW ROOM</Typography>
          <IconButton
            aria-label="create project"
            component="div"
            onClick={() => goToCreateProject()}
            size="large">
            <AddCircleIcon fontSize='large' className={classes.buttonStyle} />
          </IconButton>
        </ProjectContainer>
      </Grid>
    </Grid>
  );
}

export default RoomsList;