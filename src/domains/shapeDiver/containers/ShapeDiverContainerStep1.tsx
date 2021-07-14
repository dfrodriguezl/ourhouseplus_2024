import { connect } from 'react-redux';
import { compose } from 'recompose';
import { Grid } from '@material-ui/core';
import { PageContainer } from 'domains/core/containers';
import { ShapeDiverAdditionalParams, ShapeDiverBottomSteps, ShapeDiverSteps, ShapeDiverToolBarStep1 } from 'domains/shapeDiver/components';
import { ShapeDiverWrapperStep1 } from 'domains/shapeDiver/containers';
import { RouteComponentProps, withRouter } from 'react-router-dom';
import { RootState } from 'app/store';
import { Location } from 'domains/core/models';
import { Fragment } from 'react';

interface StateProps {
  location: Location | undefined;
}

type Props = StateProps & RouteComponentProps;
const ShapeDiverContainerStep1 = (props: Props) => {
  const { history, location } = props;

  if (!location) {
    history.push('/home');
    return (<Fragment />);
  }

  return (
    <PageContainer background="black-model">
      <Grid item xs={9}>
        <ShapeDiverAdditionalParams />
        <ShapeDiverWrapperStep1 />
        <ShapeDiverBottomSteps />
      </Grid>
      <Grid item xs={3} style={{height: '95%'}}>
        <ShapeDiverToolBarStep1 />
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
)(ShapeDiverContainerStep1);

export default container;
