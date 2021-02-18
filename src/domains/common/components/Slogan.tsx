import { Box, createStyles, makeStyles, Theme } from '@material-ui/core'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      textAlign: 'center',
      color: 'white',
      position: 'relative',
      bottom: -200,
    },
    header: {
      paddingBottom: 5
    }
  })
);

export default function Slogan() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Box fontWeight="bold" fontSize={24} className={classes.header}>building future communities together</Box>
      <Box>REA helps you generate a preliminary design study of multi-dweling smart housing project in three simple steps</Box>
    </div>
  )
}
