import React, { Fragment } from 'react';
import { Grid } from '@mui/material';
import { PageContainer, } from 'domains/core/containers';
import { Slogan } from 'domains/common/components';
import { useAuth0 } from '@auth0/auth0-react';
import { useAppSelector } from 'app/hooks'
import HomeSubRooms from './HomeSubRooms';


interface OwnProps {

}

type Props = OwnProps;
const RoomsGeneral = (props: Props) => {
  const { isAuthenticated, user } = useAuth0();
  const isAdmin = isAuthenticated ? user!['http://ourhouseplus.com/roles'].includes('admin') : false;
  const currentProject = useAppSelector((state) => state.currentProject);

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
        currentProject ?
          <HomeSubRooms project={currentProject} /> :
          null : null}
    </Fragment>
  );
}

export default RoomsGeneral;
