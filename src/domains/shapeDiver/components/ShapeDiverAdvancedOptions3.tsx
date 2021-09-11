import { Box, Grid, makeStyles, Radio, RadioGroup, Slider, Theme } from '@material-ui/core';
import { RootState } from 'app/store';
import { Location } from 'domains/core/models';
import { connect } from 'react-redux';
import { setAdvancedOptions } from '../slice';
import RemoveIcon from '@material-ui/icons/Remove';
import AddIcon from '@material-ui/icons/Add';
import { Fragment, useState } from 'react';
import { squareSelected, rectangleSelected, square, rectangle, fiftySelected, fifty, sixty, sixtySelected, seventy, seventySelected } from 'assets'

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
  hover: {
    '&:hover': {
      cursor: 'pointer'
    }
  },
  radioStyle: {
    width: '100%'
  },
  buttons: {
    width: 43,
    height: 43
  },
}));

interface StateProps {
  location: Location | undefined;
}

interface DispatchProps {
  setAdvancedOptions: typeof setAdvancedOptions;
}


type Props = StateProps & DispatchProps;
const ShapeDiverAdvancedOptions3 = (props: Props) => {
  const { location, setAdvancedOptions } = props;
  const classes = styles();

  // Temporal states
  const [mainAxisDirection, setMainAxisDirection] = useState(0);
  const [blockSize, setBlockSize] = useState(0);
  const [roadsWidth, setRoadsWidth] = useState(0);




  const updateMainAxisDirection = (_: any, value: number | number[]) => {
    setMainAxisDirection(Number(value));
  }


  return (
    <Fragment>
      <Grid item xs={12} className={classes.titlePanel}>
        <Box fontSize={18} fontWeight='bold' textAlign="start">Roads and direction</Box>
      </Grid>
      <Grid item xs={12} style={{ margin: '10px 0' }}>
        <Box fontSize={12} fontWeight="bold" textAlign="start">Main axis direction</Box>
      </Grid>
      <Grid item container direction="row" xs={12}>
        <Grid xs={9} container spacing={2}>
          <Grid item>
            <RemoveIcon onClick={() => setMainAxisDirection(mainAxisDirection - 1)} className={classes.hover} />
          </Grid>
          <Grid item xs >
            <Slider
              value={mainAxisDirection ? mainAxisDirection : 0}
              aria-labelledby="discrete-slider"
              valueLabelDisplay="auto"
              step={1}
              min={1}
              max={50}
              onChange={updateMainAxisDirection}
            />
          </Grid>
          <Grid item>
            <AddIcon onClick={() => setMainAxisDirection(mainAxisDirection + 1)} className={classes.hover} />
          </Grid>

        </Grid>
        <Grid xs={1} />
        <Grid item container xs={2} justify="flex-end">
          <input type="text" value={mainAxisDirection ? mainAxisDirection : 0} className={classes.inputNumber} disabled />
        </Grid>

      </Grid>

      <Grid item xs={12} style={{ margin: '10px 0' }}>
        <Box fontSize={12} fontWeight="bold" textAlign="start">Block size</Box>
      </Grid>
      <RadioGroup className={classes.radioStyle}>
        <Grid container justify="center">
          <Grid item xs={4}>
            <Radio
              checked={blockSize === 0}
              onClick={() => setBlockSize(0)}
              checkedIcon={<img className={classes.buttons} src={squareSelected} alt="1:1" />}
              icon={<img className={classes.buttons} src={square} alt="1:1" />}
            />
          </Grid>
          <Grid item xs={4}>
            <Radio
              checked={blockSize === 1}
              onClick={() => setBlockSize(1)}
              checkedIcon={<img className={classes.buttons} src={rectangleSelected} alt="1:1" />}
              icon={<img className={classes.buttons} src={rectangle} alt="1:1" />}
            />
          </Grid>
        </Grid>
      </RadioGroup>

      <Grid item xs={12} style={{ margin: '10px 0' }}>
        <Box fontSize={12} fontWeight="bold" textAlign="start">Roads width</Box>
      </Grid>
      <RadioGroup className={classes.radioStyle}>
        <Grid container justify="center">
          <Grid item xs={4}>
            <Radio
              checked={roadsWidth === 0}
              onClick={() => setRoadsWidth(0)}
              checkedIcon={<img className={classes.buttons} src={fiftySelected} alt="1:1" />}
              icon={<img className={classes.buttons} src={fifty} alt="1:1" />}
            />
          </Grid>
          <Grid item xs={4}>
            <Radio
              checked={roadsWidth === 1}
              onClick={() => setRoadsWidth(1)}
              checkedIcon={<img className={classes.buttons} src={sixtySelected} alt="1:1" />}
              icon={<img className={classes.buttons} src={sixty} alt="1:1" />}
            />
          </Grid>
          <Grid item xs={4}>
            <Radio
              checked={roadsWidth === 2}
              onClick={() => setRoadsWidth(2)}
              checkedIcon={<img className={classes.buttons} src={seventySelected} alt="1:1" />}
              icon={<img className={classes.buttons} src={seventy} alt="1:1" />}
            />
          </Grid>
        </Grid>
      </RadioGroup>
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
)(ShapeDiverAdvancedOptions3);

export default container;