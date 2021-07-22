import { Box, Divider, Grid, makeStyles } from '@material-ui/core';
import { RootState } from 'app/store';
import { Location } from 'domains/core/models';
import { Fragment } from 'react';
import { connect } from 'react-redux';
import { ModelData } from '../models';
import NumberFormat from 'react-number-format';
import { useHistory } from 'react-router-dom';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useTheme } from '@material-ui/core/styles';
import ShapeDiverProject from './ShapeDiverProject';

const styles = makeStyles(() => ({
  container: {
    padding: '3% 0 2% 30px',
  },
}));

interface StateProps {
  location: Location | undefined;
  modelData: ModelData;
}

interface LblProps {
  step?: string | null;
  propsDetail?: any;
  modelData?: any;
}


type Props = StateProps;
const ShapeDiverToolBarDetails = (props: Props) => {
  const classes = styles();
  const { modelData } = props;
  const history = useHistory();
  const isStep1 = history.location.pathname.indexOf('step1') > -1;
  const isStep2 = history.location.pathname.indexOf('step2') > -1;
  const isStep3 = history.location.pathname.indexOf('step3') > -1;
  

  return (
    <Fragment>
      <ShapeDiverProject></ShapeDiverProject>
      <Grid item container direction="row" className={classes.container}>
        <Grid item xs={8}>
          <LabelDetails step={isStep1?"step1":isStep2?"step2":isStep3?"step3":null}/>
        </Grid>
        <Grid item xs={4}>
          <ValueDetails step={isStep1?"step1":isStep2?"step2":isStep3?"step3":null} propsDetail={props} modelData={modelData}/>
        </Grid>
      </Grid>
      <Divider />
    </Fragment>
  );
}

const LabelDetails:React.FC<LblProps> = ({step}) => {
  const theme = useTheme();
  const smallScreen = useMediaQuery(theme.breakpoints.up("xl"));
  const bigFont = 14;
  const smallFont = 12;

  return (
      <Fragment>
          <Box fontSize={smallScreen?18:16} fontWeight='bold'>Location</Box>
          <Box fontSize={smallScreen?bigFont:smallFont}>Avg. people per dwelling</Box>
          {step==="step1"?
          <Box fontSize={smallScreen?bigFont:smallFont}>Total gross floor area</Box>:<Box fontSize={14}>Gross land area</Box>}   
          <br />
          {step!=="step1"?
          <Fragment>
            <Box fontSize={smallScreen?bigFont:smallFont}>Gross floor area (GFA)</Box>
            <Box fontSize={smallScreen?bigFont:smallFont}>Gross leasable area (GLA)</Box>
            <br />
            <Box fontSize={smallScreen?bigFont:smallFont}>Land user ratio (LUR)</Box>
          </Fragment>:
          <Fragment>
            <Box fontSize={smallScreen?bigFont:smallFont}>Land user ratio (LUR)</Box>
            <Box fontSize={smallScreen?bigFont:smallFont}>Floor area ratio (FAR)</Box>
          </Fragment>} 
          <br />
          {step==="step1"?
          <Fragment>
            <Box fontSize={smallScreen?bigFont:smallFont}>Total units</Box>
            <Box fontSize={smallScreen?bigFont:smallFont}>Plot ratio</Box>
          </Fragment>:
            <Box fontSize={smallScreen?bigFont:smallFont}>Plot ratio</Box>
          }     
          {
            step!=="step1"?
            <Fragment>
              <br/>
              <Box fontSize={smallScreen?bigFont:smallFont}>Total units (nbr)</Box>
              <Box fontSize={smallScreen?bigFont:smallFont}>Dwellings density (du/ha)</Box>
              <Box fontSize={smallScreen?bigFont:smallFont}>Avg. inhabitant per dwelling</Box>
            </Fragment>:null
          }
      </Fragment>        
  )
}

const ValueDetails:React.FC<LblProps> = ({step,propsDetail,modelData}) => {

  const theme = useTheme();
  const smallScreen = useMediaQuery(theme.breakpoints.up("xl"));
  const bigFont = 14;
  const smallFont = 12;
 
  return (
    <Fragment>
          <Box fontSize={smallScreen?18:16}>{propsDetail.location?.city}</Box>
          <NumberFormat
            value={propsDetail.location?.p_vivs}
            displayType="text"
          />
          <br />
          {step==="step1"?
          <Box fontSize={smallScreen?bigFont:smallFont}>
          <NumberFormat
            value={modelData.totalLandArea}
            displayType="text"
            thousandSeparator
          />
        </Box>:<Box fontSize={smallScreen?bigFont:smallFont}>
          <NumberFormat
            value={modelData.totalLandArea}
            displayType="text"
            thousandSeparator
          />
        </Box>}   
          <br />
          {step!=="step1"?
          <Fragment>
            <Box fontSize={smallScreen?bigFont:smallFont}>
              <NumberFormat
                value={modelData.totalGrossFloorArea}
                displayType="text"
                thousandSeparator
              />
            </Box>
            <Box fontSize={smallScreen?bigFont:smallFont}>
              <NumberFormat
                value={modelData.totalGrossLeasableArea}
                displayType="text"
                thousandSeparator
              />
            </Box>
            <br />
            <Box fontSize={smallScreen?bigFont:smallFont}>
            <NumberFormat
              value={modelData.landUserRatio}
              displayType="text"
              decimalScale={2}
            />
          </Box>
          </Fragment>:
          <Fragment>
            <Box fontSize={smallScreen?bigFont:smallFont}>
              <NumberFormat
                value={modelData.landUserRatio}
                displayType="text"
                decimalScale={2}
              />
            </Box>
            <Box fontSize={smallScreen?bigFont:smallFont}>
              <NumberFormat
                value={modelData.floorAreaRatio}
                displayType="text"
                decimalScale={2}
              />
            </Box>
          </Fragment>} 
          <br />
          {step==="step1"?
          <Fragment>
              <Box fontSize={smallScreen?bigFont:smallFont}>
              <NumberFormat
                value={modelData.totalHousingUnits}
                displayType="text"
                thousandSeparator
              />
            </Box>
            <Box fontSize={smallScreen?bigFont:smallFont}>
            <NumberFormat
              value={modelData.plotRatio}
              displayType="text"
              decimalScale={2}
            />
          </Box>
          </Fragment>:
            <Box fontSize={smallScreen?bigFont:smallFont}>
              <NumberFormat
                value={modelData.plotRatio}
                displayType="text"
                decimalScale={2}
              />
            </Box>
          } 
          {/* <br /> */}
          {
            step!=="step1"?
            <Fragment>
              <br/>
              <Box fontSize={smallScreen?bigFont:smallFont}>
                <NumberFormat
                  value={modelData.totalHousingUnits}
                  displayType="text"
                  thousandSeparator
                />
              </Box>
              <Box fontSize={smallScreen?bigFont:smallFont}>
                <NumberFormat
                  value={modelData.dwellingsDensity}
                  displayType="text"
                  decimalScale={2}
                />
              </Box>
              <Box fontSize={smallScreen?bigFont:smallFont}>
                <NumberFormat
                  value={modelData.averageInhabitantPerDwelling}
                  displayType="text"
                  decimalScale={2}
                />
              </Box>
            </Fragment>:null
          }
          
        </Fragment>
  )
}

const container = connect<StateProps, {}, {}, RootState>(
  (state: RootState) => ({
    location: state.domains.shapediver.location,
    modelData: state.domains.shapediver.modelData,
  })
)(ShapeDiverToolBarDetails);

export default container;
