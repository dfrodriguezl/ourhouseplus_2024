import React from 'react';
import { createStyles, Grid, makeStyles, Radio, Typography } from '@material-ui/core';
import { carouselItem, LocationSimple } from 'domains/core/models';
import Carousel from 'react-material-ui-carousel'
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';

const sliderItems: number = carouselItem.length > 3 ? 3 : carouselItem.length;

const useStyles = makeStyles(() =>
  createStyles({
    carousel: {
      width: '100%',
      marginTop: 30,
      textAlign: 'center'
    },
    radioStyle: {
      width: '100%'
    },
    radio: {
      color: '#00000080',
      '&.Mui-checked': {
        color: '#FF7777'
      }
    },
    text: {
      color: '#00000080'
    },
    icons: {
      color: '#A2A0A0'
    }
  })
);

interface OwnProps {
  setWindow: any;
  location: LocationSimple | undefined;
}


type Props = OwnProps;
const CarouselFacade = (props: Props) => {
  const classes = useStyles();
  const items: Array<any> = [];
  const { setWindow, location } = props;


  for (let i = 0; i < carouselItem.length; i += sliderItems) {
    if (i % sliderItems === 0) {
      items.push(
        <Grid key={i.toString()}>
          <Grid xs={12} container spacing={4} className="BannerGrid">
            {carouselItem.slice(i, i + sliderItems).map((da, index) => {
              return (<Grid xs={4} key={index.toString()} style={{ marginBottom: 30 }}>
                <img alt={index.toString()} src={da.img} width="100%" />
                <br />
                <Radio
                  classes={{ root: classes.radio }}
                  checked={location?.windowPercentage === da.id}
                  onChange={() => setWindow(da.id)}
                />
                <br />
                <Typography className={classes.text}>{da.name}</Typography>
              </Grid>);
            })}
          </Grid>
        </Grid>
      );
    }
  }

  return (
    <Carousel
      className={classes.carousel}
      autoPlay={false}
      navButtonsAlwaysVisible={true}
      NextIcon={<ArrowForwardIosIcon className={classes.icons} />}
      PrevIcon={<ArrowBackIosIcon className={classes.icons} />}
      navButtonsProps={{
        style: {
          backgroundColor: "#FFFFFF00",
          marginRight: '-15px'
        }
      }}>
      {items}
    </Carousel>
  )
}

export default CarouselFacade;