import React, {Fragment} from 'react';
import { compose } from 'recompose';
import { Box, Container, createStyles, Grid, makeStyles, Theme, Typography } from '@material-ui/core';
import { Link, RouteComponentProps, withRouter } from 'react-router-dom';
import { Facebook, Instagram, LinkedIn } from '@material-ui/icons';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useTheme } from '@material-ui/core/styles';

import { logoSmallWhite } from 'assets'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
      flexDirection: 'row',
      backgroundColor: '#010100'
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
    links:{
      marginRight: 10
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
    socialButtons:{
      [theme.breakpoints.down('sm')]: {
        marginTop: 15,
        textAlign: 'center',
      }
    },
    item: {
      marginRight: 70,
      [theme.breakpoints.down('sm')]: {
        marginRight: 0,
        display: 'block',
        textAlign: 'center',
      }
    }
  })
);

interface propsClasses {
  classes: any;
}

type Props = RouteComponentProps;
const Footer = (props: Props) => {
  const classes = useStyles()
  const theme = useTheme();
  const smallScreen = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Grid container item className={classes.root} xs={12}>
      <Container maxWidth="lg">
        <footer className={classes.footer}>
          <Grid container>
            <Grid item xs={12} sm={6}>
              <Box component="span" fontSize={14} lineHeight={1.7} className={classes.item}><Link to="/about">About</Link></Box>
              <Box component="span" fontSize={14} lineHeight={1.7} className={classes.item}><Link to="/how-it-works">How it works</Link></Box>
              <Box component="span" fontSize={14} lineHeight={1.7} className={classes.item}><Link to="/news">News</Link></Box>
              <Box component="span" fontSize={14} lineHeight={1.7} className={classes.item}><Link to="/contact-us">Contact</Link></Box>
            </Grid>
            {smallScreen?
              <Fragment>
                <SocialNetwork classes={classes}/>
                <Grid item xs={12} sm={5}>
                  <div className={classes.bottomLinks}>
                    <Box fontSize={10} color='white'>
                      Copyright © 2021 rea. All rights reserved
                    </Box>
                  </div>
                </Grid>
              </Fragment>:
              <Fragment>
                <Grid item xs={12} sm={5}>
                  <div className={classes.bottomLinks}>
                    <Box fontSize={10} color='white'>
                      Copyright © 2021 rea. All rights reserved
                    </Box>
                  </div>
                </Grid>
                <SocialNetwork classes={classes}/>
              </Fragment>
          }
          </Grid>
          
        </footer>
      </Container>
    </Grid>
  );
}

const SocialNetwork = (propsClasses:propsClasses) => {

  const {classes} = propsClasses;

  return (
    <Grid item xs={12} sm={1} className={classes.socialButtons} style={{ alignSelf: 'flex-end' }}>
      <a href="https://www.linkedin.com/company/rea-web/" className={classes.links}>
            <LinkedIn />
        </a>
        <a href="https://www.linkedin.com/company/rea-web/" className={classes.links}>
            <Facebook />
        </a>
        <a href="https://www.linkedin.com/company/rea-web/">
            <Instagram />
        </a> 
      </Grid>
  )
  
}

const container = compose<Props, {}>(
  withRouter,
)(Footer)

export default container;
