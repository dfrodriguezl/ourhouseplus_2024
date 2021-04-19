import { connect } from 'react-redux';
import { RootState } from 'app/store';
import { RouteComponentProps, withRouter } from 'react-router-dom';
import { Box, Grid, IconButton, makeStyles, Paper, Radio, RadioGroup } from '@material-ui/core'
import { getArea, setFlatSize, setRegen, setRoomType } from 'domains/shapeDiver/slice';

import { smallFlat, mediumFlat, largeFlat, regenIcon, close, open, work } from 'assets'
import { smallFlatSelected, mediumFlatSelected, largeFlatSelected, closeSelected, openSelected, workSelected } from 'assets'
import { ShapeDiverOptions } from '../models';
import { compose } from 'recompose';
import { Location } from 'domains/core/models';
import { ShapeDiverAdvancedOptions, ShapeDiverSteps, ShapeDiverToolBarDetails } from 'domains/shapeDiver/components';

const styles = makeStyles(() => ({
  firstSubContainer: {
    padding: '20px 20px 0 20px',
  },
  subContainer: {
    padding: '10px 20px 0 20px',
  },
  buttons: {
    width: 32,
    height: 32
  },
  regen: {
    width: 24,
    height: 24
  }
}));

interface StateProps {
  area: number;
  options: ShapeDiverOptions | undefined;
  location: Location | undefined
  roomType: number;
}

interface DispatchProps {
  setRegen: typeof setRegen;
  setFlatSize: typeof setFlatSize;
  setRoomType: typeof setRoomType;
}

type Props = StateProps & DispatchProps & RouteComponentProps;
function ShapeDiverToolBarStep3(props: Props) {
  const { setRegen, location, setFlatSize, roomType, setRoomType } = props;
  const classes = styles();

  return (
    <Paper>
      <Grid container direction="column" >
        <ShapeDiverToolBarDetails />
        <Grid item container className={classes.firstSubContainer}>
          <Grid item xs={12}>
            <Box fontSize={12} fontWeight='bold' textAlign="end">Flat Size</Box>
            <Box fontSize={10} textAlign="end">choose your flat size</Box>
          </Grid>
          <RadioGroup>
            <Grid container justify="center">
              <Grid item xs={4}>
                <Radio
                  checked={location.flatSize === 0}
                  onClick={() => setFlatSize(0)}
                  checkedIcon={<img className={classes.buttons} src={smallFlatSelected} alt="50" />}
                  icon={<img className={classes.buttons} src={smallFlat} alt="50" />}
                />
              </Grid>
              <Grid item xs={4}>
                <Radio
                  checked={location.flatSize === 1}
                  onClick={() => setFlatSize(1)}
                  checkedIcon={<img className={classes.buttons} src={mediumFlatSelected} alt="60" />}
                  icon={<img className={classes.buttons} src={mediumFlat} alt="60" />}
                />
              </Grid>
              <Grid item xs={4}>
                <Radio
                  checked={location.flatSize === 2}
                  onClick={() => setFlatSize(2)}
                  checkedIcon={<img className={classes.buttons} src={largeFlatSelected} alt="70" />}
                  icon={<img className={classes.buttons} src={largeFlat} alt="70" />}
                />
              </Grid>
            </Grid>
          </RadioGroup>
        </Grid>
        <Grid item container className={classes.subContainer}>
          <Grid item xs={12}>
            <Box fontSize={12} fontWeight='bold' textAlign="end">Room Type</Box>
            <Box fontSize={10} textAlign="end">choose room type</Box>
          </Grid>
          <RadioGroup>
            <Grid container alignItems="center">
              <Grid item xs={4}>
                <Radio
                  checked={roomType === 0}
                  onClick={() => setRoomType(0)}
                  checkedIcon={<img className={classes.buttons} src={closeSelected} alt="close" />}
                  icon={<img className={classes.buttons} src={close} alt="close" />}
                />
              </Grid>
              <Grid item xs={4}>
                <Radio
                  checked={roomType === 1}
                  onClick={() => setRoomType(1)}
                  checkedIcon={<img className={classes.buttons} src={openSelected} alt="open" />}
                  icon={<img className={classes.buttons} src={open} alt="open" />}
                />
              </Grid>
              <Grid item xs={4}>
                <Radio
                  checked={roomType === 2}
                  onClick={() => setRoomType(2)}
                  checkedIcon={<img className={classes.buttons} src={workSelected} alt="work" />}
                  icon={<img className={classes.buttons} src={work} alt="work" />}
                />
              </Grid>
            </Grid>
          </RadioGroup>
        </Grid>

        <ShapeDiverAdvancedOptions />

        <Grid item xs={2}>
          <IconButton onClick={() => setRegen()}>
            <img className={classes.regen} src={regenIcon} alt="regen" />
          </IconButton>
        </Grid>

        <ShapeDiverSteps />

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
    }),
    {
      setRegen,
      setFlatSize,
      setRoomType
    }
  )
)(ShapeDiverToolBarStep3);

export default container;
