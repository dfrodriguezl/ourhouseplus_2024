import React from "react";
import { Grid, Theme } from "@mui/material";
import makeStyles from '@mui/styles/makeStyles';

const useStyles = makeStyles((theme: Theme) => ({
    containerStyle: {
        backgroundColor: '#FFFFFF',
        height: '200px'
    }
}));

const OurSuggestions = () => {
    const classes = useStyles();

    return (
        <Grid container className={classes.containerStyle} direction="row">
            <h1>Our Suggestions</h1>
        </Grid>
    )
}

export default OurSuggestions;