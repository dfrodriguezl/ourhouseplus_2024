import { Button, Card, createStyles, Grid, makeStyles, Paper, Radio, RadioGroup, Typography } from '@material-ui/core';
import { carouselItem } from 'domains/core/models';
import React, { useState } from 'react';
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
    icons:{
      color: '#A2A0A0'
    }
  })
);


function CarouselFacade(props: any) {
  const classes = useStyles();
  const items: Array<any> = [];
  const [selectedFacade, setSelectedFacade] = useState(1);

  const handleChange = (event: any) => {
    setSelectedFacade(event.target.value)
  }

  for (let i = 0; i < carouselItem.length; i += sliderItems) {
    if (i % sliderItems === 0) {
      items.push(
        <Grid key={i.toString()}>
          <Grid xs={12} container spacing={4} className="BannerGrid">
            {carouselItem.slice(i, i + sliderItems).map((da, index) => {
              return (<Grid xs={4} key={index.toString()} style={{marginBottom: 30}}>
                <img alt={index.toString()} src={da.img} width="100%"/>
                <br />
                <Radio
                  classes={{root: classes.radio}}
                  checked={selectedFacade === da.id}
                  onChange={() => setSelectedFacade(da.id)}
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
    NextIcon={<ArrowForwardIosIcon className={classes.icons}/>}
    PrevIcon={<ArrowBackIosIcon className={classes.icons}/>}
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