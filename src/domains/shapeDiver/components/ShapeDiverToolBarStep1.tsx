import { useEffect, useState } from 'react'
import { connect } from 'react-redux';
import { RootState } from 'app/store';
import { RouteComponentProps, withRouter } from 'react-router-dom';
import { Box, Grid, IconButton, makeStyles, Paper, Radio, RadioGroup } from '@material-ui/core'
import { getArea, setParams, setDensity, setRegen } from 'domains/shapeDiver/slice';

import { high, low, medium, two, three, four, square, rectangle, custom, regenIcon } from 'assets'
import { highSelected, lowSelected, mediumSelected, twoSelected, threeSelected, fourSelected, squareSelected, rectangleSelected, customSelected } from 'assets'
import { ShapeDiverOptions } from '../models';
import { compose } from 'recompose';
import { Location } from 'domains/core/models';
import { ShapeDiverAdvancedOptions, ShapeDiverSteps, ShapeDiverToolBarDetails } from '.';

const styles = makeStyles(() => ({
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
  density: number;
  options: ShapeDiverOptions | undefined;
  location: Location | undefined;
}

interface DispatchProps {
  setParams: typeof setParams;
  setDensity: typeof setDensity;
  setRegen: typeof setRegen;
}

type Props = StateProps & DispatchProps & RouteComponentProps;
function ShapeDiverToolBarStep1(props: Props) {
  const { setParams, setDensity, setRegen } = props;
  const { density } = props;
  const classes = styles();
  const [terrain, setTerrain] = useState('1');
  const [unitType, setUnitType] = useState(2);

  useEffect(() => {
    setParams({
      terrain,
      unitType,
    })
  }, [terrain, unitType, setParams]);

  return (
    <Paper>
      <Grid container direction="column" >
        <ShapeDiverToolBarDetails />
        <Grid item container className={classes.firstSubContainer}>
          <Grid item xs={12}>
            <Box fontSize={12} fontWeight='bold' textAlign="end">Terrain shaper</Box>
            <Box fontSize={10} textAlign="end">choose your lot shape</Box>
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
            <Box fontSize={12} fontWeight='bold' textAlign="end">Density Project</Box>
            <Box fontSize={10} textAlign="end">choose level of density</Box>
          </Grid>
          <RadioGroup>
            <Grid container justify="center">
              <Grid item xs={4}>
                <Radio
                  checked={density === 0}
                  onClick={() => setDensity(0)}
                  checkedIcon={<img className={classes.buttons} src={lowSelected} alt="low" />}
                  icon={<img className={classes.buttons} src={low} alt="low" />}
                />
              </Grid>
              <Grid item xs={4}>
                <Radio
                  checked={density === 1}
                  onClick={() => setDensity(1)}
                  checkedIcon={<img className={classes.buttons} src={mediumSelected} alt="medium" />}
                  icon={<img className={classes.buttons} src={medium} alt="medium" />}
                />
              </Grid>
              <Grid item xs={4}>
                <Radio
                  checked={density === 2}
                  onClick={() => setDensity(2)}
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

        <ShapeDiverAdvancedOptions />

        <Grid item xs={12}>
          <IconButton onClick={() => setRegen()}>
            <img className={classes.regen} src={regenIcon} alt="regen" />
          </IconButton>
        </Grid>

        <ShapeDiverSteps />
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
      location: state.domains.shapediver.location,
      regen: state.domains.shapediver.regen,
    }),
    {
      setParams,
      setDensity,
      setRegen
    }
  )
)(ShapeDiverToolBarStep1);

export default container;
