import React from 'react';
import { Container, Grid } from '@material-ui/core';
import { withRouter } from 'react-router-dom';
import { projects } from '../models';
import { ProjectsList } from '../components';
import { RouteComponentProps } from 'react-router-dom';


type Props = RouteComponentProps;
const HomeSub = (props: Props) => {

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

export default withRouter(HomeSub);
