import { Grid } from '@material-ui/core';
import { PageContainer } from 'domains/core/containers';
import { ShapeDiverSteps, ShapeDiverToolBarStep1 } from 'domains/shapeDiver/components';
import { ShapeDiverWrapperStep1 } from 'domains/shapeDiver/containers';

const ShapeDiverContainer = () => {
  return (
    <PageContainer background="black-model">
      <Grid item xs={9}>
        <ShapeDiverWrapperStep1 />
      </Grid>
      <Grid item xs={3}>
        <ShapeDiverToolBarStep1 />
        <ShapeDiverSteps />
      </Grid>
    </PageContainer>
  )
}

export default ShapeDiverContainer;
