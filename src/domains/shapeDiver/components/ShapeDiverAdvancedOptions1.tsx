import { Box, Grid, makeStyles, Slider, Switch, Theme } from '@material-ui/core';
import { RootState } from 'app/store';
import { LocationSimple } from 'domains/core/models';
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
  },
  fontSub: {
    fontSize: 10
  },
  track: {
    background: '#5D5D5D',
  },
  checked: {
    color: '#E33650',
  },
  toggle: {
    '& .Mui-checked': {
      color: '#E33650'
    },
    '& .Mui-checked + .MuiSwitch-track': {
      backgroundColor: '#FF647B'
    }
  },
}));

interface StateProps {
  location: LocationSimple | undefined;
  densityGeneral: string;
}

interface DispatchProps {
  setAdvancedOptions: typeof setAdvancedOptions;
}


type Props = StateProps & DispatchProps;
const ShapeDiverAdvancedOptions1 = (props: Props) => {
  const { location, setAdvancedOptions } = props;
  const classes = styles();

  const updateMaxPriFloors = (_: any, value: number | number[]) => {
    if (!location) return;
    setAdvancedOptions({
      maxPriFloors: Number(value),
      maxSecFloors: location!.maxSecFloors,
      streetFloors: location!.streetFloors,
      typologies: location!.typologies,
      emptySpaceSelection: location!.emptySpaceSelection,
      undefinedTower: location!.undefinedTower,
      streetDensity: location!.streetDensity,
      islandSpacings: location!.islandSpacings,
      axisSelection: location!.axisSelection,
      floorsAlignment: 0
    });
  }

  const updateMaxSecFloors = (_: any, value: number | number[]) => {
    if (!location) return;
    setAdvancedOptions({
      maxPriFloors: location!.maxPriFloors,
      maxSecFloors: Number(value),
      streetFloors: location!.streetFloors,
      typologies: location!.typologies,
      emptySpaceSelection: location!.emptySpaceSelection,
      undefinedTower: location!.undefinedTower,
      streetDensity: location!.streetDensity,
      islandSpacings: location!.islandSpacings,
      axisSelection: location!.axisSelection,
      floorsAlignment: 0
    });
  }

  const updateStreetFloors = (_: any, value: number | number[]) => {
    if (!location) return;
    setAdvancedOptions({
      maxPriFloors: location!.maxPriFloors,
      maxSecFloors: location!.maxSecFloors,
      streetFloors: Number(value),
      typologies: location!.typologies,
      emptySpaceSelection: location!.emptySpaceSelection,
      undefinedTower: location!.undefinedTower,
      streetDensity: location!.streetDensity,
      islandSpacings: location!.islandSpacings,
      axisSelection: location!.axisSelection,
      floorsAlignment: 0
    });
  }

  const updateFloorsAlignment = (value: boolean) => {
    if (!location) return;
    setAdvancedOptions({
      maxPriFloors: location!.maxPriFloors,
      maxSecFloors: location!.maxSecFloors,
      streetFloors: location!.streetFloors,
      typologies: location!.typologies,
      emptySpaceSelection: location!.emptySpaceSelection,
      undefinedTower: location!.undefinedTower,
      streetDensity: location!.streetDensity,
      islandSpacings: location!.islandSpacings,
      axisSelection: location!.axisSelection,
      floorsAlignment: value ? 1 : 0
    });
  }

  return (
    <Fragment>
      <Grid item xs={12} className={classes.titlePanel}>
        <Box fontSize={18} fontWeight='bold' textAlign="start">Maximum height</Box>
      </Grid>
      <Grid item xs={12} >
        <Box fontSize={12} textAlign="start">Choose max. number of floors A</Box>
      </Grid>
      <Grid item container direction="row" xs={12}>
        <Grid xs={9}>
          <Slider
            value={location ? location.maxPriFloors : 0}
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
          <input type="text" value={location ? location.maxPriFloors : 0} className={classes.inputNumber} disabled />
        </Grid>
      </Grid>
      <Grid item xs={12}>
        <Box fontSize={12} textAlign="start">Choose max. number of floors B</Box>
      </Grid>
      <Grid item container direction="row" xs={12}>
        <Grid xs={9}>
          <Slider
            value={location ? location.maxSecFloors : 0}
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
          <input type="text" value={location ? location.maxSecFloors : 0} className={classes.inputNumber} disabled />
        </Grid>
      </Grid>
      <Grid item xs={12}>
        <Box fontSize={12} textAlign="start">Choose number of street floors</Box>
      </Grid>
      <Grid item container direction="row" xs={12}>
        <Grid xs={9}>
          <Slider
            value={location ? location.streetFloors : 0}
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
          <input type="text" value={location ? location.streetFloors : 0} className={classes.inputNumber} disabled />
        </Grid>
      </Grid>
      <Grid item container xs={12}>
        <Grid xs={10}>
          <Box fontSize={12} textAlign="start">Floors alignment <br /> <span className={classes.fontSub}>(random/regular)</span> </Box>
        </Grid>
        <Grid xs={2}>
          <Switch checked={ location?.floorsAlignment === 0 ? false : true }
            onChange={(e) => updateFloorsAlignment(e.target.checked)}
            size="small"
            className={classes.toggle} />
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