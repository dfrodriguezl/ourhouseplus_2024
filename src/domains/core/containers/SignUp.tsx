import React from 'react';
import { Container, Typography, Avatar, Button, CssBaseline, TextField, FormControlLabel, Checkbox, Grid, Divider } from '@material-ui/core';
import { PageContainer } from 'domains/core/containers';
import { Link } from 'react-router-dom';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import AppleIcon from '@material-ui/icons/Apple';
import GTranslateIcon from '@material-ui/icons/GTranslate';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(1),
    display: 'flex',
    alignItems: 'center',
    alignContent: 'center',
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
    // margin: '20px 0 0 0',
    borderRadius: 50,
    backgroundColor: '#FF6C6C',
    color: 'white',
    padding: '5px 30px 5px 30px',
    cursor: 'pointer',
    borderWidth: 0,
    // margin: "auto"
  },
  title: {
    textAlign: 'left'
  },
  back:{
    color: '#000000',
    fontWeight: 600
  },
  button_external_signup: {
    marginBottom: theme.spacing(2),
    borderRadius: 45,
    textTransform: 'none',
    backgroundColor: "#FFFFFF",
    opacity: 0.6,
    // width: '100%',
    // padding: "10px 100px"
  },
  label_button: {
    color: "#000000",
    fontWeight: "bold"
  },
  fieldDivider: {
    backgroundColor: "#707070",
    height: '100%'
  },
  div_button:{
    align:"center"
  },
  container_divider: {
    display: "flex",
    alignItems: "center",
    marginBottom: theme.spacing(2),
    marginTop: theme.spacing(2)
  },
  border: {
    borderBottom: "1px solid #707070",
    width: "100%"
  },
  content: {
    paddingTop: theme.spacing(0.5),
    paddingBottom: theme.spacing(0.5),
    paddingRight: theme.spacing(2),
    paddingLeft: theme.spacing(2),
    color: "#000000",
  },
  container_submit: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(2)
  },
  guest_text: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    textDecoration: 'underline',
    marginTop: theme.spacing(4)
  },
  text_account: {
    color: "#707071"
  },
  container_text: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: theme.spacing(2),
    fontSize: "15px"
  },
  text_underlined: {
    textDecoration: 'underline',
  }
}));

export default function SignUp() {
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
          <Grid item xs={12}>
          <div>
              <Button className={classes.button_external_signup} variant="contained" startIcon={<GTranslateIcon />} classes={{label: classes.label_button}} disableElevation fullWidth={true}> 
                Sign up with Google
              </Button>
            </div>
            <div className={classes.div_button}>
              <Button className={classes.button_external_signup} variant="contained" startIcon={<AppleIcon />} classes={{label: classes.label_button}} disableElevation fullWidth={true}> 
                Sign up with Apple
              </Button>
            </div>      
            <DividerWithText>or</DividerWithText> 
          </Grid>
          
          
          {/* <Typography>
            <Link to="/home" className={classes.back}>
              Back
            </Link>
            <h2>Hello!</h2>
            <h4> We are currently in beta. <br /> Sign up for our waitlist.</h4>
          </Typography> */}
          
          {/* <h2 id="simple-modal-title">Hello!</h2> */}
          <Grid item xs={12}>
            {/* <div>
              <label className={classes.label}> First Name </label>
            </div>
            <div>
              <input type="text" name="FNAME" id="mce-FNAME" className={classes.input} required />
            </div> */}

            <div>
              <div>
                <label className={classes.label}> Name </label>
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
            <div className={classes.container_submit}>
              <input type="submit" value="Sign up" name="subscribe" className={classes.button} />
            </div>
            <DividerWithText>or</DividerWithText> 
            <Typography className={classes.guest_text}>
              <Link to="/home">
                Continue as a guest
              </Link>     
            </Typography>

            <Typography className={classes.container_text}>
              <span className={classes.text_account}>Already have and account?</span>&nbsp;
              <Link to="/home">
                <span className={classes.text_underlined}>Sign in</span>
              </Link>      
            </Typography>
          </Grid>
          
          {/* <Link to="/home" className={classes.back}>
              Continue as a guest
            </Link> */}
        </Grid>
      </form>
      
    </PageContainer>
  );
}

interface DivProps {
  children: any;
}

type Props = DivProps;

const DividerWithText = ( props:Props ) => {
  const { children } = props;
  const classes = useStyles();
  return (
   <div className={classes.container_divider}>
     <div className={classes.border} />
     <span className={classes.content}>{children}</span>
     <div className={classes.border} />
   </div>
  );
 };
