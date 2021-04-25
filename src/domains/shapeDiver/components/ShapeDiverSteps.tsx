import { RouteComponentProps, withRouter } from 'react-router';
import { Button, Grid, makeStyles } from '@material-ui/core';
import { RootState } from 'app/store';
import { setRegen } from '../slice';
import { compose } from 'recompose';
import { connect } from 'react-redux';
import { Location } from 'domains/core/models';

const styles = makeStyles(() => ({
  container: {
    padding: '30px 0px 30px 30px'
  },
  step: {
    width: 54,
    height: 32,
  },
  nextButton: {
    borderRadius: 20,
    backgroundColor: '#FF6C6C',
    color: 'white',
    margin: '10px 0'
  },
  regen: {

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

  const goToStep1 = () => {
    history.push('/shapediver/step1');
  }

  const goToStep2 = () => {
    history.push('/shapediver/step2');
  }

  const goToStep3 = () => {
    history.push('/shapediver/step3');
  }

  const isStep1 = history.location.pathname.indexOf('step1') > -1;
  const isStep2 = history.location.pathname.indexOf('step2') > -1;
  const isStep3 = history.location.pathname.indexOf('step3') > -1;

  return (

    <Grid item container className={classes.container}>
      <Grid item xs={4}>
        <Button
          size="small"
          onClick={() => setRegen()}
          className={classes.nextButton}
        >
          Regen
        </Button>
      </Grid>
      {
        !isStep1 &&
        <Grid item xs={4}>
          <Button
            size="small"
            onClick={goToStep1}
            className={classes.nextButton}
          >
            Step 1
        </Button>
        </Grid>
      }
      {
        !isStep2 &&
        <Grid item xs={4}>
          <Button
            size="small"
            onClick={goToStep2}
            className={classes.nextButton}
          >
            Step 2
        </Button>
        </Grid>
      }
      {
        !isStep3 &&
        <Grid item xs={4}>
          <Button
            size="small"
            onClick={goToStep3}
            className={classes.nextButton}
          >
            Step 3
        </Button>
        </Grid>
      }
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
