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
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useTheme } from '@material-ui/core/styles';

interface StateProps {
  location: Location | undefined;
}

type Props = StateProps & RouteComponentProps;
const ShapeDiverContainerStep3 = (props: Props) => {

  const theme = useTheme();
  const smallScreen = useMediaQuery(theme.breakpoints.down("sm"));

  if (!props.location) {
    props.history.push('/home');
    return (<Fragment />)
  }

  return (
    <PageContainer background="black-model">
      <Grid item xs={12} sm={9} style={{height: smallScreen?'50%':''}}>
        <ShapeDiverAdditionalParams />
        <ShapeDiverWrapperStep3 />
        <ShapeDiverBottomSteps />
      </Grid>
      <Grid item xs={12} sm={3}>
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
