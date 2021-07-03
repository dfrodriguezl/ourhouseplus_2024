import { Box, createStyles, makeStyles, Theme, Fab, SvgIcon } from '@material-ui/core'
import { KeyboardArrowDown } from '@material-ui/icons';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      textAlign: 'center',
      color: 'black',
      paddingBottom: 30,
    },
    header: {
      paddingBottom: 5
    },
    fab: {
        backgroundColor: "rgba(240, 224, 216, 0.7)",
        width: 43,
        height: 43
    },
    boxText: {
        marginBottom: 30,
        color: "white"
    },
    icon:{
        color: '#92c0d3',
        strokeWidth: 2
    }
  })
);

const handleScroll = () => {
    window.scroll({
        top: document.body.offsetHeight,
        left: 0,
        behavior: 'smooth'
    });
  }

export default function FabButton() {
  const classes = useStyles();

  return (
      <div className={classes.root}>
          <Box className={classes.boxText}>Learn how it works</Box>
          <Fab size="small" className={classes.fab} onClick={handleScroll}>         
            <KeyboardArrowDown fontSize="large" className={classes.icon}></KeyboardArrowDown>
          </Fab>
      </div>
          
  )
}
