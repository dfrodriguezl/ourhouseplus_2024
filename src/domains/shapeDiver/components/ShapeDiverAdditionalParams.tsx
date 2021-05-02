import { Accordion, AccordionDetails, AccordionSummary, Box, Grid, makeStyles } from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { RootState } from 'app/store';
import { connect } from 'react-redux';
import { ModelData } from '../models';

const styles = makeStyles(() => ({
  accordion: {
    background: 'transparent',
    padding: '0 20px',
    color: 'white',
    width: '100%',
    boxShadow: 'none',
  },
  container: {
    color: 'white',
    position: 'absolute',
  }
}));

interface StateProps {
  modelData: ModelData
}

type Props = StateProps;
const ShapeDiverAdditionalParams = (props: Props) => {
  const { modelData } = props;
  const classes = styles();

  return (
    <Grid container>
      <Grid item xs={12}>
        <Accordion square className={classes.accordion}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon style={{ color: 'white' }} />}
          >
            <Box fontSize={15} fontWeight='bold'>Additional Parameters</Box>
          </AccordionSummary>
          <AccordionDetails>
            <Grid container className={classes.container}>
              <Grid item xs={4}>
                <Box fontSize={15}>Avg bedroom per dwelling (hr/du)</Box>
                <Box fontSize={15}>Green space per inhabitant (m2)</Box>
                <br />
                <Box fontSize={15}>Green space density (%)</Box>
                <Box fontSize={15}>Road density (%)</Box>
              </Grid>
              <Grid item xs={4}>
                <Box fontSize={15}>{modelData.averageBedroomPerDwelling}</Box>
                <Box fontSize={15}>{modelData.greenSpacePerInhabitant}</Box>
                <br />
                <Box fontSize={15}>{modelData.greenSpaceDensity}</Box>
                <Box fontSize={15}>{modelData.roadDensity}</Box>
              </Grid>
            </Grid>
          </AccordionDetails>
        </Accordion>
      </Grid>
    </Grid>
  );
}

const container = connect<StateProps, {}, {}, RootState>(
  (state: RootState) => ({
    modelData: state.domains.shapediver.modelData,
  })
)(ShapeDiverAdditionalParams);

export default container;
