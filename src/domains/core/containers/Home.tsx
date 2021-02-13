import React from 'react';
import { compose } from 'recompose';
import { Grid } from '@material-ui/core';
import { RouteComponentProps, withRouter } from 'react-router-dom';
import { SearchToolBar } from 'domains/core/components';
import { PageContainer, ShapeDiverContainer } from 'domains/core/containers';
import { Slogan } from 'domains/common/components';

type Props = RouteComponentProps;
const Home = (props: Props) => {
  return (
    <PageContainer>
      <Grid container justify="center">
        <Grid item>
          <SearchToolBar />
        </Grid>
        <Grid item>
          <ShapeDiverContainer />
        </Grid>
        <Grid item>
          <Slogan />
        </Grid>
      </Grid>
    </PageContainer>
  )
}

const container = compose<Props, {}>(
  withRouter
)(Home);

export default container;
