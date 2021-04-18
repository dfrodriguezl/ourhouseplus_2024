import { Box, Card, Grid, makeStyles } from '@material-ui/core';
import { RootState } from 'app/store';
import { Location } from 'domains/core/models';
import { connect } from 'react-redux';

const styles = makeStyles(() => ({
  container: {
    padding: 20,
  },
}));

interface StateProps {
  location: Location | undefined;
}

type Props = StateProps;
const ShapeDiverToolBarDetails = (props: Props) => {
  const classes = styles();

  return (
    <Card className={classes.container}>
      <Grid item container direction="row">
        <Grid item xs={9}>
          <Box fontSize={12} fontWeight='bold'>Location</Box>
          <Box fontSize={10} fontWeight='bold'>Total gross floor area</Box>
          <br />
          <Box fontSize={10} fontWeight='bold'>Land user ratio (LUR)</Box>
          <Box fontSize={10} fontWeight='bold'>Floor area ratio (FAR)</Box>
          <br />
          <Box fontSize={10} fontWeight='bold'>Total units</Box>
        </Grid>
        <Grid item xs={3}>
          <Box fontSize={10}>{props.location?.city}</Box>
          <Box fontSize={10}>xxxx.xx</Box>
          <br />
          <Box fontSize={10}>xxxx.xx</Box>
          <Box fontSize={10}>xxxx.xx</Box>
          <br />
          <Box fontSize={10}>xxxx.xx</Box>
        </Grid>
      </Grid>
    </Card>
  );
}

const container = connect<StateProps, {}, {}, RootState>(
  (state: RootState) => ({
    location: state.domains.shapediver.location
  })
)(ShapeDiverToolBarDetails);

export default container;
