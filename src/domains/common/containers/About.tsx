import React from 'react'
import { Grid, Typography, createStyles, makeStyles, Theme, List, ListItem, ListItemAvatar, Avatar, ListItemText, Divider } from '@material-ui/core';
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
    }
  }))

export default function About() {
  const classes = useStyles();

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
              <ListItem divider >
                <ListItemText primary={tm.name} style={{width: '30%'}}/>
                <ListItemAvatar>
                  <Avatar src='/assets/team.png'/>
                </ListItemAvatar>
                <ListItemText primary={tm.position} style={{width: '30%'}}/>
                <ListItemText primary={tm.city} style={{width: '30%'}}/>
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
