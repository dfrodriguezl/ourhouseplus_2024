import React from 'react';
import { compose } from 'recompose';
import { Grid } from '@material-ui/core';
import { RouteComponentProps, withRouter } from 'react-router-dom';
import { PageContainer } from 'domains/core/containers';
import { ShapeDiverToolBar } from 'domains/shapeDiver/components';
import { ShapeDiverWrapper } from 'domains/shapeDiver/containers';

type Props = RouteComponentProps;
const ShapeDiverContainer = (props: Props) => {
  return (
    <PageContainer noBackground>
      <Grid item xs={10}>
        <ShapeDiverWrapper />
      </Grid>
      <Grid item xs={2}>
        <ShapeDiverToolBar />
      </Grid>
    </PageContainer>
  )
}

const container = compose<Props, {}>(
  withRouter
)(ShapeDiverContainer);

export default container;
