import { AppBar, Button, createStyles, IconButton, makeStyles, Theme, Toolbar } from '@material-ui/core';
import { Link } from 'react-router-dom';
import MenuIcon from '@material-ui/icons/Menu';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';

import logo from 'assets/logo-small.png';

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
          <Button className={classes.buttons}>
            Sign in
          </Button>
          <Button className={classes.buttons}>
            Become a member
          </Button>
        </div>
      </Toolbar>
    </AppBar>
  );
}

export default Header;
