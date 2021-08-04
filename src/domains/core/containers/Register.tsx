import React from 'react';
import { Typography, Grid, TextField,Input, Fab, InputAdornment, IconButton } from '@material-ui/core';
import { PageContainer } from 'domains/core/containers';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';

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
    width: '70%',
    borderColor: '#707070',
    borderWidth: '2px',
    paddingLeft: 10,
    '&:focus': {
      outline: 'none'
    },
    backgroundColor: 'white',
    fontSize: 14
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
  back: {
    color: '#000000',
    fontWeight: 600
  },
  signUpArrow: {
    float: 'right',
    position: 'relative',
    zIndex: 2,
    marginRight: '125px',
    marginTop: '8px',
  },
  endText: {
    fontSize: 13, 
    color: '#908F8C'
  },
  fab: {
    backgroundColor: "rgba(240, 224, 216, 0.7)",
    width: 43,
    height: 43
},
boxText: {
  marginBottom: 10,
  color: "white"
},
icon:{
  color:'white', 
  background: 'black', 
  borderRadius: '50%',
   cursor: 'pointer',
   '&:hover': {
    background: 'gray'
  },
},
iconButton:{
  padding: '5px',
}
}));

export default function Register() {
  const classes = useStyles();

  return (
    <PageContainer background="controls-background">
      <Grid container sm={12}>
        <Grid container sm={6} spacing={9}>
          <Grid item sm={12} style={{alignSelf:'flex-end'}}>
              <Typography>
                  <h2>Building Future <br/> <span style={{textDecoration: 'underline'}}>Communities Together.</span></h2>
                  <h4> Generate a preliminary design study of multi-dweling <br /> smart housing projects in three simple steps.</h4>
                </Typography>
            </Grid>
            <Grid item sm={12} style={{alignSelf:'flex-end'}}>
            <form
          action="https://rea-web.us6.list-manage.com/subscribe/post?u=3c39cbec5fc9d998a5b584676&amp;id=4064b46da9"
          method="post"
          id="mc-embedded-subscribe-form"
          name="mc-embedded-subscribe-form"
          className="validate"
          target="_blank"
          style={{alignSelf: 'flex-end'}}
        >
          
          <Input type="text" name="FNAME" id="mce-FNAME" placeholder="First name" className={classes.input} disableUnderline required/>
          <Input type="text" name="LNAME" id="mce-LNAME" placeholder="Last Name" className={classes.input} disableUnderline required/>
          <div>
                <div className="response" id="mce-error-response" style={{ display: 'none' }}></div>
                <div className="response" id="mce-success-response" style={{ display: 'none' }}></div>
              </div>
              <div style={{ position: 'absolute', left: -5000 }} aria-hidden="true">
                <input type="text" name="b_3c39cbec5fc9d998a5b584676_4064b46da9" /> 
          </div>
          <Input type="text" name="EMAIL" id="mce-EMAIL"
            placeholder="Enter email to sign up" 
            className={classes.input} 
            disableUnderline
            required
            endAdornment={
              <InputAdornment position="end">
                  <IconButton className={classes.iconButton} type="submit" name="subscribe"> 
                    <ArrowForwardIcon className={classes.icon}></ArrowForwardIcon>
                    {/* <Input type="submit" name="subscribe"/> */}
                  </IconButton>
              </InputAdornment>
            }
          />
          {/* <TextField label="Last Name" className={classes.input}/>
          <TextField label="Enter email to sign up" className={classes.input}/> */}
              {/* <div>
                <input type="text" name="FNAME" id="mce-FNAME" placeholder="First name" className={classes.input} required />
              </div>
              <div >
                <input type="text" name="LNAME" id="mce-LNAME" placeholder="Last Name" className={classes.input} required />
              </div>
              <div>
                <input type="email" name="EMAIL" id="mce-EMAIL" placeholder="Enter email to sign up" className={classes.input} required />
                
              <span className={classes.signUpArrow}>
                  <button type="submit" name="subscribe"   display: 'inline'}}>
                    <ArrowForwardIcon style={{color:'white', background: 'black', borderRadius: '50%', cursor: 'pointer'}}/>
                  </button>
              </span>
              </div> */}
              
              <p className={classes.endText}>We are currently in beta, sign up to our waiting list.</p>
              {/* <div>
                <input type="submit" value="Sign up" name="subscribe" className={classes.button} />
              </div> */}
              {/* <div>
                <p>We are currently in beta, sign up to our waiting list.</p>
              </div> */}
          </form>
            </Grid>
        
        </Grid>
        <Grid item sm={6}>
          <div className="img-landing" style={{height: '100%', borderRadius: 20}}></div>
        </Grid>
      </Grid>
      <Grid item sm={12} style={{alignSelf:'flex-end', textAlign: 'center'}}>
            <Fab size="small" className={classes.fab}>         
              <ArrowForwardIosIcon fontSize="small" className={classes.icon}></ArrowForwardIosIcon>
            </Fab>
            <p style={{fontSize: 12}}>Learn how it works</p>
      </Grid>
      
      {/* <form
        action="https://rea-web.us6.list-manage.com/subscribe/post?u=3c39cbec5fc9d998a5b584676&amp;id=4064b46da9"
        method="post"
        id="mc-embedded-subscribe-form"
        name="mc-embedded-subscribe-form"
        className="validate"
        target="_blank"
      >
        <Grid container className={classes.paper}> */}

          {/* <Typography>
            <Link to="/home" className={classes.back}>
              Back
            </Link>
            <h2>Hello!</h2>
            <h4> We are currently in beta. <br /> Sign up for our waitlist.</h4>
          </Typography> */}

          {/* <Grid item xs={12}>
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
          </Grid> */}
        {/* </Grid>
      </form> */}

    </PageContainer>
  );
}
