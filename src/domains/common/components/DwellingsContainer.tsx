import { Grid, makeStyles, createStyles, Box, Divider } from "@material-ui/core";

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
    }
  })
);

interface ownProps {
  img?: any;
}

type Props = ownProps;
const DwellingsContainer = (props: Props) => {
  const { img } = props;
  const classes = useStyles();

  return (
    <Grid item container xs={12}>
      <Grid item container xs={5} justify="center">
        <img alt="basic-volume" src={img} width="80%" />
      </Grid>
      <Grid item container xs={7}>
        <Grid item container xs={12} className={classes.backgroundProject}>
          <Box fontSize={12} className={classes.subtitleStyle}>Dwellings data</Box>
          <Divider className={classes.dividerStyle} />
          <Grid item container xs={12} direction="row">
            <Grid xs={6}>
              <Box fontSize={12} className={classes.textStyle}>Total units (nbr)</Box>
              <Box fontSize={12} className={classes.textStyle}>Dwellings density (du/ha)</Box>
              <Box fontSize={12} className={classes.textStyle}>Population density (r/ha)</Box>
            </Grid>
            <Grid xs={6}>
              <Box fontSize={12} className={classes.textStyle}>xxxxxxxxxxx</Box>
              <Box fontSize={12} className={classes.textStyle}>xxxxxxxxxxx</Box>
              <Box fontSize={12} className={classes.textStyle}>xxxxxxxxxxx</Box>
            </Grid>
          </Grid>
          <Grid item container xs={12} direction="row">
            <Grid xs={6}>
              <br />
              <Box fontSize={12} className={classes.textStyle}>Avg. bedroom per dwelling (hr/du)</Box>
              <Box fontSize={12} className={classes.textStyle}>Green space per inhabitant (m2)</Box>
            </Grid>
            <Grid xs={6}>
              <br />
              <Box fontSize={12} className={classes.textStyle}>xxxxxxxxxxx</Box>
              <Box fontSize={12} className={classes.textStyle}>xxxxxxxxxxx</Box>
            </Grid>
          </Grid>
          <Grid item container xs={12} direction="row">

            <Grid xs={6}></Grid>
            <Grid xs={2}>
              <br />
              <Box fontSize={12} className={classes.subtitleStyle}>m2</Box>
            </Grid>

            <Grid xs={2}>
              <br />
              <Box fontSize={12} className={classes.subtitleStyle}>%</Box>
            </Grid>

            <Grid xs={2}>
              <br />
              <Box fontSize={12} className={classes.subtitleStyle}>nbr</Box>
            </Grid>
          </Grid>
          <Grid item container xs={12} direction="row">
            <Grid xs={6}>
              <br />
              <Box fontSize={12} className={classes.textStyle}>Studios</Box>
              <Box fontSize={12} className={classes.textStyle}>Large studios</Box>
              <Box fontSize={12} className={classes.textStyle}>One bedroom</Box>
              <Box fontSize={12} className={classes.textStyle}>Two bedroom</Box>
              <Box fontSize={12} className={classes.textStyle}>Three bedroom</Box>
              <Box fontSize={12} className={classes.textStyle}>Four bedroom</Box>
            </Grid>
            <Grid xs={2}>
              <br />
              <Box fontSize={12} className={classes.textStyle}>xxxxxx</Box>
              <Box fontSize={12} className={classes.textStyle}>xxxxxx</Box>
              <Box fontSize={12} className={classes.textStyle}>xxxxxx</Box>
              <Box fontSize={12} className={classes.textStyle}>xxxxxx</Box>
              <Box fontSize={12} className={classes.textStyle}>xxxxxx</Box>
              <Box fontSize={12} className={classes.textStyle}>xxxxxx</Box>
            </Grid>
            <Grid xs={2}>
              <br />
              <Box fontSize={12} className={classes.textStyle}>xxxxxx</Box>
              <Box fontSize={12} className={classes.textStyle}>xxxxxx</Box>
              <Box fontSize={12} className={classes.textStyle}>xxxxxx</Box>
              <Box fontSize={12} className={classes.textStyle}>xxxxxx</Box>
              <Box fontSize={12} className={classes.textStyle}>xxxxxx</Box>
              <Box fontSize={12} className={classes.textStyle}>xxxxxx</Box>
            </Grid>
            <Grid xs={2}>
              <br />
              <Box fontSize={12} className={classes.textStyle}>xxxxxx</Box>
              <Box fontSize={12} className={classes.textStyle}>xxxxxx</Box>
              <Box fontSize={12} className={classes.textStyle}>xxxxxx</Box>
              <Box fontSize={12} className={classes.textStyle}>xxxxxx</Box>
              <Box fontSize={12} className={classes.textStyle}>xxxxxx</Box>
              <Box fontSize={12} className={classes.textStyle}>xxxxxx</Box>
            </Grid>
          </Grid>
        </Grid>
      </Grid>

    </Grid>
  )
}

export default DwellingsContainer;