import { AppBar, createStyles, IconButton, makeStyles, Theme, Toolbar } from '@material-ui/core';
import { Link } from 'react-router-dom';
import MenuIcon from '@material-ui/icons/Menu';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';

import logo from 'assets/logo-small.png';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    header: {
      paddingTop: 20,
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
    }
  })
);

const Header = () => {
  const classes = useStyles();
  return (
    <AppBar position="static" elevation={0} className={classes.header}>
      <Toolbar variant="regular">
        <Link to="/home">
          <img src={logo} alt="logo" width={100} />
        </Link>
        <div className={classes.menuButton}>
          <span className={classes.member}>Sign In</span>
          <IconButton edge="end" className={classes.icons}>
            <MenuIcon />
            <AccountCircleIcon />
          </IconButton>
        </div>
      </Toolbar>
    </AppBar>
  );
}

export default Header;
