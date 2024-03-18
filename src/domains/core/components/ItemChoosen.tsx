
import React, { PropsWithChildren } from 'react';
import { Grid, Theme, Typography } from '@mui/material';
import makeStyles from '@mui/styles/makeStyles';


const useStyles = makeStyles((theme: Theme) => ({
    containerStyle: {
        background: '#FFFFFF',
        border: '1px solid #707070',
        borderRadius: '5px',
        width: "500px",
        height: "300px",
        opacity: 0.8,
        marginRight: 30,
        marginLeft: 30
    },
}));

export default function ItemChoosen(props: PropsWithChildren) {
    const { children } = props;
    const classes = useStyles();

    return (
        <Grid container className={classes.containerStyle} justifyContent="center" alignItems="center">
            <Typography>{children}</Typography>
        </Grid>
    );
}