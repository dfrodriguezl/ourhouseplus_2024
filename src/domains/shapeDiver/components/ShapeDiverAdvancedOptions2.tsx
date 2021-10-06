import { Box, Grid, makeStyles, Slider, Theme } from '@material-ui/core';
import { RootState } from 'app/store';
import { LocationSimple } from 'domains/core/models';
import { connect } from 'react-redux';
import { setAdvancedOptions } from '../slice';
import RemoveIcon from '@material-ui/icons/Remove';
import AddIcon from '@material-ui/icons/Add';
import { Fragment } from 'react';

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
  subtitleContainer: {
    marginBottom: 20
  },
  hover: {
    '&:hover': {
      cursor: 'pointer'
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
const ShapeDiverAdvancedOptions2 = (props: Props) => {
  const { location, setAdvancedOptions } = props;
  const classes = styles();

  const updateGroundFloorFreeSpace = (_: any, value: number | number[]) => {
    if (!location) return;
    setAdvancedOptions({
      maxPriFloors: location!.maxPriFloors,
      maxSecFloors: location!.maxSecFloors,
      streetFloors: location!.streetFloors,
      typologies: location!.typologies,
      emptySpaceSelection: Number(value),
      undefinedTower: location!.undefinedTower,
      streetDensity: location!.streetDensity,
      islandSpacings: location!.islandSpacings,
      axisSelection: location!.axisSelection,
    });
  }

  const updateGroundFloorFreeSpaceLocal = (value: number) => {
    updateGroundFloorFreeSpace('', Number(value))
  }

  const updateMultipleFloorFreeSpace = (_: any, value: number | number[]) => {
    if (!location) return;
    setAdvancedOptions({
      maxPriFloors: location!.maxPriFloors,
      maxSecFloors: location!.maxSecFloors,
      streetFloors: location!.streetFloors,
      typologies: location!.typologies,
      emptySpaceSelection: location!.emptySpaceSelection,
      undefinedTower: Number(value),
      streetDensity: location!.streetDensity,
      islandSpacings: location!.islandSpacings,
      axisSelection: location!.axisSelection,
    });
  }

  const updateMultipleFloorFreeSpaceLocal = (value: number) => {
    updateMultipleFloorFreeSpace('', Number(value))
  }


  return (
    <Fragment>
      <Grid item xs={12} className={classes.titlePanel}>
        <Box fontSize={18} fontWeight='bold' textAlign="start">Commercial and non-residential space</Box>
      </Grid>
      <Grid item xs={12} className={classes.subtitleContainer}>
        <Box fontSize={12} textAlign="start">Mall distance <span style={{ float: 'right' }}>XXXXXXX</span></Box>
      </Grid>
      <Grid item xs={12} style={{ margin: '10px 0' }}>
        <Box fontSize={12} fontWeight="bold" textAlign="start">Add ground floor free space </Box>
      </Grid>
      <Grid item container direction="row" xs={12}>
        <Grid xs={9} container spacing={2}>
          <Grid item>
            <RemoveIcon onClick={() => updateGroundFloorFreeSpaceLocal(location!.emptySpaceSelection - 1)} className={classes.hover} />
          </Grid>
          <Grid item xs >
            <Slider
              value={location!.emptySpaceSelection ? location!.emptySpaceSelection : 0}
              aria-labelledby="discrete-slider"
              valueLabelDisplay="auto"
              step={1}
              min={0}
              max={9}
              onChange={updateGroundFloorFreeSpace}
            />
          </Grid>
          <Grid item>
            <AddIcon onClick={() => updateGroundFloorFreeSpaceLocal(location!!.emptySpaceSelection + 1)} className={classes.hover} />
          </Grid>
        </Grid>
        <Grid xs={1} />
        <Grid item container xs={2} justify="flex-end">
          <input type="text" value={location!?.emptySpaceSelection ? location!?.emptySpaceSelection : 0} className={classes.inputNumber} disabled />
        </Grid>
      </Grid>
      <Grid item xs={12} style={{ margin: '10px 0' }}>
        <Box fontSize={12} fontWeight="bold" textAlign="start">Add multiple floors (tower) free space </Box>
      </Grid>
      <Grid item container direction="row" xs={12}>
        <Grid xs={9} container spacing={2}>
          <Grid item>
            <RemoveIcon onClick={() => updateMultipleFloorFreeSpaceLocal(location!.undefinedTower - 1)} className={classes.hover} />
          </Grid>
          <Grid item xs >
            <Slider
              value={location!.undefinedTower ? location!.undefinedTower : 0}
              aria-labelledby="discrete-slider"
              valueLabelDisplay="auto"
              step={1}
              min={0}
              max={1}
              onChange={updateMultipleFloorFreeSpace}
            />
          </Grid>
          <Grid item>
            <AddIcon onClick={() => updateMultipleFloorFreeSpaceLocal(location!.undefinedTower + 1)} className={classes.hover} />
          </Grid>
        </Grid>
        <Grid xs={1} />
        <Grid item container xs={2} justify="flex-end">
          <input type="text" value={location!.undefinedTower ? location!.undefinedTower : 0} className={classes.inputNumber} disabled />
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
)(ShapeDiverAdvancedOptions2);

export default container;