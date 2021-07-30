import { connect } from 'react-redux';
import { RootState } from 'app/store';
import { RouteComponentProps, withRouter } from 'react-router-dom';
import { Box, Grid, makeStyles, Paper, Radio, RadioGroup, Container } from '@material-ui/core'
import { getArea, setWindow, setFacadeDirection } from 'domains/shapeDiver/slice';

import { fifty, sixty, seventy, horizontal, vertical } from 'assets'
import { fiftySelected, sixtySelected, seventySelected, verticalSelected, horizontalSelected } from 'assets'
import { ShapeDiverOptions } from '../models';
import { compose } from 'recompose';
import { Location } from 'domains/core/models';
import { ShapeDiverAdvancedOptions, ShapeDiverToolBarDetails } from 'domains/shapeDiver/components';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useTheme } from '@material-ui/core/styles';

const styles = makeStyles((theme) => ({
  container: {
    borderRadius: '45px'
  },
  firstSubContainer: {
    padding: '5px 30px 0 30px',
  },
  subContainer: {
    padding: '5px 30px 0 30px',
  },
  buttons: {
    width: 46,
    height: 46
  },
  buttons_md: {
    width: 30,
    height: 30
  },
  carrousel: {
    [theme.breakpoints.down('sm')]: {
      height: '9vh',
      maxHeight: '9vh',
      overflowX: 'auto',
    },
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
}

type Props = StateProps & DispatchProps & RouteComponentProps;
function ShapeDiverToolBarStep2(props: Props) {
  const { setWindow, setFacadeDirection, location, facadeDirection } = props;
  const classes = styles();
  const theme = useTheme();
  const smallScreen = useMediaQuery(theme.breakpoints.up("xl"));
  const bigFont = 15;
  const smallFont = 13;

  return (
    <Paper className={`${classes.container} controls-background`} >
      <Grid container direction="column" >
        <ShapeDiverToolBarDetails />
        <Container className={classes.carrousel}>
          <Grid item container className={classes.firstSubContainer}>
            <Grid item xs={12}>
              <Box fontSize={smallScreen?bigFont:smallFont} fontWeight='bold'>Choose your window size</Box>
            </Grid>
            <RadioGroup>
              <Grid container justify="center">
                <Grid item xs={4}>
                  <Radio
                    checked={location.windowPercentage === 0}
                    onClick={() => setWindow(0)}
                    checkedIcon={<img className={smallScreen?classes.buttons:classes.buttons_md} src={fiftySelected} alt="50" />}
                    icon={<img className={smallScreen?classes.buttons:classes.buttons_md} src={fifty} alt="50" />}
                  />
                </Grid>
                <Grid item xs={4}>
                  <Radio
                    checked={location.windowPercentage === 1}
                    onClick={() => setWindow(1)}
                    checkedIcon={<img className={smallScreen?classes.buttons:classes.buttons_md} src={sixtySelected} alt="60" />}
                    icon={<img className={smallScreen?classes.buttons:classes.buttons_md} src={sixty} alt="60" />}
                  />
                </Grid>
                <Grid item xs={4}>
                  <Radio
                    checked={location.windowPercentage === 2}
                    onClick={() => setWindow(2)}
                    checkedIcon={<img className={smallScreen?classes.buttons:classes.buttons_md} src={seventySelected} alt="70" />}
                    icon={<img className={smallScreen?classes.buttons:classes.buttons_md} src={seventy} alt="70" />}
                  />
                </Grid>
              </Grid>
            </RadioGroup>
          </Grid>
          <Grid item container className={classes.subContainer}>
            <Grid item xs={12}>
              <Box fontSize={smallScreen?bigFont:smallFont} fontWeight='bold'>Choose facade direction</Box>
            </Grid>
            <RadioGroup>
              <Grid container alignItems="center">
                <Grid item xs={6}>
                  <Radio
                    checked={facadeDirection === 0}
                    onClick={() => setFacadeDirection(0)}
                    checkedIcon={<img className={smallScreen?classes.buttons:classes.buttons_md} src={horizontalSelected} alt="horizontal" />}
                    icon={<img className={smallScreen?classes.buttons:classes.buttons_md} src={horizontal} alt="horizontal" />}
                  />
                </Grid>
                <Grid item xs={6}>
                  <Radio
                    checked={facadeDirection === 1}
                    onClick={() => setFacadeDirection(1)}
                    checkedIcon={<img className={smallScreen?classes.buttons:classes.buttons_md} src={verticalSelected} alt="vertical" />}
                    icon={<img className={smallScreen?classes.buttons:classes.buttons_md} src={vertical} alt="vertical" />}
                  />
                </Grid>
              </Grid>
            </RadioGroup>
          </Grid>
        </Container>
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
      facadeDirection: state.domains.shapediver.facadeDirection,
    }),
    {
      setWindow,
      setFacadeDirection,
    }
  )
)(ShapeDiverToolBarStep2);

export default container;
