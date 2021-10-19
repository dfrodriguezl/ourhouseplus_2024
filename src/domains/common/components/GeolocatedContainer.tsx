import { Grid, makeStyles, createStyles, Box, Typography } from "@material-ui/core";

const useStyles = makeStyles(() =>
  createStyles({
    backgroundProject: {
      background: '#FF6C6C8A 0% 0% no-repeat padding-box',
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
    subtitleStyle: {
      fontWeight: 'bolder',
      color: 'white'
    },
    dividerStyle: {
      background: '#707070',
      width: '100%',
      margin: '5px 0px'
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
  })
);

interface ownProps {
  img?: any;
}

type Props = ownProps;
const GeolocatedContainer = (props: Props) => {
  const { img } = props;
  const classes = useStyles();

  return (
    <Grid item container xs={12}>
      <Grid item container xs={5} justify="center">
      </Grid>
      <Grid item container xs={7}>
        <Grid item container xs={12} className={classes.backgroundProject}>
          <Typography className={classes.titleStyle}>Geolocalized data</Typography>
          <Grid item container xs={12}>
            <Grid item container xs={6}>
              <Grid xs={7}>
                <Box fontSize={12} className={classes.textStyle}>Avg. inhabitant by location</Box>
                <Box fontSize={12} className={classes.textStyle}>Avg. age inhabitant by location</Box>
                <Box fontSize={12} className={classes.textStyle}>Housing deficit in 400m(Cir.)</Box>
              </Grid>
              <Grid xs={5}>
                <Box fontSize={12} className={classes.textStyle}>xxxxxxxxxxx</Box>
                <Box fontSize={12} className={classes.textStyle}>xxxxxxxxxxx</Box>
                <Box fontSize={12} className={classes.textStyle}>xxxxxxxxxxx</Box>
              </Grid>
            </Grid>
            <Grid item container xs={6}>
              <Grid xs={7}>
                <Box fontSize={12} className={classes.textStyle}>Nbr tansport nodes in 400m(Cir)</Box>
                <Box fontSize={12} className={classes.textStyle}>Distance to nearest university</Box>
                <Box fontSize={12} className={classes.textStyle}>Distance to nearest mall</Box>
              </Grid>
              <Grid xs={5}>
                <Box fontSize={12} className={classes.textStyle}>xxxxxxxxxxx</Box>
                <Box fontSize={12} className={classes.textStyle}>xxxxxxxxxxx</Box>
                <Box fontSize={12} className={classes.textStyle}>xxxxxxxxxxx</Box>
              </Grid>
            </Grid>
          </Grid>

        </Grid>
      </Grid>

    </Grid>
  )
}

export default GeolocatedContainer;