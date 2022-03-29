import React, { Fragment } from 'react';
import { compose } from 'recompose';
import { Box, Container, createStyles, Grid, makeStyles, Theme, Typography } from '@material-ui/core';
import { Link, RouteComponentProps, withRouter } from 'react-router-dom';
import { Facebook, Instagram, LinkedIn } from '@material-ui/icons';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useTheme } from '@material-ui/core/styles';
import clsx from 'clsx';


const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
      flexDirection: 'row',
      backgroundColor: 'transparent'
    },
    footer: {
      fontSize: 12,
      padding: theme.spacing(2, 2),
      lineHeight: '16px',
      '& a': {
        color: 'white',
        opacity: '89%'
      }
    },
    links: {
      marginRight: 6
    },
    bottomLinks: {
      float: 'right',
      marginRight: 20,
      paddingTop: 5,
      '& img': {
        paddingLeft: 10
      },
      [theme.breakpoints.down('sm')]: {
        textAlign: 'center',
        marginRight: 0,
        float: 'none'
      }
    },
    socialButtons: {
      marginTop: 15,
      textAlign: 'center',
      [theme.breakpoints.down('sm')]: {
        marginTop: 15,
        textAlign: 'center',
      }
    },
    item: {
      // marginRight: 70,
      color: 'white',
      [theme.breakpoints.down('sm')]: {
        marginRight: 0,
        display: 'block',
        textAlign: 'center',
      }
    },
    itemInactive: {
      color: '#434343 !important',
      pointerEvents: 'none',
    },
    textCenter: {
      textAlign: 'center'
    }
  })
);

interface propsClasses {
  classes: any;
}

type Props = RouteComponentProps;
const FooterEmbebbed = (props: Props) => {
  const classes = useStyles()
  const theme = useTheme();
  const smallScreen = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Grid container item className={classes.root} xs={12}>
      <Container maxWidth={false}>
        <footer className={classes.footer}>
          <Grid container item>
            <Grid item xs={12} sm={12} justify="center" className={classes.textCenter}>
              <Typography variant="subtitle1" className={classes.item}> GO TO OUR MOBILE SITE FOR AN APPOINTMENT</Typography>
              {/* <Box component="span" fontSize={14} lineHeight={1.7} className={classes.item}><Link to="/about">About</Link></Box>
              <Box component="span" fontSize={14} lineHeight={1.7} className={classes.item}><Link className={classes.itemInactive} to="/how-it-works">How it works</Link></Box>
              {/* <Box component="span" fontSize={14} lineHeight={1.7} className={classes.item}><Link className={classes.itemInactive} to="/news">News</Link></Box> */}
              {/* <Box component="span" fontSize={14} lineHeight={1.7} className={classes.item}><Link className={classes.itemInactive} to="/contact-us">Contact</Link></Box> */}
            </Grid>
            {smallScreen ?
              <Fragment>
                {/* <SocialNetwork classes={classes} /> */}
                {/* <Grid item xs={12} sm={12}>
                  <div className={classes.bottomLinks}>
                    <Box fontSize={10} color='white'>
                      Copyright © 2022 House+. All rights reserved
                    </Box>
                  </div>
                </Grid> */}
              </Fragment> :
              <Fragment>
                <Grid item container xs={12} sm={12} justify="center">
                  <SocialNetwork classes={classes} />
                  {/* <div className={classes.bottomLinks}>
                    <Box fontSize={10} color='white'>
                      Copyright © 2022 House+. All rights reserved
                    </Box>
                  </div> */}
                </Grid>

              </Fragment>
            }
          </Grid>

        </footer>
      </Container>
    </Grid>
  );
}

const SocialNetwork = (propsClasses: propsClasses) => {

  const { classes } = propsClasses;

  return (
    <Grid item container xs={12} sm={12} className={classes.socialButtons} justify="center">
      <a href="https://www.linkedin.com/company/rea-web/" className={classes.links} target="_blank" rel="noreferrer">
        <LinkedIn />
      </a>
      <a href="https://www.linkedin.com/company/rea-web/" className={clsx(classes.links, true && classes.itemInactive, true)}>
        <Facebook />
      </a>
      <a href="https://www.instagram.com/rea_cities/?hl=en" className={classes.links} target="_blank" rel="noreferrer">
        <Instagram />
      </a>
    </Grid>
  )

}

const container = compose<Props, {}>(
  withRouter,
)(FooterEmbebbed)

export default container;
