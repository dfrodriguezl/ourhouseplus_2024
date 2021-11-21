import { useState } from 'react';
import { Box, Divider, Grid, makeStyles, Accordion, AccordionSummary, AccordionDetails } from '@material-ui/core';
import { RootState } from 'app/store';
import { LocationSimple } from 'domains/core/models';
import { Fragment } from 'react';
import { connect } from 'react-redux';
import { ModelData } from '../models';
import NumberFormat from 'react-number-format';
import { useHistory } from 'react-router-dom';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useTheme } from '@material-ui/core/styles';
import ShapeDiverProject from './ShapeDiverProject';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { setExpandAdvanced } from 'domains/shapeDiver/slice';
import { compose } from 'recompose';
import { withRouter } from 'react-router-dom';
import { marker } from 'assets';
import { GeoContainer } from 'domains/core/containers'

const styles = makeStyles((theme) => ({
  container: {
    padding: '3% 0 2% 30px',
    [theme.breakpoints.down('sm')]: {
      padding: '0',
    },
  },
  accordion: {
    width: '100%',
    background: 'transparent',
    padding: '0 20px'
  },
  iconLocation: {
    '&:hover': {
      cursor: 'pointer'
    },
  },
  paddingText: {
    paddingLeft: 15
  }
}));

interface StateProps {
  location: LocationSimple | undefined;
  modelData: ModelData;
}

interface dispatchProps {
  setExpandAdvanced: typeof setExpandAdvanced;
}

interface LblProps {
  step?: string | null;
  propsDetail?: any;
  modelData?: any;
}

interface DataProps {
  classes?: any;
  modelData?: any;
  isStep1?: Boolean;
  isStep2?: Boolean;
  isStep3?: Boolean;
  propsDetail?: any;
}


type Props = StateProps & dispatchProps;
const ShapeDiverToolBarDetails = (props: Props) => {
  const classes = styles();
  const { modelData, setExpandAdvanced } = props;
  const history = useHistory();
  const isStep1 = history.location.pathname.indexOf('step1') > -1;
  const isStep2 = history.location.pathname.indexOf('step2') > -1;
  const isStep3 = history.location.pathname.indexOf('step3') > -1;

  const theme = useTheme();
  const smallScreen = useMediaQuery(theme.breakpoints.down("sm"));

  const onChangeAccordion = (event: object, expanded: boolean) => {

    if (expanded) {
      setExpandAdvanced({ height: '140vh' })
      window.scroll({
        top: document.body.offsetHeight,
        left: 0,
        behavior: 'smooth'
      });
    } else {
      setExpandAdvanced({ height: '100vh' })
      window.scroll({
        top: 0,
        left: 0,
        behavior: 'smooth'
      });
    }
  }


  return (
    <Fragment>
      <ShapeDiverProject></ShapeDiverProject>
      {smallScreen ?
        <Accordion square className={classes.accordion} onChange={onChangeAccordion}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
          >
            {isStep1 ?
              <Fragment>
                <Box fontSize={15} fontWeight='bold'>Basic volume</Box>

              </Fragment>
              :
              isStep2 ?
                <Box fontSize={15} fontWeight='bold'>Facade</Box> :
                isStep3 ?
                  <Box fontSize={15} fontWeight='bold'>Interior</Box> : null
            }
          </AccordionSummary>

          <AccordionDetails>
            <ToolbarData classes={classes} modelData={modelData} isStep1={isStep1} isStep2={isStep2} isStep3={isStep3} propsDetail={props}></ToolbarData>
          </AccordionDetails>
        </Accordion> :
        <ToolbarData classes={classes} modelData={modelData} isStep1={isStep1} isStep2={isStep2} isStep3={isStep3} propsDetail={props}></ToolbarData>
      }

    </Fragment>
  );
}

const ToolbarData: React.FC<DataProps> = ({ classes, modelData, isStep1, isStep2, isStep3, propsDetail }) => {
  return (
    <Fragment>
      <Grid item container direction="row" className={classes.container}>
        <Grid item xs={8}>
          <LabelDetails step={isStep1 ? "step1" : isStep2 ? "step2" : isStep3 ? "step3" : null} propsDetail={propsDetail} />
        </Grid>
        <Grid item xs={4}>
          <ValueDetails step={isStep1 ? "step1" : isStep2 ? "step2" : isStep3 ? "step3" : null} propsDetail={propsDetail} modelData={modelData} />
        </Grid>
      </Grid>
      <Divider />
    </Fragment>
  )

}

const LabelDetails: React.FC<LblProps> = ({ step, propsDetail }) => {
  const theme = useTheme();
  const smallScreen = useMediaQuery(theme.breakpoints.up("xl"));
  const bigFont = 14;
  const smallFont = 12;
  const classes = styles();

  return (
    <Fragment>
      {step === 'step1' ?
        <Box fontSize={16} fontWeight='bold'>Project Volume</Box> :
        step === 'step2' ?
          <Box fontSize={16} fontWeight='bold'>Facade</Box> :
          <Box fontSize={16} fontWeight='bold'>Interior</Box>}
      <br />
      <Box fontSize={12}>Location</Box>
      <br />
      <Box fontSize={12} fontWeight='bold'>Model Data</Box>
      <Box fontSize={12}>Gross land area</Box>
      <Box fontSize={12}>Gross floor area (GFA)</Box>
      <Box fontSize={12}>Building height max.</Box>
      <br />
      <Box fontSize={12}>Land use ratio (LUR)</Box>
      <Box fontSize={12} className={classes.paddingText}>Net</Box>
      <Box fontSize={12} className={classes.paddingText}>Gross</Box>
      <Box fontSize={12}>Floor area ratio (FAR)</Box>
      <Box fontSize={12} className={classes.paddingText}>Net</Box>
      <Box fontSize={12} className={classes.paddingText}>Gross</Box>
      <br />
      <Box fontSize={12}>Total units (nbr)</Box>
      <Box fontSize={12}>Dwellings density (du/ha)</Box>
      <Box fontSize={12}>Population density (r/ha)</Box>
      <br />
      <Box fontSize={12} fontWeight='bold'>Geo Data</Box>
      <Box fontSize={12}>Avg. inhabitant by location</Box>
      <Box fontSize={12}>Avg. age inhabitant by location</Box>
      <Box fontSize={12}>Housing deficit in 400 m (circ.)</Box>
    </Fragment>
  )
}

const ValueDetails: React.FC<LblProps> = ({ step, propsDetail, modelData }) => {

  const [open, setOpen] = useState(false);
  const classes = styles();
  const theme = useTheme();
  const smallScreen = useMediaQuery(theme.breakpoints.up("xl"));
  const bigFont = 14;
  const smallFont = 12;

  const openGeoDialog = () => {
    setOpen(true);
  }

  const closeGeoDialog = () => {
    setOpen(false);
  }

  return (
    <Fragment>
      <GeoContainer open={open} location={propsDetail.location?.city} closeFunction={closeGeoDialog} />
      <Box fontSize={16} fontWeight='bold' style={{ opacity: 0 }}>Project Volume</Box>
      <Box fontSize={12}>{propsDetail.location?.city} <img src={marker} alt="geolocation-icon" width="15%" className={classes.iconLocation} onClick={() => openGeoDialog()} /></Box>
      <br />
      <Box fontSize={12} fontWeight='bold' style={{ opacity: 0 }}>Model Data</Box>
      <Box fontSize={12}>
        <NumberFormat
          value={modelData.totalLandArea}
          displayType="text"
          thousandSeparator
        />
      </Box>
      <Box fontSize={12}>
        <NumberFormat
          value={modelData.totalGrossFloorArea}
          displayType="text"
          thousandSeparator
        />
      </Box>
      <Box fontSize={12}>
        <NumberFormat
          value={modelData.mostHeightBuilding}
          displayType="text"
          thousandSeparator
        />
      </Box>
      <br />
      <Box fontSize={12} fontWeight='bold' style={{ opacity: 0 }}>LUR</Box>
      <Box fontSize={12}>
        <NumberFormat
          value={modelData.landUserRatioNet}
          displayType="text"
          decimalScale={2}
        />
      </Box>
      <Box fontSize={12}>
        <NumberFormat
          value={modelData.landUserRatioGross}
          displayType="text"
          decimalScale={2}
        />
      </Box>
      <Box fontSize={12} fontWeight='bold' style={{ opacity: 0 }}>FAR</Box>
      <Box fontSize={12}>
        <NumberFormat
          value={modelData.floorAreaRatioNet}
          displayType="text"
          decimalScale={2}
        />
      </Box>
      <Box fontSize={12}>
        <NumberFormat
          value={modelData.floorAreaRatioGross}
          displayType="text"
          decimalScale={2}
        />
      </Box>
      <br />
      <Box fontSize={12}>
        <NumberFormat
          value={modelData.totalHousingUnits}
          displayType="text"
          thousandSeparator
        />
      </Box>
      <Box fontSize={12}>
        <NumberFormat
          value={modelData.dwellingsDensity}
          displayType="text"
          decimalScale={2}
        />
      </Box>
      <Box fontSize={12}>
        <NumberFormat
          value={modelData.populationDensity}
          displayType="text"
          decimalScale={2}
        />
      </Box>
      <br />
      <Box fontSize={12} fontWeight='bold' style={{ opacity: 0 }}>Geo Data</Box>
      <Box fontSize={12}>
        <NumberFormat
          value="0.2"
          displayType="text"
          decimalScale={2}
        />
      </Box>
      <Box fontSize={12}>
        <NumberFormat
          value="0.2"
          displayType="text"
          decimalScale={2}
        />
      </Box>
      <Box fontSize={12}>
        <NumberFormat
          value="0.2"
          displayType="text"
          decimalScale={2}
        />
      </Box>
    </Fragment>
  )
}

const container = compose<Props, {}>(
  withRouter,
  connect<StateProps, dispatchProps, {}, RootState>(
    (state: RootState) => ({
      location: state.domains.shapediver.location,
      modelData: state.domains.shapediver.modelData,
    }), {
    setExpandAdvanced
  }
  )
)(ShapeDiverToolBarDetails);


export default container;
