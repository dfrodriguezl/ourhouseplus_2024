import React, { Fragment } from 'react';
import { compose } from 'recompose';
import { Grid } from '@material-ui/core';
import { RouteComponentProps, withRouter } from 'react-router-dom';
import { SearchToolBar } from 'domains/core/components';
import { PageContainer } from 'domains/core/containers';
import { Slogan, ScrollDown } from 'domains/common/components';
import { HomeSub1 } from 'domains/core/containers';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useTheme } from '@material-ui/core/styles';

type Props = RouteComponentProps;
const Home = (props: Props) => {

  const theme = useTheme();
  const smallScreen = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Fragment>
      <PageContainer background="home">
        <Grid container justify="center">
          <Grid item xs={smallScreen?12:8}>
            <SearchToolBar />
          </Grid>
          <Grid item container xs={12} direction="row" style={{marginTop: '38vh'}}>
            <Grid item xs={12} style={{ alignSelf: 'flex-end' }}>
              <Slogan />
            </Grid>
            {smallScreen?null:
            <Grid item xs={12} style={{ alignSelf: 'flex-end' }}>
            <ScrollDown />
          </Grid>}
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
