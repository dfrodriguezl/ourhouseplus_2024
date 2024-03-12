import React from 'react';
import { Project } from '../models';
import { Container, Grid, Typography } from '@mui/material';
import RoomsList from '../components/RoomsList';


interface ownProps {
  project?: Project;
}

type Props = ownProps;

const HomeSubRoomsEdit = (props: Props) => {
  const { project } = props;

  return (
    <div>
      <Container>
        <Grid container direction="row">
          <Typography>Edit Room</Typography>
          <RoomsList rooms={project?.rooms!} />
        </Grid>
      </Container>
    </div>
  );
}

export default HomeSubRoomsEdit;
