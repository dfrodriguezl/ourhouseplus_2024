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
import CloseIcon from '@material-ui/icons/Close';
import { useTranslation } from 'react-i18next';

const drawerWidth = 300;

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    header: {
      padding: '20px 0',
      background: '#FFFFFF',
    },
    headerDesktop: {
      padding: '20px 0',
      background: 'transparent',
      alignItems: 'center'
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
      color: "#000000"
    },
    icon: {
      fontSize: "35px !important"
    },
    menu: {
      borderRadius: 15,
      marginTop: 3,
      width: '100%'
    },
    blackButton: {
      borderColor: '#707070',
      color: '#707070'
    },
    menuContainer: {
      textAlign: 'right'
    },
    itemText: {
      textTransform: 'capitalize'
    },
    iconClose: {
      margin: 10
    },
    button: {
      cursor: 'pointer',
      borderRadius: 20,
      backgroundColor: '#1C3B09',
      color: 'white',
      textTransform: 'none',
      margin: '30px 10px',
      '&:hover': {
        backgroundColor: '#FF6C6C'
      },
      padding: '0px 20px'
    },
    imgLogo: {
      marginRight: 15
    },
    bottomText: {
      position: 'absolute',
      bottom: 10,
      textAlign: 'center',
      fontSize: 12,
      width: '100%',
      color: '#7E7E7E'
    },
    buttonMenu: {
      marginBottom: -20
    },
    buttonMenu2: {
      marginBottom: 50
    },
    logoText: {
      color: 'white',
      textAlign: 'center'
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
  const isAdmin = isAuthenticated ? user['http://ourhouseplus.com/roles'].includes('admin') : false;

  const isHome = props.history.location.pathname.indexOf('home') > -1;
  const isRegister = props.history.location.pathname.indexOf('register') > -1;
  const isSignUp = props.history.location.pathname.indexOf('signup') > -1;
  const isWaiting = props.history.location.pathname.indexOf('waiting') > -1;
  const isAbout = props.history.location.pathname.indexOf('about') > -1;
  const isList = props.history.location.pathname.indexOf('listSpending') > -1;
  const isContainerBudget = props.history.location.pathname.indexOf('detailProjectBudget') > -1;
  const isUploadPhoto = props.history.location.pathname.indexOf('uploadPhoto') > -1;
  const isNewProject = props.history.location.pathname.indexOf('newProject') > -1;

  const theme = useTheme();
  const smallScreen = useMediaQuery(theme.breakpoints.down("sm"));
  const { t } = useTranslation();

  const openHome = () => {
    history.push('/register');
  }

  const openAbout = () => {
    history.push('/about');
  }

  const openRegister = () => {
    history.push('/register');
  }

  // const openProjects = () => {
  //   history.push('/projects');
  // }

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const handleClick = () => {
    setOpenMenu((prevOpen) => !prevOpen);
  };

  const handleClose = (event: any) => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }

    setOpenMenu(false);
  };

  const handleListKeyDown = (event: any) => {
    if (event.key === 'Tab') {
      event.preventDefault();
      setOpenMenu(false);
    }
  }

  const openProjects = () => {
    history.push("/listSpending")
  }

  const openNewProject = () => {
    history.push("/newProject")
  }

  return (
    smallScreen ?
      <Fragment>
        <AppBar position="static" elevation={0} className={classes.header}>
          <Toolbar variant="regular">
            <Link to="/register">
              <img src={isHome || isRegister || isSignUp || isWaiting || isAbout || isList || isContainerBudget || isUploadPhoto || isNewProject ? logo : whiteLogo} alt="logo" width={100} />
            </Link>

            {!(isSignUp || isWaiting) ?
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
                  !isAuthenticated
                    ?
                    <div>
                      <CloseIcon className={classes.iconClose} onClick={() => handleDrawerClose()} />
                      <div className={classes.menuContainer}>

                        {/* <Button onClick={() => openRegister()}>
                        <MenuItem>Become a member</MenuItem>
                      </Button> */}


                        <Button onClick={() => openHome()} className={classes.buttonMenu}>
                          <MenuItem className={classes.itemText}>{t('drawer_home')}</MenuItem>
                        </Button>
                        <br />
                        <Button onClick={() => openAbout()} className={classes.buttonMenu}>
                          <MenuItem className={classes.itemText}>{t('drawer_about')}</MenuItem>
                        </Button>
                        <br />
                        <Button onClick={() => openHome()} className={classes.buttonMenu}>
                          <MenuItem className={classes.itemText}>{t('drawer_how_works')}</MenuItem>
                        </Button>
                        <br />
                        <Button onClick={() => openHome()} className={classes.buttonMenu2}>
                          <MenuItem className={classes.itemText}>{t('drawer_contact')}</MenuItem>
                        </Button>
                        <br />
                        <Button className={classes.button} onClick={() => loginWithRedirect()}>
                          <MenuItem className={classes.itemText}>{t('drawer_login')}</MenuItem>
                        </Button>
                        <br />
                        <img src={logo} alt="logo" width={70} className={classes.imgLogo} />
                        <p className={classes.bottomText}>Copyright &copy; 2022 Home+. {t('drawer_copyright')}</p>
                      </div>
                    </div>

                    :
                    <div>
                      {isAuthenticated && isAdmin ?
                        <Fragment>
                          <Button onClick={() => openProjects()} className={classes.buttonMenu}>
                            <MenuItem className={classes.itemText}>Your projects</MenuItem>
                          </Button>
                          <br />
                          <Button onClick={() => openNewProject()} className={classes.buttonMenu}>
                            <MenuItem className={classes.itemText}>New project</MenuItem>
                          </Button>
                          <br />
                        </Fragment>
                        : null}

                      <Button onClick={() => logout()}>
                        <MenuItem>Sign out</MenuItem>
                      </Button>
                      <Button>
                        <MenuItem>{user.name}</MenuItem>
                      </Button>
                    </div>

                }

              </div>
            </Drawer>
          </Toolbar>
        </AppBar>
      </Fragment>
      :
      <AppBar position="static" elevation={0} className={classes.headerDesktop}>
        <Toolbar variant="regular">
          <Link to="/register">
            <img src={isHome || isRegister || isSignUp || isWaiting || isAbout ? whiteLogo : whiteLogo} alt="logo" width={150} />
            <br />
            <span className={classes.logoText}>stress-free remodeling</span>
          </Link>
          {
            !(isSignUp) ?
              <div className={classes.menuButton}>
                {
                  !isAuthenticated
                    ?
                    <Fragment>
                      {
                        isAbout || isRegister || isWaiting ?
                          null :
                          <Fragment>
                            <Button className={classes.whiteButtons} onClick={() => loginWithRedirect()}>
                              Sign in
                            </Button>
                            <Button className={classes.becomeMember} onClick={() => openRegister()}>
                              Become a member
                            </Button>
                          </Fragment>
                      }

                    </Fragment>
                    :
                    <Fragment>
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
                                  <MenuItem onClick={() => openProjects()}>Your projects</MenuItem>
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

              </div> : null
          }

        </Toolbar>
      </AppBar>
  );
}

export default withRouter(Header);
