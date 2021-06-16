import { Grid } from '@material-ui/core';
import React from 'react';

const Mailchimp = () => {

  return (
    <Grid container>
      <div id="mc_embed_signup">
        <form
          action="https://rea-web.us6.list-manage.com/subscribe/post?u=3c39cbec5fc9d998a5b584676&amp;id=4064b46da9"
          method="post"
          id="mc-embedded-subscribe-form"
          name="mc-embedded-subscribe-form"
          className="validate"
          target="_blank"
        >
          <div id="mc_embed_signup_scroll">
            <h2>Subscribe</h2>
            <div className="mc-field-group">
              <label >Email Address</label>
              <input type="email" name="EMAIL" className="required email" id="mce-EMAIL" />
            </div>
            <div id="mce-responses" className="clear">
              <div className="response" id="mce-error-response" style={{ display: 'none' }}></div>
              <div className="response" id="mce-success-response" style={{ display: 'none' }}></div>
            </div>
            <div style={{ position: 'absolute', left: -5000 }} aria-hidden="true">
              <input type="text" name="b_3c39cbec5fc9d998a5b584676_4064b46da9" />
            </div>
            <div className="clear">
              <input type="submit" value="Subscribe" name="subscribe" id="mc-embedded-subscribe" />
            </div>
          </div>
        </form>
      </div>
    </Grid>
  );
}

export default Mailchimp;
