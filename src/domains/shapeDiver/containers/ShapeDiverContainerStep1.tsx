import { Grid } from '@material-ui/core';
import { PageContainer } from 'domains/core/containers';
import { ShapeDiverToolBarStep1 } from 'domains/shapeDiver/components';
import { ShapeDiverWrapperStep1 } from 'domains/shapeDiver/containers';

const ShapeDiverContainer = () => {
  return (
    <PageContainer>
      <Grid item xs={10}>
        <ShapeDiverWrapperStep1 />
      </Grid>
      <Grid item xs={2}>
        <ShapeDiverToolBarStep1 />
      </Grid>
    </PageContainer>
  )
}

export default ShapeDiverContainer;
