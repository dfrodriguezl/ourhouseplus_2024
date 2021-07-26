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
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useTheme } from '@material-ui/core/styles';

interface StateProps {
  location: Location | undefined;
}

type Props = StateProps & RouteComponentProps;
const ShapeDiverContainerStep1 = (props: Props) => {
  const { history, location } = props;

  const theme = useTheme();
  const smallScreen = useMediaQuery(theme.breakpoints.down("sm"));


  if (!location) {
    history.push('/home');
    return (<Fragment />);
  }

  return (
    <PageContainer background="black-model">
      <Grid item xs={12} sm={9} style={{height: smallScreen?'50%':''}}>
        <ShapeDiverAdditionalParams />
        <ShapeDiverWrapperStep1 />
        <ShapeDiverBottomSteps />
      </Grid>
      <Grid item xs={12} sm={3}>
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
