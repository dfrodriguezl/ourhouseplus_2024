import { Box, Card, Grid, makeStyles } from '@material-ui/core';
import { RootState } from 'app/store';
import { Location } from 'domains/core/models';
import { connect } from 'react-redux';
import { ModelData } from '../models';

const styles = makeStyles(() => ({
  container: {
    padding: '20px 0 0 20px',
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
    <Card className={classes.container}>
      <Grid item container direction="row">
        <Grid item xs={8}>
          <Box fontSize={12} fontWeight='bold'>Location</Box>
          <Box fontSize={10} fontWeight='bold'>Total gross floor area</Box>
          <br />
          <Box fontSize={10} fontWeight='bold'>Land user ratio (LUR)</Box>
          <Box fontSize={10} fontWeight='bold'>Floor area ratio (FAR)</Box>
          <br />
          <Box fontSize={10} fontWeight='bold'>Total units</Box>
        </Grid>
        <Grid item xs={4}>
          <Box fontSize={10}>{props.location?.city}</Box>
          <Box fontSize={10}>{modelData.totalGrossFloorArea}</Box>
          <br />
          <Box fontSize={10}>{modelData.landUserRatio}</Box>
          <Box fontSize={10}>{modelData.floorAreaRatio}</Box>
          <br />
          <Box fontSize={10}>{modelData.totalHousingUnits}</Box>
        </Grid>
      </Grid>
    </Card>
  );
}

const container = connect<StateProps, {}, {}, RootState>(
  (state: RootState) => ({
    location: state.domains.shapediver.location,
    modelData: state.domains.shapediver.modelData,
  })
)(ShapeDiverToolBarDetails);

export default container;
