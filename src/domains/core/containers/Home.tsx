import React, { Fragment } from 'react';
import { compose } from 'recompose';
import { Grid } from '@material-ui/core';
import { RouteComponentProps, withRouter } from 'react-router-dom';
import { SearchToolBar } from 'domains/core/components';
import { PageContainer } from 'domains/core/containers';
import { Slogan, FabButton } from 'domains/common/components';
import { HomeSub1 } from 'domains/core/containers';

type Props = RouteComponentProps;
const Home = (props: Props) => {
  return (
    <Fragment>
      <PageContainer background="home">
        <Grid container justify="center">
          <Grid item xs={8}>
            <SearchToolBar />
          </Grid>
          <Grid item xs={6} style={{ alignSelf: 'flex-end' }}>
            <Slogan />
          </Grid>
          <Grid item xs={7} style={{ alignSelf: 'flex-end' }}>
            <FabButton />
          </Grid>
        </Grid>  
      </PageContainer>
      <HomeSub1 />
    </Fragment>
  )
}

const container = compose<Props, {}>(
  withRouter
)(Home);

export default container;
