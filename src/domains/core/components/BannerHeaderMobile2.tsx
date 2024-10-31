import { Box, Grid, Theme, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import React from "react";
import Carousel from "react-material-ui-carousel";
import { homeElements } from "../models";

const useStyles = makeStyles((theme: Theme) => ({
    backgroundStyle: {
        background: '#E2E6E7',
        height: '70vh',
        padding: "10% 10%"
    },
    typographyCenterStyle: {
        textAlign: 'center',
        fontWeight: '600'
    },
    typographySubtitle: {
        textAlign: 'center',
        color: '#2A2A2A'
    },
    buttonStyle: {
        background: "#C5A500",
        border: "1px solid #7B4338",
        textTransform: "uppercase",
        color: "white",
        padding: "10px",
        borderRadius: "10%"
    },
    inputStyle: {
        padding: "10px"
    },
    carouselStyle: {
        minHeight: '50vh'
    },
    typographyColor: {
        color: "#2A2A2A",
        fontWeight: 'bolder'
    },
    boxStyle: {
        textAlign: "center"
    },
    typographyColor2: {
        color: "#2A2A2A",
        fontWeight: 'lighter'
    },
}));

const BannerHeaderMobile2 = () => {
    const classes = useStyles();

    return (
        <Grid container direction="column" className={classes.backgroundStyle} >
            <Carousel
                className={classes.carouselStyle}
                indicators={true}
                indicatorContainerProps={{
                    style: {
                        marginTop: "95%"
                    }
                }}>
                {homeElements.map((element: any, index: number) => {

                    return (
                        <Box key={index} className={classes.boxStyle}>
                            <img src={element.img} width="100%" height="40%" alt="carousel item" />
                            <Typography className={classes.typographyColor}>{element.textBold}</Typography>
                            <Typography className={classes.typographyColor2}>{element.textBottom}</Typography>
                        </Box>
                    )

                }, [])}
            </Carousel>
        </Grid>
    )
}

export default BannerHeaderMobile2;