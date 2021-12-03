import { Avatar, Box, Divider, Grid, makeStyles, Radio, RadioGroup, Theme, Switch } from '@material-ui/core';
import { RootState } from 'app/store';
import { LocationSimple } from 'domains/core/models';
import { connect } from 'react-redux';
import { setAdvancedOptions } from '../slice';
import { Fragment } from 'react';
import { useHistory } from 'react-router-dom';

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
  radioStyle: {
    width: '100%'
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
  avatar: {
    backgroundColor: "#FFFFFF",
    color: "#707070"
  },
  avatarSelected: {
    color: "#000000",
    backgroundColor: "#FFFFFF",
  },
  fontSub: {
    fontSize: 10
  },
  toggle: {
    '& .Mui-checked': {
      color: '#E33650'
    },
    '& .Mui-checked + .MuiSwitch-track': {
      backgroundColor: '#FF647B'
    }
  },
}));

interface StateProps {
  location: LocationSimple | undefined;
  densityGeneral: string;
}

interface DispatchProps {
  setAdvancedOptions: typeof setAdvancedOptions;
}


type Props = StateProps & DispatchProps;
const ShapeDiverAdvancedOptions4 = (props: Props) => {
  const { location, setAdvancedOptions } = props;
  const history = useHistory();
  const classes = styles();

  const updateTypology = (value: number) => {
    if (!location) return;
    setAdvancedOptions({
      maxPriFloors: location!.maxPriFloors,
      maxSecFloors: location!.maxSecFloors,
      streetFloors: location!.streetFloors,
      typologies: Number(value),
      emptySpaceSelection: location!.emptySpaceSelection,
      undefinedTower: location!.undefinedTower,
      streetDensity: location!.streetDensity,
      islandSpacings: location!.islandSpacings,
      axisSelection: location!.axisSelection,
      floorsAlignment: location!.floorsAlignment,
      unitsOrganization: location!.unitsOrganization,
    });

  }

  const updateUnitsOrganization = (value: boolean) => {
    if (!location) return;
    setAdvancedOptions({
      maxPriFloors: location!.maxPriFloors,
      maxSecFloors: location!.maxSecFloors,
      streetFloors: location!.streetFloors,
      typologies: location!.typologies,
      emptySpaceSelection: location!.emptySpaceSelection,
      undefinedTower: location!.undefinedTower,
      streetDensity: location!.streetDensity,
      islandSpacings: location!.islandSpacings,
      axisSelection: location!.axisSelection,
      floorsAlignment: location!.floorsAlignment,
      unitsOrganization: value ? 1 : 0,
    });
  }




  return (
    <Fragment>
      <Grid item xs={12} style={{ margin: '10px 0' }}>
        <Box fontSize={12} fontWeight="bold" textAlign="start">Housing type
        </Box>
      </Grid>
      <Grid item xs={12} style={{ margin: '10px 0' }}>
        <Box fontSize={12} textAlign="start">
          {location!.typologies === 0 ?
            "Students" :
            location!.typologies === 1 ?
              "Nuclear family" :
              location!.typologies === 2 ?
                "Senior family" : null}
        </Box>
      </Grid>
      <Divider />
      <Grid item xs={12} className={classes.titlePanel}>
        <Box fontSize={18} fontWeight='bold' textAlign="start">Housing mix</Box>
      </Grid>
      <Grid item xs={12}>
        <Box fontSize={12} textAlign="start">Choose units percentage mix</Box>
      </Grid>
      <Grid item container xs={12} >
        <RadioGroup className={classes.radioStyle}>
          <Grid container spacing={6}>
            <Grid item xs={2}>
              <Radio
                checked={location!.typologies === 0}
                onClick={() => updateTypology(0)}
                checkedIcon={<Avatar className={classes.avatarSelected}>1</Avatar>}
                icon={<Avatar className={classes.avatar}>1</Avatar>}
              />
            </Grid>
            <Grid item xs={2}>
              <Radio
                checked={location!.typologies === 1}
                onClick={() => updateTypology(1)}
                checkedIcon={<Avatar className={classes.avatarSelected}>2</Avatar>}
                icon={<Avatar className={classes.avatar}>2</Avatar>}
              />
            </Grid>
            <Grid item xs={2}>
              <Radio
                checked={location!.typologies === 2}
                onClick={() => updateTypology(2)}
                checkedIcon={<Avatar className={classes.avatarSelected}>3</Avatar>}
                icon={<Avatar className={classes.avatar}>3</Avatar>}
              />
            </Grid>
            <Grid item xs={2}>
              <Radio
                checked={location!.typologies === 3}
                onClick={() => updateTypology(3)}
                checkedIcon={<Avatar className={classes.avatarSelected}>4</Avatar>}
                icon={<Avatar className={classes.avatar}>4</Avatar>}
              />
            </Grid>
            <Grid item xs={2}>
              <Radio
                checked={location!.typologies === 4}
                onClick={() => updateTypology(4)}
                checkedIcon={<Avatar className={classes.avatarSelected}>5</Avatar>}
                icon={<Avatar className={classes.avatar}>5</Avatar>}
              />
            </Grid>
          </Grid>
        </RadioGroup>
      </Grid>
      <br/>
      <Grid item container xs={12}>
        <Grid xs={10}>
          <Box fontSize={12} textAlign="start">Units alignment <br /> <span className={classes.fontSub}>(random/regular)</span> </Box>
        </Grid>
        <Grid xs={2}>
          <Switch checked={ location?.unitsOrganization === 0 ? false : true }
            onChange={(e) => updateUnitsOrganization(e.target.checked)}
            size="small" className={classes.toggle} />
        </Grid>
      </Grid>
      <br/>
      <Grid item container xs={12}>
        <Grid xs={10}>
          <Box fontSize={12} textAlign="start">Lofts last floors <br /> <span className={classes.fontSub}>(on/off)</span> </Box>
        </Grid>
        <Grid xs={2}>
          <Switch size="small" className={classes.toggle} />
        </Grid>
      </Grid>
    </Fragment>
  )
}

const container = connect<StateProps, DispatchProps, {}, RootState>(
  (state: RootState) => ({
    location: state.domains.shapediver.location,
    densityGeneral: state.domains.shapediver.densityGeneral
  }),
  {
    setAdvancedOptions
  }
)(ShapeDiverAdvancedOptions4);

export default container;

