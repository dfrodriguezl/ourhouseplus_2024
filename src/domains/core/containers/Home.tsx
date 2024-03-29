import React, { Fragment } from 'react';
import { Grid } from '@mui/material';
import { HomeSub, PageContainer, } from 'domains/core/containers';
import { Slogan } from 'domains/common/components';
import { useAuth0 } from '@auth0/auth0-react';


interface OwnProps {

}

type Props = OwnProps;
const Home = (props: Props) => {
  const { isAuthenticated, user } = useAuth0();
  const isAdmin = isAuthenticated ? user!['http://ourhouseplus.com/roles'].includes('admin') : false;

  return (
    <Fragment>
      <PageContainer background="home">
        <Grid container justifyContent="center">
          <Grid item container xs={12} direction="row" style={{ marginTop: '38vh', marginBottom: '10vh' }}>
            <Grid item xs={12} style={{ alignSelf: 'flex-end' }}>
              <Slogan />
            </Grid>
          </Grid>
        </Grid>
      </PageContainer>
      {isAdmin ?
          <HomeSub /> : null}
    </Fragment>
  );
}

export default Home;
