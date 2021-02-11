import { AppBar, createStyles, IconButton, makeStyles, Theme, Toolbar } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import React from 'react';
import logo from 'assets/logo-small.png';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    header: {
      paddingTop: 20,
    },
    menuButton: {
      marginLeft: 'auto',
    },
    member: {
      fontSize: 12,
      marginRight: 5,
    }
  })
);

const Header = () => {
  const classes = useStyles();
  return (
    <AppBar position="static" elevation={0} className={classes.header}>
      <Toolbar variant="regular">
        <img src={logo} alt="logo" width={100} />
        <div className={classes.menuButton}>
          <span className={classes.member}>become a member</span>
          <IconButton edge="end">
            <MenuIcon />
          </IconButton>
        </div>
      </Toolbar>
    </AppBar>
  );
}

export default Header;
