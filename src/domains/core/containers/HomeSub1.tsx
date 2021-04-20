import React from 'react';
import { Container, Grid, Box, Paper, makeStyles } from '@material-ui/core';

const styles = makeStyles(() => ({
  image: {
    height: 200,
    width: 300
  },
  title: {
    paddingTop: 40,
  },
  step: {
    color: 'black',
    fontSize: 20,
    paddingTop: 25,
  },
  stepTitle: {
    fontSize: 24,
    color: 'black'
  },
  stepBody: {
    fontSize: 18,
    paddingBottom: 30,
    color: '#666666'
  }
}));

const HomeSub1 = () => {
  const classes = styles();

  return (
    <div className="home-sub-1">
      <Container>
        <Grid container>
          <Grid item xs={12} className={classes.title}>
            <Box component="h1" color="primary">Plan and design housing projects in three steps</Box>
          </Grid>
          <Grid item xs={4}>
            <Paper elevation={1} className={classes.image}>

            </Paper>
            <div className={classes.step}>
              <Box component="span" >Step One</Box>
            </div>
            <div className={classes.stepTitle}>
              <Box component="h3" >Basic Volume</Box>
            </div>
            <div className={classes.stepBody}>
              <Box component="span" fontSize={16}>
                Generate the basic urban volume for your project and project number of units, living area, floor occupation density.
              </Box>
            </div>
          </Grid>
          <Grid item xs={4}>
            <Paper elevation={1} className={classes.image}>

            </Paper>
            <div className={classes.step}>
              <Box component="span" >Step Two</Box>
            </div>
            <div className={classes.stepTitle}>
              <Box component="h3" >Facade</Box>
            </div>
            <div className={classes.stepBody}>
              <Box component="span" fontSize={16}>
                Visualize the facade design that best fits your project location, window percentage, supply chain, client preferences and budget.
              </Box>
            </div>
          </Grid>
          <Grid item xs={4}>
            <Paper elevation={1} className={classes.image}>

            </Paper>
            <div className={classes.step}>
              <Box component="span" >Step Three</Box>
            </div>
            <div className={classes.stepTitle}>
              <Box component="h3" >Interior</Box>
            </div>
            <div className={classes.stepBody}>
              <Box component="span" fontSize={16}>
                Review and choose the interiors of the living units. Choose units size, open or closed kitchen, extra room or home office.
              </Box>
            </div>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

export default HomeSub1;
