import React from 'react';
import { compose } from 'recompose';
import { createStyles, Grid, makeStyles, Theme, Typography } from '@material-ui/core';
import { RouteComponentProps, withRouter } from 'react-router-dom';


const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
      flexDirection: 'row',
      background: '#2A2A2A 0% 0% no-repeat padding-box',
      padding: '20px 50px'
    },
    fontStyle: {
      color: '#FFFFFF',
      font: 'normal normal normal 20px/23px Centaur'
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
    },
    itemInactive: {
      color: '#434343 !important',
      pointerEvents: 'none',
    }
  })
);

type Props = RouteComponentProps;
const Footer = (props: Props) => {
  const classes = useStyles()

  return (
    <Grid container item className={classes.root} xs={12} justify="flex-end">
      <Typography className={classes.fontStyle}>HOUSE COLLECTION By HOUSE+</Typography>
    </Grid>
  );
}

const container = compose<Props, {}>(
  withRouter,
)(Footer)

export default container;
