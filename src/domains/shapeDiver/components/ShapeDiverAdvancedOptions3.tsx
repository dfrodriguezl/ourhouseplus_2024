import { Box, Grid, makeStyles, Radio, RadioGroup, Slider, Theme } from '@material-ui/core';
import { RootState } from 'app/store';
import { LocationSimple } from 'domains/core/models';
import { connect } from 'react-redux';
import { setAdvancedOptions } from '../slice';
import RemoveIcon from '@material-ui/icons/Remove';
import AddIcon from '@material-ui/icons/Add';
import { Fragment } from 'react';
import {
  singleSelected, singleInactive, dobleSelected, dobleInactive, nineSelected, nineInactive, twelveSelected, twelveInactive,
  fifteenInactive, fifteenSelected
} from 'assets'

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
  hover: {
    '&:hover': {
      cursor: 'pointer'
    }
  },
  radioStyle: {
    width: '100%'
  },
  buttons: {
    width: 43,
    height: 43
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
const ShapeDiverAdvancedOptions3 = (props: Props) => {
  const { location, setAdvancedOptions } = props;
  const classes = styles();

  const updateMainAxisDirection = (_: any, value: number | number[]) => {
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
      axisSelection: Number(value),
    });
  }

  const updateMainAxisDirectionLocal = (value: number) => {
    updateMainAxisDirection('', Number(value))
  }

  const updateBlockSize = (value: number | number[]) => {
    if (!location) return;
    setAdvancedOptions({
      maxPriFloors: location!.maxPriFloors,
      maxSecFloors: location!.maxSecFloors,
      streetFloors: location!.streetFloors,
      typologies: location!.typologies,
      emptySpaceSelection: location!.emptySpaceSelection,
      undefinedTower: location!.undefinedTower,
      streetDensity: Number(value),
      islandSpacings: location!.islandSpacings,
      axisSelection: location!.axisSelection
    });
  }

  const updateRoadsWidth = (value: number | number[]) => {
    if (!location) return;
    setAdvancedOptions({
      maxPriFloors: location!.maxPriFloors,
      maxSecFloors: location!.maxSecFloors,
      streetFloors: location!.streetFloors,
      typologies: location!.typologies,
      emptySpaceSelection: location!.emptySpaceSelection,
      undefinedTower: location!.undefinedTower,
      streetDensity: location!.streetDensity,
      islandSpacings: Number(value),
      axisSelection: location!.axisSelection
    });
  }


  return (
    <Fragment>
      <Grid item xs={12} className={classes.titlePanel}>
        <Box fontSize={18} fontWeight='bold' textAlign="start">Roads and direction</Box>
      </Grid>
      <Grid item xs={12} style={{ margin: '10px 0' }}>
        <Box fontSize={12} fontWeight="bold" textAlign="start">Main axis direction</Box>
      </Grid>
      <Grid item container direction="row" xs={12}>
        <Grid xs={9} container spacing={2}>
          <Grid item>
            <RemoveIcon onClick={() => updateMainAxisDirectionLocal(location!.axisSelection - 1)} className={classes.hover} />
          </Grid>
          <Grid item xs >
            <Slider
              value={location!.axisSelection ? location!.axisSelection : 0}
              aria-labelledby="discrete-slider"
              valueLabelDisplay="auto"
              step={1}
              min={0}
              max={19}
              onChange={updateMainAxisDirection}
            />
          </Grid>
          <Grid item>
            <AddIcon onClick={() => updateMainAxisDirectionLocal(location!.axisSelection + 1)} className={classes.hover} />
          </Grid>

        </Grid>
        <Grid xs={1} />
        <Grid item container xs={2} justify="flex-end">
          <input type="text" value={location!.axisSelection ? location!.axisSelection : 0} className={classes.inputNumber} disabled />
        </Grid>

      </Grid>

      <Grid item xs={12} style={{ margin: '10px 0' }}>
        <Box fontSize={12} fontWeight="bold" textAlign="start">Block size</Box>
      </Grid>
      <RadioGroup className={classes.radioStyle}>
        <Grid container justify="center">
          <Grid item xs={4}>
            <Radio
              checked={location?.streetDensity === 0}
              onClick={() => updateBlockSize(0)}
              checkedIcon={<img className={classes.buttons} src={singleSelected} alt="1:1" />}
              icon={<img className={classes.buttons} src={singleInactive} alt="1:1" />}
            />
          </Grid>
          <Grid item xs={4}>
            <Radio
              checked={location?.streetDensity === 1}
              onClick={() => updateBlockSize(1)}
              checkedIcon={<img className={classes.buttons} src={dobleSelected} alt="1:1" />}
              icon={<img className={classes.buttons} src={dobleInactive} alt="1:1" />}
            />
          </Grid>
        </Grid>
      </RadioGroup>

      <Grid item xs={12} style={{ margin: '10px 0' }}>
        <Box fontSize={12} fontWeight="bold" textAlign="start">Roads width</Box>
      </Grid>
      <RadioGroup className={classes.radioStyle}>
        <Grid container justify="center">
          <Grid item xs={4}>
            <Radio
              checked={location?.islandSpacings === 2}
              onClick={() => updateRoadsWidth(2)}
              checkedIcon={<img className={classes.buttons} src={nineSelected} alt="1:1" />}
              icon={<img className={classes.buttons} src={nineInactive} alt="1:1" />}
            />
          </Grid>
          <Grid item xs={4}>
            <Radio
              checked={location?.islandSpacings === 1}
              onClick={() => updateRoadsWidth(1)}
              checkedIcon={<img className={classes.buttons} src={twelveSelected} alt="1:1" />}
              icon={<img className={classes.buttons} src={twelveInactive} alt="1:1" />}
            />
          </Grid>
          <Grid item xs={4}>
            <Radio
              checked={location?.islandSpacings === 0}
              onClick={() => updateRoadsWidth(0)}
              checkedIcon={<img className={classes.buttons} src={fifteenSelected} alt="1:1" />}
              icon={<img className={classes.buttons} src={fifteenInactive} alt="1:1" />}
            />
          </Grid>
        </Grid>
      </RadioGroup>
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
)(ShapeDiverAdvancedOptions3);

export default container;