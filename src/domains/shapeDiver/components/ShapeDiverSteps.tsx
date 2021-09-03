import { RouteComponentProps, withRouter } from 'react-router';
import { Button, Grid, makeStyles } from '@material-ui/core';
import { RootState } from 'app/store';
import { setRegen } from '../slice';
import { compose } from 'recompose';
import { connect } from 'react-redux';
import { Location } from 'domains/core/models';
import { useState } from 'react';
import RotateLeftIcon from '@material-ui/icons/RotateLeft';
import { ArrowForward } from '@material-ui/icons';

const styles = makeStyles(() => ({
  container: {
    padding: '10px 0px 30px 0px'
  },
  step: {
    width: 54,
    height: 32,
  },
  nextButton: {
    borderRadius: 20,
    backgroundColor: '#FF6C6C',
    textTransform: 'none',
    color: 'white',
    margin: '10px 0',
    '&:hover': {
      backgroundColor: '#8ABCD2',
    }
  },
  regen: {
    borderRadius: 20,
    backgroundColor: '#F4F4F4',
    textTransform: 'none',
    color: '#505050',
    margin: '10px 0',
    '&:hover': {
      backgroundColor: '#8ABCD2',
    }
  }
}));

interface StateProps {
  location: Location | undefined;
}

interface DispatchProps {
  setRegen: typeof setRegen;
}

type Props = StateProps & DispatchProps & RouteComponentProps;
const ShapeDiverSteps = (props: Props) => {
  const { history, setRegen } = props;
  const classes = styles();
  const [hoverReset, setHoverReset] = useState(false);
  const [hoverNext, setHoverNext] = useState(false);

  const isStep1 = history.location.pathname.indexOf('step1') > -1;
  const isStep2 = history.location.pathname.indexOf('step2') > -1;
  const isStep3 = history.location.pathname.indexOf('step3') > -1;

  const goToNextStep = () => {
    if (isStep1) {
      history.push('/shapediver/step2');
    }

    if (isStep2) {
      history.push('/shapediver/step3');
    }

    if (isStep3) {
      history.push('/shapediver/step1');
    }
  }

  return (

    <Grid container className={classes.container} style={{ textAlign: 'center' }} >
      <Grid item xs={6}>
        <Button
          size="small"
          onClick={() => setRegen()}
          className={classes.regen}
          onMouseEnter={() => setHoverReset(true)}
          onMouseLeave={() => setHoverReset(false)}
        >
          {hoverReset ? <RotateLeftIcon></RotateLeftIcon> : "Reset"}
        </Button>
      </Grid>
      <Grid item xs={6}>
        <Button
          size="small"
          onClick={goToNextStep}
          className={classes.nextButton}
          onMouseEnter={() => setHoverNext(true)}
          onMouseLeave={() => setHoverNext(false)}
        >
          {hoverNext ? <ArrowForward></ArrowForward> : "Next"}
        </Button>
      </Grid>
    </Grid>
  );
}
const container = compose<Props, {}>(
  withRouter,
  connect<StateProps, DispatchProps, {}, RootState>(
    (state: RootState) => ({
      location: state.domains.shapediver.location
    }),
    {
      setRegen
    }
  )
)(ShapeDiverSteps);

export default container;
