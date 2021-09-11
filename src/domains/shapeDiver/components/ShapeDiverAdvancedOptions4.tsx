import { Avatar, Box, Divider, Grid, makeStyles, Radio, RadioGroup, Theme } from '@material-ui/core';
import { RootState } from 'app/store';
import { Location } from 'domains/core/models';
import { connect } from 'react-redux';
import { setAdvancedOptions } from '../slice';
import { Fragment, useState } from 'react';

const styles = makeStyles((theme: Theme) => ({
  titlePanel: {
    marginBottom: 10,
    marginTop: 20
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
  bold: {
    fontWeight: 'bold'
  },
  gray: {
    color: '#A2A0A0'
  },
  right: {
    float: 'right',
    fontWeight: 'normal'
  },
  avatar:{
    backgroundColor: "#FFFFFF",
    color: "#707070"
  },
  avatarSelected:{
    color: "#000000",
    backgroundColor: "#FFFFFF",
  }
}));

interface StateProps {
  location: Location | undefined;
}

interface DispatchProps {
  setAdvancedOptions: typeof setAdvancedOptions;
}


type Props = StateProps & DispatchProps;
const ShapeDiverAdvancedOptions4 = (props: Props) => {
  const { location, setAdvancedOptions } = props;
  const classes = styles();

  // Temporal states
  const [housingMix, setHousingMix] = useState(0);




  return (
    <Fragment>
      <Grid item xs={12} style={{ margin: '10px 0' }}>
        <Box fontSize={12} fontWeight="bold" textAlign="start">Housing type <span className={classes.right}>Senior</span></Box>
      </Grid>
      <Grid item xs={12} style={{ margin: '10px 0' }}>
        <Box fontSize={12} textAlign="start"><span className={classes.bold}>s-</span><span className={classes.gray}>20%</span>
          <span className={classes.bold}> 1b-</span><span className={classes.gray}>20%</span>
          <span className={classes.bold}> 2b-</span><span className={classes.gray}>20%</span>
          <span className={classes.bold}> 3b-</span><span className={classes.gray}>20%</span>
          <span className={classes.bold}> 4b-</span><span className={classes.gray}>20%</span>
        </Box>
      </Grid>
      <Divider />
      <Grid item xs={12} className={classes.titlePanel}>
        <Box fontSize={18} fontWeight='bold' textAlign="start">Housing mix</Box>
      </Grid>
      <Grid item container xs={12} >
        <RadioGroup className={classes.radioStyle}>
          <Grid container spacing={6}>
            <Grid item xs={2}>
              <Radio
                checked={housingMix === 1}
                onClick={() => setHousingMix(1)}
                checkedIcon={<Avatar className={classes.avatarSelected}>1</Avatar>}
                icon={<Avatar className={classes.avatar}>1</Avatar>}
              />
            </Grid>
            <Grid item xs={2}>
              <Radio
                checked={housingMix === 2}
                onClick={() => setHousingMix(2)}
                checkedIcon={<Avatar className={classes.avatarSelected}>2</Avatar>}
                icon={<Avatar className={classes.avatar}>2</Avatar>}
              />
            </Grid>
            <Grid item xs={2}>
            <Radio
                checked={housingMix === 3}
                onClick={() => setHousingMix(3)}
                checkedIcon={<Avatar className={classes.avatarSelected}>3</Avatar>}
                icon={<Avatar className={classes.avatar}>3</Avatar>}
              />
            </Grid>
            <Grid item xs={2}>
            <Radio
                checked={housingMix === 4}
                onClick={() => setHousingMix(4)}
                checkedIcon={<Avatar className={classes.avatarSelected}>4</Avatar>}
                icon={<Avatar className={classes.avatar}>4</Avatar>}
              />
            </Grid>
            <Grid item xs={2}>
            <Radio
                checked={housingMix === 5}
                onClick={() => setHousingMix(5)}
                checkedIcon={<Avatar className={classes.avatarSelected}>5</Avatar>}
                icon={<Avatar className={classes.avatar}>5</Avatar>}
              />
            </Grid>
          </Grid>
        </RadioGroup>
      </Grid>
      <Grid item container xs={12} >
        <RadioGroup className={classes.radioStyle}>
          <Grid container spacing={6}>
            <Grid item xs={2}>
            <Radio
                checked={housingMix === 6}
                onClick={() => setHousingMix(6)}
                checkedIcon={<Avatar className={classes.avatarSelected}>6</Avatar>}
                icon={<Avatar className={classes.avatar}>6</Avatar>}
              />
            </Grid>
            <Grid item xs={2}>
            <Radio
                checked={housingMix === 7}
                onClick={() => setHousingMix(7)}
                checkedIcon={<Avatar className={classes.avatarSelected}>7</Avatar>}
                icon={<Avatar className={classes.avatar}>7</Avatar>}
              />
            </Grid>
            <Grid item xs={2}>
            <Radio
                checked={housingMix === 8}
                onClick={() => setHousingMix(8)}
                checkedIcon={<Avatar className={classes.avatarSelected}>8</Avatar>}
                icon={<Avatar className={classes.avatar}>8</Avatar>}
              />
            </Grid>
            <Grid item xs={2}>
            <Radio
                checked={housingMix === 9}
                onClick={() => setHousingMix(9)}
                checkedIcon={<Avatar className={classes.avatarSelected}>9</Avatar>}
                icon={<Avatar className={classes.avatar}>9</Avatar>}
              />
            </Grid>
            <Grid item xs={2}>
            <Radio
                checked={housingMix === 10}
                onClick={() => setHousingMix(10)}
                checkedIcon={<Avatar className={classes.avatarSelected}>10</Avatar>}
                icon={<Avatar className={classes.avatar}>10</Avatar>}
              />
            </Grid>
          </Grid>
        </RadioGroup>
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
)(ShapeDiverAdvancedOptions4);

export default container;

