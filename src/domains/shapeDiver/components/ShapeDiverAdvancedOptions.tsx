import { Grid, Box, Slider, makeStyles, Accordion, AccordionSummary, AccordionDetails } from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { Location } from 'domains/core/models';
import { connect } from 'react-redux';
import { setAdvancedOptions } from 'domains/shapeDiver/slice';

import { RootState } from 'app/store';
import React from 'react';

const styles = makeStyles(() => ({
  accordion: {
    width: '100%',
    background: 'transparent',
    padding: '0 20px',
    marginTop: 10,
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
    <Accordion className={classes.accordion}>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
      >
        <Box fontSize={15} fontWeight='bold'>Advanced Settings</Box>
      </AccordionSummary>
      <AccordionDetails>
        <Grid item container>
          <Grid item xs={12}>
            <Box fontSize={14} fontWeight='bold' textAlign="end">Max Primary Floors</Box>
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
            <Box fontSize={14} fontWeight='bold' textAlign="end">Max Secondary Floors</Box>
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
            <Box fontSize={14} fontWeight='bold' textAlign="end">Street Floors</Box>
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
      </AccordionDetails>
    </Accordion>
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
