import { Box, FormControl, FormHelperText, InputLabel, MenuItem, Select, SelectChangeEvent, Theme } from '@mui/material';
import { makeStyles } from '@mui/styles';
import React from 'react';

const useStyles = makeStyles((theme: Theme) => ({
    selectStyle: {
        color: 'white',
        borderColor: 'white'
    },
})
)

interface OwnProps {
    name?: string;
    helper?: string;
    options?: string[];
}

type Props = OwnProps;
const TypeSelect = (props: Props) => {
    const { name, helper, options } = props;
    const classes = useStyles();
    const [age, setAge] = React.useState('');

    const handleChange = (event: SelectChangeEvent) => {
        setAge(event.target.value as string);
    };

    return (
        <Box sx={{ minWidth: 120 }}>
            <FormControl fullWidth>
                <InputLabel id="select-type-1-label">{name}</InputLabel>
                <Select
                    labelId="select-type-1-label"
                    id="select-type-1"
                    value={age}
                    label="Type 1"
                    onChange={handleChange}
                    className={classes.selectStyle}
                >
                    {options?.map((option: string) => {
                        return (
                            <MenuItem value={option}>{option}</MenuItem>
                        )
                    })}
                </Select>
                <FormHelperText>{helper}</FormHelperText>
            </FormControl>
        </Box>
    )
}

export default TypeSelect;