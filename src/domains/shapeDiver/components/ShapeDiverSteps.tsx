import React from 'react';
import { RouteComponentProps, withRouter } from 'react-router';
import { Grid, IconButton, makeStyles } from '@material-ui/core';

import { step1, step2, step3 } from 'assets';

const styles = makeStyles(() => ({
  container: {

  },
  step: {
    width: 54,
    height: 32,
  },
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
        <IconButton onClick={goToStep1}>
          <img className={classes.step} src={step1} alt="step1" />
        </IconButton>
      </Grid>
      <Grid item xs={4}>
        <IconButton onClick={goToStep2}>
          <img className={classes.step} src={step2} alt="step2" />
        </IconButton>
      </Grid>
      <Grid item xs={4}>
        <IconButton onClick={goToStep3}>
          <img className={classes.step} src={step3} alt="step3" />
        </IconButton>
      </Grid>
    </Grid>
  );
}

export default withRouter(ShapeDiverSteps);
