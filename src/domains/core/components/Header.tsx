import {
  AppBar,
  Button,
  Box,
  Container,
  Theme,
  MenuItem,
  MenuList,
  Popper,
  Grow,
  Paper,
  ClickAwayListener,
  Typography,
  Grid,
  useTheme,
  useMediaQuery,
  Toolbar,
  Drawer,
  IconButton,
} from '@mui/material';
import createStyles from '@mui/styles/createStyles';
import makeStyles from '@mui/styles/makeStyles';
import { Link, useNavigate } from 'react-router-dom';
import PersonIcon from '@mui/icons-material/Person';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Fragment, useState, useRef } from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import CloseIcon from '@mui/icons-material/Close';
import MenuIcon from '@mui/icons-material/Menu';
import clsx from 'clsx';
import { BorderBottom } from '@mui/icons-material';

const drawerWidth = 300;

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    header: {
      padding: '20px 0',
      background: '#FFFFFF'
    },
    headerDesktop: {
      padding: '20px 0',
      borderBottom: '1px solid rgba(0, 0, 0, 0.1)',
      background: 'white !important',
      alignItems: 'center',
      paddingLeft: '0px !important',
      paddingRight: '0px !important'
    },
    menuButton: {
      marginLeft: 'auto',
      border: '1px black'
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
      color: 'black',
      textTransform: 'none',
    },
    becomeMember: {
      borderRadius: 15,
      color: 'black !important',
      textTransform: 'none',
      border: '2px solid white',
      padding: '2px 10px'
    },
    drawer: {
      width: drawerWidth,
      flexShrink: 0
    },
    drawerPaper: {
      width: drawerWidth,
      backgroundColor: '#2A2A2A !important'
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
      fontSize: "35px !important",
      color: "black !important"
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
      textAlign: 'left'
    },
    itemText: {
      textTransform: 'capitalize'
    },
    iconClose: {
      margin: 10,
      color: 'white'
    },
    button: {
      cursor: 'pointer',
      borderRadius: 20,
      backgroundColor: '#1C3B09',
      color: 'black',
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
      color: 'black'
    },
    buttonMenu: {
      marginBottom: -20
    },
    buttonMenu2: {
      marginBottom: 50
    },
    logoText: {
      color: 'black',
      textAlign: 'center'
    },
    blackText: {
      color: 'black',
      fontSize: 16,
    },
    titleText: {
      color: 'black',
      fontSize: 24,
      letterSpacing: '4px'
    },
    headerMobile: {
      padding: '20px 0',
      background: 'transparent !important',
      alignItems: 'left',
      backgroundColor: '#2A2A2A !important',
      marginBottom: 20
    },
    menuItemStyle: {
      color: 'black',
      display: 'block !important',
      textTransform: 'none'
    },
    menuTitleStyle: {
      color: 'black'
    },
    menuTitleContainerStyle: {
      marginLeft: 25,
      color: 'black',
      textTransform: 'none'
    }
  })
);

const Header = () => {
  const { isAuthenticated, loginWithRedirect, logout, user } = useAuth0();
  const classes = useStyles();
  const [openMenu, setOpenMenu] = useState(false);
  const anchorRef = useRef<any>(null);
  const theme = useTheme();
  const smallScreen = useMediaQuery(theme.breakpoints.down("sm"));
  const [open, setOpen] = useState(false);
  const history = useNavigate();


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

  const handleSignUp = async () => {
    await loginWithRedirect({
      appState: {
        returnTo: window.location.pathname,
      }
    });
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const goToFavorites = () => {
    history("/favorites")
  }

  const goToProjects = () => {
    history("/projects")
  }

  const goToCombinations = () => {
    history("/combinations")
  }


  return (
    smallScreen ?
      <Fragment>
        <AppBar position='static' elevation={0} className={classes.headerMobile}>
          <Toolbar variant='regular'>
            <Typography variant="h6" className={classes.menuTitleStyle}>HOUSE COLLECTION</Typography>
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
            </div>
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
                        <Button onClick={() => handleSignUp()}>
                          <MenuItem className={classes.menuItemStyle}>Sign in</MenuItem>
                        </Button>
                        <p className={classes.bottomText}>Copyright &copy; 2024 HouseCollection</p>
                      </div>
                    </div>
                    :
                    <div>
                      <CloseIcon className={classes.iconClose} onClick={() => handleDrawerClose()} />
                      <Typography className={classes.menuTitleContainerStyle}>MENU</Typography>
                      <br />
                      <br />
                      <br />
                      <div className={classes.menuContainer}>
                        <Button onClick={() => goToCombinations()}>
                          <MenuItem className={classes.menuItemStyle}>Train your AI</MenuItem>
                        </Button>
                        <br />
                        <Button onClick={() => goToFavorites()}>
                          <MenuItem className={classes.menuItemStyle}>Favorites</MenuItem>
                        </Button>
                        <br />
                        <Button onClick={() => goToProjects()}>
                          <MenuItem className={classes.menuItemStyle}>Projects</MenuItem>
                        </Button>
                        <br />
                        <Button onClick={() => logout()}>
                          <MenuItem className={classes.menuItemStyle}>Log out</MenuItem>
                        </Button>
                        <br />
                        <Button>
                          <MenuItem className={classes.menuItemStyle}>{user?.name}</MenuItem>
                        </Button>
                        <p className={classes.bottomText}>Copyright &copy; 2024 HouseCollection</p>
                      </div>
                    </div>
                }
              </div>
            </Drawer>
          </Toolbar>
        </AppBar>
      </Fragment>

      : <AppBar elevation={0} className={classes.headerDesktop}>
        <Container>
          <Grid container alignItems="center" justifyContent="space-between">
            <Grid item xs={4} container spacing={4} justifyContent="start">
              <Grid item>
                <Link to="#">
                  <Typography variant="subtitle2" className={classes.blackText}>Stories</Typography>
                </Link>
              </Grid>
              <Grid item>
                <Link to="#">
                  <Typography variant="subtitle2" className={classes.blackText}>New Collections</Typography>
                </Link>
              </Grid>
              <Grid item>
                <Link to="#">
                  <Typography variant="subtitle2" className={classes.blackText}>Search</Typography>
                </Link>
              </Grid>
            </Grid>
            <Grid item>
              <Grid item container justifyContent="center">
                <Link to="#">
                  <Typography variant="h6" className={classes.titleText}>HOUSE COLLECTION</Typography>
                </Link>
              </Grid>
            </Grid>
            <Grid item xs={4} container justifyContent="flex-end">
              <div className={classes.menuButton}>
                {
                  !isAuthenticated
                    ?
                    <Fragment>
                      <Fragment>
                        <Button className={classes.blackText} onClick={() => handleSignUp()}>
                          Sign in
                        </Button>
                        {/* <Button className={classes.becomeMember} onClick={() => openRegister()}>
                                Become a member
                              </Button> */}
                      </Fragment>
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
                        {user!.name}
                      </Button>
                      <Popper open={openMenu} anchorEl={anchorRef.current} role={undefined} transition disablePortal>
                        {({ TransitionProps, placement }) => (
                          <Grow
                            {...TransitionProps}
                            style={{ transformOrigin: placement === 'bottom' ? 'center top' : 'center bottom' }}
                          >
                            <Paper className={classes.menu}>
                              <ClickAwayListener onClickAway={handleClose}>
                                <MenuList autoFocusItem={true} id="menu-list-grow" onKeyDown={handleListKeyDown}>
                                  {/* <MenuItem onClick={() => openProjects()}>Your projects</MenuItem>
                                    <MenuItem onClick={handleClose}>Profile</MenuItem> */}
                                  <div className={classes.menuContainer}>
                                    <Button onClick={() => goToCombinations()}>
                                      <MenuItem className={classes.menuItemStyle}>Train your AI</MenuItem>
                                    </Button>
                                    <br />
                                    <Button onClick={() => goToFavorites()}>
                                      <MenuItem className={classes.menuItemStyle}>Favorites</MenuItem>
                                    </Button>
                                    <br />
                                    <Button onClick={() => goToProjects()}>
                                      <MenuItem className={classes.menuItemStyle}>Projects</MenuItem>
                                    </Button>
                                    <br />
                                    <Button onClick={() => logout()}>
                                      <MenuItem className={classes.menuItemStyle}>Log out</MenuItem>
                                    </Button>
                                    <br />
                                    <Button>
                                      <MenuItem className={classes.menuItemStyle}>{user?.name}</MenuItem>
                                    </Button>
                                    <p className={classes.bottomText}>Copyright &copy; 2024 HouseCollection</p>
                                  </div>
                                </MenuList>
                              </ClickAwayListener>
                            </Paper>
                          </Grow>
                        )}
                      </Popper>
                    </Fragment>

                }

              </div>
            </Grid>
          </Grid >

        </Container>

      </AppBar >)
}

export default Header;
