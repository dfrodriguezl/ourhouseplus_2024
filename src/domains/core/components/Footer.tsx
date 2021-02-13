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
      fontSize: 16,
      lineHeight: '20px'
    },
    footer: {
      fontSize: 12,
      padding: theme.spacing(2, 2),
      backgroundColor: theme.palette.primary.dark,
      lineHeight: '16px'
    },
  })
);

type Props = RouteComponentProps;
const Footer = (props: Props) => {
  const classes = useStyles()
  return (
    <Grid container item className={classes.root} xs={12} justify="flex-end">
      <footer className={classes.footer}>
        <Box color="textPrimary" className={classes.about}><Link to="/about">about rea</Link></Box>
        <Box><Link to="/how-it-works">how rea works</Link></Box>
        <Box><Link to="/news">news</Link></Box>
        <Box><Link to="/leadership">rea leadership</Link> </Box>
        <Box><Link to="/jobs">job opportunities</Link></Box>
        <Box><Link to="/investors">investors</Link></Box>
        <Box><Link to="/contact-us">contact rea</Link></Box>
        <div style={{ paddingBottom: 5 }} />
        {/* <Copyright /> */}
        <Divider orientation="horizontal" />
        <div style={{ paddingBottom: 5 }} />
        Rea @ 2021
      </footer>
    </Grid>
  );
}

const container = compose<Props, {}>(
  withRouter,
)(Footer)

export default container;
