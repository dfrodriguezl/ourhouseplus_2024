import React, { ChangeEvent } from 'react'
import { FormControl, FormControlLabel, Grid, Radio, RadioGroup, Theme, Typography } from '@mui/material';
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
    },
    containerStyle: {
        marginTop: '20px'
    },
    textStyle: {
        textAlign: 'center'
    }
})
)

interface OwnProps {
    setQualification?: any;
    qualification?: string;
}

type Props = OwnProps;
const CombinationsQualification = (props: Props) => {
    const classes = useStyles();
    const { qualification, setQualification } = props;

    const handleValue = (event: ChangeEvent<HTMLInputElement>) => {
        setQualification((event.target as HTMLInputElement).value)
    }

    return (
        <Grid container justifyContent="center" direction="column" alignContent="center" className={classes.containerStyle}>
            <Typography variant="h6" className={classes.textStyle}>Combination Qualification</Typography>
            <FormControl>
                <RadioGroup
                    aria-labelledby="demo-radio-buttons-group-label"
                    defaultValue=""
                    name="radio-buttons-group"
                    row
                    onChange={handleValue}
                    value={qualification}
                >
                    <FormControlLabel value="1" control={<Radio sx={{color: 'gray', '&.Mui-checked': {color: 'gray'}}} /> } label="1" labelPlacement="top" color="gray"/>
                    <FormControlLabel value="2" control={<Radio sx={{color: 'gray', '&.Mui-checked': {color: 'gray'}}} /> } label="2" labelPlacement="top" />
                    <FormControlLabel value="3" control={<Radio sx={{color: 'gray', '&.Mui-checked': {color: 'gray'}}} /> } label="3" labelPlacement="top" />
                    <FormControlLabel value="4" control={<Radio sx={{color: 'gray', '&.Mui-checked': {color: 'gray'}}} /> } label="4" labelPlacement="top" />
                    <FormControlLabel value="5" control={<Radio sx={{color: 'gray', '&.Mui-checked': {color: 'gray'}}} /> } label="5" labelPlacement="top" />
                </RadioGroup>
            </FormControl>
        </Grid>
    )
}

export default CombinationsQualification;