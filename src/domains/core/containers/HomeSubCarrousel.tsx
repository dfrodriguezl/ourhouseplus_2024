import React from 'react';
import { Container, Grid, Box, makeStyles, Theme, Avatar, useTheme, Typography, Button } from '@material-ui/core';
import { useHistory } from 'react-router-dom';
import { FeasibilityIcon, FinancialIcon, PdfIcon, PreArchitectureIcon, SquareIcon, BuildingIcon, videoSmall, home1Carrousel, background1, house3, house1, house2, house4 } from 'assets';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { ImgVideo } from 'domains/common/components';
import Carousel from 'react-material-ui-carousel';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
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
    margin: '40px 20px 10px'
  },
  subtitle2: {
    margin: '5px 20px 20px'
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
  imgCarrousel: {
    marginTop: 20
  },
  buttonGray: {
    backgroundColor: '#E0E0E0',
    textTransform: 'capitalize',
    borderRadius: 50,
    marginTop: -20,
    marginBottom: 40
  },
  greenText: {
    color: '#2C7217',
    fontSize: 8
  },
  container: {
    padding: 0
  }
}));

const HomeSubVideo = () => {
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
      <Container className={classes.container}>
        <Grid container>
          <Typography variant="h6" style={{ fontWeight: 'bolder', marginLeft: 40 }}>{t('our_app')}</Typography>
          <Carousel
            NextIcon={<ArrowForwardIosIcon fontSize='small' />}
            PrevIcon={<ArrowBackIosIcon fontSize='small' />}
            autoPlay={false}
            indicators={false}
            navButtonsAlwaysVisible={true}
            navButtonsProps={{
              style: {
                backgroundColor: "#FFFFFF00",
                // marginRight: '-15px'
              }
            }}>
            <div>
              <img src={house3} width="100%" className={classes.imgCarrousel} />
              <Grid container justify="center">
              </Grid>
            </div>
            <div>
              <img src={house1} width="100%" className={classes.imgCarrousel} />
              <Grid container justify="center">
              </Grid>
            </div>
            <div>
              <img src={house2} width="100%" className={classes.imgCarrousel} />
              <Grid container justify="center">
              </Grid>
            </div>
            <div>
              <img src={house4} width="100%" className={classes.imgCarrousel} />
              <Grid container justify="center">
              </Grid>
            </div>


          </Carousel>

          {/* <ImgVideo img={true} type="small"></ImgVideo> */}
          {/* <Grid container justify='flex-end'>
            <Button className={classes.buttonGreen} variant="outlined" size="small" onClick={() => toGetStarted()}>
              <p className={classes.itemText}>Get Started</p>
            </Button>
          </Grid> */}
        </Grid>
        {/* } */}

      </Container>
    </div>
  );
}

export default HomeSubVideo;
