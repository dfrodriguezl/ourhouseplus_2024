import React, { useState } from 'react';
import { Grid, Box, Slider, makeStyles, Accordion, AccordionSummary, AccordionDetails, Tabs, Tab, Theme } from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { Location } from 'domains/core/models';
import { connect } from 'react-redux';
import { setAdvancedOptions, setExpandAdvanced } from 'domains/shapeDiver/slice';

import { RootState } from 'app/store';


const styles = makeStyles((theme: Theme) => ({
  accordion: {
    width: '100%',
    background: 'transparent',
    padding: '0 0px'
  },
  labelContainer: {
    padding: 0
  },
  root: {
    minWidth: 0,
    textTransform: 'none',
    [theme.breakpoints.up('sm')]: {
      minWidth: 0,
    },
  },
  accordionSummary: {
    padding: '0 20px'
  },
  details: {
    padding: '0 20px'
  },
  rootTabs: {
    borderBottom: '1px solid #58565780',
    marginBottom: '5px'
  },
  rootAccordionSummary: {
    margin: 0,
    minHeight: 0,
    '&$expanded': {
      minHeight: 0,
      margin: 0
    }
  }

}));

interface DispatchProps {
  setAdvancedOptions: typeof setAdvancedOptions;
  setExpandAdvanced: typeof setExpandAdvanced;
}

interface StateProps {
  location: Location | undefined;
  expandAdvanced: Object;
}

type Props = StateProps & DispatchProps;
const ShapeDiverAdvancedOptions = (props: Props) => {
  const { location, setAdvancedOptions, setExpandAdvanced } = props;
  const [value, setValue] = useState(0);
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

  const onChangeAccordion = (event: object, expanded: boolean) => {

    if (expanded) {
      setExpandAdvanced({ height: '140vh' })
      window.scroll({
        top: document.body.offsetHeight,
        left: 0,
        behavior: 'smooth'
      });
    } else {
      setExpandAdvanced({ height: '100vh' })
      window.scroll({
        top: 0,
        left: 0,
        behavior: 'smooth'
      });
    }
  }

  const handleChange = (event: any, newValue: any) => {
    setValue(newValue);
  };


  return (
    <Accordion className={classes.accordion} onChange={onChangeAccordion}>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        className={classes.accordionSummary}
        classes={{ content: classes.rootAccordionSummary, root: classes.rootAccordionSummary, expanded: classes.rootAccordionSummary }}
      >
        <Box fontSize={15} fontWeight='bold'>Advanced Settings</Box>
      </AccordionSummary>
      <AccordionDetails>

        <Grid item container>
          <Grid item xs={12} >
            <Tabs variant="fullWidth" value={value} onChange={handleChange} className={classes.rootTabs}>
              <Tab label="Floors" wrapped classes={{ root: classes.root }} />
              <Tab label="Density" wrapped classes={{ root: classes.root }} />
              <Tab label="Program" wrapped classes={{ root: classes.root }} />
              <Tab label="Roads" wrapped classes={{ root: classes.root }} />
            </Tabs>
          </Grid>
          <Grid item container xs={12} className={classes.details}>
            <Grid item xs={12} >
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

        </Grid>
      </AccordionDetails>
    </Accordion>
  );
}

const container = connect<StateProps, DispatchProps, {}, RootState>(
  (state: RootState) => ({
    location: state.domains.shapediver.location,
    expandAdvanced: state.domains.shapediver.expandAdvanced

  }),
  {
    setAdvancedOptions,
    setExpandAdvanced
  }
)(ShapeDiverAdvancedOptions);

export default container;
