import { Box, Divider, Grid, makeStyles } from '@material-ui/core';
import { RootState } from 'app/store';
import { Location } from 'domains/core/models';
import { Fragment } from 'react';
import { connect } from 'react-redux';
import { ModelData } from '../models';

const styles = makeStyles(() => ({
  container: {
    padding: '30px 0 30px 30px',
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
          <Box fontSize={19} fontWeight='bold'>Location</Box>
          <Box fontSize={15}>Gross land area</Box>
          <br />
          <Box fontSize={15}>Gross floor area (GFA)</Box>
          <Box fontSize={15}>Gross leasable area (GLA)</Box>
          <br />
          <Box fontSize={15}>Land user ratio (LUR)</Box>
          <br />
          <Box fontSize={15}>Plot ratio</Box>
          <br />
          <Box fontSize={15}>Total units (nbr)</Box>
          <Box fontSize={15}>Dwellings density (du/ha)</Box>
          <Box fontSize={15}>Average inhabitant per dwelling</Box>
        </Grid>
        <Grid item xs={4}>
          <Box fontSize={19}>{props.location?.city}</Box>
          <Box fontSize={15}>{modelData.totalLandArea}</Box>
          <br />
          <Box fontSize={15}>{modelData.totalGrossFloorArea}</Box>
          <Box fontSize={15}>{modelData.totalGrossLeasableArea}</Box>
          <br />
          <Box fontSize={15}>{modelData.landUserRatio}</Box>
          <br />
          <Box fontSize={15}>{modelData.plotRatio}</Box>
          <br />
          <Box fontSize={15}>{modelData.totalHousingUnits}</Box>
          <Box fontSize={15}>{modelData.dwellingsDensity}</Box>
          <Box fontSize={15}>{modelData.averageInhabitantPerDwelling}</Box>
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
