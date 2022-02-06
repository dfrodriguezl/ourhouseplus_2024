import React from 'react';
import { Container, Grid, Box, makeStyles, Theme, Avatar } from '@material-ui/core';
import { useHistory } from 'react-router-dom';
import { FeasibilityIcon, FinancialIcon, PdfIcon, PreArchitectureIcon, SquareIcon, BuildingIcon } from 'assets';

const styles = makeStyles((theme: Theme) => ({
  title: {
    paddingTop: 40,
    textAlign: 'center',
    marginBottom: 40
  },
  avatarGray: {
    backgroundColor: "#989696",
    color: "#707070",
    width: theme.spacing(10),
    height: theme.spacing(10),
    margin: 'auto'
  },
  avatarBlack: {
    backgroundColor: "#000000",
    color: "#707070",
    width: theme.spacing(10),
    height: theme.spacing(10),
    margin: 'auto'
  },
  minContent: {
    width: 'min-content',
    textAlign: 'center',
    marginRight: theme.spacing(1),
    paddingLeft: 50,
    paddingRight: 50
  },
  textSize: {
    fontSize: 13,
    color: "#666666"
  },
  subtitle: {
    paddingTop: 10,
    textAlign: 'center',
    marginBottom: 10
  },
}));

const HomeSub2 = () => {
  const classes = styles();

  const history = useHistory();

  const isWaiting = history.location.pathname.indexOf('register') > -1;


  return (
    <div className={isWaiting ? "home-sub-1-waiting" : "home-sub-1"}>
      <Container >
        <Grid container>
          <Grid item xs={12} className={classes.title}>
            <Box component="h2" color="primary">PRE-DEVELOPMENT PROPERTY INTEGRATION</Box>
          </Grid>
          <Grid item container xs={12} style={{ justifyContent: 'center' }}>
            <Box className={classes.minContent}>
              <Avatar className={classes.avatarGray}>
                <img src={SquareIcon} width="30px" />
              </Avatar>
              <h4>LOT</h4>
              <p className={classes.textSize}>You own or will buy a property to develop.</p>
            </Box>
            <Box className={classes.minContent}>
              <Avatar className={classes.avatarBlack}>
                <img src={FeasibilityIcon} width="30px" />
              </Avatar>
              <h4>FEASIBILITY</h4>
              <p className={classes.textSize}>REA will analyse zoning codes & demographic data.</p>
            </Box>
            <Box className={classes.minContent}>
              <Avatar className={classes.avatarBlack}>
                <img src={PreArchitectureIcon} width="30px" />
              </Avatar>
              <h4>PRE-ARCHITECTURE</h4>
              <p className={classes.textSize}>REA will generate a project in real-time to access FAR, LUR and Units.</p>
            </Box>
            <Box className={classes.minContent}>
              <Avatar className={classes.avatarGray}>
                <img src={FinancialIcon} width="20px" />
              </Avatar>
              <h4>FINANCIAL ANALYSIS</h4>
              <p className={classes.textSize}>With the project summary numbers given, make you financial analysis.</p>
            </Box>
            <Box className={classes.minContent}>
              <Avatar className={classes.avatarBlack}>
                <img src={PdfIcon} width="30px" />
              </Avatar>
              <h4>PROJECT TEASER</h4>
              <p className={classes.textSize}>REA create a project investor/bank and client teaser pdf.</p>
            </Box>
            <Box className={classes.minContent}>
              <Avatar className={classes.avatarGray}>
                <img src={BuildingIcon} width="30px" />
              </Avatar>
              <h4>DEVELOPMENT</h4>
              <p className={classes.textSize}>Begin pre-sale, building permits of your new housing development.</p>
            </Box>
          </Grid>
          <Grid item xs={12} className={classes.subtitle}>
            <Box component="h3" color="primary">with rea</Box>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

export default HomeSub2;
