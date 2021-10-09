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
    color: 'red',
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
            <Box fontSize={15} fontWeight='bold'>Additional Data</Box>
          </AccordionSummary>
          <AccordionDetails>
            <Grid container className={classes.container}>
              <Grid item xs={6} sm={4}>
                <Box fontSize={12}>Avg bedroom per dwelling (hr/du)</Box>
                <Box fontSize={12}>Green space per inhabitant (m2)</Box>
                <br />
                <Box fontSize={12}>Ground floor free space (m2)</Box>
                <Box fontSize={12}>Multiple floors free space (m2)</Box>
                <br />
                <Box fontSize={12} style={{ opacity: 0 }}>a</Box>
                <Box fontSize={12}>Green space density</Box>
                <Box fontSize={12}>Road density</Box>
                <br />
                <Box fontSize={12} style={{ opacity: 0 }}>a</Box>
                <Box fontSize={12}>Studios</Box>
                <Box fontSize={12}>Large studios</Box>
                <Box fontSize={12}>One bedroom</Box>
                <Box fontSize={12}>Two bedroom</Box>
                <Box fontSize={12}>Three bedroom</Box>
                <Box fontSize={12}>Four bedroom</Box>
              </Grid>
              <Grid item xs={6} sm={4}>
                <Box fontSize={12}>{modelData.averageBedroomPerDwelling}</Box>
                <Box fontSize={12}>{modelData.greenSpacePerInhabitant}</Box>
                <br />
                <Box fontSize={12}>{modelData.groundFloorFreeSpace}</Box>
                <Box fontSize={12}>{modelData.multipleFloorFreeSpace}</Box>
                <br />
                <Grid xs={12} item container>
                  <Grid xs={4}>
                    <Box fontSize={12}>m2</Box>
                    <Box fontSize={12}>{modelData.greenSpaceDensitym2}</Box>
                    <Box fontSize={12}>{modelData.roadDensitym2}</Box>
                  </Grid>
                  <Grid xs={4}>
                    <Box fontSize={12}>%</Box>
                    <Box fontSize={12}>{modelData.greenSpaceDensity}</Box>
                    <Box fontSize={12}>{modelData.roadDensity}</Box>
                  </Grid>
                </Grid>
                <br />
                <Grid xs={12} item container>
                  <Grid xs={4}>
                    <Box fontSize={12}>m2</Box>
                    <Box fontSize={12}>{modelData.studiosm2}</Box>
                    <Box fontSize={12}>{modelData.largeStudiosm2}</Box>
                    <Box fontSize={12}>{modelData.oneBedroomm2}</Box>
                    <Box fontSize={12}>{modelData.twoBedroomm2}</Box>
                    <Box fontSize={12}>{modelData.threeBedroomm2}</Box>
                    <Box fontSize={12}>{modelData.fourBedroomm2}</Box>
                  </Grid>
                  <Grid xs={4}>
                    <Box fontSize={12}>%</Box>
                    <Box fontSize={12}>{modelData.studiosPorc}</Box>
                    <Box fontSize={12}>{modelData.largeStudiosPorc}</Box>
                    <Box fontSize={12}>{modelData.oneBedroomPorc}</Box>
                    <Box fontSize={12}>{modelData.twoBedroomPorc}</Box>
                    <Box fontSize={12}>{modelData.threeBedroomPorc}</Box>
                    <Box fontSize={12}>{modelData.fourBedroomPorc}</Box>
                  </Grid>
                  <Grid xs={4}>
                    <Box fontSize={12}>nbr</Box>
                    <Box fontSize={12}>{modelData.studios}</Box>
                    <Box fontSize={12}>{modelData.largeStudios}</Box>
                    <Box fontSize={12}>{modelData.oneBedroom}</Box>
                    <Box fontSize={12}>{modelData.twoBedroom}</Box>
                    <Box fontSize={12}>{modelData.threeBedroom}</Box>
                    <Box fontSize={12}>{modelData.fourBedroom}</Box>
                  </Grid>
                </Grid>

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
