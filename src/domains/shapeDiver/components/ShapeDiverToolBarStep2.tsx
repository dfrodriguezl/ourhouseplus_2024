import { connect } from 'react-redux';
import { RootState } from 'app/store';
import { RouteComponentProps, withRouter } from 'react-router-dom';
import { Box, Grid, IconButton, makeStyles, Paper, Radio, RadioGroup } from '@material-ui/core'
import { getArea, setWindow, setFacadeDirection, setRegen } from 'domains/shapeDiver/slice';

import { fifty, sixty, seventy, regenIcon, horizontal, vertical } from 'assets'
import { fiftySelected, sixtySelected, seventySelected, verticalSelected, horizontalSelected } from 'assets'
import { ShapeDiverOptions } from '../models';
import { compose } from 'recompose';
import { Location } from 'domains/core/models';
import { ShapeDiverAdvancedOptions, ShapeDiverSteps, ShapeDiverToolBarDetails } from 'domains/shapeDiver/components';

const styles = makeStyles(() => ({
  container: {
    padding: 20,
  },
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
  facadeDirection: number;
}

interface DispatchProps {
  setWindow: typeof setWindow;
  setFacadeDirection: typeof setFacadeDirection;
  setRegen: typeof setRegen;
}

type Props = StateProps & DispatchProps & RouteComponentProps;
function ShapeDiverToolBarStep2(props: Props) {
  const { setWindow, setFacadeDirection, setRegen, location, facadeDirection } = props;
  const classes = styles();

  return (
    <Paper>
      <Grid container direction="column" >
        <ShapeDiverToolBarDetails />
        <Grid item container className={classes.firstSubContainer}>
          <Grid item xs={12}>
            <Box fontSize={12} fontWeight='bold' textAlign="end">Window Percentage</Box>
            <Box fontSize={10} textAlign="end">choose your window size</Box>
          </Grid>
          <RadioGroup>
            <Grid container justify="center">
              <Grid item xs={4}>
                <Radio
                  checked={location.windowPercentage === 0}
                  onClick={() => setWindow(0)}
                  checkedIcon={<img className={classes.buttons} src={fiftySelected} alt="50" />}
                  icon={<img className={classes.buttons} src={fifty} alt="50" />}
                />
              </Grid>
              <Grid item xs={4}>
                <Radio
                  checked={location.windowPercentage === 1}
                  onClick={() => setWindow(1)}
                  checkedIcon={<img className={classes.buttons} src={sixtySelected} alt="60" />}
                  icon={<img className={classes.buttons} src={sixty} alt="60" />}
                />
              </Grid>
              <Grid item xs={4}>
                <Radio
                  checked={location.windowPercentage === 2}
                  onClick={() => setWindow(2)}
                  checkedIcon={<img className={classes.buttons} src={seventySelected} alt="70" />}
                  icon={<img className={classes.buttons} src={seventy} alt="70" />}
                />
              </Grid>
            </Grid>
          </RadioGroup>
        </Grid>
        <Grid item container className={classes.subContainer}>
          <Grid item xs={12}>
            <Box fontSize={12} fontWeight='bold' textAlign="end">Facade Direction</Box>
            <Box fontSize={10} textAlign="end">choose facade direction</Box>
          </Grid>
          <RadioGroup>
            <Grid container alignItems="center">
              <Grid item xs={6}>
                <Radio
                  checked={facadeDirection === 0}
                  onClick={() => setFacadeDirection(0)}
                  checkedIcon={<img className={classes.buttons} src={horizontalSelected} alt="horizontal" />}
                  icon={<img className={classes.buttons} src={horizontal} alt="horizontal" />}
                />
              </Grid>
              <Grid item xs={6}>
                <Radio
                  checked={facadeDirection === 1}
                  onClick={() => setFacadeDirection(1)}
                  checkedIcon={<img className={classes.buttons} src={verticalSelected} alt="vertical" />}
                  icon={<img className={classes.buttons} src={vertical} alt="vertical" />}
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
      facadeDirection: state.domains.shapediver.facadeDirection,
    }),
    {
      setWindow,
      setFacadeDirection,
      setRegen,
    }
  )
)(ShapeDiverToolBarStep2);

export default container;
