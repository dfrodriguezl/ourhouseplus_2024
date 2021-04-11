import { Grid } from '@material-ui/core';
import { PageContainer } from 'domains/core/containers';
import { ShapeDiverToolBar } from 'domains/shapeDiver/components';
import { ShapeDiverWrapper } from 'domains/shapeDiver/containers';

const ShapeDiverContainer = () => {
  return (
    <PageContainer>
      <Grid item xs={10}>
        <ShapeDiverWrapper />
      </Grid>
      <Grid item xs={2}>
        <ShapeDiverToolBar />
      </Grid>
    </PageContainer>
  )
}

export default ShapeDiverContainer;
