import { compose } from 'recompose';
import { Grid } from '@material-ui/core';
import { RouteComponentProps, withRouter } from 'react-router-dom';
import { PageContainer } from 'domains/core/containers';
import { ShapeDiverToolBarStep3, ShapeDiverSteps, ShapeDiverAdditionalParams } from 'domains/shapeDiver/components';
import { ShapeDiverWrapperStep3 } from 'domains/shapeDiver/containers';

type Props = RouteComponentProps;
const ShapeDiverContainerStep3 = (props: Props) => {
  return (
    <PageContainer background="black-model">
      <Grid item xs={9}>
        <ShapeDiverAdditionalParams />
        <ShapeDiverWrapperStep3 />
      </Grid>
      <Grid item xs={3}>
        <ShapeDiverToolBarStep3 />
        <ShapeDiverSteps />
      </Grid>
    </PageContainer>
  )
}

const container = compose<Props, {}>(
  withRouter
)(ShapeDiverContainerStep3);

export default container;
