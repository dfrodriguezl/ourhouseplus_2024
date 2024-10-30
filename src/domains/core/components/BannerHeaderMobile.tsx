import { Grid, Theme, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import React from "react";

const useStyles = makeStyles((theme: Theme) => ({
    backgroundStyle: {
        background: 'white',
        height: '50vh',
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
    }
}));

const BannerHeaderMobile = () => {
    const classes = useStyles();

    return (
        <Grid container direction="column" className={classes.backgroundStyle} justifyContent="space-around" >
            <Typography variant="h6" className={classes.typographyCenterStyle}>CUSTOM AI-ASSISTANT FOR INTERIOR DESIGNERS.</Typography>
            <Grid item>
                <Typography variant="subtitle1" className={classes.typographySubtitle}>Elevate your design process.</Typography>
                <Typography variant="subtitle1" className={classes.typographySubtitle}>Leave the logistics to your ai.</Typography>
            </Grid>
            <Grid item container justifyContent="center">
                <form action="/submit-signup" method="post">
                    <input type="text" id="username" name="username" placeholder="Start training your assistant - email" required className={classes.inputStyle}/>
                    <button type="submit" className={classes.buttonStyle}>Sign Up</button>
                </form>
            </Grid>
        </Grid>
    )
}

export default BannerHeaderMobile;