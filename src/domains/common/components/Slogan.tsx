import { Box, Theme } from '@mui/material';

import createStyles from '@mui/styles/createStyles';
import makeStyles from '@mui/styles/makeStyles';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      textAlign: 'center',
      color: 'black',
      position: 'relative',
      letterSpacing: '1px'
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
