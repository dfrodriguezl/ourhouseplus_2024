import { Box, createStyles, makeStyles, Theme } from '@material-ui/core'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      textAlign: 'center',
      color: 'black',
      position: 'relative',
      letterSpacing: '1px',
      [theme.breakpoints.down('sm')]: {
        marginBottom: '10vh'
      },
    },
    header: {
      paddingBottom: 5,
      color: 'white'
    },
    whiteText: {
      color: 'white'
    }
  })
);

export default function Slogan() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Box fontWeight="bold" fontSize={24} className={classes.header}>LOFT NY</Box>
      <Box lineHeight={1.5} className={classes.whiteText}>I04 WOOSTER STREET</Box>
      <Box lineHeight={1.5} className={classes.whiteText}>NY - USA</Box>
      <Box lineHeight={1.5} className={classes.whiteText}>2023</Box>
    </div>
  )
}
