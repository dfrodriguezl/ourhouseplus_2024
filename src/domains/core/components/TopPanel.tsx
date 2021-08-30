import { createStyles, Grid, IconButton, makeStyles, Theme, Typography } from '@material-ui/core';
import { cube, investor_inactive } from 'assets';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    topPanel: {
      background: 'transparent linear-gradient(93deg, #D6D5E4 0%, #D9D7E1 52%, #E5DED0 100%) 0% 0% no-repeat padding-box',
      height: '60px'
    },
    iconTop: {
      width: 15,
      height: 15
    },
    textTop: {
      fontSize: 10
    },
  })
);

const TopPanel = () => {
  const classes = useStyles();

  return (
    <Grid container item xs={12} justify="center">
      <Grid item container spacing={0} xs={1} direction="column" alignItems="center">
        <IconButton aria-label="developers">
          <img src={cube} alt="developers" className={classes.iconTop} />
        </IconButton>
        <Typography className={classes.textTop} style={{ textAlign: 'center' }}>
          Developer
        </Typography>
      </Grid>
      <Grid item container spacing={0} xs={1} direction="column" alignItems="center">
        <IconButton aria-label="investors">
          <img src={investor_inactive} alt="investors" className={classes.iconTop} />
        </IconButton>
        <Typography className={classes.textTop}>
          Investor
        </Typography>
      </Grid>
    </Grid>
  )
}

export default TopPanel;
