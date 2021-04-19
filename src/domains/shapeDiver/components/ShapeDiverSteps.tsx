import { RouteComponentProps, withRouter } from 'react-router';
import { Button, Grid, makeStyles } from '@material-ui/core';

const styles = makeStyles(() => ({
  container: {

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
  }
}));

const ShapeDiverSteps = (props: RouteComponentProps) => {
  const { history } = props;
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

  return (

    <Grid item container className={classes.container}>
      <Grid item xs={4}>
        <Button
          size="small"
          onClick={goToStep1}
          className={classes.nextButton}
        >
          Step 1
        </Button>
      </Grid>
      <Grid item xs={4}>
        <Button
          size="small"
          onClick={goToStep2}
          className={classes.nextButton}
        >
          Step 2
        </Button>
      </Grid>
      <Grid item xs={4}>
        <Button
          size="small"
          onClick={goToStep3}
          className={classes.nextButton}
        >
          Step 3
        </Button>
      </Grid>
    </Grid>
  );
}

export default withRouter(ShapeDiverSteps);
