import { Grid, Box, Slider, makeStyles } from '@material-ui/core';
import { Location } from 'domains/core/models';
import { connect } from 'react-redux';
import { setAdvancedOptions } from 'domains/shapeDiver/slice';

import { RootState } from 'app/store';

const styles = makeStyles(() => ({
  subContainer: {
    padding: '10px 20px 0 20px',
  },
}));

interface DispatchProps {
  setAdvancedOptions: typeof setAdvancedOptions;
}

interface StateProps {
  location: Location | undefined;
}

type Props = StateProps & DispatchProps;
const ShapeDiverAdvancedOptions = (props: Props) => {
  const { location, setAdvancedOptions } = props;
  const classes = styles();


  const updateMaxPriFloors = (_: any, value: number | number[]) => {
    if (!location) return;
    setAdvancedOptions({
      maxPriFloors: Number(value),
      maxSecFloors: location!.maxSecFloors,
      streetFloors: location!.streetFloors,
    });
  }

  const updateMaxSecFloors = (_: any, value: number | number[]) => {
    if (!location) return;
    setAdvancedOptions({
      maxPriFloors: location!.maxPriFloors,
      maxSecFloors: Number(value),
      streetFloors: location!.streetFloors,
    });
  }

  const updateStreetFloors = (_: any, value: number | number[]) => {
    if (!location) return;
    setAdvancedOptions({
      maxPriFloors: location!.maxPriFloors,
      maxSecFloors: location!.maxSecFloors,
      streetFloors: Number(value),
    });
  }

  return (
    <Grid item container className={classes.subContainer}>
      <Grid item xs={12}>
        <Box fontSize={12} fontWeight='bold' textAlign="end">Max Primary Floors</Box>
      </Grid>
      <Slider
        value={location ? location.maxPriFloors : 0}
        aria-labelledby="discrete-slider"
        valueLabelDisplay="auto"
        step={1}
        min={1}
        max={50}
        onChange={updateMaxPriFloors}
      />
      <Grid item xs={12}>
        <Box fontSize={12} fontWeight='bold' textAlign="end">Max Secondary Floors</Box>
      </Grid>
      <Slider
        value={location ? location.maxSecFloors : 0}
        aria-labelledby="discrete-slider"
        valueLabelDisplay="auto"
        step={1}
        min={1}
        max={50}
        onChange={updateMaxSecFloors}
      />
      <Grid item xs={12}>
        <Box fontSize={12} fontWeight='bold' textAlign="end">Street Floors</Box>
      </Grid>
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
  );
}

const container = connect<StateProps, DispatchProps, {}, RootState>(
  (state: RootState) => ({
    location: state.domains.shapediver.location,
  }),
  {
    setAdvancedOptions
  }
)(ShapeDiverAdvancedOptions);

export default container;
