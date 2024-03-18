import React, { Fragment } from 'react';
import { Grid } from '@mui/material';
import { PageContainer, } from 'domains/core/containers';
import { Slogan } from 'domains/common/components';
import { useAuth0 } from '@auth0/auth0-react';
import { useAppSelector } from 'app/hooks'
import HomeSubRoomsEdit from './HomeSubRoomsEdit';
import ItemChoosen from '../components/ItemChoosen';


interface OwnProps {

}

type Props = OwnProps;
const RoomsEdit = (props: Props) => {
  const { isAuthenticated, user } = useAuth0();
  const isAdmin = isAuthenticated ? user!['http://ourhouseplus.com/roles'].includes('admin') : false;
  const currentProject = useAppSelector((state) => state.currentProject);

  return (
    <Fragment>
      <PageContainer background="home">
        <Grid container justifyContent="center">
          <Grid item container xs={12} direction="row">
            <Grid item xs={12} style={{ alignSelf: 'flex-start' }}>
              <Slogan />
            </Grid>
            <Grid container direction="row" justifyContent="center">
              <ItemChoosen>FURNITURE CHOOSEN</ItemChoosen>
              <ItemChoosen>MATERIALS CHOOSEN</ItemChoosen>
            </Grid>
          </Grid>
        </Grid>
      </PageContainer>
      {isAdmin ?
        currentProject ?
          <HomeSubRoomsEdit /> :
          null : null}
    </Fragment>
  );
}

export default RoomsEdit;
