import React from 'react';
import { Container, Grid, Box, makeStyles, Theme, Avatar, useTheme, Typography, Button } from '@material-ui/core';
import { useHistory } from 'react-router-dom';
import { FeasibilityIcon, FinancialIcon, PdfIcon, PreArchitectureIcon, SquareIcon, BuildingIcon, videoSmall } from 'assets';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { ImgVideo } from 'domains/common/components';
import { useTranslation } from 'react-i18next';

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
  boldText: {
    fontWeight: 'bolder'
  },
  centerText: {
    textAlign: 'left'
  },
  subtitle1: {
    margin: '40px 20px 10px',
    lineHeight: 1.3
  },
  subtitle2: {
    margin: '20px 20px 20px',
    lineHeight: 1.3,
    fontWeight: 'lighter'
  },
  itemText: {
    textTransform: 'capitalize',
    color: '#6F6E6E'
  },
  buttonGreen: {
    cursor: 'pointer',
    borderRadius: 20,
    backgroundColor: 'transparent',
    color: '#6F6E6E',
    textTransform: 'none',
    padding: '-10px 10px',
    borderColor: '#6F6E6E',
    lineHeight: 0,
    margin: '0px 15px 20px'
  },
}));

const HomeSub2 = () => {
  const classes = styles();

  const history = useHistory();

  const isWaiting = history.location.pathname.indexOf('register') > -1;
  const theme = useTheme();
  const smallScreen = useMediaQuery(theme.breakpoints.down("sm"));
  const { t } = useTranslation();

  const toGetStarted = () => {
    window.scrollTo(0, 0);
  }


  return (
    <div className={!smallScreen ? isWaiting ? "home-sub-1-waiting" : "home-sub-1" : "home-sub-1-small"}>
      <Container >
        {!smallScreen ?
          <Grid container>
            <Grid item xs={12} className={classes.title}>
              <Box component="h2" color="primary">PRE-DEVELOPMENT PROPERTY INTEGRATION</Box>
            </Grid>
            <Grid item container xs={12} style={{ justifyContent: 'center' }}>
              <Box className={classes.minContent}>
                <Avatar className={classes.avatarGray}>
                  <img src={SquareIcon} width="30px" alt="square" />
                </Avatar>
                <h4>LOT</h4>
                <p className={classes.textSize}>You own or will buy a property to develop.</p>
              </Box>
              <Box className={classes.minContent}>
                <Avatar className={classes.avatarBlack}>
                  <img src={FeasibilityIcon} width="30px" alt="feasibility" />
                </Avatar>
                <h4>FEASIBILITY</h4>
                <p className={classes.textSize}>REA will analyse zoning codes & demographic data.</p>
              </Box>
              <Box className={classes.minContent}>
                <Avatar className={classes.avatarBlack}>
                  <img src={PreArchitectureIcon} width="30px" alt="pre-architecture" />
                </Avatar>
                <h4>PRE-ARCHITECTURE</h4>
                <p className={classes.textSize}>REA will generate a project in real-time to access FAR, LUR and Units.</p>
              </Box>
              <Box className={classes.minContent}>
                <Avatar className={classes.avatarGray}>
                  <img src={FinancialIcon} width="20px" alt="financial" />
                </Avatar>
                <h4>FINANCIAL ANALYSIS</h4>
                <p className={classes.textSize}>With the project summary numbers given, make you financial analysis.</p>
              </Box>
              <Box className={classes.minContent}>
                <Avatar className={classes.avatarBlack}>
                  <img src={PdfIcon} width="30px" alt="pdf" />
                </Avatar>
                <h4>PROJECT TEASER</h4>
                <p className={classes.textSize}>REA create a project investor/bank and client teaser pdf.</p>
              </Box>
              <Box className={classes.minContent}>
                <Avatar className={classes.avatarGray}>
                  <img src={BuildingIcon} width="30px" alt="building" />
                </Avatar>
                <h4>DEVELOPMENT</h4>
                <p className={classes.textSize}>Begin pre-sale, building permits of your new housing development.</p>
              </Box>
            </Grid>
            <Grid item xs={12} className={classes.subtitle}>
              <Box component="h3" color="primary">with rea</Box>
            </Grid>
          </Grid> :
          <Grid container>
            <Typography variant="h6" className={classes.subtitle1}>
              {t('contractor')} <br />
              <span className={classes.boldText}>{t('begins_here')}.</span>
            </Typography>
            <Typography variant="subtitle2" className={classes.subtitle2}>
              {t('few_clicks')} <br />
              {/* {t('automatically')}. <br /><br />{t('daily_review')}. <br /> */}
              {/* {t('save_time')}. */}
            </Typography>
            <Button className={classes.buttonGreen} variant="outlined" size="small" onClick={() => toGetStarted()}>
              <p className={classes.itemText}>{t('get_started')}</p>
            </Button>
            {/* <ImgVideo img={true} type="small"></ImgVideo>
            <Grid container justify='flex-end'>
              <Button className={classes.buttonGreen} variant="outlined" size="small" onClick={() => toGetStarted()}>
                <p className={classes.itemText}>Get Started</p>
              </Button>
            </Grid> */}

          </Grid>
        }

      </Container>
    </div>
  );
}

export default HomeSub2;
