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

interface OwnProps {
  img?: any;
  type?: string;
}

type Props = OwnProps;
const ImgVideo = (props: Props) => {
  const classes = useStyles();
  const [play, setPlay] = useState(false);
  const { img, type } = props;
  const height = type! === "small" ? '150%' : '100%';
  const marginBottom = type! === "small" ? 100 : 0;

  const handlePlay = () => {
    setPlay(true);
  }

  return (
    <Grid item container sm={12} xs={12} style={{ textAlign: 'center', alignItems: 'center', marginBottom: marginBottom }} >
      {play ?
        // Render a YouTube video player
        <ReactPlayer url='https://www.youtube.com/watch?v=m_QOz2xa0tY' playing={true} /> :
        <div className={!img ? "img-landing" : "img-landing-small"} style={{ height: height, width: '100%', borderRadius: 20 }}>
          <IconButton style={{ height: '100%' }} onClick={handlePlay}>
            <PlayCircleOutlineIcon className={classes.icon_play}></PlayCircleOutlineIcon>
          </IconButton>
        </div>
      }
    </Grid>
  )
}

export default ImgVideo;