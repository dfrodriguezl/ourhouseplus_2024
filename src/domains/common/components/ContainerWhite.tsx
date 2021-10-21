import { Grid, makeStyles, Typography, createStyles, Box, Divider } from "@material-ui/core";
import { ModelData } from "domains/shapeDiver/models";
import NumberFormat from "react-number-format";

const useStyles = makeStyles(() =>
  createStyles({
    backgroundProject: {
      background: '#DDDBDB 0% 0% no-repeat padding-box',
      width: '100%',
      marginTop: 20,
      display: 'flex',
      padding: '15px 15px',
      marginBottom: 50,
      '&:hover': {
        backgroundColor: '#FFFFFF33'
      },
      borderRadius: '20px'
    },
    titleStyle: {
      color: 'white',
      fontWeight: "bolder"
    },
    subtitleStyle: {
      fontWeight: 'bolder'
    },
    dividerStyle: {
      background: '#707070',
      width: '100%',
      margin: '5px 0px'
    },
    textStyle: {
      color: '#000000',
      fontWeight: "lighter"
    },
    textStyleUnable: {
      color: '#626262',
      fontWeight: "lighter"
    }
  })
);

interface ownProps {
  img?: any;
  modelData?: ModelData;
}

type Props = ownProps;
const ContainerWhite = (props: Props) => {
  const { img, modelData } = props;
  const classes = useStyles();

  return (
    <Grid item container xs={12}>
      <Grid item container xs={5} justify="center">
        <img alt="basic-volume" src={img} width="80%" />
      </Grid>
      <Grid item container xs={7}>
        <Typography className={classes.titleStyle}>Volume Data</Typography>
        <Grid item container xs={12} className={classes.backgroundProject}>
          <Box fontSize={12} className={classes.subtitleStyle}>Island / Net</Box>
          <Divider className={classes.dividerStyle} />
          <Grid item container xs={12} direction="row">
            <Grid xs={3}>
              <Box fontSize={12} className={classes.textStyle}>Gross land area</Box>
              <br />
              <Box fontSize={12} className={classes.textStyle}>
                <NumberFormat
                  value={modelData?.totalLandArea}
                  displayType="text"
                  thousandSeparator
                  decimalScale={2}
                />
              </Box>
            </Grid>
            <Grid xs={2}>
              <Box fontSize={12} className={classes.textStyle}>LUR net</Box>
              <br />
              <Box fontSize={12} className={classes.textStyle}>
                <NumberFormat
                  value={modelData?.landUserRatioNet}
                  displayType="text"
                  thousandSeparator
                  decimalScale={2}
                />
              </Box>
            </Grid>
            <Grid xs={2}>
              <Box fontSize={12} className={classes.textStyle}>FAR net</Box>
              <br />
              <Box fontSize={12} className={classes.textStyle}>
                <NumberFormat
                  value={modelData?.floorAreaRatioNet}
                  displayType="text"
                  thousandSeparator
                  decimalScale={2}
                />
              </Box>
            </Grid>
            <Grid xs={2}>
              <Box fontSize={12} className={classes.textStyle}>OSR net</Box>
              <br />
              <Box fontSize={12} className={classes.textStyle}>
                <NumberFormat
                  value={(1 - modelData?.landUserRatioNet!) / modelData?.floorAreaRatioNet!}
                  displayType="text"
                  decimalScale={2}
                />
              </Box>
            </Grid>
            <Grid xs={2}>
              <Box fontSize={12} className={classes.textStyle}>L net</Box>
              <br />
              <Box fontSize={12} className={classes.textStyle}>
                <NumberFormat
                  value={modelData?.floorAreaRatioNet! / modelData?.landUserRatioNet!}
                  displayType="text"
                  decimalScale={2}
                />
              </Box>
            </Grid>
          </Grid>
          <Divider className={classes.dividerStyle} />
          <Box fontSize={12} className={classes.subtitleStyle}>Fabric / Gross</Box>
          <Divider className={classes.dividerStyle} />
          <Grid item container xs={12} direction="row">
            <Grid xs={3}>
              <Box fontSize={12} className={classes.textStyle}>Gross land area</Box>
              <br />
              <Box fontSize={12} className={classes.textStyle}>
                <NumberFormat
                  value={modelData?.totalLandArea}
                  displayType="text"
                  thousandSeparator
                  decimalScale={2}
                />
              </Box>
            </Grid>
            <Grid xs={2}>
              <Box fontSize={12} className={classes.textStyle}>LUR gross</Box>
              <br />
              <Box fontSize={12} className={classes.textStyle}>
                <NumberFormat
                  value={modelData?.landUserRatioGross}
                  displayType="text"
                  thousandSeparator
                  decimalScale={2}
                />
              </Box>
            </Grid>
            <Grid xs={2}>
              <Box fontSize={12} className={classes.textStyle}>FAR gross</Box>
              <br />
              <Box fontSize={12} className={classes.textStyle}>
                <NumberFormat
                  value={modelData?.floorAreaRatioGross}
                  displayType="text"
                  thousandSeparator
                  decimalScale={2}
                />
              </Box>
            </Grid>
            <Grid xs={2}>
              <Box fontSize={12} className={classes.textStyle}>OSR gross</Box>
              <br />
              <Box fontSize={12} className={classes.textStyle}>
                <NumberFormat
                  value={(1 - modelData?.landUserRatioGross!) / modelData?.floorAreaRatioGross!}
                  displayType="text"
                  decimalScale={2}
                />
              </Box>
            </Grid>
            <Grid xs={2}>
              <Box fontSize={12} className={classes.textStyle}>L gross</Box>
              <br />
              <Box fontSize={12} className={classes.textStyle}>
                <NumberFormat
                  value={modelData?.floorAreaRatioGross! / modelData?.landUserRatioGross!}
                  displayType="text"
                  decimalScale={2}
                />
              </Box>
            </Grid>
          </Grid>

          <Grid item container xs={12} direction="row">
            <Grid xs={3}>
              <br />
              <Box fontSize={12} className={classes.textStyle}>Building height (m)</Box>
              <br />
              <Box fontSize={12} className={classes.textStyle}>
                <NumberFormat
                  value={modelData?.mostHeightBuilding}
                  displayType="text"
                  thousandSeparator
                  decimalScale={2}
                />
              </Box>
            </Grid>
            <Grid xs={2}>
              <br />
              <Box fontSize={12} className={classes.textStyleUnable}>N</Box>
              <br />
              <Box fontSize={12} className={classes.textStyleUnable}>0</Box>
            </Grid>
            <Grid xs={2}>
              <br />
              <Box fontSize={12} className={classes.textStyleUnable}>w</Box>
              <br />
              <Box fontSize={12} className={classes.textStyleUnable}>0</Box>
            </Grid>
            <Grid xs={2}>
              <br />
              <Box fontSize={12} className={classes.textStyleUnable}>b</Box>
              <br />
              <Box fontSize={12} className={classes.textStyleUnable}>0</Box>
            </Grid>
            <Grid xs={2}>
              <br />
              <Box fontSize={12} className={classes.textStyleUnable}>T</Box>
              <br />
              <Box fontSize={12} className={classes.textStyleUnable}>0</Box>
            </Grid>
          </Grid>
        </Grid>
      </Grid>

    </Grid>
  )
}

export default ContainerWhite;