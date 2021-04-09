import { Box, createStyles, makeStyles, Theme } from '@material-ui/core'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      textAlign: 'center',
      color: 'black',
      position: 'relative',
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
      <Box fontWeight="bold" fontSize={24} className={classes.header}>Building future communities together</Box>
      <Box lineHeight={1.5}>REA helps you generate a preliminary design study of multi-dweling smart housing project in three simple steps</Box>
    </div>
  )
}
