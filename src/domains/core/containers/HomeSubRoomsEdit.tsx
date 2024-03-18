import React from 'react';
import { Room } from '../models';
import { Container, Grid } from '@mui/material';
import ItemsListDetailed from '../components/ItemsListDetailed';
import { useAppSelector } from 'app/hooks';

const HomeSubRoomsEdit = () => {
  const currentRoom: Room = useAppSelector((state) => state.currentRoom!);

  return (
    <div>
      <Container maxWidth="xl">
        <Grid container direction="row">
          <ItemsListDetailed room={currentRoom}/>
        </Grid>
      </Container>
    </div>
  );
}

export default HomeSubRoomsEdit;
