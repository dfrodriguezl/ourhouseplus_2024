import { Fragment, useState, } from 'react'
import { Grid, Typography, createStyles, makeStyles, Theme, List, ListItem, ListItemAvatar, Avatar, ListItemText, Divider, Grow  } from '@material-ui/core';
import { PageContainer } from 'domains/core/containers'
import { teamMembers } from 'domains/core/models';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useTheme } from '@material-ui/core/styles';


const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    text:{
      fontWeight: 'bold',
      color: '#B4B4B3'
    },
    list: {
      marginTop: '2%'
    },
    textItem:{
      fontSize: 13,
      fontWeight: 'bold',
    },
    large: {
      width: theme.spacing(7),
      height: theme.spacing(7),
      marginRight: theme.spacing(2)
    },
    container: {
      [theme.breakpoints.down('sm')]: {
        paddingLeft: '15px',
      },
    },
    title: {
      [theme.breakpoints.down('sm')]: {
        fontSize: 13,
      },
    },
    imgContainer:{
      [theme.breakpoints.down('sm')]: {
        marginTop: 10,
        marginBottom: 10,
      },
    },
    nameTitle:{
      fontSize: 15,
      display: 'block'
    },
    nameSubtitle:{
      fontSize: 10,
      display: 'block'
    },
    nameCity:{
      fontSize: 10,
      display: 'block'
    }
  }))



const About = () => {
  const classes = useStyles();
  const [hover, setHover] = useState(0);
  const theme = useTheme();
  const smallScreen = useMediaQuery(theme.breakpoints.down("sm"));
  
  return (
    <PageContainer background="controls-background">
      <Grid item sm={1} />
      <Grid item container sm={10} xs={12} className={classes.container}>
        <Grid item container sm={12}>
            <Typography className={classes.title}>
              Our team is a group of architecture and tech specialists constantly working on bringing you a solution to improve your journey with developing
              a new housing project
            </Typography>
        </Grid>
        
        <Grid item container sm={12} style={{height: '20%',alignSelf: 'center'}}>
          <Grid item sm={2} xs={2} style={{alignSelf: 'center'}}>
            <Typography className={classes.text}>
              TEAM
            </Typography>
            </Grid>
          <Grid item sm={10} xs={10} className={classes.imgContainer}>
            <div className="img-team" style={{height: '100%', borderRadius: 20}}>
            </div>
          </Grid>
        </Grid> 

        <Grid item container sm={12} className={classes.list}>
          <List style={{width: '100%'}}>
          <Divider />
          {teamMembers.map((tm) => {
            return (
              <ListItem key={tm.id} divider button onMouseEnter={() => setHover(tm.id)} onMouseLeave={() => setHover(0)}>

                {!smallScreen?
                  <Fragment>
                    <ListItemText primary={tm.name} className={classes.textItem} style={{width: '30%'}} disableTypography/>
                    <ListItemAvatar >
                      <Avatar className={hover === tm.id ?classes.large: ''} src='/assets/team.png'/>
                    </ListItemAvatar>
                    {hover === tm.id && tm.desc_1?
                      <Grow in={true} {...(1 === 1 ? { timeout: 1000 } : {})}>
                        <ListItemText className={classes.textItem} style={{width: '70%'}} disableTypography >
                          <p>{tm.desc_1}</p>
                          <p>{tm.desc_2}</p>
                        </ListItemText>
                      </Grow>:
                      <Fragment>
                        <ListItemText primary={tm.position} className={classes.textItem} style={{width: '50%'}} disableTypography/>
                        <ListItemText primary={tm.city} className={classes.textItem} style={{width: '20%'}} disableTypography/>
                      </Fragment> 
                    }
                  </Fragment>:
                  <Fragment>

                    
                    <ListItemText className={classes.textItem} style={{width: '70%'}} disableTypography >
                      <span className={classes.nameTitle}>{tm.name}</span>
                      {hover === tm.id && tm.desc_1?
                        <Grow in={true} {...(1 === 1 ? { timeout: 1000 } : {})}>
                          <span className={classes.nameSubtitle} style={{padding: 10}}>{tm.desc_1 + tm.desc_2}</span>
                        </Grow>
                      :<Fragment>
                        <span className={classes.nameSubtitle}>{tm.position}</span>
                        <br />
                        <span className={classes.nameCity}>{tm.city}</span>
                      </Fragment>
                        
                      }
                      
                    </ListItemText>
                    <ListItemAvatar >
                      <Avatar className={hover === tm.id ?classes.large: ''} src='/assets/team.png'/>
                    </ListItemAvatar>
                  </Fragment>
                }
                
              </ListItem>
            )
          })}
          </List>
        </Grid> 
      </Grid>
      <Grid item sm={1} />
    </PageContainer>
  )
}

export default About;


