import { Box, Divider, Grid, makeStyles } from '@material-ui/core';
import { RootState } from 'app/store';
import { Location } from 'domains/core/models';
import { Fragment } from 'react';
import { connect } from 'react-redux';
import { ModelData } from '../models';
import NumberFormat from 'react-number-format';
import { useHistory,useLocation  } from 'react-router-dom';

const styles = makeStyles(() => ({
  container: {
    padding: '30px 0 5% 30px',
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


const stepsList = [
  "Basic volume",
  "Facade",
  "Interior"
]



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
  return (
      <Fragment>
          <Box fontSize={18} fontWeight='bold'>Location</Box>
          {step=="step1"?
          <Box fontSize={14}>Total gross floor area</Box>:<Box fontSize={14}>Gross land area</Box>}   
          <br />
          {step!="step1"?
          <Fragment>
            <Box fontSize={14}>Gross floor area (GFA)</Box>
            <Box fontSize={14}>Gross leasable area (GLA)</Box>
            <br />
            <Box fontSize={14}>Land user ratio (LUR)</Box>
          </Fragment>:
          <Fragment>
            <Box fontSize={14}>Land user ratio (LUR)</Box>
            <Box fontSize={14}>Floor area ratio (FAR)</Box>
          </Fragment>} 
          <br />
          {step=="step1"?
            <Box fontSize={14}>Total units</Box>:
            <Box fontSize={14}>Plot ratio</Box>
          } 
          <br />
          {
            step!="step1"?
            <Fragment>
              <Box fontSize={14}>Total units (nbr)</Box>
              <Box fontSize={14}>Dwellings density (du/ha)</Box>
              <Box fontSize={14}>Avg. inhabitant per dwelling</Box>
            </Fragment>:null
          }
      </Fragment>        
  )
}

const ValueDetails:React.FC<LblProps> = ({step,propsDetail,modelData}) => {
 
  return (
    <Fragment>
          <Box fontSize={18}>{propsDetail.location?.city}</Box>
          {step==="step1"?
          <Box fontSize={14}>
          <NumberFormat
            value={modelData.totalGrossFloorArea}
            displayType="text"
            thousandSeparator
          />
        </Box>:<Box fontSize={14}>
          <NumberFormat
            value={modelData.totalLandArea}
            displayType="text"
            thousandSeparator
          />
        </Box>}   
          <br />
          {step!="step1"?
          <Fragment>
            <Box fontSize={14}>
              <NumberFormat
                value={modelData.totalGrossFloorArea}
                displayType="text"
                thousandSeparator
              />
            </Box>
            <Box fontSize={14}>
              <NumberFormat
                value={modelData.totalGrossLeasableArea}
                displayType="text"
                thousandSeparator
              />
            </Box>
            <br />
            <Box fontSize={14}>
            <NumberFormat
              value={modelData.landUserRatio}
              displayType="text"
              decimalScale={2}
            />
          </Box>
          </Fragment>:
          <Fragment>
            <Box fontSize={14}>
              <NumberFormat
                value={modelData.landUserRatio}
                displayType="text"
                decimalScale={2}
              />
            </Box>
            <Box fontSize={14}>
              <NumberFormat
                value={modelData.floorAreaRatio}
                displayType="text"
                decimalScale={2}
              />
            </Box>
          </Fragment>} 
          <br />
          {step=="step1"?
            <Box fontSize={14}>
              <NumberFormat
                value={modelData.totalHousingUnits}
                displayType="text"
                thousandSeparator
              />
            </Box>:
            <Box fontSize={14}>
              <NumberFormat
                value={modelData.plotRatio}
                displayType="text"
                decimalScale={2}
              />
            </Box>
          } 
          <br />
          {
            step!="step1"?
            <Fragment>
              <Box fontSize={14}>
                <NumberFormat
                  value={modelData.totalHousingUnits}
                  displayType="text"
                  thousandSeparator
                />
              </Box>
              <Box fontSize={14}>
                <NumberFormat
                  value={modelData.dwellingsDensity}
                  displayType="text"
                  decimalScale={2}
                />
              </Box>
              <Box fontSize={14}>
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
