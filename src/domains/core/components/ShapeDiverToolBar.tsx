import React, { useEffect, useState } from 'react'
import { Box, Card, Grid, IconButton, makeStyles, Paper } from '@material-ui/core'
import { setShapeDiverParams } from 'domains/core/coreSlice';

import rectangle from 'assets/Rectangle.png';
import square from 'assets/Square.png'
import custom from 'assets/custom.png'

import low from 'assets/Low.png';
import medium from 'assets/Medium.png';
import high from 'assets/High.png';

import two from 'assets/two.png'
import three from 'assets/three.png'
import four from 'assets/four.png'

const styles = makeStyles(() => ({
  root: {
    // height: '100%'
  },
  container: {
    padding: 20,
  },
  firstSubContainer: {
    padding: '20px 20px 0 20px',
  },
  subContainer: {
    padding: '0 20px',
  },
  buttons: {
    width: 32,
    height: 32
  }
}));
function ShapeDiverToolBar() {
  const classes = styles();
  const [terrain, setTerrain] = useState('1:1');
  const [density, setDensity] = useState<number>(0);
  const [unitType, setUnitType] = useState<number>(0);

  useEffect(() => {
    setShapeDiverParams({
      terrain,
      density,
      unitType
    })
  }, [terrain, density, unitType])

  return (
    <Paper className={classes.root}>
      <Grid container direction="column" >
        <Card className={classes.container}>
          <Grid item container direction="row">
            <Grid item xs={9}>
              <Box fontSize={12} fontWeight='bold'>Location</Box>
              <Box fontSize={10} fontWeight='bold'>Total gross floor area</Box>
              <br />
              <Box fontSize={10} fontWeight='bold'>Land user ratio (LUR)</Box>
              <Box fontSize={10} fontWeight='bold'>Floor area ratio (FAR)</Box>
              <br />
              <Box fontSize={10} fontWeight='bold'>Total units</Box>
            </Grid>
            <Grid item xs={3}>
              <Box fontSize={10}>xxxx.xx</Box>
              <Box fontSize={10}>xxxx.xx</Box>
              <br />
              <Box fontSize={10}>xxxx.xx</Box>
              <Box fontSize={10}>xxxx.xx</Box>
              <br />
              <Box fontSize={10}>xxxx.xx</Box>
            </Grid>
          </Grid>
        </Card>
        <Grid item container className={classes.firstSubContainer}>
          <Grid item xs={12}>
            <Box fontSize={12} fontWeight='bold' textAlign="end">Terrain shaper</Box>
            <Box fontSize={10} textAlign="end">choose your lot shape</Box>
          </Grid>
          <Grid container justify="center">
            <Grid item xs={4}>
              <IconButton onClick={() => setTerrain('1:1')}>
                <img className={classes.buttons} src={square} alt="1:1" />
              </IconButton>
            </Grid>
            <Grid item xs={4}>
              <IconButton onClick={() => setTerrain('2:1')}>
                <img className={classes.buttons} src={rectangle} alt="2:1" />
              </IconButton>
            </Grid>
            <Grid item xs={4}>
              <IconButton onClick={() => setTerrain('custom')}>
                <img className={classes.buttons} src={custom} alt="custom" />
              </IconButton>
            </Grid>
          </Grid>
        </Grid>
        <Grid item container className={classes.subContainer}>
          <Grid item xs={12}>
            <Box fontSize={12} fontWeight='bold' textAlign="end">Density Project</Box>
            <Box fontSize={10} textAlign="end">choose level of density</Box>
          </Grid>
          <Grid container justify="center">
            <Grid item xs={4}>
              <IconButton onClick={() => setDensity(1)}>
                <img className={classes.buttons} src={low} alt="square" />
              </IconButton>
            </Grid>
            <Grid item xs={4}>
              <IconButton onClick={() => setDensity(2)}>
                <img className={classes.buttons} src={medium} alt="square" />
              </IconButton>
            </Grid>
            <Grid item xs={4}>
              <IconButton onClick={() => setDensity(3)}>
                <img className={classes.buttons} src={high} alt="square" />
              </IconButton>
            </Grid>
          </Grid>
        </Grid>
        <Grid item container className={classes.subContainer}>
          <Grid item xs={12}>
            <Box fontSize={12} fontWeight='bold' textAlign="end">Units number types</Box>
            <Box fontSize={10} textAlign="end">choose mix</Box>
          </Grid>
          <Grid container justify="center">
            <Grid item xs={4}>
              <IconButton onClick={() => setUnitType(1)}>
                <img className={classes.buttons} src={two} alt="square" />
              </IconButton>
            </Grid>
            <Grid item xs={4}>
              <IconButton onClick={() => setUnitType(2)}>
                <img className={classes.buttons} src={three} alt="square" />
              </IconButton>
            </Grid>
            <Grid item xs={4}>
              <IconButton onClick={() => setUnitType(3)}>
                <img className={classes.buttons} src={four} alt="square" />
              </IconButton>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Paper>
  )
}

export default ShapeDiverToolBar
