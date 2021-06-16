import { Box, Divider, Grid, makeStyles } from '@material-ui/core';
import { RootState } from 'app/store';
import { Location } from 'domains/core/models';
import { Fragment } from 'react';
import { connect } from 'react-redux';
import { ModelData } from '../models';
import NumberFormat from 'react-number-format';

const styles = makeStyles(() => ({
  container: {
    padding: '30px 0 20px 30px',
  },
}));

interface StateProps {
  location: Location | undefined;
  modelData: ModelData;
}

type Props = StateProps;
const ShapeDiverToolBarDetails = (props: Props) => {
  const classes = styles();
  const { modelData } = props;

  return (
    <Fragment>
      <Grid item container direction="row" className={classes.container}>
        <Grid item xs={8}>
          <Box fontSize={18} fontWeight='bold'>Location</Box>
          <Box fontSize={14}>Gross land area</Box>
          <br />
          <Box fontSize={14}>Gross floor area (GFA)</Box>
          <Box fontSize={14}>Gross leasable area (GLA)</Box>
          <br />
          <Box fontSize={14}>Land user ratio (LUR)</Box>
          <br />
          <Box fontSize={14}>Plot ratio</Box>
          <br />
          <Box fontSize={14}>Total units (nbr)</Box>
          <Box fontSize={14}>Dwellings density (du/ha)</Box>
          <Box fontSize={14}>Avg. inhabitant per dwelling</Box>
        </Grid>
        <Grid item xs={4}>
          <Box fontSize={18}>{props.location?.city}</Box>
          <Box fontSize={14}>
            <NumberFormat
              value={modelData.totalLandArea}
              displayType="text"
              thousandSeparator
            />
          </Box>
          <br />
          <Box fontSize={14}>
            <NumberFormat
              value={modelData.totalGrossFloorArea}
              displayType="text"
              thousandSeparator
            />
          </Box>
          <Box fontSize={14}>
            <NumberFormat
              value={modelData.totalLandArea}
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
          <br />
          <Box fontSize={14}>
            <NumberFormat
              value={modelData.plotRatio}
              displayType="text"
              decimalScale={2}
            />
          </Box>
          <br />
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
        </Grid>
      </Grid>
      <Divider />
    </Fragment>
  );
}

const container = connect<StateProps, {}, {}, RootState>(
  (state: RootState) => ({
    location: state.domains.shapediver.location,
    modelData: state.domains.shapediver.modelData,
  })
)(ShapeDiverToolBarDetails);

export default container;
