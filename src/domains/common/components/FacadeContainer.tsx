import { Grid, makeStyles, createStyles, Box, Typography } from "@material-ui/core";
import { ModelData, Project } from "domains/shapeDiver/models";

const useStyles = makeStyles(() =>
  createStyles({
    backgroundProject: {
      background: '#FFFFFF1A 0% 0% no-repeat padding-box',
      width: '100%',
      marginTop: 20,
      display: 'flex',
      padding: '15px 15px',
      marginBottom: 50,
      '&:hover': {
        backgroundColor: '#FFFFFF33'
      },
      borderRadius: '20px',
    },
    textStyle: {
      color: 'white',
      fontWeight: "lighter",
      margin: '5px 0px'
    },
    titleStyle: {
      color: 'white',
      fontWeight: "bolder"
    },
    textStyleMargin: {
      color: 'white',
      fontWeight: "lighter",
      margin: '0px 20px'
    },
    textStyleMarginResult: {
      color: 'white',
      fontWeight: "lighter",
      margin: '0px 0px'
    },
  })
);

interface ownProps {
  img?: any;
  modelData?: Project;
}

type Props = ownProps;
const FacadeContainer = (props: Props) => {
  const { img, modelData } = props;
  const classes = useStyles();

  return (
    <Grid item container xs={12}>
      <Grid item container xs={5} justify="center">
        <img alt="basic-volume" src={img} width="80%" />
      </Grid>
      <Grid container xs={7} >
        <Grid item container xs={5} className={classes.backgroundProject}>
          <Typography className={classes.titleStyle}>Facade data</Typography>
          <Grid item container xs={12} direction="row">
            <Grid xs={6}>
              <Box fontSize={12} className={classes.textStyle}>Window size</Box>
              <Box fontSize={12} className={classes.textStyle}>Linear meters</Box>
              <Box fontSize={12} className={classes.textStyle}>Facade materials</Box>
              <Box fontSize={12} className={classes.textStyle}>Local suppliers</Box>
              <Box fontSize={12} className={classes.textStyleMargin}>Concrete</Box>
              <Box fontSize={12} className={classes.textStyleMargin}>Windows glass</Box>
              <Box fontSize={12} className={classes.textStyleMargin}>Windows frames</Box>
              <Box fontSize={12} className={classes.textStyleMargin}>Bricks</Box>
            </Grid>
            <Grid xs={6}>
              <Box fontSize={12} className={classes.textStyle}>{modelData?.location.windowPercentage === 0 ? '50%' : modelData?.location.windowPercentage === 1 ? '60%' : '70%' }</Box>
              <Box fontSize={12} className={classes.textStyle}>0</Box>
              <Box fontSize={12} className={classes.textStyle}>0</Box>
              <Box fontSize={12} className={classes.textStyle}>0</Box>
              <Box fontSize={12} className={classes.textStyleMarginResult}>0</Box>
              <Box fontSize={12} className={classes.textStyleMarginResult}>0</Box>
              <Box fontSize={12} className={classes.textStyleMarginResult}>0</Box>
              <Box fontSize={12} className={classes.textStyleMarginResult}>0</Box>
            </Grid>
          </Grid>
        </Grid>
        <Grid xs={2} />
        <Grid item container xs={5} className={classes.backgroundProject}>
          <Typography className={classes.titleStyle}>Flats data</Typography>
          <Grid item container xs={12} direction="row">
            <Grid xs={6}>
              <Box fontSize={12} className={classes.textStyle}>Flat size</Box>
              <Box fontSize={12} className={classes.textStyle}>Room type</Box>
              <Box fontSize={12} className={classes.textStyle}>Finishes</Box>
              <Box fontSize={12} className={classes.textStyle}>Local suppliers</Box>
              <Box fontSize={12} className={classes.textStyleMargin}>Floors</Box>
              <Box fontSize={12} className={classes.textStyleMargin}>Kitchen</Box>
              <Box fontSize={12} className={classes.textStyleMargin}>Bathrooms</Box>
              <Box fontSize={12} className={classes.textStyleMargin}>Walls</Box>
            </Grid>
            <Grid xs={6}>
              <Box fontSize={12} className={classes.textStyle}>{modelData?.location.flatSize === 0 ? 'Small' : modelData?.location.flatSize === 1 ? 'Medium' : 'Large'}</Box>
              <Box fontSize={12} className={classes.textStyle}>{modelData?.roomType === 0 ? 'Close' : modelData?.roomType === 1 ? 'Open' : 'Work'}</Box>
              <Box fontSize={12} className={classes.textStyle}>0</Box>
              <Box fontSize={12} className={classes.textStyle}>0</Box>
              <Box fontSize={12} className={classes.textStyleMarginResult}>0</Box>
              <Box fontSize={12} className={classes.textStyleMarginResult}>0</Box>
              <Box fontSize={12} className={classes.textStyleMarginResult}>0</Box>
              <Box fontSize={12} className={classes.textStyleMarginResult}>0</Box>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  )
}

export default FacadeContainer;