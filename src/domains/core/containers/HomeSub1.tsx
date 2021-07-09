import React from 'react';
import { Container, Grid, Box, Paper, makeStyles, Button } from '@material-ui/core';
import { ArrowForward } from '@material-ui/icons';

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
  },
  JoinContainer: {
    backgroundColor: '#F7F7F7',
    marginTop: 40,
    marginBottom: 40,
    paddingLeft: 40
  },
  buttonJoin: {
    color: "#FF6C6C",
    textTransform: 'none',
    fontSize: 18,
    height: "100%"
  },
  phrase: {
    fontSize: 17,
    color: "#696969"
  }
}));

const HomeSub1 = () => {
  const classes = styles();

  return (
    <div className="home-sub-1">
      <Container >
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
              <Box component="h3" >Basic volume</Box>
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
          <Grid container xs={12} className={classes.JoinContainer}>

            <Grid item xs={10} className={classes.phrase} >
              <Box component="p">
                Download floorplans, technical drawings, supply chain suggestions and 3d Model.
              </Box>
              
            </Grid>

            <Grid item xs={2}>
              <Button 
                endIcon={<ArrowForward />}
                className={classes.buttonJoin}>
                  Join now
              </Button>
            </Grid>
                
            
            
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

export default HomeSub1;
