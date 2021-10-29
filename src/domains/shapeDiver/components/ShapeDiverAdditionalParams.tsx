import { Accordion, AccordionDetails, AccordionSummary, Box, Grid, makeStyles } from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { RootState } from 'app/store';
import NumberFormat from 'react-number-format';
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
                <br />
                <Box fontSize={12}>One to two bedroom loft</Box>
                <Box fontSize={12}>Three to four bedroom loft</Box>
              </Grid>
              <Grid item xs={6} sm={4}>
                <Box fontSize={12}>
                  <NumberFormat
                    value={modelData.averageBedroomPerDwelling}
                    displayType="text"
                    thousandSeparator
                    decimalScale={2}
                  />
                </Box>
                <Box fontSize={12}>
                  <NumberFormat
                    value={modelData.greenSpacePerInhabitant}
                    displayType="text"
                    thousandSeparator
                    decimalScale={2}
                  />
                </Box>
                <br />
                <Box fontSize={12}>
                  <NumberFormat
                    value={modelData.groundFloorFreeSpace}
                    displayType="text"
                    thousandSeparator
                    decimalScale={2}
                  />
                </Box>
                <Box fontSize={12}>
                  <NumberFormat
                    value={modelData.multipleFloorFreeSpace}
                    displayType="text"
                    thousandSeparator
                    decimalScale={2}
                  />
                </Box>
                <br />
                <Grid xs={12} item container>
                  <Grid xs={4}>
                    <Box fontSize={12}>m2</Box>
                    <Box fontSize={12}>
                      <NumberFormat
                        value={modelData.greenSpaceDensitym2}
                        displayType="text"
                        thousandSeparator
                        decimalScale={2}
                      />
                    </Box>
                    <Box fontSize={12}>
                      <NumberFormat
                        value={modelData.roadDensitym2}
                        displayType="text"
                        thousandSeparator
                        decimalScale={2}
                      />
                    </Box>
                  </Grid>
                  <Grid xs={4}>
                    <Box fontSize={12}>%</Box>
                    <Box fontSize={12}>
                      <NumberFormat
                        value={modelData.greenSpaceDensity}
                        displayType="text"
                        thousandSeparator
                        decimalScale={2}
                      />
                    </Box>
                    <Box fontSize={12}>
                      <NumberFormat
                        value={modelData.roadDensity}
                        displayType="text"
                        thousandSeparator
                        decimalScale={2}
                      />
                    </Box>
                  </Grid>
                </Grid>
                <br />
                <Grid xs={12} item container>
                  <Grid xs={4}>
                    <Box fontSize={12}>m2</Box>
                    <Box fontSize={12}>
                      <NumberFormat
                        value={modelData.studiosm2}
                        displayType="text"
                        thousandSeparator
                        decimalScale={2}
                      />
                    </Box>
                    <Box fontSize={12}>
                      <NumberFormat
                        value={modelData.largeStudiosm2}
                        displayType="text"
                        thousandSeparator
                        decimalScale={2}
                      />
                    </Box>
                    <Box fontSize={12}>
                      <NumberFormat
                        value={modelData.oneBedroomm2}
                        displayType="text"
                        thousandSeparator
                        decimalScale={2}
                      />
                    </Box>
                    <Box fontSize={12}>
                      <NumberFormat
                        value={modelData.twoBedroomm2}
                        displayType="text"
                        thousandSeparator
                        decimalScale={2}
                      />
                    </Box>
                    <Box fontSize={12}>
                      <NumberFormat
                        value={modelData.threeBedroomm2}
                        displayType="text"
                        thousandSeparator
                        decimalScale={2}
                      />
                    </Box>
                    <Box fontSize={12}>
                      <NumberFormat
                        value={modelData.fourBedroomm2}
                        displayType="text"
                        thousandSeparator
                        decimalScale={2}
                      />
                    </Box>
                    <br />
                    <Box fontSize={12}>
                      <NumberFormat
                        value={0}
                        displayType="text"
                        thousandSeparator
                        decimalScale={2}
                      />
                    </Box>
                    <Box fontSize={12}>
                      <NumberFormat
                        value={0}
                        displayType="text"
                        thousandSeparator
                        decimalScale={2}
                      />
                    </Box>
                  </Grid>
                  <Grid xs={4}>
                    <Box fontSize={12}>%</Box>
                    <Box fontSize={12}>
                      <NumberFormat
                        value={modelData.studiosPorc}
                        displayType="text"
                        thousandSeparator
                        decimalScale={2}
                      />
                    </Box>
                    <Box fontSize={12}>
                      <NumberFormat
                        value={modelData.largeStudiosPorc}
                        displayType="text"
                        thousandSeparator
                        decimalScale={2}
                      />
                    </Box>
                    <Box fontSize={12}>
                      <NumberFormat
                        value={modelData.oneBedroomPorc}
                        displayType="text"
                        thousandSeparator
                        decimalScale={2}
                      />
                    </Box>
                    <Box fontSize={12}>
                      <NumberFormat
                        value={modelData.twoBedroomPorc}
                        displayType="text"
                        thousandSeparator
                        decimalScale={2}
                      />
                    </Box>
                    <Box fontSize={12}>
                      <NumberFormat
                        value={modelData.threeBedroomPorc}
                        displayType="text"
                        thousandSeparator
                        decimalScale={2}
                      />
                    </Box>
                    <Box fontSize={12}>
                      <NumberFormat
                        value={modelData.fourBedroomPorc}
                        displayType="text"
                        thousandSeparator
                        decimalScale={2}
                      />
                    </Box>
                    <br />
                    <Box fontSize={12}>
                      <NumberFormat
                        value={modelData.oneToTwoPorc}
                        displayType="text"
                        thousandSeparator
                        decimalScale={2}
                      />
                    </Box>
                    <Box fontSize={12}>
                      <NumberFormat
                        value={modelData.threeToFourPorc}
                        displayType="text"
                        thousandSeparator
                        decimalScale={2}
                      />
                    </Box>
                  </Grid>
                  <Grid xs={4}>
                    <Box fontSize={12}>nbr</Box>
                    <Box fontSize={12}>
                      <NumberFormat
                        value={modelData.studios}
                        displayType="text"
                        thousandSeparator
                        decimalScale={2}
                      />
                    </Box>
                    <Box fontSize={12}>
                      <NumberFormat
                        value={modelData.largeStudios}
                        displayType="text"
                        thousandSeparator
                        decimalScale={2}
                      />
                    </Box>
                    <Box fontSize={12}>
                      <NumberFormat
                        value={modelData.oneBedroom}
                        displayType="text"
                        thousandSeparator
                        decimalScale={2}
                      />
                    </Box>
                    <Box fontSize={12}>
                      <NumberFormat
                        value={modelData.twoBedroom}
                        displayType="text"
                        thousandSeparator
                        decimalScale={2}
                      />
                    </Box>
                    <Box fontSize={12}>
                      <NumberFormat
                        value={modelData.threeBedroom}
                        displayType="text"
                        thousandSeparator
                        decimalScale={2}
                      />
                    </Box>
                    <Box fontSize={12}>
                      <NumberFormat
                        value={modelData.fourBedroom}
                        displayType="text"
                        thousandSeparator
                        decimalScale={2}
                      />
                    </Box>
                    <br />
                    <Box fontSize={12}>
                      <NumberFormat
                        value={0}
                        displayType="text"
                        thousandSeparator
                        decimalScale={2}
                      />
                    </Box>
                    <Box fontSize={12}>
                      <NumberFormat
                        value={0}
                        displayType="text"
                        thousandSeparator
                        decimalScale={2}
                      />
                    </Box>
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
