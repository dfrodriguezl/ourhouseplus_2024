import React from 'react';
import { PageContainer } from '.';
import TypeSelect from '../components/TypeSelect';
import { Button, Grid, Theme } from '@mui/material';
import { types } from '../models';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme: Theme) => ({
    selectStyle: {
        color: 'white',
        borderColor: 'white'
    },
    buttonStyle: {
        background: '#707070 0% 0% no-repeat padding-box !important',
        borderRadius: '5px',
        font: 'normal normal normal 20px/23px Centaur !important',
        color: '#FFFFFF !important',
        letterSpacing: '0px',
        padding: '5px 50px !important',
        marginTop: '50px !important'
    }
})
)

const Combinations = () => {
    const classes = useStyles();

    return (
        <PageContainer background="create-project">
            <Grid container direction="column">
                <Grid container direction="row" justifyContent="space-around">
                    <TypeSelect name="Type 1" helper="Select furniture type" options={types} />
                    <TypeSelect name="Type 2" helper="Select furniture type" options={types} />
                </Grid>
                <Grid container justifyContent="center">
                    <Button className={classes.buttonStyle}>Show options</Button>
                </Grid>
            </Grid>
        </PageContainer>
    )
}

export default Combinations;