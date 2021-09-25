import { useState } from 'react';
import { Grid, IconButton } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import ReactPlayer from 'react-player';
import PlayCircleOutlineIcon from '@material-ui/icons/PlayCircleOutline';


const useStyles = makeStyles(() => ({
  icon_play: {
    textAlign: 'center',
    fontSize: 75,
    color: 'white'
  },
})
)

const ImgVideo = () => {
  const classes = useStyles();
  const [play, setPlay] = useState(false);

  const handlePlay = () => {
    setPlay(true);
  }

  return (
    <Grid item container sm={12} xs={12} style={{ textAlign: 'center', alignItems: 'center' }} >
      {play ?
        // Render a YouTube video player
        <ReactPlayer url='https://www.youtube.com/watch?v=m_QOz2xa0tY' playing={true} /> :
        <div className="img-landing" style={{ height: '100%', width: '100%', borderRadius: 20 }}>
          <IconButton style={{ height: '100%' }} onClick={handlePlay}>
            <PlayCircleOutlineIcon className={classes.icon_play}></PlayCircleOutlineIcon>
          </IconButton>
        </div>
      }
    </Grid>
  )
}

export default ImgVideo;