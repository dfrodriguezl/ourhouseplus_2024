import React from 'react';
import { Typography, Grid } from '@material-ui/core';
import { PageContainer } from 'domains/core/containers';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(2),
    display: 'flex',
    alignItems: 'center',
    padding: 20,
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  container: {
    background: 'transparent linear-gradient(136deg, #D6D5E4 0%, #E6DFCE 100%, #8EBED2 100%, #A9A9A9 100%) 0% 0% no-repeat padding-box'
  },
  label: {
    fontSize: 12,
    fontWeight: 'bold',
  },
  input: {
    margin: '5px 0 10px 0',
    height: 30,
    borderRadius: 50,
    width: '100%',
    borderColor: '#707070',
    borderWidth: '2px',
    paddingLeft: 10,
    '&:focus': {
      outline: 'none'
    }
  },
  button: {
    margin: '20px 0 0 0',
    borderRadius: 50,
    backgroundColor: '#FF6C6C',
    color: 'white',
    padding: '5px 30px 5px 30px',
    cursor: 'pointer',
    borderWidth: 0
  },
  title: {
    textAlign: 'left'
  },
  back:{
    color: '#000000',
    fontWeight: 600
  }
}));

export default function Register() {
  const classes = useStyles();

  return (
    <PageContainer background="controls-background">
      <form
        action="https://rea-web.us6.list-manage.com/subscribe/post?u=3c39cbec5fc9d998a5b584676&amp;id=4064b46da9"
        method="post"
        id="mc-embedded-subscribe-form"
        name="mc-embedded-subscribe-form"
        className="validate"
        target="_blank"
      >
        <Grid container className={classes.paper}>
        
          <Typography>
            <Link to="/home" className={classes.back}>
              Back
            </Link>
            <h2>Hello!</h2>
            <h4> We are currently in beta. <br /> Sign up for our waitlist.</h4>
          </Typography>
          
          {/* <h2 id="simple-modal-title">Hello!</h2> */}
          <Grid item xs={12}>
            <div>
              <label className={classes.label}> First Name </label>
            </div>
            <div>
              <input type="text" name="FNAME" id="mce-FNAME" className={classes.input} required />
            </div>
            <div >
              <div>
                <label className={classes.label}> Last Name </label>
              </div>
              <input type="text" name="LNAME" id="mce-LNAME" className={classes.input} required />
            </div>
            <div>
              <div>
                <label className={classes.label}>Email</label>
              </div>
              <input type="email" name="EMAIL" id="mce-EMAIL" className={classes.input} required />
            </div>
            <div>
              <div className="response" id="mce-error-response" style={{ display: 'none' }}></div>
              <div className="response" id="mce-success-response" style={{ display: 'none' }}></div>
            </div>
            <div style={{ position: 'absolute', left: -5000 }} aria-hidden="true">
              <input type="text" name="b_3c39cbec5fc9d998a5b584676_4064b46da9" />
            </div>
            <div>
              <input type="submit" value="Sign up" name="subscribe" className={classes.button} />
            </div>
          </Grid>
        </Grid>
      </form>
      
    </PageContainer>
  );
}
