import React, { Fragment } from 'react';
import { compose } from 'recompose';
import { Grid } from '@material-ui/core';
import { RouteComponentProps, withRouter } from 'react-router-dom';
import { SearchToolBar } from 'domains/core/components';
import { PageContainer } from 'domains/core/containers';
import { Slogan } from 'domains/common/components';

import hero from 'assets/Hero.png';
import HomeSub1 from './HomeSub1';

type Props = RouteComponentProps;
const Home = (props: Props) => {
  return (
    <Fragment>
      <PageContainer background="home">
        <Grid container justify="center">
          <Grid item xs={8}>
            <SearchToolBar />
          </Grid>
          <Grid container item xs={8} alignItems="center" justify="center">
            <img src={hero} alt="hero" width={552} height={290} />
          </Grid>
          <Grid item xs={6} style={{ alignSelf: 'flex-end' }}>
            <Slogan />
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
