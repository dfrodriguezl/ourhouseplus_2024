import React from 'react';
import { connect } from 'react-redux';
import { RootState } from 'app/store';
import { RouteComponentProps, withRouter } from 'react-router-dom';
import { Box, Grid, makeStyles, MenuItem, Paper, Radio, RadioGroup, Select } from '@material-ui/core'
import { getArea, setFlatSize, setRoomType, setFloorSelection } from 'domains/shapeDiver/slice';

import { smallFlat, mediumFlat, largeFlat, close, open, work } from 'assets'
import { smallFlatSelected, mediumFlatSelected, largeFlatSelected, closeSelected, openSelected, workSelected } from 'assets'
import { ShapeDiverOptions } from '../models';
import { compose } from 'recompose';
import { Location } from 'domains/core/models';
import { ShapeDiverAdvancedOptions, ShapeDiverToolBarDetails } from 'domains/shapeDiver/components';
import _ from 'lodash';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useTheme } from '@material-ui/core/styles';

const styles = makeStyles(() => ({
  container: {
    borderRadius: '45px'
  },
  firstSubContainer: {
    padding: '10px 30px 0 30px',
  },
  subContainer: {
    padding: '10px 30px 0 30px',
  },
  buttons: {
    width: 46,
    height: 46
  },
  floorStyle: {
    paddingTop: 5,
    fontSize: 15,
  },
  floorMenuStyle: {
    fontSize: 15,
    maxHeight: 200
  },
  buttons_md: {
    width: 30,
    height: 30
  },
}));

interface StateProps {
  area: number;
  options: ShapeDiverOptions | undefined;
  location: Location | undefined
  roomType: number;
  floorSelectionOptions: string[];
  floorSelection: number;
}

interface DispatchProps {
  setFlatSize: typeof setFlatSize;
  setRoomType: typeof setRoomType;
  setFloorSelection: typeof setFloorSelection;
}

type Props = StateProps & DispatchProps & RouteComponentProps;
function ShapeDiverToolBarStep3(props: Props) {
  const { location, setFlatSize, roomType, setRoomType, floorSelectionOptions, setFloorSelection, floorSelection } = props;
  const classes = styles();
  const theme = useTheme();
  const smallScreen = useMediaQuery(theme.breakpoints.up("xl"));
  const bigFont = 15;
  const smallFont = 13;


  return (
    <Paper className={`${classes.container} controls-background`} style={{overflow: 'auto',height: smallScreen?'':'90%',scrollbarColor:'black'}}>
      <Grid container direction="column" >
        <ShapeDiverToolBarDetails />
        <Grid item container className={classes.firstSubContainer}>
          <Grid item xs={12}>
            <Box fontSize={smallScreen?bigFont:smallFont} fontWeight='bold'>Choose your flat size</Box>
          </Grid>
          <RadioGroup>
            <Grid container justify="center">
              <Grid item xs={4}>
                <Radio
                  checked={location.flatSize === 0}
                  onClick={() => setFlatSize(0)}
                  checkedIcon={<img className={smallScreen?classes.buttons:classes.buttons_md}src={smallFlatSelected} alt="50" />}
                  icon={<img className={smallScreen?classes.buttons:classes.buttons_md} src={smallFlat} alt="50" />}
                />
              </Grid>
              <Grid item xs={4}>
                <Radio
                  checked={location.flatSize === 1}
                  onClick={() => setFlatSize(1)}
                  checkedIcon={<img className={smallScreen?classes.buttons:classes.buttons_md} src={mediumFlatSelected} alt="60" />}
                  icon={<img className={smallScreen?classes.buttons:classes.buttons_md} src={mediumFlat} alt="60" />}
                />
              </Grid>
              <Grid item xs={4}>
                <Radio
                  checked={location.flatSize === 2}
                  onClick={() => setFlatSize(2)}
                  checkedIcon={<img className={smallScreen?classes.buttons:classes.buttons_md} src={largeFlatSelected} alt="70" />}
                  icon={<img className={smallScreen?classes.buttons:classes.buttons_md} src={largeFlat} alt="70" />}
                />
              </Grid>
            </Grid>
          </RadioGroup>
        </Grid>
        <Grid item container className={classes.subContainer}>
          <Grid item xs={12}>
            <Box fontSize={smallScreen?bigFont:smallFont} fontWeight='bold'>Choose room type</Box>
          </Grid>
          <RadioGroup>
            <Grid container alignItems="center">
              <Grid item xs={4}>
                <Radio
                  checked={roomType === 0}
                  onClick={() => setRoomType(0)}
                  checkedIcon={<img className={smallScreen?classes.buttons:classes.buttons_md} src={closeSelected} alt="close" />}
                  icon={<img className={smallScreen?classes.buttons:classes.buttons_md} src={close} alt="close" />}
                />
              </Grid>
              <Grid item xs={4}>
                <Radio
                  checked={roomType === 1}
                  onClick={() => setRoomType(1)}
                  checkedIcon={<img className={smallScreen?classes.buttons:classes.buttons_md} src={openSelected} alt="open" />}
                  icon={<img className={smallScreen?classes.buttons:classes.buttons_md} src={open} alt="open" />}
                />
              </Grid>
              <Grid item xs={4}>
                <Radio
                  checked={roomType === 2}
                  onClick={() => setRoomType(2)}
                  checkedIcon={<img className={smallScreen?classes.buttons:classes.buttons_md} src={workSelected} alt="work" />}
                  icon={<img className={smallScreen?classes.buttons:classes.buttons_md} src={work} alt="work" />}
                />
              </Grid>
            </Grid>
          </RadioGroup>
        </Grid>
        <Grid item container className={classes.subContainer}>
          <Grid item xs={12}>
            <Box fontSize={smallScreen?bigFont:smallFont} fontWeight='bold'>Choose floor</Box>
          </Grid>
          <Grid item xs={12}>
            <Select
              value={floorSelection}
              onChange={(event: any) => setFloorSelection(event.target.value)}
              className={classes.floorStyle}
              MenuProps={{ classes: { paper: classes.floorMenuStyle } }}
              fullWidth
            >
              {
                _.map(floorSelectionOptions, (floor, index) => <MenuItem key={index} value={index} className={classes.floorMenuStyle}>{floor}</MenuItem>)
              }
            </Select>
          </Grid>
        </Grid>

        <ShapeDiverAdvancedOptions />

      </Grid>
    </Paper>
  )
}
const container = compose<Props, {}>(
  withRouter,
  connect<StateProps, DispatchProps, {}, RootState>(
    (state: RootState) => ({
      area: getArea(state),
      options: state.domains.shapediver.options,
      location: state.domains.shapediver.location,
      roomType: state.domains.shapediver.roomType,
      floorSelectionOptions: state.domains.shapediver.floorSelectionOptions,
      floorSelection: state.domains.shapediver.floorSelection,
    }),
    {
      setFlatSize,
      setRoomType,
      setFloorSelection
    }
  )
)(ShapeDiverToolBarStep3);

export default container;
