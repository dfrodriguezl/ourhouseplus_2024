import React, { ChangeEvent, Fragment } from 'react'
import { FormControl, FormControlLabel, Grid, IconButton, Radio, RadioGroup, Theme, Typography, useMediaQuery, useTheme } from '@mui/material';
import { makeStyles } from '@mui/styles';
import CancelIcon from '@mui/icons-material/Cancel';
import TagFacesIcon from '@mui/icons-material/TagFaces';

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
    },
    iconStyle: {
        color: 'black'
    }
})
)

interface OwnProps {
    setQualification?: any;
    qualification?: string;
    saveCombination?: any;
}

type Props = OwnProps;
const CombinationsQualification = (props: Props) => {
    const classes = useStyles();
    const { qualification, setQualification, saveCombination } = props;
    const theme = useTheme();
    const smallScreen = useMediaQuery(theme.breakpoints.down("sm"));



    const handleValue = (event: ChangeEvent<HTMLInputElement>) => {
        setQualification((event.target as HTMLInputElement).value)
    }


    const handleValueSmall = (tipo: string) => {
        setQualification(tipo)
        saveCombination(tipo)
    }

    return (
        <Grid container justifyContent="center" direction="column" alignContent="center" className={classes.containerStyle}>
            {smallScreen ?
                <Fragment>
                    <Grid container direction="row" justifyContent="center">
                        <IconButton size="large" onClick={() => handleValueSmall("0")}><CancelIcon fontSize="large" className={classes.iconStyle}/></IconButton>
                        <IconButton size="large" onClick={() => handleValueSmall("5")}><TagFacesIcon fontSize="large" className={classes.iconStyle}/></IconButton>
                    </Grid>
                </Fragment>
                :
                <Fragment>
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
                            <FormControlLabel value="1" control={<Radio sx={{ color: 'gray', '&.Mui-checked': { color: 'gray' } }} />} label="1" labelPlacement="top" color="gray" />
                            <FormControlLabel value="2" control={<Radio sx={{ color: 'gray', '&.Mui-checked': { color: 'gray' } }} />} label="2" labelPlacement="top" />
                            <FormControlLabel value="3" control={<Radio sx={{ color: 'gray', '&.Mui-checked': { color: 'gray' } }} />} label="3" labelPlacement="top" />
                            <FormControlLabel value="4" control={<Radio sx={{ color: 'gray', '&.Mui-checked': { color: 'gray' } }} />} label="4" labelPlacement="top" />
                            <FormControlLabel value="5" control={<Radio sx={{ color: 'gray', '&.Mui-checked': { color: 'gray' } }} />} label="5" labelPlacement="top" />
                        </RadioGroup>
                    </FormControl>
                </Fragment>
            }

        </Grid>
    )
}

export default CombinationsQualification;