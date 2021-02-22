import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux';
import { RootState } from 'app/store';
import { Box, Card, Grid, IconButton, makeStyles, Paper, Radio, RadioGroup } from '@material-ui/core'
import { setShapeDiverParams } from 'domains/core/coreSlice';

import { high, low, medium, two, three, four, square, rectangle, custom, step2, regen } from 'assets'
import { highSelected, lowSelected, mediumSelected, twoSelected, threeSelected, fourSelected, squareSelected, rectangleSelected, customSelected } from 'assets'

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
    padding: '10px 20px 0 20px',
  },
  buttons: {
    width: 32,
    height: 32
  },
  step2: {
    width: 64,
    height: 32,
  },
  regen: {
    width: 24,
    height: 24
  }
}));

interface StateProps {
  area: number;
}

type Props = StateProps;
function ShapeDiverToolBar(props: Props) {
  const { area } = props;
  const classes = styles();
  const [terrain, setTerrain] = useState('1:1');
  const [density, setDensity] = useState<number>(1);
  const [unitType, setUnitType] = useState<number>(2);

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
          <RadioGroup>
            <Grid container justify="center">
              <Grid item xs={4}>
                <Radio
                  checked={terrain === '1:1'}
                  onClick={() => setTerrain('1:1')}
                  checkedIcon={<img className={classes.buttons} src={squareSelected} alt="1:1" />}
                  icon={<img className={classes.buttons} src={square} alt="1:1" />}
                />
              </Grid>
              <Grid item xs={4}>
                <Radio
                  checked={terrain === '2:1'}
                  onClick={() => setTerrain('2:1')}
                  checkedIcon={<img className={classes.buttons} src={rectangleSelected} alt="2:1" />}
                  icon={<img className={classes.buttons} src={rectangle} alt="2:1" />}
                />
              </Grid>
              <Grid item xs={4}>
                <Radio
                  checked={terrain === 'custom'}
                  onClick={() => setTerrain('custom')}
                  checkedIcon={<img className={classes.buttons} src={customSelected} alt="custom" />}
                  icon={<img className={classes.buttons} src={custom} alt="custom" />}
                />
              </Grid>
            </Grid>
          </RadioGroup>
        </Grid>
        <Grid item container className={classes.subContainer}>
          <Grid item xs={12}>
            <Box fontSize={12} fontWeight='bold' textAlign="end">Density Project</Box>
            <Box fontSize={10} textAlign="end">choose level of density</Box>
          </Grid>
          <RadioGroup>
            <Grid container justify="center">
              <Grid item xs={4}>
                <Radio
                  checked={density === 1}
                  onClick={() => setDensity(1)}
                  checkedIcon={<img className={classes.buttons} src={lowSelected} alt="low" />}
                  icon={<img className={classes.buttons} src={low} alt="low" />}
                />
              </Grid>
              <Grid item xs={4}>
                <Radio
                  checked={density === 2}
                  onClick={() => setDensity(2)}
                  checkedIcon={<img className={classes.buttons} src={mediumSelected} alt="medium" />}
                  icon={<img className={classes.buttons} src={medium} alt="medium" />}
                />
              </Grid>
              <Grid item xs={4}>
                <Radio
                  checked={density === 3}
                  onClick={() => setDensity(3)}
                  checkedIcon={<img className={classes.buttons} src={highSelected} alt="high" />}
                  icon={<img className={classes.buttons} src={high} alt="high" />}
                />
              </Grid>
            </Grid>
          </RadioGroup>
        </Grid>
        <Grid item container className={classes.subContainer}>
          <Grid item xs={12}>
            <Box fontSize={12} fontWeight='bold' textAlign="end">Units number types</Box>
            <Box fontSize={10} textAlign="end">choose mix</Box>
          </Grid>
          <RadioGroup>
            <Grid container justify="center">
              <Grid item xs={4}>
                <Radio
                  checked={unitType === 2}
                  onClick={() => setUnitType(2)}
                  checkedIcon={<img className={classes.buttons} src={twoSelected} alt="two" />}
                  icon={<img className={classes.buttons} src={two} alt="two" />}
                />
              </Grid>
              <Grid item xs={4}>
                <Radio
                  checked={unitType === 3}
                  onClick={() => setUnitType(3)}
                  checkedIcon={<img className={classes.buttons} src={threeSelected} alt="three" />}
                  icon={<img className={classes.buttons} src={three} alt="three" />}
                />
              </Grid>
              <Grid item xs={4}>
                <Radio
                  checked={unitType === 4}
                  onClick={() => setUnitType(4)}
                  checkedIcon={<img className={classes.buttons} src={fourSelected} alt="four" />}
                  icon={<img className={classes.buttons} src={four} alt="four" />}
                />
              </Grid>
            </Grid>
          </RadioGroup>
        </Grid>
        <Grid item container className={classes.subContainer}>
          <Grid item xs={6}>
            <IconButton>
              <img className={classes.regen} src={regen} alt="regen" />
            </IconButton>
          </Grid>
          <Grid item xs={6}>
            <IconButton>
              <img className={classes.step2} src={step2} alt="step2" />
            </IconButton>
          </Grid>
        </Grid>
      </Grid>
    </Paper>
  )
}
const container = connect<StateProps, Props, {}, RootState>(
  (state: RootState) => ({
    area: state.domains.typology.area
  })
)(ShapeDiverToolBar);

export default container;
