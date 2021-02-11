import React from 'react';
import { compose } from 'recompose';
import { Grid } from '@material-ui/core';
import { RouteComponentProps, withRouter } from 'react-router-dom';
import { SearchToolBar } from 'domains/core/components';
import { ShapeDiverContainer } from 'domains/core/containers';

type Props = RouteComponentProps;
const Home = (props: Props) => {
  return (
    <Grid item>
      <SearchToolBar />
      <Grid container justify="center">
        <Grid item>
          <ShapeDiverContainer />
        </Grid>
      </Grid>
    </Grid>
  )
}

const container = compose<Props, {}>(
  withRouter
)(Home);

export default container;
