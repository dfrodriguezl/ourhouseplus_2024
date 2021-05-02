import { compose } from 'recompose';
import { Grid } from '@material-ui/core';
import { RouteComponentProps, withRouter } from 'react-router-dom';
import { PageContainer } from 'domains/core/containers';
import { ShapeDiverToolBarStep2, ShapeDiverSteps, ShapeDiverAdditionalParams } from 'domains/shapeDiver/components';
import { ShapeDiverWrapperStep2 } from 'domains/shapeDiver/containers';

type Props = RouteComponentProps;
const ShapeDiverContainerStep2 = (props: Props) => {
  return (
    <PageContainer background="black-model">
      <Grid item xs={9}>
        <ShapeDiverAdditionalParams />
        <ShapeDiverWrapperStep2 />
      </Grid>
      <Grid item xs={3}>
        <ShapeDiverToolBarStep2 />
        <ShapeDiverSteps />
      </Grid>
    </PageContainer>
  )
}

const container = compose<Props, {}>(
  withRouter
)(ShapeDiverContainerStep2);

export default container;
