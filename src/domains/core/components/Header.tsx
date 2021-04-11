import { AppBar, Button, createStyles, makeStyles, Theme, Toolbar } from '@material-ui/core';
import { Link, RouteComponentProps, withRouter } from 'react-router-dom';

import logo from 'assets/logo-small.png';
import whiteLogo from 'assets/logo-small-white.png';

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
      fontWeight: 'bold',
      color: 'white',
      textTransform: 'none',
    }
  })
);

const Header = (props: RouteComponentProps) => {
  const classes = useStyles();
  const isHome = props.history.location.pathname.indexOf('home') > -1;
  return (
    <AppBar position="static" elevation={0} className={classes.header}>
      <Toolbar variant="regular">
        <Link to="/home">
          <img src={isHome ? logo : whiteLogo} alt="logo" width={100} />
        </Link>
        <div className={classes.menuButton}>
          <Button className={isHome ? classes.buttons : classes.whiteButtons}>
            Sign in
          </Button>
          <Button className={isHome ? classes.buttons : classes.whiteButtons}>
            Become a member
          </Button>
        </div>
      </Toolbar>
    </AppBar>
  );
}

export default withRouter(Header);
