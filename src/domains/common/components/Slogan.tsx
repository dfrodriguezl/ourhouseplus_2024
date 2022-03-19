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
      paddingBottom: 5
    }
  })
);

export default function Slogan() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Box fontWeight="bold" fontSize={24} className={classes.header}>Build and sell housing projects faster & better.</Box>
      <Box lineHeight={1.5}>Generate in real time a housing project and download the Investor & Client presentations.</Box>
    </div>
  )
}
