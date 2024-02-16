import React, { Fragment } from 'react';
import { Grid } from '@material-ui/core';
import { RouteComponentProps, withRouter } from 'react-router-dom';
import { HomeSub, PageContainer } from 'domains/core/containers';
import { Slogan } from 'domains/common/components';
import { connect } from 'react-redux';
import { RootState } from 'app/store';


interface StateProps {
  
}

type Props = RouteComponentProps & StateProps;
const Home = (props: Props) => {

  return (
    <Fragment>
      <PageContainer background="home">
        <Grid container justify="center">
          {/* <Grid item xs={smallScreen ? 12 : 8}>
            <SearchToolBar />
          </Grid> */}
          <Grid item container xs={12} direction="row" style={{ marginTop: '38vh', marginBottom: '10vh' }}>
            <Grid item xs={12} style={{ alignSelf: 'flex-end' }}>
              <Slogan />
            </Grid>
            {/* {smallScreen ? null :
              <Grid item xs={12} style={{ alignSelf: 'flex-end' }}>
                <ScrollDown />
              </Grid>} */}
          </Grid>
        </Grid>
      </PageContainer>
      <HomeSub />
      {/* <HomeSub2 />
      <HomeSub3 />
      <HomeSub1 /> */}
    </Fragment>
  )
}

const container = connect<StateProps, {}, {}, RootState>(
  (state: RootState) => ({
    
  })
)(Home);

export default withRouter(container);
