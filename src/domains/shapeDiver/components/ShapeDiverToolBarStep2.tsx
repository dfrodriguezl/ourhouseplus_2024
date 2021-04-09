import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux';
import { RootState } from 'app/store';
import { RouteComponentProps, withRouter } from 'react-router-dom';
import { Box, Card, Grid, IconButton, makeStyles, Paper, Radio, RadioGroup } from '@material-ui/core'
import { getArea, setWindow, setDensity } from 'domains/shapeDiver/slice';

import { high, low, medium, two, three, four, square, rectangle, custom, step2, regenIcon } from 'assets'
import { highSelected, lowSelected, mediumSelected, twoSelected, threeSelected, fourSelected, squareSelected, rectangleSelected, customSelected } from 'assets'
import { ShapeDiverOptions } from '../models';
import { compose } from 'recompose';

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
  density: string | undefined;
  options: ShapeDiverOptions | undefined;
}

interface DispatchProps {
  setWindow: typeof setWindow;
  setDensity: typeof setDensity;
}

type Props = StateProps & DispatchProps & RouteComponentProps;
function ShapeDiverToolBar(props: Props) {
  const { setWindow, options, density, setDensity, history } = props;
  const classes = styles();
  const [terrain, setTerrain] = useState('1');
  const [unitType, setUnitType] = useState(2);
  const [regen, setRegen] = useState(0);

  const handleRegen = () => {
    setRegen((regen + 1) % options!.regen.length);
  }

  const goToStep2 = () => {
    history.push('/shapediver/step2');
  }

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
            <Box fontSize={12} fontWeight='bold' textAlign="end">Window Percentage</Box>
            <Box fontSize={10} textAlign="end">choose your window size</Box>
          </Grid>
          <RadioGroup>
            <Grid container justify="center">
              <Grid item xs={4}>
                <Radio
                  checked={terrain === '0'}
                  onClick={() => setTerrain('0')}
                  checkedIcon={<img className={classes.buttons} src={squareSelected} alt="1:1" />}
                  icon={<img className={classes.buttons} src={square} alt="1:1" />}
                />
              </Grid>
              <Grid item xs={4}>
                <Radio
                  checked={terrain === '1'}
                  onClick={() => setTerrain('1')}
                  checkedIcon={<img className={classes.buttons} src={rectangleSelected} alt="2:1" />}
                  icon={<img className={classes.buttons} src={rectangle} alt="2:1" />}
                />
              </Grid>
              <Grid item xs={4}>
                <Radio
                  checked={terrain === 'import'}
                  onClick={() => setTerrain('import')}
                  checkedIcon={<img className={classes.buttons} src={customSelected} alt="import" />}
                  icon={<img className={classes.buttons} src={custom} alt="import" />}
                />
              </Grid>
            </Grid>
          </RadioGroup>
        </Grid>
        <Grid item container className={classes.subContainer}>
          <Grid item xs={12}>
            <Box fontSize={12} fontWeight='bold' textAlign="end">Facade Direction</Box>
            <Box fontSize={10} textAlign="end">choose level of density</Box>
          </Grid>
          <RadioGroup>
            <Grid container justify="center">
              <Grid item xs={4}>
                <Radio
                  checked={density === '0'}
                  onClick={() => setDensity('0')}
                  checkedIcon={<img className={classes.buttons} src={lowSelected} alt="low" />}
                  icon={<img className={classes.buttons} src={low} alt="low" />}
                />
              </Grid>
              <Grid item xs={4}>
                <Radio
                  checked={density === '1'}
                  onClick={() => setDensity('1')}
                  checkedIcon={<img className={classes.buttons} src={mediumSelected} alt="medium" />}
                  icon={<img className={classes.buttons} src={medium} alt="medium" />}
                />
              </Grid>
              <Grid item xs={4}>
                <Radio
                  checked={density === '2'}
                  onClick={() => setDensity('2')}
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
            <IconButton onClick={() => handleRegen()}>
              <img className={classes.regen} src={regenIcon} alt="regen" />
            </IconButton>
          </Grid>
          <Grid item xs={6}>
            <IconButton onClick={goToStep2}>
              <img className={classes.step2} src={step2} alt="step2" />
            </IconButton>
          </Grid>
        </Grid>
      </Grid>
    </Paper>
  )
}
const container = compose<Props, {}>(
  withRouter,
  connect<StateProps, DispatchProps, {}, RootState>(
    (state: RootState) => ({
      area: getArea(state),
      density: state.domains.shapediver.density,
      options: state.domains.shapediver.options,
    }),
    {
      setWindow,
      setDensity,
    }
  )
)(ShapeDiverToolBar);

export default container;
