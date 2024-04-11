import React, { Fragment, useState } from 'react';
import { PageContainer } from '.';
import TypeSelect from '../components/TypeSelect';
import { Button, Grid, Theme } from '@mui/material';
import { types } from '../models';
import { makeStyles } from '@mui/styles';
import FurnitureCombinations from '../components/FurnitureCombinations';
import CombinationsQualification from '../components/CombinationsQualification';

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
    },
    containerButtonStyle: {
        marginBottom: '20px'
    }
})
)

const Combinations = () => {
    const classes = useStyles();
    const [type1, setType1] = useState();
    const [type2, setType2] = useState();
    const [openCombinations, setOpenCombinations] = useState(false);

    const handleClick = (e: any) => {
        if (type1 && type2) {
            setOpenCombinations(!openCombinations)
        }

    }

    return (
        <PageContainer background="create-project">
            <Grid container direction="column">
                <Grid container direction="row" justifyContent="space-around">
                    <TypeSelect name="Type 1" helper="Select furniture type" options={types} setType={setType1} />
                    <TypeSelect name="Type 2" helper="Select furniture type" options={types} setType={setType2} />
                </Grid>
                <Grid container justifyContent="center" className={classes.containerButtonStyle}>
                    <Button className={classes.buttonStyle} onClick={handleClick}>Show options</Button>
                </Grid>
                {openCombinations ?
                    <Fragment>
                        <FurnitureCombinations type1={type1} type2={type2} />
                        <CombinationsQualification />
                        <Grid container justifyContent="center" className={classes.containerButtonStyle}>
                            <Button className={classes.buttonStyle}>Next</Button>
                        </Grid>
                    </Fragment>
                    : null
                }
            </Grid>
        </PageContainer>
    )
}

export default Combinations;