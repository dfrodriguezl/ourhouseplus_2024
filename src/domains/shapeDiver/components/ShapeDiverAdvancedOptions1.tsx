import { Box, Grid, makeStyles, Slider, Theme } from '@material-ui/core';
import { RootState } from 'app/store';
import { Location } from 'domains/core/models';
import { Fragment } from 'react';
import { connect } from 'react-redux';
import { setAdvancedOptions } from '../slice';

const styles = makeStyles((theme: Theme) => ({
  titlePanel: {
    marginBottom: 10
  },
  inputNumber: {
    border: 'none',
    width: '100%',
    height: '80%',
    background: theme.palette.common.white,
    color: '#49494F',
    textAlign: 'center'
  }
}));

interface StateProps {
  location: Location | undefined;
  densityGeneral: string;
}

interface DispatchProps {
  setAdvancedOptions: typeof setAdvancedOptions;
}


type Props = StateProps & DispatchProps;
const ShapeDiverAdvancedOptions1 = (props: Props) => {
  const { location, setAdvancedOptions, densityGeneral } = props;
  const classes = styles();
  const typeDensity = densityGeneral === 'suburban' ? 'suburban' : 'urban';

  const updateMaxPriFloors = (_: any, value: number | number[]) => {
    if (!location) return;
    setAdvancedOptions({
      maxPriFloors: Number(value),
      maxSecFloors: location[typeDensity]!.maxSecFloors,
      streetFloors: location[typeDensity]!.streetFloors,
      typologies: location[typeDensity]!.typologies,
      emptySpaceSelection: location[typeDensity]!.emptySpaceSelection,
      undefinedTower: location[typeDensity]!.undefinedTower,
      streetDensity: location[typeDensity]!.streetDensity,
      islandSpacings: location[typeDensity]!.islandSpacings,
      axisSelection: location[typeDensity]!.axisSelection,
    });
  }

  const updateMaxSecFloors = (_: any, value: number | number[]) => {
    if (!location) return;
    setAdvancedOptions({
      maxPriFloors: location[typeDensity]!.maxPriFloors,
      maxSecFloors: Number(value),
      streetFloors: location[typeDensity]!.streetFloors,
      typologies: location[typeDensity]!.typologies,
      emptySpaceSelection: location[typeDensity]!.emptySpaceSelection,
      undefinedTower: location[typeDensity]!.undefinedTower,
      streetDensity: location[typeDensity]!.streetDensity,
      islandSpacings: location[typeDensity]!.islandSpacings,
      axisSelection: location[typeDensity]!.axisSelection,
    });
  }

  const updateStreetFloors = (_: any, value: number | number[]) => {
    if (!location) return;
    setAdvancedOptions({
      maxPriFloors: location[typeDensity]!.maxPriFloors,
      maxSecFloors: location[typeDensity]!.maxSecFloors,
      streetFloors: Number(value),
      typologies: location[typeDensity]!.typologies,
      emptySpaceSelection: location[typeDensity]!.emptySpaceSelection,
      undefinedTower: location[typeDensity]!.undefinedTower,
      streetDensity: location[typeDensity]!.streetDensity,
      islandSpacings: location[typeDensity]!.islandSpacings,
      axisSelection: location[typeDensity]!.axisSelection,
    });
  }

  return (
    <Fragment>
      <Grid item xs={12} className={classes.titlePanel}>
        <Box fontSize={18} fontWeight='bold' textAlign="start">Maximum height</Box>
      </Grid>
      <Grid item xs={12} >
        <Box fontSize={12} textAlign="start">Max primary floors</Box>
      </Grid>
      <Grid item container direction="row" xs={12}>
        <Grid xs={9}>
          <Slider
            value={location ? location[typeDensity].maxPriFloors : 0}
            aria-labelledby="discrete-slider"
            valueLabelDisplay="auto"
            step={1}
            min={1}
            max={50}
            onChange={updateMaxPriFloors}
          />
        </Grid>
        <Grid xs={1} />
        <Grid xs={2}>
          <input type="text" value={location ? location[typeDensity].maxPriFloors : 0} className={classes.inputNumber} disabled />
        </Grid>
      </Grid>
      <Grid item xs={12}>
        <Box fontSize={12} textAlign="start">Max secondary floors</Box>
      </Grid>
      <Grid item container direction="row" xs={12}>
        <Grid xs={9}>
          <Slider
            value={location ? location[typeDensity].maxSecFloors : 0}
            aria-labelledby="discrete-slider"
            valueLabelDisplay="auto"
            step={1}
            min={1}
            max={50}
            onChange={updateMaxSecFloors}
          />
        </Grid>
        <Grid xs={1} />
        <Grid xs={2}>
          <input type="text" value={location ? location[typeDensity].maxSecFloors : 0} className={classes.inputNumber} disabled />
        </Grid>
      </Grid>
      <Grid item xs={12}>
        <Box fontSize={12} textAlign="start">Street floors</Box>
      </Grid>
      <Grid item container direction="row" xs={12}>
        <Grid xs={9}>
          <Slider
            value={location ? location[typeDensity].streetFloors : 0}
            aria-labelledby="discrete-slider"
            valueLabelDisplay="auto"
            step={1}
            min={1}
            max={10}
            onChange={updateStreetFloors}
          />
        </Grid>
        <Grid xs={1} />
        <Grid xs={2}>
          <input type="text" value={location ? location[typeDensity].streetFloors : 0} className={classes.inputNumber} disabled />
        </Grid>
      </Grid>
    </Fragment>
  )
}

const container = connect<StateProps, DispatchProps, {}, RootState>(
  (state: RootState) => ({
    location: state.domains.shapediver.location,
    densityGeneral: state.domains.shapediver.densityGeneral
  }),
  {
    setAdvancedOptions
  }
)(ShapeDiverAdvancedOptions1);

export default container;