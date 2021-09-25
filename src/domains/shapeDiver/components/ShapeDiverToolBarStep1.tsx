import { connect } from 'react-redux';
import { RootState } from 'app/store';
import { RouteComponentProps, withRouter } from 'react-router-dom';
import { Box, Grid, makeStyles, Paper, Radio, RadioGroup, Container } from '@material-ui/core'
import { getArea, setTerrain, setDensity, setUnitsNumberType, setImportModel, setExpandAdvanced } from 'domains/shapeDiver/slice';
import { CustomTooltip } from 'domains/common/components';

import { high, low, medium, two, three, four, square, rectangle, custom } from 'assets'
import { highSelected, lowSelected, mediumSelected, twoSelected, threeSelected, fourSelected, squareSelected, rectangleSelected, customSelected } from 'assets'
import { ShapeDiverOptions } from '../models';
import { compose } from 'recompose';
import { Location } from 'domains/core/models';
import { ShapeDiverAdvancedOptions, ShapeDiverToolBarDetails } from '.';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useTheme } from '@material-ui/core/styles';


import { useRef } from 'react';

const styles = makeStyles((theme) => ({
  container: {
    borderRadius: '45px'
  },
  firstSubContainer: {
    padding: '5px 0px 0 0px',
  },
  subContainer: {
    padding: '5px 0px 0px 0px',
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
  carrousel: {
    [theme.breakpoints.down('sm')]: {
      height: '9vh',
      maxHeight: '9vh',
      overflowX: 'auto',
    },
  },
  radioStyle: {
    width: '100%'
  }
}));


interface StateProps {
  area: number;
  terrain: number;
  options: ShapeDiverOptions | undefined;
  location: Location | undefined;
  expandAdvanced: Object;
}

interface DispatchProps {
  setTerrain: typeof setTerrain;
  setDensity: typeof setDensity;
  setUnitsNumberType: typeof setUnitsNumberType;
  setImportModel: typeof setImportModel;
  setExpandAdvanced: typeof setExpandAdvanced;
}

type Props = StateProps & DispatchProps & RouteComponentProps;
function ShapeDiverToolBarStep1(props: Props) {
  const fileInput = useRef<HTMLInputElement>(null);
  const { setTerrain, setDensity, location, setUnitsNumberType, terrain, setImportModel } = props;
  const classes = styles();
  const theme = useTheme();
  const smallScreen = useMediaQuery(theme.breakpoints.up("xl"));
  const bigFont = 13;
  const smallFont = 13;

  const uploadImage = (event: any) => {
    const selectedFile = event.target.files[0];

    if (selectedFile) {
      setImportModel(selectedFile.name);
      window.importFile = selectedFile;
      setTerrain(2);
    }
  }

  const setTerrainAndClearImage = (terrain: number) => {
    setImportModel('');
    window.importFile = undefined;
    setTerrain(terrain);
  }

  const handleFileUpload = () => {
    fileInput.current!.click();
  }


  return (
    <Paper className={`${classes.container} controls-background`} >
      <Grid container direction="column" >
        <ShapeDiverToolBarDetails />
        <Container className={classes.carrousel}>
          <Grid item container className={classes.firstSubContainer} >
            <Grid item xs={12} >
              <Box fontSize={smallScreen ? bigFont : smallFont} fontWeight='bold'>Choose your lot shape</Box>
            </Grid>
            <RadioGroup className={classes.radioStyle}>
              <Grid container justify="center">
                <Grid item xs={4}>
                  <CustomTooltip title="Square" placement="top-end">
                    <Radio
                      checked={terrain === 0}
                      onClick={() => setTerrainAndClearImage(0)}
                      checkedIcon={<img className={smallScreen ? classes.buttons : classes.buttons_md} src={squareSelected} alt="1:1" />}
                      icon={<img className={smallScreen ? classes.buttons : classes.buttons_md} src={square} alt="1:1" />}
                    />
                  </CustomTooltip>
                </Grid>
                <Grid item xs={4}>
                  <CustomTooltip title="Rectangle" placement="top-end">
                    <Radio
                      checked={terrain === 1}
                      onClick={() => setTerrainAndClearImage(1)}
                      checkedIcon={<img className={smallScreen ? classes.buttons : classes.buttons_md} src={rectangleSelected} alt="2:1" />}
                      icon={<img className={smallScreen ? classes.buttons : classes.buttons_md} src={rectangle} alt="2:1" />}

                    />
                  </CustomTooltip>

                </Grid>
                <Grid item xs={4}>
                  <input
                    ref={fileInput}
                    type="file"
                    onChange={(event) => uploadImage(event)}
                    style={{ display: 'none' }}
                  />
                  <CustomTooltip title="Add DXF file with lot shape" placement="top-end">
                    <Radio
                      checked={terrain === 2}
                      onClick={() => handleFileUpload()}
                      checkedIcon={<img className={smallScreen ? classes.buttons : classes.buttons_md} src={customSelected} alt="import" />}
                      icon={<img className={smallScreen ? classes.buttons : classes.buttons_md} src={custom} alt="import" />}
                    />
                  </CustomTooltip>
                </Grid>
              </Grid>
            </RadioGroup>
          </Grid>
          <Grid item container className={classes.subContainer}>
            <Grid item xs={12}>
              <Box fontSize={smallScreen ? bigFont : smallFont} fontWeight='bold'>Choose level of density</Box>
            </Grid>
            <RadioGroup className={classes.radioStyle}>
              <Grid container justify="center">
                <Grid item xs={4}>
                  <CustomTooltip title="Low" placement="top-end">
                    <Radio
                      checked={location.density === 0}
                      onClick={() => setDensity(0)}
                      checkedIcon={<img className={smallScreen ? classes.buttons : classes.buttons_md} src={lowSelected} alt="low" />}
                      icon={<img className={smallScreen ? classes.buttons : classes.buttons_md} src={low} alt="low" />}
                    />
                  </CustomTooltip>
                </Grid>
                <Grid item xs={4}>
                  <CustomTooltip title="Medium" placement="top-end">
                    <Radio
                      checked={location.density === 1}
                      onClick={() => setDensity(1)}
                      checkedIcon={<img className={smallScreen ? classes.buttons : classes.buttons_md} src={mediumSelected} alt="medium" />}
                      icon={<img className={smallScreen ? classes.buttons : classes.buttons_md} src={medium} alt="medium" />}
                    />
                  </CustomTooltip>
                </Grid>
                <Grid item xs={4}>
                  <CustomTooltip title="High" placement="top-end">
                    <Radio
                      checked={location.density === 2}
                      onClick={() => setDensity(2)}
                      checkedIcon={<img className={smallScreen ? classes.buttons : classes.buttons_md} src={highSelected} alt="high" />}
                      icon={<img className={smallScreen ? classes.buttons : classes.buttons_md} src={high} alt="high" />}
                    />
                  </CustomTooltip>
                </Grid>
              </Grid>
            </RadioGroup>
          </Grid>
          <Grid item container className={classes.subContainer}>
            <Grid item xs={12}>
              <Box fontSize={smallScreen ? bigFont : smallFont} fontWeight='bold'>Choose number of unit types</Box>
            </Grid>
            <RadioGroup className={classes.radioStyle}>
              <Grid container justify="center">
                <Grid item xs={4}>
                  <CustomTooltip title="Two types" placement="top-end">
                    <Radio
                      checked={location.unitsNumberType === 0}
                      onClick={() => setUnitsNumberType(0)}
                      checkedIcon={<img className={smallScreen ? classes.buttons : classes.buttons_md} src={twoSelected} alt="two" />}
                      icon={<img className={smallScreen ? classes.buttons : classes.buttons_md} src={two} alt="two" />}
                    />
                  </CustomTooltip>
                </Grid>
                <Grid item xs={4}>
                  <CustomTooltip title="Three types" placement="top-end">
                    <Radio
                      checked={location.unitsNumberType === 1}
                      onClick={() => setUnitsNumberType(1)}
                      checkedIcon={<img className={smallScreen ? classes.buttons : classes.buttons_md} src={threeSelected} alt="three" />}
                      icon={<img className={smallScreen ? classes.buttons : classes.buttons_md} src={three} alt="three" />}
                    />
                  </CustomTooltip>
                </Grid>
                {/* <Grid item xs={4}>
                  <CustomTooltip title="Four types" placement="top-end">
                    <Radio
                      checked={location.unitsNumberType === 2}
                      onClick={() => setUnitsNumberType(2)}
                      checkedIcon={<img className={smallScreen ? classes.buttons : classes.buttons_md} src={fourSelected} alt="four" />}
                      icon={<img className={smallScreen ? classes.buttons : classes.buttons_md} src={four} alt="four" />}
                    />
                  </CustomTooltip>
                </Grid> */}
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
      terrain: state.domains.shapediver.terrain,
      expandAdvanced: state.domains.shapediver.expandAdvanced
    }),
    {
      setTerrain,
      setDensity,
      setUnitsNumberType,
      setImportModel,
      setExpandAdvanced
    }
  )
)(ShapeDiverToolBarStep1);

export default container;
