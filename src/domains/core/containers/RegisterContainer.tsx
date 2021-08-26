import React, {useState,Fragment} from 'react';
import { Typography, Grid, Input, Fab, InputAdornment, IconButton} from '@material-ui/core';
import { PageContainer } from 'domains/core/containers';
import { useHistory  } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import KeyboardArrowDown from '@material-ui/icons/KeyboardArrowDown';
import PlayCircleOutlineIcon from '@material-ui/icons/PlayCircleOutline';
import MailchimpSubscribe from 'react-mailchimp-subscribe';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useTheme } from '@material-ui/core/styles';
import { HomeSub1 } from 'domains/core/containers';

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
},
icon_works:{
  color:'black', 
},
icon_play:{
  textAlign: 'center', 
  fontSize: 75, 
  color: 'white'
},
textContainer:{
  paddingLeft: '25px',
  [theme.breakpoints.down('sm')]: {
    paddingLeft: '15px',
  },
},
containerForm:{
  alignSelf: 'flex-end',
  [theme.breakpoints.down('sm')]: {
    alignSelf: 'flex-start',
  },
}
}));

interface FormProps {
  status?: any;
  message?: any;
  onValidated?: any;
}

interface OwnProps {
  children?: any;
}

export function RegisterContainer(props:OwnProps) {
  const classes = useStyles();
  const theme = useTheme();
  const smallScreen = useMediaQuery(theme.breakpoints.down("sm"));
  
  const {children} = props;
  const history = useHistory();

  const isWaiting = history.location.pathname.indexOf('waiting') > -1;

  const handleScroll = () => {
    window.scroll({
        top: document.body.offsetHeight,
        left: 0,
        behavior: 'smooth'
    });
  }

  return (
    <Fragment>
      <PageContainer background="waiting-back">
        <Grid container sm={12} xs={12} style={{marginTop: 50}}>
          <Grid container item sm={6} xs={12} className={classes.textContainer}>
            {children}
          </Grid>
          {!smallScreen?
            <Grid item container sm={6} xs={12}>
              <ImgVideo></ImgVideo>
            </Grid>:null
            }
          
        </Grid>
        {!smallScreen?
        <Grid item sm={12} style={{alignSelf:'flex-end', textAlign: 'center'}}>
          {
            !isWaiting?
            <Fragment>
              <Fab size="small" className={classes.fab} >         
                <KeyboardArrowDown fontSize="large" className={classes.icon_works} onClick={handleScroll}></KeyboardArrowDown>
              </Fab>
              <p style={{fontSize: 12}}>Learn how it works</p>
            </Fragment>:null
            }
          
        </Grid>:null
        }
      
      </PageContainer>
      {
        !isWaiting?
          <HomeSub1 />:null
      }
      
    </Fragment>
    
  );
}

const ImgVideo = () => {
  const classes = useStyles();
  const [play, setPlay] = useState(false);

  const handlePlay = () => {
    setPlay(true);
  }

  return (
    <Grid item sm={12} xs={12} style={{textAlign: 'center'}}>
      {play?
        <iframe width="100%" height="100%" title="video-rea"
        src="https://www.youtube.com/embed/G6jz86kFJCk?autoplay=1&controls=0&mute=1">
      </iframe>:
      <div className="img-landing" style={{height: '100%', borderRadius: 20}}>
        <IconButton style={{height: '100%'}} onClick={handlePlay}>
          <PlayCircleOutlineIcon className={classes.icon_play}></PlayCircleOutlineIcon>
        </IconButton>
      </div>
      } 
    </Grid> 
  )
}

const FormMail = (props:FormProps) => {
  const classes = useStyles();
  const {status,onValidated} = props;

  const [email, setEmail] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');

  const theme = useTheme();
  const smallScreen = useMediaQuery(theme.breakpoints.down("sm"));

  const history = useHistory();

  const handleChange1 = (e:any) => {
    setFirstName(e.target.value)
  }

  const handleChange2 = (e:any) => {
    setLastName(e.target.value)
  }

  const handleChange3 = (e:any) => {
    setEmail(e.target.value)
  }

  const handleSubmit = (e:any) => {
    e.preventDefault();
    email &&
    firstName &&
    lastName &&
    email.indexOf("@") > -1 &&
    onValidated({
        EMAIL: email,
        FNAME: firstName,
        LNAME: lastName,
    });
  }


  return (
    <RegisterContainer>
      <Grid item container sm={12} xs={10} className={classes.containerForm}>
        <Typography>
          <h2 style={{lineHeight:1.2}}>BUILDING FUTURE <br/> <span style={{textDecoration: 'underline'}}>COMMUNITIES TOGETHER.</span></h2>
          {smallScreen?<p style={{fontSize:13,lineHeight:1.2}}>Generate a preliminary design study of multi-dweling smart housing projects in three simple steps.</p>:
          <h4> Generate a preliminary design study of multi-dweling <br /> smart housing projects in three simple steps.</h4>}
        </Typography>
      </Grid>
      {smallScreen?
        <ImgVideo></ImgVideo>:null}
      <Grid item sm={12} xs={12} style={{alignSelf:'flex-end'}}>
        <form
          action="https://rea-web.us6.list-manage.com/subscribe/post?u=3c39cbec5fc9d998a5b584676&amp;id=4064b46da9"
          method="post"
          id="mc-embedded-subscribe-form"
          name="mc-embedded-subscribe-form"
          className="validate"
          target="_blank"
          onSubmit={handleSubmit}
        >
          {status === "success" || status === "error"?
            history.push("/waiting/" + firstName + "_" + lastName):null}
          <Input type="text" name="FNAME" id="mce-FNAME" placeholder="First name" onChange={handleChange1} className={classes.input} disableUnderline required/>
          <Input type="text" name="LNAME" id="mce-LNAME" placeholder="Last Name" onChange={handleChange2} className={classes.input} disableUnderline required/>
          <div>
            <div className="response" id="mce-error-response" style={{ display: 'none' }}></div>
            <div className="response" id="mce-success-response" style={{ display: 'none' }}></div>
          </div>
          <div style={{ position: 'absolute', left: -5000 }} aria-hidden="true">
            <input type="text" name="b_3c39cbec5fc9d998a5b584676_4064b46da9" /> 
          </div>
          <Input type="text" name="EMAIL" id="mce-EMAIL"
            onChange={handleChange3}
            placeholder="Enter email to sign up" 
            className={classes.input} 
            disableUnderline
            required
            endAdornment={
              <InputAdornment position="end">
                  <IconButton className={classes.iconButton} type="submit" name="subscribe"> 
                      <ArrowForwardIcon className={classes.icon}></ArrowForwardIcon> 
                  </IconButton>
              </InputAdornment>
            }
          />
        </form>
        <p className={classes.endText}>We are currently in beta, sign up to our waiting list.</p>
      </Grid>
    </RegisterContainer>
        
  )
}

export const MailchimpFormContainer = () => {

  const postUrl = 'https://rea-web.us6.list-manage.com/subscribe/post?u=3c39cbec5fc9d998a5b584676&amp;id=4064b46da9';

  return (
    <MailchimpSubscribe
                url={postUrl}
                render={({ subscribe, status, message }) => (
                    <FormMail
                        status={status} 
                        message={message}
                        onValidated={(formData:any) => subscribe(formData)}
                    />
                )}
            />
  )
}

