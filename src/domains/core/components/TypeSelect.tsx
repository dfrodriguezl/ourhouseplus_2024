import { Box, FormControl, FormHelperText, InputLabel, MenuItem, Select, SelectChangeEvent, Theme } from '@mui/material';
import { makeStyles } from '@mui/styles';
import React from 'react';

const useStyles = makeStyles((theme: Theme) => ({
    selectStyle: {
        color: 'white',
        borderColor: 'white'
    },
    selectStyleMobile: {
        color: 'white',
        borderColor: 'white',
        borderRadius: 50,
        backgroundColor: '#FFFFFF66'
    }
})
)

interface OwnProps {
    name?: string;
    helper?: string;
    options?: string[];
    setType?: any;
}

type Props = OwnProps;
const TypeSelect = (props: Props) => {
    const { name, helper, options, setType } = props;
    const classes = useStyles();
    const [typeLocal, setTypeLocal] = React.useState('');

    const handleChange = (event: SelectChangeEvent) => {
        setType(event.target.value as string);
        setTypeLocal(event.target.value as string);
    };

    return (
        <Box sx={{ minWidth: 120 }}>
            <FormControl fullWidth>
                <InputLabel id="select-type-1-label">{name}</InputLabel>
                <Select
                    labelId="select-type-1-label"
                    id="select-type-1"
                    value={typeLocal}
                    label={name}
                    onChange={handleChange}
                    className={classes.selectStyle}
                >
                    {options?.map((option: string, index: number) => {
                        return (
                            <MenuItem value={option} key={index}>{option}</MenuItem>
                        )
                    })}
                </Select>
                <FormHelperText>{helper}</FormHelperText>
            </FormControl>
        </Box>
    )
}

export default TypeSelect;