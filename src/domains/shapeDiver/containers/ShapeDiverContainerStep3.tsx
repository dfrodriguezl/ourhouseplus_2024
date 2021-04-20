import { compose } from 'recompose';
import { Grid } from '@material-ui/core';
import { RouteComponentProps, withRouter } from 'react-router-dom';
import { PageContainer } from 'domains/core/containers';
import { ShapeDiverToolBarStep3 } from 'domains/shapeDiver/components';
import { ShapeDiverWrapperStep3 } from 'domains/shapeDiver/containers';

type Props = RouteComponentProps;
const ShapeDiverContainerStep3 = (props: Props) => {
  return (
    <PageContainer background="black-model">
      <Grid item xs={10}>
        <ShapeDiverWrapperStep3 />
      </Grid>
      <Grid item xs={2}>
        <ShapeDiverToolBarStep3 />
      </Grid>
    </PageContainer>
  )
}

const container = compose<Props, {}>(
  withRouter
)(ShapeDiverContainerStep3);

export default container;
