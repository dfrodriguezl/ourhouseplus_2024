import React from 'react';
import { compose } from 'recompose';
import { Grid } from '@material-ui/core';
import { RouteComponentProps, withRouter } from 'react-router-dom';
import { PageContainer, ShapeDiverContainer } from 'domains/core/containers';
import { ShapeDiverToolBar } from 'domains/core/components';

type Props = RouteComponentProps;
const ToolContainer = (props: Props) => {
  return (
    <PageContainer noBackground>
      <Grid item xs={10}>
        <ShapeDiverContainer />
      </Grid>
      <Grid item xs={2}>
        <ShapeDiverToolBar />
      </Grid>
    </PageContainer>
  )
}

const container = compose<Props, {}>(
  withRouter
)(ToolContainer);

export default container;
