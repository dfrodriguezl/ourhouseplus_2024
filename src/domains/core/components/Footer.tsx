import React from 'react';
import { Box, createStyles, Divider, Grid, makeStyles, Theme } from '@material-ui/core';
import { RouteComponentProps, withRouter } from 'react-router-dom';
import { compose } from 'recompose';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
      flexDirection: 'column'
    },
    footer: {
      fontSize: 12,
      padding: theme.spacing(2, 2),
      backgroundColor: theme.palette.primary.dark,
    },
  })
);

type Props = RouteComponentProps;
const Footer = (props: Props) => {
  const classes = useStyles()
  return (
    <Grid container item className={classes.root} xs={12} justify="flex-end">
      <footer className={classes.footer}>
        <Box color="textPrimary" fontWeight="bold">about rea</Box>
        <Box>how rea works</Box>
        <Box>news</Box>
        <Box>rea leadership</Box>
        <Box>job opportunities</Box>
        <Box>investors</Box>
        <Box>contact rea</Box>
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
