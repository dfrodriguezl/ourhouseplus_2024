import { AppBar, Button, createStyles, makeStyles, Theme, Toolbar, Drawer, IconButton, MenuItem } from '@material-ui/core';
import { Link, RouteComponentProps, withRouter } from 'react-router-dom';
import MenuIcon from '@material-ui/icons/Menu';
import clsx from 'clsx';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useTheme } from '@material-ui/core/styles';

import logo from 'assets/logo-small.png';
import whiteLogo from 'assets/logo-small-white.png';
import { Mailchimp } from 'domains/common/components';
import { Fragment, useState } from 'react';
import { useAuth0 } from '@auth0/auth0-react';

const drawerWidth = 240;

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    header: {
      padding: '20px 0',
      [theme.breakpoints.down('sm')]: {
        padding: 0,
      },
      background: 'transparent'
    },
    menuButton: {
      marginLeft: 'auto',
      border: '1px white'
    },
    member: {
      fontSize: 14,
      fontWeight: 'bold',
      color: 'black',
      marginRight: 5,
    },
    icons: {
      color: 'black'
    },
    buttons: {
      borderRadius: 15,
      fontWeight: 'bold',
      textTransform: 'none',
    },
    whiteButtons: {
      borderRadius: 15,
      color: 'white',
      textTransform: 'none',
    },
    becomeMember: {
      borderRadius: 15,
      color: 'white',
      textTransform: 'none',
      border: '2px solid white',
      padding: '2px 10px'
    },
    drawer: {
      width: drawerWidth,
      flexShrink: 0,
    },
    drawerPaper: {
      width: drawerWidth,
    },
    menuButton2: {
    },
    hide: {
      display: 'none',
    },
    root: {
      color: "#FFFFFF"
    },
    icon: {
      fontSize: "50px !important"
    }
  })
);

const Header = (props: RouteComponentProps) => {
  const { isAuthenticated, loginWithPopup, logout } = useAuth0();
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const [mobileView, setMobileView] = useState(false);
  const history = props.history;

  const isHome = props.history.location.pathname.indexOf('home') > -1;
  const isRegister = props.history.location.pathname.indexOf('register') > -1;
  const isSignUp = props.history.location.pathname.indexOf('signup') > -1;

  const theme = useTheme();
  const smallScreen = useMediaQuery(theme.breakpoints.down("sm"));


  const handleClose = () => {
    setOpen(false);
  }

  const openRegister = () => {
    history.push('/register');
  }

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    smallScreen ?
      <Fragment>
        <AppBar position="static" elevation={0} className={classes.header}>
          <Toolbar variant="regular">
            <Link to="/home">
              <img src={isHome || isRegister || isSignUp ? logo : whiteLogo} alt="logo" width={100} />
            </Link>

            {!(isRegister || isSignUp) ?
              <div className={classes.menuButton}>
                <IconButton
                  edge="end"
                  color="secondary"
                  aria-label="menu"
                  onClick={handleDrawerOpen}
                  className={clsx(classes.menuButton2 && classes.root, open && classes.hide)}
                >
                  <MenuIcon className={classes.icon} />
                </IconButton>
              </div> : null
            }


            <Drawer
              className={classes.drawer}
              anchor="right"
              open={open}
              onClose={handleDrawerClose}
              classes={{
                paper: classes.drawerPaper,
              }}>
              <div>
                {
                  isAuthenticated
                    ?
                    <Button onClick={() => loginWithPopup()}>
                      <MenuItem>Sign in</MenuItem>
                    </Button>
                    :
                    <Button onClick={() => logout()}>
                      <MenuItem>Sign out</MenuItem>
                    </Button>
                }
                <Button onClick={() => openRegister()}>
                  <MenuItem>Become a member</MenuItem>
                </Button>
              </div>
            </Drawer>


            {/* {
          !(isRegister || isSignUp) || smallScreen?
          <div className={classes.menuButton}>
          <Button className={classes.whiteButtons}>
            Sign in
          </Button>
          <Button className={classes.becomeMember} onClick={() => openRegister()}>
            Become a member
          </Button>
        </div>:null
        } */}

          </Toolbar>
          {/* <Mailchimp open={open} handleClose={handleClose}/> */}
        </AppBar>

      </Fragment>
      :
      <AppBar position="static" elevation={0} className={classes.header}>
        <Toolbar variant="regular">
          <Link to="/home">
            <img src={isHome || isRegister || isSignUp ? logo : whiteLogo} alt="logo" width={100} />
          </Link>
          {
            !(isRegister || isSignUp) ?
              <div className={classes.menuButton}>
                {
                  !isAuthenticated
                    ?
                    <Button className={classes.whiteButtons} onClick={() => loginWithPopup()}>
                      Sign in
                    </Button>
                    :
                    <Button className={classes.whiteButtons} onClick={() => logout()}>
                      Sign out
                    </Button>
                }
                <Button className={classes.becomeMember} onClick={() => openRegister()}>
                  Become a member
                </Button>
              </div> : null
          }

        </Toolbar>
      </AppBar>
  );
}

export default withRouter(Header);
