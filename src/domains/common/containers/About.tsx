import { Fragment, useState, } from 'react'
import { Grid, Typography, createStyles, makeStyles, Theme, List, ListItem, ListItemAvatar, Avatar, ListItemText, Divider, Grow, Button } from '@material-ui/core';
import { PageContainer } from 'domains/core/containers'
import { teamMembers } from 'domains/core/models';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useTheme } from '@material-ui/core/styles';
import { useHistory } from 'react-router-dom';


const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    text: {
      fontWeight: 'bold',
      color: '#B4B4B3'
    },
    list: {
      marginTop: '15%'
    },
    textItem: {
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
        // paddingLeft: '15px',
        paddingLeft: 25,
        paddingRight: 25
      },
    },
    title: {
      [theme.breakpoints.down('sm')]: {
        fontSize: 13,
      },
    },
    imgContainer: {
      [theme.breakpoints.down('sm')]: {
        marginTop: 10,
        marginBottom: 130,
      },
    },
    nameTitle: {
      fontSize: 15,
      display: 'block'
    },
    nameSubtitle: {
      fontSize: 10,
      display: 'block'
    },
    nameCity: {
      fontSize: 10,
      display: 'block'
    },
    boldText: {
      fontWeight: 'bolder'
    },
    titleContainer: {
      marginTop: 20
    },
    buttonGreen: {
      cursor: 'pointer',
      borderRadius: 20,
      backgroundColor: '#1C3B08',
      color: 'white',
      textTransform: 'none',
      // '&:hover': {
      //   backgroundColor: '#FF6C6C'
      // },
      padding: '0px 20px',
      marginBottom: 15
    },
    itemText: {
      textTransform: 'capitalize',
      color: 'white'
    },
    buttonOutlined: {
      cursor: 'pointer',
      borderRadius: 20,
      backgroundColor: 'transparent',
      color: '#6F6E6E',
      textTransform: 'none',
      padding: '-10px 10px',
      borderColor: '#6F6E6E',
      lineHeight: 0,
      margin: '0px 30px 60px'
    },
    itemTextOutlined: {
      textTransform: 'capitalize',
      color: '#6F6E6E'
    },
  }))



const About = () => {
  const classes = useStyles();
  const [hover, setHover] = useState(0);
  const theme = useTheme();
  const smallScreen = useMediaQuery(theme.breakpoints.down("sm"));
  const history = useHistory();

  const handleScroll = () => {
    window.scroll({
      top: 0,
      left: 0,
      behavior: 'smooth'
    });
  }

  if (hover === 0) {
    handleScroll();
  }

  const toGetStarted = () => {
    history.push("/register");
  }



  return (
    <PageContainer background={!smallScreen ? "waiting-back" : "home-sub-1-small"}>
      {/* {!smallScreen ?
        <Fragment>
          <Grid item sm={1} />
          <Grid item container sm={10} xs={12} className={classes.container}>
            <Grid item container sm={12} className={classes.titleContainer}>
              <Typography className={classes.title}>
                <span className={classes.boldText}>Rea helps you to create your real estate projects faster.</span><br />
                Our team is a group of architecture and tech specialists constantly working on bringing you a solution to improve your journey with developing
                a new housing project.
              </Typography>
            </Grid>

            <Grid item container sm={12} style={{ height: '30%', alignSelf: 'center' }}>
              <Grid item sm={3} xs={3} style={{ alignSelf: 'center' }}>
                <Typography className={classes.text}>
                  TEAM
                </Typography>
              </Grid>
              <Grid item sm={8} xs={8} className={classes.imgContainer}>
                <div className="img-team" style={{ height: '100%', borderRadius: 20 }}>
                </div>
              </Grid>
            </Grid>

            <Grid item container sm={12} className={classes.list}>
              <List style={{ width: '100%' }}>
                <Divider />
                {teamMembers.map((tm) => {
                  return (
                    <ListItem key={tm.id} divider button onMouseEnter={() => setHover(tm.id)} onMouseLeave={() => setHover(0)}>

                      {!smallScreen ?
                        <Fragment>
                          <ListItemText primary={tm.name} className={classes.textItem} style={{ width: '30%' }} disableTypography />
                          <ListItemAvatar >
                            <Avatar className={hover === tm.id ? classes.large : ''} src={tm.picture} />
                          </ListItemAvatar>
                          {hover === tm.id && tm.desc_1 ?
                            <Grow in={true} {...({ timeout: 1000 })}>
                              <ListItemText className={classes.textItem} style={{ width: '70%' }} disableTypography >
                                <p>{tm.desc_1}</p>
                                <p>{tm.desc_2}</p>
                              </ListItemText>
                            </Grow> :
                            <Fragment>
                              <ListItemText primary={tm.position} className={classes.textItem} style={{ width: '50%' }} disableTypography />
                              <ListItemText primary={tm.city} className={classes.textItem} style={{ width: '20%' }} disableTypography />
                            </Fragment>
                          }
                        </Fragment> :
                        <Fragment>
                          <ListItemText className={classes.textItem} style={{ width: '70%' }} disableTypography >
                            <span className={classes.nameTitle}>{tm.name}</span>
                            {hover === tm.id && tm.desc_1 ?
                              <Grow in={true} {...({ timeout: 1000 })}>
                                <span className={classes.nameSubtitle} style={{ padding: 10 }}>{tm.desc_1 + tm.desc_2}</span>
                              </Grow>
                              : <Fragment>
                                <span className={classes.nameSubtitle}>{tm.position}</span>
                                <br />
                                <span className={classes.nameCity}>{tm.city}</span>
                              </Fragment>
                            }
                          </ListItemText>
                          <ListItemAvatar >
                            <Avatar className={hover === tm.id ? classes.large : ''} src={tm.picture} />
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
        </Fragment> : */}
      <Fragment>
        {/* <Grid item sm={1} /> */}
        <Grid item container xs={12} className={classes.container} direction="column">
          <Grid item container className={classes.titleContainer}>
            <Typography variant="subtitle1">
              Looking for a bigger kitchen, an additional bedroom or a home office?
              <br />
              <span className={classes.boldText}> It begins here.</span>
            </Typography>
          </Grid>
          <Grid item container style={{ height: '30%', alignSelf: 'center' }} >
            <Grid item className={classes.imgContainer} direction="column">
              <div className="home-register" style={{ height: '100%', borderRadius: 20 }}>
              </div>
              <br />
              <Typography variant="subtitle2">
                With only a few clicks, you'll have a new home addition kit, ready to build, three weeks after permitting.<br />
                Save time and select various design themes via real-time.
              </Typography>
              <br />

            </Grid>
            <Grid item container justify='flex-end'>
              <Button className={classes.buttonOutlined} variant="outlined" size="small" onClick={() => toGetStarted()}>
                <p className={classes.itemTextOutlined}>Get Started</p>
              </Button>
            </Grid>
          </Grid>
          <Grid item container className={classes.list}>
            <List style={{ width: '100%' }}>
              <Divider />
              {teamMembers.map((tm) => {
                return (
                  <ListItem key={tm.id} divider button onMouseEnter={() => setHover(tm.id)} onMouseLeave={() => setHover(0)}>

                    {!smallScreen ?
                      <Fragment>
                        <ListItemText primary={tm.name} className={classes.textItem} style={{ width: '30%' }} disableTypography />
                        <ListItemAvatar >
                          <Avatar className={hover === tm.id ? classes.large : ''} src={tm.picture} />
                        </ListItemAvatar>
                        {hover === tm.id && tm.desc_1 ?
                          <Grow in={true} {...({ timeout: 1000 })}>
                            <ListItemText className={classes.textItem} style={{ width: '70%' }} disableTypography >
                              <p>{tm.desc_1}</p>
                              <p>{tm.desc_2}</p>
                            </ListItemText>
                          </Grow> :
                          <Fragment>
                            <ListItemText primary={tm.position} className={classes.textItem} style={{ width: '50%' }} disableTypography />
                            <ListItemText primary={tm.city} className={classes.textItem} style={{ width: '20%' }} disableTypography />
                          </Fragment>
                        }
                      </Fragment> :
                      <Fragment>
                        <ListItemText className={classes.textItem} style={{ width: '70%' }} disableTypography >
                          <span className={classes.nameTitle}>{tm.name}</span>
                          {hover === tm.id && tm.desc_1 ?
                            <Grow in={true} {...({ timeout: 1000 })}>
                              <span className={classes.nameSubtitle} style={{ padding: 10 }}>{tm.desc_1 + tm.desc_2}</span>
                            </Grow>
                            : <Fragment>
                              <span className={classes.nameSubtitle}>{tm.position}</span>
                              <br />
                              <span className={classes.nameCity}>{tm.city}</span>
                            </Fragment>
                          }
                        </ListItemText>
                        <ListItemAvatar >
                          <Avatar className={hover === tm.id ? classes.large : ''} src={tm.picture} />
                        </ListItemAvatar>
                      </Fragment>
                    }
                  </ListItem>
                )
              })}
            </List>
          </Grid>
          <Grid container justify="center">
            <Button className={classes.buttonGreen} onClick={() => toGetStarted()}>
              <p className={classes.itemText}>Get Started</p>
            </Button>
          </Grid>
        </Grid>
        {/* <Grid item sm={1} /> */}
      </Fragment>
      {/* } */}

    </PageContainer>
  )
}

export default About;


