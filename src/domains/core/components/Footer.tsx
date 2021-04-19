import React from 'react';
import { Box, Container, createStyles, Divider, Grid, makeStyles, Theme } from '@material-ui/core';
import { Link, RouteComponentProps, withRouter } from 'react-router-dom';
import { compose } from 'recompose';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
      flexDirection: 'column',
      backgroundColor: '#707070',
      padding: '20px'
    },
    about: {
      fontSize: 14,
      lineHeight: '20px'
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
    bottomLinks: {
      paddingTop: 5,
      '& a': {
        paddingRight: 100,
        fontSize: 10
      }
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
              <Box lineHeight={1.5} className={classes.about}><Link to="/about">About</Link></Box>
              <Box lineHeight={1.5}><Link to="/how-it-works">How rea works</Link></Box>
              <Box lineHeight={1.5}><Link to="/leadership">Leadership</Link> </Box>
              <Box lineHeight={1.5}><Link to="/news">News</Link></Box>
            </Grid>
            <Grid item xs={3}>
              <Box lineHeight={1.5}><Link to="/">Investors</Link></Box>
              <Box lineHeight={1.5}><Link to="/contact-us">Contact rea</Link></Box>
              <Box lineHeight={1.5}><Link to="/">Community</Link> </Box>
              <Box lineHeight={1.5}><Link to="/">Share rea</Link></Box>
              <Box lineHeight={1.5}><Link to="/">Support</Link></Box>
              <Box lineHeight={1.5}><Link to="/">Help center</Link></Box>
            </Grid>
          </Grid>
          <div style={{ paddingBottom: 5 }} />
          {/* <Copyright /> */}
          <Divider orientation="horizontal" />
          <div className={classes.bottomLinks}>
            <Link to="/home">Rea @ 2021</Link>
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
