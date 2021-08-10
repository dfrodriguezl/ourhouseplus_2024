import React, { Fragment, useState } from 'react'
import { Grid, Typography, createStyles, makeStyles, Theme, List, ListItem, ListItemAvatar, Avatar, ListItemText, Divider, Grow  } from '@material-ui/core';
import { PageContainer } from 'domains/core/containers'
import { teamMembers } from 'domains/core/models';

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
    }
  }))

export default function About() {
  const classes = useStyles();
  const [hover, setHover] = useState(0);

  return (
    <PageContainer background="controls-background">
      <Grid item sm={1} />
      <Grid item container sm={10}>
        <Grid item container sm={12}>
            <Typography>
              Our team is a group of architecture and tech specialists constantly working on bringing you a solution to improve your journey with developing
              a new housing project
            </Typography>
        </Grid>
        
        <Grid item container sm={12} style={{height: '20%',alignSelf: 'center'}}>
          <Grid item sm={2} style={{alignSelf: 'center'}}>
            <Typography className={classes.text}>
              TEAM
            </Typography>
            </Grid>
          <Grid item sm={10}>
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

