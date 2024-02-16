import React, { Fragment } from 'react';
import { compose } from 'recompose';
import { Box, Container, createStyles, Grid, makeStyles, Theme, Typography } from '@material-ui/core';
import { Link, RouteComponentProps, withRouter } from 'react-router-dom';
import { Facebook, Instagram, LinkedIn } from '@material-ui/icons';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useTheme } from '@material-ui/core/styles';
import clsx from 'clsx';
import { useTranslation } from 'react-i18next';


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

interface propsClasses {
  classes: any;
}

type Props = RouteComponentProps;
const Footer = (props: Props) => {
  const classes = useStyles()
  const theme = useTheme();
  const smallScreen = useMediaQuery(theme.breakpoints.down("sm"));
  const { t } = useTranslation();

  return (
    <Grid container item className={classes.root} xs={12} justify="flex-end">
      <Typography className={classes.fontStyle}>HOUSE COLLECTION By HOUSE+</Typography>
    </Grid>
  );
}

const SocialNetwork = (propsClasses: propsClasses) => {

  const { classes } = propsClasses;

  return (
    <Grid item xs={12} sm={1} className={classes.socialButtons} style={{ alignSelf: 'flex-end' }}>
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
)(Footer)

export default container;
