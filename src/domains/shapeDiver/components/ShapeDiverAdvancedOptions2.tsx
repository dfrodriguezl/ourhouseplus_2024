import { Box, Grid, makeStyles, Slider, Theme } from '@material-ui/core';
import { RootState } from 'app/store';
import { TabPanel } from 'domains/common/components';
import { Location } from 'domains/core/models';
import { connect } from 'react-redux';
import { setAdvancedOptions } from '../slice';
import RemoveIcon from '@material-ui/icons/Remove';
import AddIcon from '@material-ui/icons/Add';
import { Fragment, useState } from 'react';

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
  location: Location | undefined;
}

interface DispatchProps {
  setAdvancedOptions: typeof setAdvancedOptions;
}


type Props = StateProps & DispatchProps;
const ShapeDiverAdvancedOptions2 = (props: Props) => {
  const { location, setAdvancedOptions } = props;
  const classes = styles();

  // Temporal states
  const [groundFloorFreeSpace, setGroundFloorFreeSpace] = useState(0);
  const [multipleFloorFreeSpace, setMultipleFloorFreeSpace] = useState(0);

  const updateGroundFloorFreeSpace = (_: any, value: number | number[]) => {
    setGroundFloorFreeSpace(Number(value));
  }

  const updateMultipleFloorFreeSpace = (_: any, value: number | number[]) => {
    setMultipleFloorFreeSpace(Number(value));
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
            <RemoveIcon onClick={() => setGroundFloorFreeSpace(groundFloorFreeSpace - 1)} className={classes.hover} />
          </Grid>
          <Grid item xs >
            <Slider
              value={groundFloorFreeSpace ? groundFloorFreeSpace : 0}
              aria-labelledby="discrete-slider"
              valueLabelDisplay="auto"
              step={1}
              min={1}
              max={50}
              onChange={updateGroundFloorFreeSpace}
            />
          </Grid>
          <Grid item>
            <AddIcon onClick={() => setGroundFloorFreeSpace(groundFloorFreeSpace + 1)} className={classes.hover} />
          </Grid>
        </Grid>
        <Grid xs={1} />
        <Grid item container xs={2} justify="flex-end">
          <input type="text" value={groundFloorFreeSpace ? groundFloorFreeSpace : 0} className={classes.inputNumber} disabled />
        </Grid>
      </Grid>
      <Grid item xs={12} style={{ margin: '10px 0' }}>
        <Box fontSize={12} fontWeight="bold" textAlign="start">Add multiple floors (tower) free space </Box>
      </Grid>
      <Grid item container direction="row" xs={12}>
        <Grid xs={9} container spacing={2}>
          <Grid item>
            <RemoveIcon onClick={() => setMultipleFloorFreeSpace(multipleFloorFreeSpace - 1)} className={classes.hover} />
          </Grid>
          <Grid item xs >
            <Slider
              value={multipleFloorFreeSpace ? multipleFloorFreeSpace : 0}
              aria-labelledby="discrete-slider"
              valueLabelDisplay="auto"
              step={1}
              min={1}
              max={50}
              onChange={updateMultipleFloorFreeSpace}
            />
          </Grid>
          <Grid item>
            <AddIcon onClick={() => setMultipleFloorFreeSpace(multipleFloorFreeSpace + 1)} className={classes.hover} />
          </Grid>
        </Grid>
        <Grid xs={1} />
        <Grid item container xs={2} justify="flex-end">
          <input type="text" value={multipleFloorFreeSpace ? multipleFloorFreeSpace : 0} className={classes.inputNumber} disabled />
        </Grid>
      </Grid>
    </Fragment>
  )
}

const container = connect<StateProps, DispatchProps, {}, RootState>(
  (state: RootState) => ({
    location: state.domains.shapediver.location
  }),
  {
    setAdvancedOptions
  }
)(ShapeDiverAdvancedOptions2);

export default container;