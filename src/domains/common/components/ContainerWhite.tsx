import { Grid, makeStyles, Typography, createStyles, Box, Divider } from "@material-ui/core";

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
    }
  })
);

interface ownProps {
  img?: any;
}

type Props = ownProps;
const ContainerWhite = (props: Props) => {
  const { img } = props;
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
              <Box fontSize={12} className={classes.textStyle}>xxxxxxxxxxx</Box>
            </Grid>
            <Grid xs={2}>
              <Box fontSize={12} className={classes.textStyle}>LUR net</Box>
              <br />
              <Box fontSize={12} className={classes.textStyle}>xxxxxxxxxxx</Box>
            </Grid>
            <Grid xs={2}>
              <Box fontSize={12} className={classes.textStyle}>FAR net</Box>
              <br />
              <Box fontSize={12} className={classes.textStyle}>xxxxxxxxxxx</Box>
            </Grid>
            <Grid xs={2}>
              <Box fontSize={12} className={classes.textStyle}>OSR net</Box>
              <br />
              <Box fontSize={12} className={classes.textStyle}>xxxxxxxxxxx</Box>
            </Grid>
            <Grid xs={2}>
              <Box fontSize={12} className={classes.textStyle}>L net</Box>
              <br />
              <Box fontSize={12} className={classes.textStyle}>xxxxxxxxxxx</Box>
            </Grid>
          </Grid>
          <Divider className={classes.dividerStyle} />
          <Box fontSize={12} className={classes.subtitleStyle}>Fabric / Gross</Box>
          <Divider className={classes.dividerStyle} />
          <Grid item container xs={12} direction="row">
            <Grid xs={3}>
              <Box fontSize={12} className={classes.textStyle}>Gross land area</Box>
              <br />
              <Box fontSize={12} className={classes.textStyle}>xxxxxxxxxxx</Box>
            </Grid>
            <Grid xs={2}>
              <Box fontSize={12} className={classes.textStyle}>LUR gross</Box>
              <br />
              <Box fontSize={12} className={classes.textStyle}>xxxxxxxxxxx</Box>
            </Grid>
            <Grid xs={2}>
              <Box fontSize={12} className={classes.textStyle}>FAR gross</Box>
              <br />
              <Box fontSize={12} className={classes.textStyle}>xxxxxxxxxxx</Box>
            </Grid>
            <Grid xs={2}>
              <Box fontSize={12} className={classes.textStyle}>OSR gross</Box>
              <br />
              <Box fontSize={12} className={classes.textStyle}>xxxxxxxxxxx</Box>
            </Grid>
            <Grid xs={2}>
              <Box fontSize={12} className={classes.textStyle}>L gross</Box>
              <br />
              <Box fontSize={12} className={classes.textStyle}>xxxxxxxxxxx</Box>
            </Grid>
          </Grid>

          <Grid item container xs={12} direction="row">
            <Grid xs={3}>
              <br />
              <Box fontSize={12} className={classes.textStyle}>Building height (m)</Box>
              <br />
              <Box fontSize={12} className={classes.textStyle}>xxxxxxxxxxx</Box>
            </Grid>
            <Grid xs={2}>
              <br />
              <Box fontSize={12} className={classes.textStyle}>N</Box>
              <br />
              <Box fontSize={12} className={classes.textStyle}>xxxxxxxxxxx</Box>
            </Grid>
            <Grid xs={2}>
              <br />
              <Box fontSize={12} className={classes.textStyle}>w</Box>
              <br />
              <Box fontSize={12} className={classes.textStyle}>xxxxxxxxxxx</Box>
            </Grid>
            <Grid xs={2}>
              <br />
              <Box fontSize={12} className={classes.textStyle}>b</Box>
              <br />
              <Box fontSize={12} className={classes.textStyle}>xxxxxxxxxxx</Box>
            </Grid>
            <Grid xs={2}>
              <br />
              <Box fontSize={12} className={classes.textStyle}>T</Box>
              <br />
              <Box fontSize={12} className={classes.textStyle}>xxxxxxxxxxx</Box>
            </Grid>
          </Grid>
        </Grid>
      </Grid>

    </Grid>
  )
}

export default ContainerWhite;