import { compose } from 'recompose';
import { Grid } from '@material-ui/core';
import { RouteComponentProps, withRouter } from 'react-router-dom';
import { PageContainer } from 'domains/core/containers';
import { ShapeDiverToolBarStep2 } from 'domains/shapeDiver/components';
import { ShapeDiverWrapperStep2 } from 'domains/shapeDiver/containers';

type Props = RouteComponentProps;
const ShapeDiverContainerStep2 = (props: Props) => {
  return (
    <PageContainer>
      <Grid item xs={10}>
        <ShapeDiverWrapperStep2 />
      </Grid>
      <Grid item xs={2}>
        <ShapeDiverToolBarStep2 />
      </Grid>
    </PageContainer>
  )
}

const container = compose<Props, {}>(
  withRouter
)(ShapeDiverContainerStep2);

export default container;
