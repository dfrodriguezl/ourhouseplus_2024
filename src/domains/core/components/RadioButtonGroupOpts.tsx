import React from 'react';
import { FormControlLabel, Radio, RadioGroup, Theme, Typography } from '@mui/material';
import makeStyles from '@mui/styles/makeStyles';

const useStyles = makeStyles((theme: Theme) => ({
    group: {
        width: 'auto',
        height: 'auto',
        display: 'flex',
        flexWrap: 'nowrap',
        flexDirection: 'row',
    }
}));

interface OwnProps {
}

type Props = OwnProps;
function RadioButtonGroupOpts(props: Props) {
    const classes = useStyles();

    return (
        <RadioGroup
            row
            aria-labelledby="demo-row-radio-buttons-group-label"
            name="options"
            className={classes.group}
        >
            <FormControlLabel
                value="1"
                control={<Radio sx={{ color: "#000000", opacity: 0.6, '&.Mui-checked': { color: "#2A2A2A", opacity: 1 } }} />}
                label={<Typography variant="caption">OPT.1</Typography>}
                labelPlacement='top' />
            <FormControlLabel
                value="2"
                control={<Radio sx={{ color: "#000000", opacity: 0.6, '&.Mui-checked': { color: "#2A2A2A", opacity: 1 } }} />}
                label={<Typography variant="caption">OPT.2</Typography>}
                labelPlacement='top' />
            <FormControlLabel
                value="3"
                control={<Radio sx={{ color: "#000000", opacity: 0.6, '&.Mui-checked': { color: "#2A2A2A", opacity: 1 } }} />}
                label={<Typography variant="caption">OPT.3</Typography>}
                labelPlacement='top' />
        </RadioGroup>
    );
}

export default RadioButtonGroupOpts;