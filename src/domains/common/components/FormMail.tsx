import { Fragment, useState } from 'react';
import { Typography, Grid, Input, InputAdornment, Button } from '@material-ui/core';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useHistory } from 'react-router-dom';
import { RegisterContainer } from 'domains/core/containers';
import { ImgVideo } from '.';
import clsx from 'clsx';
import PopupMail from './PopupMail';
import MailchimpFormContainerTwo from '../containers/MailChimpFormContainerTwo';

const useStyles = makeStyles((theme) => ({
  containerForm: {
    alignSelf: 'center',
    textAlign: 'center',
    [theme.breakpoints.down('sm')]: {
      alignSelf: 'center',
      textAlign: 'center'
    },
  },
  input: {
    margin: '5px 0 10px 0',
    // height: 30,
    borderRadius: 50,
    width: '70%',
    borderColor: '#030303',
    borderWidth: '1px',
    paddingLeft: 10,
    paddingTop: 10,
    paddingBottom: 10,
    '&:focus': {
      outline: 'none'
    },
    backgroundColor: '#FFFFFF8F',
    fontSize: 14,
    borderStyle: 'solid'
  },
  iconButton: {
    padding: '5px',
  },
  icon: {
    color: 'white',
    background: 'black',
    borderRadius: '50%',
    cursor: 'pointer',
    '&:hover': {
      background: 'gray'
    },
  },
  endText: {
    fontSize: 13,
    color: '#908F8C'
  },
  button: {
    cursor: 'pointer',
    borderRadius: 20,
    backgroundColor: '#FF6C6C',
    color: 'white',
    textTransform: 'none',
    padding: '0 25px',
    marginRight: '3px',
    '&:hover': {
      backgroundColor: '#FF6C6C'
    },
  },
  boldText: {
    fontWeight: 'bolder'
  },
  textCenter: {
    textAlign: 'center'
  },
  fontText: {
    fontSize: 15
  },
  inputSmall: {
    width: '70%',
    margin: 'auto'
  },
  itemText: {
    textTransform: 'capitalize',
    color: '#000000'
  },
  buttonGreen: {
    cursor: 'pointer',
    borderRadius: 20,
    backgroundColor: '#FFFFFF',
    color: '#1C5830',
    textTransform: 'none',
    '&:hover': {
      backgroundColor: '#FF6C6C'
    },
    padding: '10px 40px',
    marginTop: 15
  },
  titleStyle: {
    color: '#FFFFFF',
    display: 'block',
    fontFamily: 'Arial'
  },
  spacingText: {
    letterSpacing: 0
  }

})
);

interface StateProps {
  status?: any;
  message?: any;
  onValidated?: any;
}

type Props = StateProps;
const FormMail = (props: Props) => {
  const classes = useStyles();
  const { status, onValidated } = props;

  const [email, setEmail] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [hover, setHover] = useState(false);
  const [open, setOpen] = useState(false);

  const theme = useTheme();
  const smallScreen = useMediaQuery(theme.breakpoints.down("sm"));

  const history = useHistory();

  const handleChange1 = (e: any) => {
    setFirstName(e.target.value)
  }

  const handleChange2 = (e: any) => {
    setLastName(e.target.value)
  }

  const handleChange3 = (e: any) => {
    setEmail(e.target.value)
  }

  const handleSubmit = (e: any) => {
    e.preventDefault();

    if (smallScreen) {
      setFirstName(email);
      setLastName(email);
      email.indexOf("@") > -1 &&
        onValidated({
          EMAIL: email,
          FNAME: firstName,
          LNAME: lastName,
        });
    } else {
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

  }

  const handleOpen = () => {
    setOpen(true);
  }
  
  const handleClose = () => {
    setOpen(false);
  }



  return (
    <RegisterContainer>
      <MailchimpFormContainerTwo open={open} handleClose={handleClose}/>
      <Grid item container sm={12} xs={12} className={classes.containerForm} justify="center" direction="column">
        {/* <Typography variant={smallScreen ? "subtitle1" : "h5"} className={classes.titleStyle} >
          House Addition Kits
          {!smallScreen ? < br /> : null}
        </Typography> */}
        <Typography variant={smallScreen ? "h5" : "h3"} className={classes.titleStyle} style={{ fontWeight: 'bolder', lineHeight: 1 }}>
          <span className={classes.spacingText} >Take Control of Your Renovations <br/> Budget & Workflow.</span>
        </Typography>
        <br />
        {smallScreen ? <Typography variant="caption" className={classes.titleStyle} style={{ textAlign: 'center', marginBottom: 30, lineHeight: 1.3, padding: '10px 60px' }}>
          Saving money and time as easy as taking a picture of your material, labor bills and project progress, House+ app will organize the information and review the process for you. <br />
          {/* New additions designs start at $199. */}
        </Typography> : <Typography variant="h6" className={classes.titleStyle} style={{ textAlign: 'center', marginBottom: 30, lineHeight: 1.3, padding: '10px 20%' }}>
          Saving money and time as easy as taking a picture of your material, labor bills and project progress, House+ app will organize the information and review the process for you. <br />
          {/* New additions designs start at $199. */}
        </Typography>}
        {/* <Typography variant="subtitle1" className={classes.titleStyle} style={{ lineHeight: 1 }}>
          {!smallScreen ? <Fragment>< br /> < br /></Fragment> : null}
          {smallScreen ? "Design and plan your home addition" : "Plan and design your home addition"} <br />
          {smallScreen ? "in less than 10 minutes*." : "in less than 10 minutes with us."}

        </Typography> */}

        {/* <Typography  className={classes.titleStyle}>
          <h2 style={{ lineHeight: 1.2 }} className={smallScreen ? classes.textCenter : ''}>HOME Addition Kits <br /> Enjoy a Bigger Home.</h2>
          {smallScreen ? null :
            <h4 style={{ lineHeight: 1.0, fontWeight: 'normal' }}> Real state developers and property owners access <br /> <span className={classes.boldText}>an instant property feasibility & pre-design housing project.</span></h4>}
        </Typography> */}
      </Grid>
      {/* {smallScreen ?
        <ImgVideo></ImgVideo> : null} */}
      <Grid item sm={12} xs={12} style={{ alignSelf: 'flex-end' }}>
        {smallScreen ? <Typography variant="caption" className={classes.titleStyle} style={{ textAlign: 'center', marginBottom: 30, lineHeight: 1.3 }}>
          Stress-free remodeling
        </Typography> : null}

        {/* <Grid item xs={12}>
          <form
            action="https://rea-web.us6.list-manage.com/subscribe/post?u=3c39cbec5fc9d998a5b584676&amp;id=4064b46da9"
            method="post"
            id="mc-embedded-subscribe-form"
            name="mc-embedded-subscribe-form"
            className="validate"
            target="_blank"
            onSubmit={handleSubmit}
          >
            {status === "success" || status === "error" ?
              history.push("/waiting/" + firstName + "_" + lastName) : null}
            {!smallScreen ?
              <Fragment>
                <Input type="text" name="FNAME" id="mce-FNAME" placeholder="First name" onChange={handleChange1} className={classes.input} disableUnderline required />
                <Input type="text" name="LNAME" id="mce-LNAME" placeholder="Last Name" onChange={handleChange2} className={classes.input} disableUnderline required />
              </Fragment>
              : null}

            <div>
              <div className="response" id="mce-error-response" style={{ display: 'none' }}></div>
              <div className="response" id="mce-success-response" style={{ display: 'none' }}></div>
            </div>
            <div style={{ position: 'absolute', left: -5000 }} aria-hidden="true">
              <input type="text" name="b_3c39cbec5fc9d998a5b584676_4064b46da9" />
            </div>
            <Grid item container xs={12}>
              <Input type="text" name="EMAIL" id="mce-EMAIL"
                onChange={handleChange3}
                placeholder={!smallScreen ? "Enter email to sign up" : "Enter your email"}
                // className={classes.input}
                className={smallScreen ? clsx(classes.input, true && classes.inputSmall, true) : classes.input}
                disableUnderline
                required
                endAdornment={
                  !smallScreen ?
                    <InputAdornment position="end">
                      <Button
                        className={classes.button}
                        onMouseEnter={() => setHover(true)}
                        onMouseLeave={() => setHover(false)}
                        type="submit"
                        name="subscribe"
                      >
                        Join us
                      </Button>
                    </InputAdornment> : null
                }
              />
            </Grid>

            {smallScreen ? <Grid xs={12} container justify="center">
              <Button className={classes.buttonGreen} type="submit" name="subscribe">
                <span className={classes.itemText}>Get Started</span>
              </Button>
            </Grid> : null}
          </form>
        </Grid> */}

        {/* {!smallScreen ?
          <p className={classes.endText}>We are currently in beta, sign up to our waiting list.</p> : null} */}

        {smallScreen ? <Grid xs={12} container justify="center">
          <Button className={classes.buttonGreen} type="submit" name="subscribe" onClick={() => handleOpen()}>
            <span className={classes.itemText}>Book Appointment</span>
          </Button>
        </Grid> : null}
      </Grid>
    </RegisterContainer>

  )
}

export default FormMail;