import { useState } from 'react';
import { Typography, Grid, Input, InputAdornment, Button } from '@material-ui/core';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useHistory } from 'react-router-dom';
import { RegisterContainer } from 'domains/core/containers';
import { ImgVideo } from '.';

const useStyles = makeStyles((theme) => ({
  containerForm: {
    alignSelf: 'flex-end',
    [theme.breakpoints.down('sm')]: {
      alignSelf: 'flex-start',
    },
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
          <h2 style={{ lineHeight: 1.2, fontWeight: 'bold' }}>We help you build better cities <br /> for the future.</h2>
          {smallScreen ? <p style={{ fontSize: 13, lineHeight: 1.2 }}>Generate and analyse an automated preliminary design of collective housing project in three simple steps.</p> :
            <h4 style={{ lineHeight: 1.0, fontWeight: 'normal' }}> Generate and analyse an automated preliminary <br /> design of collective housing project in three simple steps.</h4>}
        </Typography>
      </Grid>
      {smallScreen ?
        <ImgVideo></ImgVideo> : null}
      <Grid item sm={12} xs={12} style={{ alignSelf: 'flex-end' }}>
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
          <Input type="text" name="FNAME" id="mce-FNAME" placeholder="First name" onChange={handleChange1} className={classes.input} disableUnderline required />
          <Input type="text" name="LNAME" id="mce-LNAME" placeholder="Last Name" onChange={handleChange2} className={classes.input} disableUnderline required />
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
                <Button
                  className={classes.button}
                  onMouseEnter={() => setHover(true)}
                  onMouseLeave={() => setHover(false)}
                  type="submit"
                  name="subscribe"
                >
                  Join us
                </Button>
                {/* <IconButton className={classes.iconButton} type="submit" name="subscribe">
                  <ArrowForwardIcon className={classes.icon}></ArrowForwardIcon>
                </IconButton> */}
              </InputAdornment>
            }
          />
        </form>
        <p className={classes.endText}>We are currently in beta, sign up to our waiting list.</p>
      </Grid>
    </RegisterContainer>

  )
}

export default FormMail;