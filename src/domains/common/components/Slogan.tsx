import React from 'react'
import { createStyles, makeStyles, Theme, Typography } from '@material-ui/core'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      position: 'relative',
      top: -100,
      textAlign: 'center'
    },
  })
);

export default function Slogan() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Typography variant="h4">
        building future communities together
      </Typography>
      <Typography variant="h6">
        REA helps you generate a preliminary design study of multi-dweling
      </Typography>
      <Typography variant="h6">
        smart housing project in three simple steps
      </Typography>
    </div>
  )
}
