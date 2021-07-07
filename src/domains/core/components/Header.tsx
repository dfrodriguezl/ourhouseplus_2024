import { AppBar, Button, createStyles, makeStyles, Theme, Toolbar } from '@material-ui/core';
import { Link, RouteComponentProps, withRouter } from 'react-router-dom';

import logo from 'assets/logo-small.png';
import whiteLogo from 'assets/logo-small-white.png';
import { Mailchimp } from 'domains/common/components';
import { useState } from 'react';

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
    }
  })
);

const Header = (props: RouteComponentProps) => {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const history = props.history;

  const isHome = props.history.location.pathname.indexOf('home') > -1;
  const isRegister = props.history.location.pathname.indexOf('register') > -1;

  const handleClose = () => {
    setOpen(false);
  }

  const openRegister = () => {
    history.push('/register');
  }

  return (
    <AppBar position="static" elevation={0} className={classes.header}>
      <Toolbar variant="regular">
        <Link to="/home">
          <img src={isHome || isRegister ? logo : whiteLogo} alt="logo" width={100} />
        </Link>
        {
          !isRegister?
          <div className={classes.menuButton}>
          <Button className={classes.whiteButtons}>
            Sign in
          </Button>
          <Button className={classes.becomeMember} onClick={() => openRegister()}>
            Become a member
          </Button>
        </div>:null
        }
        
      </Toolbar>
      <Mailchimp open={open} handleClose={handleClose}/>
    </AppBar>
  );
}

export default withRouter(Header);
