import { connect } from 'react-redux';
import { RootState } from 'app/store';
import { RouteComponentProps, withRouter } from 'react-router-dom';
import { Box, Grid, makeStyles, Paper, Radio, RadioGroup } from '@material-ui/core'
import { getArea, setTerrain, setDensity, setUnitsNumberType } from 'domains/shapeDiver/slice';

import { high, low, medium, two, three, four, square, rectangle, custom } from 'assets'
import { highSelected, lowSelected, mediumSelected, twoSelected, threeSelected, fourSelected, squareSelected, rectangleSelected, customSelected } from 'assets'
import { ShapeDiverOptions } from '../models';
import { compose } from 'recompose';
import { Location } from 'domains/core/models';
import { ShapeDiverAdvancedOptions, ShapeDiverToolBarDetails } from '.';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useTheme } from '@material-ui/core/styles';



const styles = makeStyles(() => ({
  container: {
    borderRadius: '45px',
    scrollbarWidth: 'thin',
    scrollbarColor: 'red'
  },
  firstSubContainer: {
    padding: '10px 30px 0 30px',
  },
  subContainer: {
    padding: '10px 30px 0 30px',
  },
  buttons: {
    width: 43,
    height: 43
  },
  buttons_md: {
    width: 30,
    height: 30
  },
  regen: {
    width: 24,
    height: 24
  },
}));

interface StateProps {
  area: number;
  terrain: number;
  options: ShapeDiverOptions | undefined;
  location: Location | undefined;
}

interface DispatchProps {
  setTerrain: typeof setTerrain;
  setDensity: typeof setDensity;
  setUnitsNumberType: typeof setUnitsNumberType;
}

type Props = StateProps & DispatchProps & RouteComponentProps;
function ShapeDiverToolBarStep1(props: Props) {
  const { setTerrain, setDensity, location, setUnitsNumberType, terrain } = props;
  const classes = styles();
  const theme = useTheme();
  const smallScreen = useMediaQuery(theme.breakpoints.up("xl"));
  const bigFont = 15;
  const smallFont = 13;

  return (
    <Paper className={`${classes.container} controls-background`} style={{overflow: 'auto',height: smallScreen?'':'90%',scrollbarColor:'black'}}>
      <Grid container direction="column" style={{overflow:"y"}}>
        <ShapeDiverToolBarDetails />
        <Grid item container className={classes.firstSubContainer}>
          <Grid item xs={12}>
            <Box fontSize={smallScreen?bigFont:smallFont} fontWeight='bold'>Choose your lot shape</Box>
          </Grid>
          <RadioGroup>
            <Grid container justify="center">
              <Grid item xs={4}>
                <Radio
                  checked={terrain === 0}
                  onClick={() => setTerrain(0)}
                  checkedIcon={<img className={smallScreen?classes.buttons:classes.buttons_md} src={squareSelected} alt="1:1" />}
                  icon={<img className={smallScreen?classes.buttons:classes.buttons_md} src={square} alt="1:1" />}
                />
              </Grid>
              <Grid item xs={4}>
                <Radio
                  checked={terrain === 1}
                  onClick={() => setTerrain(1)}
                  checkedIcon={<img className={smallScreen?classes.buttons:classes.buttons_md} src={rectangleSelected} alt="2:1" />}
                  icon={<img className={smallScreen?classes.buttons:classes.buttons_md} src={rectangle} alt="2:1" />}
                />
              </Grid>
              <Grid item xs={4}>
                <Radio
                  checked={terrain === 2}
                  onClick={() => setTerrain(2)}
                  checkedIcon={<img className={smallScreen?classes.buttons:classes.buttons_md} src={customSelected} alt="import" />}
                  icon={<img className={smallScreen?classes.buttons:classes.buttons_md} src={custom} alt="import" />}
                />
              </Grid>
            </Grid>
          </RadioGroup>
        </Grid>
        <Grid item container className={classes.subContainer}>
          <Grid item xs={12}>
            <Box fontSize={smallScreen?bigFont:smallFont} fontWeight='bold'>Choose level of density</Box>
          </Grid>
          <RadioGroup>
            <Grid container justify="center">
              <Grid item xs={4}>
                <Radio
                  checked={location.density === 0}
                  onClick={() => setDensity(0)}
                  checkedIcon={<img className={smallScreen?classes.buttons:classes.buttons_md} src={lowSelected} alt="low" />}
                  icon={<img className={smallScreen?classes.buttons:classes.buttons_md} src={low} alt="low" />}
                />
              </Grid>
              <Grid item xs={4}>
                <Radio
                  checked={location.density === 1}
                  onClick={() => setDensity(1)}
                  checkedIcon={<img className={smallScreen?classes.buttons:classes.buttons_md} src={mediumSelected} alt="medium" />}
                  icon={<img className={smallScreen?classes.buttons:classes.buttons_md} src={medium} alt="medium" />}
                />
              </Grid>
              <Grid item xs={4}>
                <Radio
                  checked={location.density === 2}
                  onClick={() => setDensity(2)}
                  checkedIcon={<img className={smallScreen?classes.buttons:classes.buttons_md} src={highSelected} alt="high" />}
                  icon={<img className={smallScreen?classes.buttons:classes.buttons_md} src={high} alt="high" />}
                />
              </Grid>
            </Grid>
          </RadioGroup>
        </Grid>
        <Grid item container className={classes.subContainer}>
          <Grid item xs={12}>
            <Box fontSize={smallScreen?bigFont:smallFont} fontWeight='bold'>Choose number of unit types</Box>
          </Grid>
          <RadioGroup>
            <Grid container justify="center">
              <Grid item xs={4}>
                <Radio
                  checked={location.unitsNumberType === 0}
                  onClick={() => setUnitsNumberType(0)}
                  checkedIcon={<img className={smallScreen?classes.buttons:classes.buttons_md} src={twoSelected} alt="two" />}
                  icon={<img className={smallScreen?classes.buttons:classes.buttons_md} src={two} alt="two" />}
                />
              </Grid>
              <Grid item xs={4}>
                <Radio
                  checked={location.unitsNumberType === 1}
                  onClick={() => setUnitsNumberType(1)}
                  checkedIcon={<img className={smallScreen?classes.buttons:classes.buttons_md} src={threeSelected} alt="three" />}
                  icon={<img className={smallScreen?classes.buttons:classes.buttons_md} src={three} alt="three" />}
                />
              </Grid>
              <Grid item xs={4}>
                <Radio
                  checked={location.unitsNumberType === 2}
                  onClick={() => setUnitsNumberType(2)}
                  checkedIcon={<img className={smallScreen?classes.buttons:classes.buttons_md} src={fourSelected} alt="four" />}
                  icon={<img className={smallScreen?classes.buttons:classes.buttons_md} src={four} alt="four" />}
                />
              </Grid>
            </Grid>
          </RadioGroup>
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
      terrain: state.domains.shapediver.terrain,
    }),
    {
      setTerrain,
      setDensity,
      setUnitsNumberType
    }
  )
)(ShapeDiverToolBarStep1);

export default container;
