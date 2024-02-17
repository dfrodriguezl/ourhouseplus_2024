import React from 'react';
import { Container, Grid } from '@material-ui/core';
import { projects } from '../models';
import { ProjectsList } from '../components';


const HomeSub = () => {

  return (
    <div>
      <Container >
        <Grid container direction="row">
          <ProjectsList projects={projects}></ProjectsList>
        </Grid>
      </Container>
    </div>
  );
}

export default HomeSub;
