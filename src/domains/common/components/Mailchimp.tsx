import React from 'react';
import { createStyles, Grid, makeStyles, Modal, Theme } from '@material-ui/core';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    paper: {
      position: 'absolute',
      top: '50%',
      left: '50%',
      transform: `translate(-50%, -50%)`,
      width: 400,
      backgroundColor: theme.palette.background.paper,
      boxShadow: theme.shadows[5],
      padding: theme.spacing(2, 4, 3),
      background: 'transparent linear-gradient(136deg, #D6D5E4 0%, #E6DFCE 100%, #8EBED2 100%, #A9A9A9 100%) 0% 0% no-repeat padding-box'
    },
    input: {
      margin: '5px 0 0 0',
      height: 30,
      borderRadius: 50,
      width: '100%',
      paddingLeft: 10,
      '&:focus': {
        outline: 'none'
      }
    },
    label: {
      fontSize: 12,
      fontWeight: 'bold',
    },
    button: {
      margin: '10px 0 0 0',
      borderRadius: 50,
      backgroundColor: '#FF6C6C',
      color: 'white',
      padding: '5px 10px 5px 10px',
      cursor: 'pointer'
    }
  }),
);

interface OwnProps {
  open: boolean;
  handleClose: () => void;
}

type Props = OwnProps;
const Mailchimp = (props: Props) => {
  const { open, handleClose } = props;
  const classes = useStyles();

  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="simple-modal-title"
      aria-describedby="simple-modal-description"
    >
      <form
        action="https://rea-web.us6.list-manage.com/subscribe/post?u=3c39cbec5fc9d998a5b584676&amp;id=4064b46da9"
        method="post"
        id="mc-embedded-subscribe-form"
        name="mc-embedded-subscribe-form"
        className="validate"
        target="_blank"
      >
        <Grid container className={classes.paper}>
          <h2 id="simple-modal-title">Sign up for our waitlist.</h2>
          <Grid item xs={12}>
            <div>
              <label className={classes.label}>First Name </label>
            </div>
            <div>
              <input type="text" name="FNAME" id="mce-FNAME" className={classes.input} required />
            </div>
            <div >
              <div>
                <label className={classes.label}>Last Name </label>
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
              <input type="submit" value="Subscribe" name="subscribe" className={classes.button} />
            </div>
          </Grid>
        </Grid>
      </form>
    </Modal>
  );
}

export default Mailchimp;
