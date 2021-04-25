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
          <Box fontSize={17}>Total gross floor area</Box>
          <br />
          <Box fontSize={17}>Land user ratio (LUR)</Box>
          <Box fontSize={17}>Floor area ratio (FAR)</Box>
          <br />
          <Box fontSize={17}>Total units</Box>
        </Grid>
        <Grid item xs={4}>
          <Box fontSize={17}>{props.location?.city}</Box>
          <Box fontSize={17}>{modelData.totalGrossFloorArea}</Box>
          <br />
          <Box fontSize={17}>{modelData.landUserRatio}</Box>
          <Box fontSize={17}>{modelData.floorAreaRatio}</Box>
          <br />
          <Box fontSize={17}>{modelData.totalHousingUnits}</Box>
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
