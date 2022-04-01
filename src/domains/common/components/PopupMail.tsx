import React, { Fragment, useState } from "react";
import { Button, Dialog, Grid, Input, InputAdornment, makeStyles, Typography } from "@material-ui/core";
import CloseIcon from '@material-ui/icons/Close';
import { useHistory } from "react-router-dom";
import clsx from 'clsx';

const styles = makeStyles((theme) => ({
  container: {
    padding: '10px 20px',
  },
  centerText: {
    textAlign: 'center',
    marginBottom: 25,
    marginTop: 10
  },
  boldText: {
    fontWeight: 'bolder',
    marginBottom: 15
  },
  input: {
    margin: '5px 0 10px 0',
    // height: 30,
    borderRadius: 50,
    width: '100%',
    borderColor: '#030303',
    borderWidth: '1px',
    paddingLeft: 10,
    paddingTop: 5,
    paddingBottom: 5,
    '&:focus': {
      outline: 'none'
    },
    backgroundColor: '#FFFFFF8F',
    fontSize: 14,
    borderStyle: 'solid'
  },
  inputSmall: {
    width: '100%',
    margin: 'auto'
  },
  buttonGreen: {
    cursor: 'pointer',
    borderRadius: 20,
    backgroundColor: '#4A7A5A',
    color: 'white',
    textTransform: 'none',
    '&:hover': {
      backgroundColor: '#FF6C6C'
    },
    padding: '10px 40px',
    marginTop: 15
  },
  itemText: {
    textTransform: 'capitalize',
    color: 'white'
  },
}));

interface ownProps {
  open?: boolean;
  onValidated?: any;
  status?: any;
  message?: any;
  handleClose?: any;
}

type Props = ownProps;
const PopupMail = (props: Props) => {
  const classes = styles();
  const { open, onValidated, status, message, handleClose } = props;

  const [email, setEmail] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const history = useHistory();

  const handleSubmit = (e: any) => {
    e.preventDefault();
    setFirstName(email);
    setLastName(email);
    email.indexOf("@") > -1 &&
      onValidated({
        EMAIL: email,
        FNAME: firstName,
        LNAME: lastName,
      });

  }

  const handleChange1 = (e: any) => {
    setFirstName(e.target.value)
  }

  const handleChange2 = (e: any) => {
    setLastName(e.target.value)
  }

  const handleChange3 = (e: any) => {
    setEmail(e.target.value)
  }

  return (
    <Dialog open={open!} >
      <Grid container xs={12} className={classes.container}>
        <Grid xs={12} container justify="flex-end">
          <CloseIcon onClick={() => handleClose()}/>
        </Grid>
        <Grid xs={12} container justify="center">
          <Typography variant="h6" className={classes.centerText}>
            On your appointment we will use our design software, to design a custom home addition.
          </Typography>
          <Typography variant="subtitle1" className={classes.boldText}>
            Start with house+.
          </Typography>
          <Grid item xs={12}>
            <form
              action="https://rea-web.us6.list-manage.com/subscribe/post?u=3c39cbec5fc9d998a5b584676&amp;id=4064b46da9"
              method="post"
              id="mc-embedded-subscribe-form"
              name="mc-embedded-subscribe-form"
              className="validate"
              target="_blank"
              onSubmit={handleSubmit}
            >
              {/* {status === "success" || status === "error" ?
                history.push("/waiting/" + firstName + "_" + lastName) : null} */}

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
                  placeholder={"Enter your email"}
                  // className={classes.input}
                  className={clsx(classes.input, true && classes.inputSmall, true)}
                  disableUnderline
                  required
                />
              </Grid>
              <Grid xs={12} container justify="center">
                <Button className={classes.buttonGreen} type="submit" name="subscribe">
                  <span className={classes.itemText}>Book Now</span>
                </Button>
              </Grid>
            </form>
          </Grid>
        </Grid>
      </Grid>
    </Dialog>
  )
}

export default PopupMail;