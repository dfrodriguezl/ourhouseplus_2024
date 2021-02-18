import React from 'react';
import { Box, createStyles, Divider, Grid, makeStyles, Theme } from '@material-ui/core';
import { Link, RouteComponentProps, withRouter } from 'react-router-dom';
import { compose } from 'recompose';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
      flexDirection: 'column'
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
      <footer className={classes.footer}>
        <Box className={classes.about}><Link to="/about">About REA</Link></Box>
        <Box><Link to="/how-it-works">how rea works</Link></Box>
        <Box><Link to="/leadership">rea leadership</Link> </Box>
        <Box><Link to="/news">news</Link></Box>
        <Box><Link to="/investors">investors</Link></Box>
        <div style={{ paddingBottom: 5 }} />
        {/* <Copyright /> */}
        <Divider orientation="horizontal" />
        <div className={classes.bottomLinks}>
          <Link to="/home">Rea @ 2021</Link>
          <Link to="/contact-us">Contact Us</Link>
          <Link to="/contact-us">Site</Link>
          <Link to="/contact-us">Help</Link>
          <Link to="/contact-us">Privacy & Legal</Link>
        </div>
      </footer>
    </Grid>
  );
}

const container = compose<Props, {}>(
  withRouter,
)(Footer)

export default container;
