import {useState,Fragment} from 'react';
import { Grid } from '@material-ui/core';
import { RegisterContainer } from 'domains/core/containers';
import { withRouter,useParams  } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import { Facebook, Instagram, LinkedIn } from '@material-ui/icons';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useTheme } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({
    paper: {
      marginTop: theme.spacing(2),
      display: 'flex',
      alignItems: 'center',
      padding: 20,
    },
    links:{
        marginRight: 10
      },
      bottomLinks: {
        float: 'right',
        marginRight: 20,
        paddingTop: 5,
        '& img': {
          paddingLeft: 10
        },
        [theme.breakpoints.down('sm')]: {
          textAlign: 'center',
          marginRight: 0,
          float: 'none'
        }
      },
      endText: {
        fontSize: 13, 
        color: '#908F8C'
      },
      textContainer: {
        alignSelf:'flex-end',
        [theme.breakpoints.down('sm')]: {
            alignSelf:'flex-start',
        }
      },
      icon_play:{
        textAlign: 'center', 
        fontSize: 75, 
        color: 'white'
      },
})
)

interface ownParams {
    name?: string | undefined;
}

const WaitingList = () => {
    const classes = useStyles();
    const theme = useTheme();
    const smallScreen = useMediaQuery(theme.breakpoints.down("sm"));

    const params:ownParams = useParams();
    const name = params.name;


    return (
        <RegisterContainer>
            <Grid item container sm={12} xs={12} className={classes.textContainer}>
                <h2>You have <br/> <span style={{textDecoration: 'underline'}}>Joined REA's waiting list!.</span></h2>
                <Grid item sm={12} xs={5} >
                    <p>Hi {name?name.replace("_"," "):null} </p> 
                    {smallScreen?
                        <p style={{textAlign: 'justify'}}>Thank you for your interest in <span style={{fontWeight: 'bold'}}>rea</span>!<br/>We are so grateful for and overwhelmed by the number of people
                        that have signed up to be earley testers.<br/>We will be in touch when we are ready to release <span style={{fontWeight: 'bold'}}>rea</span> in your
                        country.<br/>Thank you for being part of the <span style={{fontWeight: 'bold'}}>rea</span> team.<br/><br/>Let's build the future together!</p>:
                        <p>Thank you for your interest in <span style={{fontWeight: 'bold'}}>rea</span>!<br/>We are so grateful for and overwhelmed by the number of people<br/>
                        that have signed up to be earley testers.<br/>We will be in touch when we are ready to release <span style={{fontWeight: 'bold'}}>rea</span> in your
                        country.<br/>Thank you for being part of the <span style={{fontWeight: 'bold'}}>rea</span> team.<br/><br/>Let's build the future together!</p> 
                    }

                    <SocialNetwork />
                    
                </Grid>

                {smallScreen?
                <Fragment>
                    <Grid xs={1}></Grid>
                    <Grid item xs={6}>
                        <ImgVideo />
                    </Grid>
                </Fragment>
                :null
                }
                
            </Grid>
            
        </RegisterContainer>
    )
}

const SocialNetwork = () => {
    const classes = useStyles();

    return (
        <Grid item sm={12} xs={12} style={{ alignSelf: 'flex-end' }}>
            <a href="https://www.linkedin.com/company/rea-web/" className={classes.links}>
                <LinkedIn fontSize="large"/>
            </a>
            <a href="https://www.linkedin.com/company/rea-web/" className={classes.links}>
                <Facebook fontSize="large"/>
            </a>
            <a href="https://www.linkedin.com/company/rea-web/">
                <Instagram fontSize="large"/>
            </a> 
            <p className={classes.endText}>Follow us on social.</p>
        </Grid>
    )
}

const ImgVideo = () => {
    const [play, setPlay] = useState(false);
  
  
    return (
      <Grid item sm={12} xs={12} style={{textAlign: 'center',height: '100%', padding: '20% 0'}}>
        {play?
          <iframe width="100%" height="100%" title="video-rea"
          src="https://www.youtube.com/embed/G6jz86kFJCk?autoplay=1&controls=0&mute=1">
        </iframe>:
        <div className="img-landing" style={{height: '100%', borderRadius: 20}}>
          {/* <IconButton style={{height: '100%'}} onClick={handlePlay}>
            <PlayCircleOutlineIcon className={classes.icon_play}></PlayCircleOutlineIcon>
          </IconButton> */}
        </div>
        } 
      </Grid> 
    )
  }

export default withRouter(WaitingList);