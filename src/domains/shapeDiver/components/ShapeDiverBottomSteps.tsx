import { RouteComponentProps, withRouter } from 'react-router';
import { Button, Grid, makeStyles } from '@material-ui/core';
import { RootState } from 'app/store';
import { compose } from 'recompose';
import { connect } from 'react-redux';
import { Location } from 'domains/core/models';
import { oneCircle, twoCircle, threeCircle, oneNoCircle, twoNoCircle, threeNoCircle, back, forward } from 'assets';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useTheme } from '@material-ui/core/styles';

const styles = makeStyles((theme) => ({
  container: {
    padding: '10px 0px 30px 0px'
  },
  step: {
    margin: "0px 10px",
    [theme.breakpoints.down('sm')]: {
      margin: 0
    },
  },
  nextButton: {
    borderRadius: 20,
    color: 'white',
    margin: '10px 10px',
    fontSize: 50
  },
  numbers: {
    width: 50,
    [theme.breakpoints.down('sm')]: {
      width: 35
    },
  },
  numbersCircle: {
    width: 20,
    [theme.breakpoints.down('sm')]: {
      width: 15
    },
  }
}));

interface StateProps {
  location: Location | undefined;
}

type Props = StateProps & RouteComponentProps;
const ShapeDiverSteps = (props: Props) => {
  const { history } = props;
  const classes = styles();

  const isStep1 = history.location.pathname.indexOf('step1') > -1;
  const isStep2 = history.location.pathname.indexOf('step2') > -1;
  const isStep3 = history.location.pathname.indexOf('step3') > -1;

  const theme = useTheme();
  const smallScreen = useMediaQuery(theme.breakpoints.down("sm"));

  const goToStep1 = () => {
    history.push('/shapediver/step1');
  }

  const goToStep2 = () => {
    history.push('/shapediver/step2');
  }

  const goToStep3 = () => {
    history.push('/shapediver/step3');
  }

  return (

    <Grid container className={classes.container} style={{ textAlign: 'center' }} >
      <Grid item xs={12}>
        {smallScreen ?
          <Button className={classes.step} onClick={() => { isStep2 ? goToStep1() : goToStep2() }}>
            {!isStep1 ? <img src={back} alt="back" /> : null}
          </Button> : null}
        <Button
          onClick={() => goToStep1()}
          className={classes.step}
        >
          {
            isStep1
              ? <img src={oneCircle} alt="one-circle" className={classes.numbers} />
              : <img src={oneNoCircle} alt="one-circle" className={classes.numbersCircle} />
          }

        </Button>

        <Button
          onClick={goToStep2}
          className={classes.step}
        >
          {
            isStep2
              ? <img src={twoCircle} alt="two-circle" className={classes.numbers} />
              : <img src={twoNoCircle} alt="two-circle" className={classes.numbersCircle} />
          }

        </Button>
        <Button
          onClick={goToStep3}
          className={classes.step}
        >
          {
            isStep3
              ? <img src={threeCircle} alt="three-circle" className={classes.numbers} />
              : <img src={threeNoCircle} alt="three-circle" className={classes.numbersCircle} />
          }
        </Button>

        {smallScreen ?
          <Button className={classes.step} onClick={() => { isStep1 ? goToStep2() : goToStep3() }}>
            {!isStep3 ? <img src={forward} alt="forward" /> : null}
          </Button> : null}
      </Grid>
    </Grid>
  );
}
const container = compose<Props, {}>(
  withRouter,
  connect<StateProps, {}, {}, RootState>(
    (state: RootState) => ({
      location: state.domains.shapediver.location
    })
  )
)(ShapeDiverSteps);

export default container;
