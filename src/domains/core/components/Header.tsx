import {
  AppBar,
  Button,
  Theme,
  MenuItem,
  MenuList,
  Popper,
  Grow,
  Paper,
  ClickAwayListener,
  Typography,
  Grid,
} from '@mui/material';
import createStyles from '@mui/styles/createStyles';
import makeStyles from '@mui/styles/makeStyles';
import { Link } from 'react-router-dom';
import PersonIcon from '@mui/icons-material/Person';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Fragment, useState, useRef } from 'react';
import { useAuth0 } from '@auth0/auth0-react';

const drawerWidth = 300;

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    header: {
      padding: '20px 0',
      background: '#FFFFFF',
    },
    headerDesktop: {
      padding: '50px 0',
      background: 'transparent !important',
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
      color: 'white !important',
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
    },
    whiteText: {
      color: 'white'
    }
  })
);

const Header = () => {
  const { isAuthenticated, loginWithRedirect, logout, user } = useAuth0();
  const classes = useStyles();
  const [openMenu, setOpenMenu] = useState(false);
  const anchorRef = useRef<any>(null);


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


  return (<AppBar position="static" elevation={0} className={classes.headerDesktop}>
      <Grid container justifyContent='space-between'>
        <Grid item>
          <Link to="#">
            <Typography variant="h6" className={classes.whiteText}>CS DECORATION</Typography>
          </Link>
        </Grid>
        <Grid item>
        <Link to="#">
          <Typography variant="subtitle2" className={classes.whiteText}>PROJECT GALLERY</Typography>
          </Link>
        </Grid>
        <Grid item>
        <Link to="#">
          <Typography variant="subtitle2" className={classes.whiteText}>FURNITURE SEARCH</Typography>
          </Link>
        </Grid>
        <Grid item>
        <Link to="#">
          <Typography variant="subtitle2" className={classes.whiteText}>FURNITURE NEWS</Typography>
          </Link>
        </Grid>
        <Grid item>
              <div className={classes.menuButton}>
                {
                  !isAuthenticated
                    ?
                    <Fragment>
                          <Fragment>
                            <Button className={classes.whiteButtons} onClick={() => loginWithRedirect()}>
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
                                  <MenuItem onClick={() => logout()}>Sign Out</MenuItem>
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
    </AppBar >)
}

export default Header;
