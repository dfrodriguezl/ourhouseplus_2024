import React from 'react';
import { compose } from 'recompose';
import { Box, Container, createStyles, Grid, makeStyles, Theme } from '@material-ui/core';
import { Link, RouteComponentProps, withRouter } from 'react-router-dom';
import { Facebook, Instagram, LinkedIn } from '@material-ui/icons';

import { logoSmallWhite } from 'assets'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
      flexDirection: 'column',
      backgroundColor: '#707070',
      padding: '20px'
    },
    footer: {
      fontSize: 12,
      padding: theme.spacing(2, 2),
      lineHeight: '16px',
      '& a': {
        color: theme.palette.common.white,
        opacity: '89%'
      }
    },
    links:{
      marginRight: 10
    },
    bottomLinks: {
      float: 'right',
      paddingTop: 5,
      '& img': {
        paddingLeft: 10
      },
    }
  })
);

type Props = RouteComponentProps;
const Footer = (props: Props) => {
  const classes = useStyles()

  return (
    <Grid container item className={classes.root} xs={12} justify="flex-end">
      <Container maxWidth="lg">
        <footer className={classes.footer}>
          <Grid container>
            <Grid item xs={2}>
              <Box fontSize={14} lineHeight={1.7}><Link to="/about">About</Link></Box>
              <Box fontSize={14} lineHeight={1.7}><Link to="/how-it-works">How rea works</Link></Box>
              <Box fontSize={14} lineHeight={1.7}><Link to="/news">News</Link></Box>
              <Box fontSize={14} lineHeight={1.7}><Link to="/leadership">Leadership</Link> </Box>  
              <Box fontSize={14} lineHeight={1.7}><Link to="/">Job opportunities</Link> </Box>
            </Grid>
            <Grid item xs={3}>
              <Box fontSize={14} lineHeight={1.7}><Link to="/">Investors</Link></Box>
              <Box fontSize={14} lineHeight={1.7}><Link to="/contact-us">Contact rea</Link></Box>
              <Box fontSize={14} lineHeight={1.7}><Link to="/">Community</Link> </Box>
              <Box fontSize={14} lineHeight={1.7}><Link to="/">Share rea</Link></Box>
              <Box fontSize={14} lineHeight={1.7}><Link to="/">Support</Link></Box>
              <Box fontSize={14} lineHeight={1.7}><Link to="/">Help center</Link></Box>
            </Grid>
            <Grid item xs={6} />
            <Grid item xs={1}>
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
          </Grid>
          <div className={classes.bottomLinks}>
            <Box fontSize={10} color='white'>
              Copyright © 2021 rea. All rights reserved
              <Link to="/home">
                <img src={logoSmallWhite} width={70} alt="logo" />
              </Link>
            </Box>
          </div>
        </footer>
      </Container>
    </Grid>
  );
}

const container = compose<Props, {}>(
  withRouter,
)(Footer)

export default container;
