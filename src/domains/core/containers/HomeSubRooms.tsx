import React from 'react';
import { Project } from '../models';
import { Container, Grid } from '@mui/material';
import RoomsList from '../components/RoomsList';


interface ownProps {
  project?: Project;
}

type Props = ownProps;

const HomeSubRooms = (props: Props) => {
  const { project } = props;

  return (
    <div>
      <Container>
        <Grid container direction="row">
          <RoomsList rooms={project?.rooms!} />
        </Grid>
      </Container>
    </div>
  );
}

export default HomeSubRooms;
