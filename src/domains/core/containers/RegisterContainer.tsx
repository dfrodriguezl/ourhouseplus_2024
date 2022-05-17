import React, { Fragment } from 'react';
import { Grid, Fab } from '@material-ui/core';
import { HomeSubCarrousel, PageContainer } from 'domains/core/containers';
import { useHistory } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import KeyboardArrowDown from '@material-ui/icons/KeyboardArrowDown';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useTheme } from '@material-ui/core/styles';
import { HomeSub1 } from 'domains/core/containers';
import { ImgVideo } from 'domains/common/components';
import HomeSub2 from './HomeSub2';
import HomeSub3 from './HomeSub3';
import HomeSubVideo from './HomeSubVideo';
import { FooterEmbebbed } from '../components';

const useStyles = makeStyles((theme) => ({
  fab: {
    backgroundColor: "rgba(240, 224, 216, 0.7)",
    width: 43,
    height: 43
  },
  icon_works: {
    color: 'black',
  },
  textContainer: {
    // paddingLeft: '25px',
    [theme.breakpoints.down('sm')]: {
      // paddingLeft: '15px',
    },
  }
}));


interface OwnProps {
  children?: any;
}

const RegisterContainer = (props: OwnProps) => {
  const classes = useStyles();
  const theme = useTheme();
  const smallScreen = useMediaQuery(theme.breakpoints.down("sm"));

  const { children } = props;
  const history = useHistory();

  const isWaiting = history.location.pathname.indexOf('waiting') > -1;

  const handleScroll = () => {
    window.scroll({
      top: document.body.offsetHeight,
      left: 0,
      behavior: 'smooth'
    });
  }

  return (
    <Fragment>
      <PageContainer background={smallScreen ? "home-register" : "waiting-back"}>
        <Grid container item sm={12} xs={12} style={{ marginTop: 50 }}>
          <Grid container item sm={12} xs={12} className={classes.textContainer}>
            {children}
            {!smallScreen ?
              <Grid container item xs={12} sm={12} style={{ alignSelf: 'flex-end' }}>
                <FooterEmbebbed />
              </Grid> : null}


          </Grid>
          {/* {!smallScreen ?
            <Grid item container sm={6} xs={12}>
              <ImgVideo></ImgVideo>
            </Grid> : null
          } */}

        </Grid>
        {/* {!smallScreen ?
          <Grid item sm={12} style={{ alignSelf: 'flex-end', textAlign: 'center' }}>
            {
              !isWaiting ?
                <Fragment>
                  <Fab size="small" className={classes.fab} >
                    <KeyboardArrowDown fontSize="large" className={classes.icon_works} onClick={handleScroll}></KeyboardArrowDown>
                  </Fab>
                  <p style={{ fontSize: 12 }}>Learn how it works</p>
                </Fragment> : null
            }

          </Grid> : null
        } */}

      </PageContainer>
      {
        !isWaiting && smallScreen ?
          <Fragment>
            <HomeSub2 />
            {/* <HomeSub3 /> */}
            <HomeSub1 />
            {/* <HomeSubCarrousel /> */}
            <HomeSubVideo />
          </Fragment>
          : null
      }

    </Fragment>

  );
}

export default RegisterContainer;
