import React, { useState } from 'react';
import { Grid, Box, makeStyles, Accordion, AccordionSummary, AccordionDetails, Tabs, Tab, Theme } from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { Location } from 'domains/core/models';
import { connect } from 'react-redux';
import { setAdvancedOptions, setExpandAdvanced } from 'domains/shapeDiver/slice';

import { RootState } from 'app/store';
import { TabPanel } from 'domains/common/components';
import { ShapeDiverAdvancedOptions1, ShapeDiverAdvancedOptions2, ShapeDiverAdvancedOptions3, ShapeDiverAdvancedOptions4 } from '.';


const styles = makeStyles((theme: Theme) => ({
  accordion: {
    width: '100%',
    background: 'transparent',
    padding: '0 0px'
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
    margin: '0 !important',
    minHeight: '0 !important',
    '&$expanded': {
      minHeight: '0 !important',
      margin: '0 !important'
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
  const { setExpandAdvanced } = props;
  const [value, setValue] = useState(0);
  const classes = styles();



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
    <Accordion className={classes.accordion} onChange={onChangeAccordion} classes={{ root: classes.rootAccordionSummary, expanded: classes.rootAccordionSummary }}>
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
              <Tab label="Housing" wrapped classes={{ root: classes.root }} />
              <Tab label="Free space" wrapped classes={{ root: classes.root }} />
              <Tab label="Roads" wrapped classes={{ root: classes.root }} />
            </Tabs>
          </Grid>
          <Grid item container xs={12} className={classes.details}>
            <TabPanel value={value} index={0} >
              <ShapeDiverAdvancedOptions1 />
            </TabPanel>
            <TabPanel value={value} index={1} >
              <ShapeDiverAdvancedOptions4 />
            </TabPanel>
            <TabPanel value={value} index={2} >
              <ShapeDiverAdvancedOptions2 />
            </TabPanel>
            <TabPanel value={value} index={3} >
              <ShapeDiverAdvancedOptions3 />
            </TabPanel>
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



