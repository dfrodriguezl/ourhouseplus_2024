import { Fragment } from 'react';
import { compose } from 'recompose';
import { connect } from 'react-redux';
import { Grid } from '@material-ui/core';
import { RouteComponentProps, withRouter } from 'react-router-dom';
import { PageContainer } from 'domains/core/containers';
import { ShapeDiverToolBarStep3, ShapeDiverSteps, ShapeDiverAdditionalParams, ShapeDiverBottomSteps } from 'domains/shapeDiver/components';
import { ShapeDiverWrapperStep3 } from 'domains/shapeDiver/containers';
import { RootState } from 'app/store';
import { Location } from 'domains/core/models';

interface StateProps {
  location: Location | undefined;
}

type Props = StateProps & RouteComponentProps;
const ShapeDiverContainerStep3 = (props: Props) => {

  if (!props.location) {
    props.history.push('/home');
    return (<Fragment />)
  }

  return (
    <PageContainer background="black-model">
      <Grid item xs={9}>
        <ShapeDiverAdditionalParams />
        <ShapeDiverWrapperStep3 />
        <ShapeDiverBottomSteps />
      </Grid>
      <Grid item xs={3} style={{height:"85%"}}>
        <ShapeDiverToolBarStep3 />
        <ShapeDiverSteps />
      </Grid>
    </PageContainer>
  )
}

const container = compose<Props, {}>(
  withRouter,
  connect<StateProps, {}, {}, RootState>(
    (state: RootState) => ({
      location: state.domains.shapediver.location
    })
  )
)(ShapeDiverContainerStep3);

export default container;
