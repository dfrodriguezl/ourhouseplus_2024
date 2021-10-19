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
const CommercialContainer = (props: Props) => {
  const { img } = props;
  const classes = useStyles();

  return (
    <Grid item container xs={12}>
      <Grid item container xs={5} justify="center">
      </Grid>
      <Grid item container xs={7}>
        <Grid item container xs={12} className={classes.backgroundProject}>
          <Box fontSize={12} className={classes.subtitleStyle}>Commercial & freespace data </Box>
          <Divider className={classes.dividerStyle} />
          <Grid item container xs={12} direction="row">
            <Grid xs={6}>
              <Box fontSize={12} className={classes.textStyle}>Ground floor free space (m2)</Box>
              <Box fontSize={12} className={classes.textStyle}>Multiple floor free space (m2)</Box>
            </Grid>
            <Grid xs={6}>
              <Box fontSize={12} className={classes.textStyle}>0</Box>
              <Box fontSize={12} className={classes.textStyle}>0</Box>
            </Grid>
          </Grid>
        </Grid>
      </Grid>

    </Grid>
  )
}

export default CommercialContainer;