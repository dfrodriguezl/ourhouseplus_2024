import React from 'react';
import { Grid, Theme, Typography } from '@mui/material';


import createStyles from '@mui/styles/createStyles';
import makeStyles from '@mui/styles/makeStyles';


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
      }
    },
    socialButtons: {
    },
    item: {
      marginRight: 70,
    },
    itemInactive: {
      color: '#434343 !important',
      pointerEvents: 'none',
    }
  })
);

const Footer = () => {
  const classes = useStyles()

  return (
    <Grid container item className={classes.root} xs={12} justifyContent="flex-end">
      <Typography className={classes.fontStyle}>HOUSE COLLECTION By HOUSE+</Typography>
    </Grid>
  );
}

export default Footer;
