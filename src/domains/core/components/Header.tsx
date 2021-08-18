import { AppBar, Button, createStyles, makeStyles, Theme, Toolbar, Drawer, IconButton, MenuItem, MenuList, Popper, Grow, Paper, ClickAwayListener } from '@material-ui/core';
import { Link, RouteComponentProps, withRouter } from 'react-router-dom';
import PersonIcon from '@material-ui/icons/Person';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MenuIcon from '@material-ui/icons/Menu';
import clsx from 'clsx';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useTheme } from '@material-ui/core/styles';

import logo from 'assets/logo-small.png';
import whiteLogo from 'assets/logo-small-white.png';
import { Fragment, useState, useRef } from 'react';
import { useAuth0 } from '@auth0/auth0-react';


const drawerWidth = 240;

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    header: {
      padding: '20px 0',
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
    },
    menu: {
      borderRadius: 15,
      marginTop: 3,
      width: '100%'
    }
  })
);

const Header = (props: RouteComponentProps) => {
  const { isAuthenticated, loginWithRedirect, logout, user } = useAuth0();
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const [openMenu, setOpenMenu] = useState(false);
  const anchorRef = useRef<any>(null);
  const history = props.history;

  const isHome = props.history.location.pathname.indexOf('home') > -1;
  const isRegister = props.history.location.pathname.indexOf('register') > -1;
  const isSignUp = props.history.location.pathname.indexOf('signup') > -1;
  const isWaiting = props.history.location.pathname.indexOf('waiting') > -1;
  const isAbout = props.history.location.pathname.indexOf('about') > -1;

  const theme = useTheme();
  const smallScreen = useMediaQuery(theme.breakpoints.down("sm"));

  const openRegister = () => {
    history.push('/register');
  }

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const handleClick = () => {
    setOpenMenu((prevOpen) => !prevOpen);
  };

  const handleClose = (event:any) => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }

    setOpenMenu(false);
  };

  const handleListKeyDown = (event:any) => {
    if (event.key === 'Tab') {
      event.preventDefault();
      setOpenMenu(false);
    }
  }


  return (
    smallScreen?
    <Fragment>
      <AppBar position="static" elevation={0} className={classes.header}>
      <Toolbar variant="regular">
        <Link to="/home">
          <img src={isHome || isRegister || isSignUp || isWaiting || isAbout? logo : whiteLogo} alt="logo" width={100} />
        </Link>

        {!(isRegister || isSignUp || isWaiting || isAbout)?
        <div className={classes.menuButton}>
          <IconButton
            edge="end"
            color="secondary"
            aria-label="menu"
            onClick={handleDrawerOpen}
            className={clsx(classes.menuButton2 && classes.root, open && classes.hide )}
          >
            <MenuIcon className={classes.icon}/>
          </IconButton>  
        </div>:null
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
                  !isAuthenticated
                    ?
                    <Fragment>
                      <Button onClick={() => loginWithRedirect()}>
                        <MenuItem>Sign in</MenuItem>
                      </Button>
                      <Button onClick={() => openRegister()}>
                        <MenuItem>Become a member</MenuItem>
                      </Button>
                    </Fragment> 
                    :
                    <Fragment>
                      <Button onClick={() => logout()}>
                        <MenuItem>Sign out</MenuItem>
                      </Button>
                      <Button>
                        <MenuItem>{user.name}</MenuItem>
                      </Button>
                    </Fragment>
                    
                }
              
            </div>
          </Drawer>
      </Toolbar>
    </AppBar>  
    </Fragment>
    :
      <AppBar position="static" elevation={0} className={classes.header}>
        <Toolbar variant="regular">
          <Link to="/home">
            <img src={isHome || isRegister || isSignUp || isWaiting || isAbout? logo : whiteLogo} alt="logo" width={100} />
          </Link>  
          {
            !(isRegister || isSignUp || isWaiting || isAbout)?
            <div className={classes.menuButton}>
              {
                !isAuthenticated
                  ?
                  <Fragment>
                    <Button className={classes.whiteButtons} onClick={() => loginWithRedirect()}>
                      Sign in
                    </Button>
                    <Button className={classes.becomeMember} onClick={() => openRegister()}>
                      Become a member
                    </Button>
                  </Fragment>    
                  :
                  <Fragment>
                    {/* <Button className={classes.whiteButtons} onClick={() => logout()}>
                      Sign out
                    </Button> */}
                    <Button 
                      className={classes.becomeMember} 
                      startIcon={<PersonIcon />} 
                      endIcon={<ExpandMoreIcon />} 
                      ref={anchorRef}
                      aria-controls={openMenu ? 'menu-list-grow' : undefined}
                      aria-haspopup="true" 
                      onClick={handleClick}>
                      {user.name}
                    </Button>
                    <Popper open={openMenu} anchorEl={anchorRef.current} role={undefined} transition disablePortal>
                      {({ TransitionProps, placement }) => (
                        <Grow
                          {...TransitionProps}
                          style={{ transformOrigin: placement === 'bottom' ? 'center top' : 'center bottom' }}
                        >
                          <Paper className={classes.menu}>
                            <ClickAwayListener onClickAway={handleClose}>
                              <MenuList autoFocusItem={open} id="menu-list-grow" onKeyDown={handleListKeyDown}>
                                <MenuItem onClick={handleClose}>Your projects</MenuItem>
                                <MenuItem onClick={handleClose}>Profile</MenuItem>
                                <MenuItem onClick={() => logout()}>Sign Out</MenuItem>
                              </MenuList>
                            </ClickAwayListener>
                          </Paper>
                        </Grow>
                      )}
                    </Popper>
                  </Fragment>
                  
                }
            
          </div>:null
          }

        </Toolbar>
      </AppBar>
  );
}

export default withRouter(Header);
