import React from 'react';
import { Button, Grid, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Theme } from '@mui/material';
import makeStyles from '@mui/styles/makeStyles';
import { Item } from "../models";
import { image_1 } from 'assets';


const useStyles = makeStyles((theme: Theme) => ({
    containerStyle: {
        background: '#FFFFFF99 0% 0% no-repeat padding-box',
        color: 'gray',
        border: '1px solid #707070',
        margin: '3vh',
        borderRadius: '5px'
    },
    textContainerStyle: {
        padding: '20px'
    },
    containerButtonStyle: {
        textAlign: 'center'
    },
    buttonStyle: {
        color: 'black',
        padding: 0,
        textTransform: 'none',
        fontSize: 10
    },
    buttonStyleUpload:{
        marginTop: 5
    },
    imgStyle: {
        borderRadius: 10
    }
}));

interface OwnProps {
    items?: Item[];
}

type Props = OwnProps;
export default function ItemsContainer(props: Props) {
    const { items } = props;
    const classes = useStyles();

    return (
        <TableContainer component={Paper}>
            <Table size="small" aria-label="A table of items">
                <TableHead>
                    <TableRow>
                        <TableCell>Qt</TableCell>
                        <TableCell>Type</TableCell>
                        <TableCell>Price</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {items?.map((item: Item) => {
                        return (
                            <TableRow>
                                <TableCell>{item.quantity}</TableCell>
                                <TableCell>{item.type}</TableCell>
                                <TableCell>${item.price}</TableCell>
                                <TableCell><img src={image_1} alt="Item" width="45px" className={classes.imgStyle} /></TableCell>
                                <TableCell>
                                    <Grid container direction="column" justifyContent="space-between">
                                    <Button className={classes.buttonStyle}>Search</Button>
                                    <Button className={classes.buttonStyle} style={{marginTop: 5}}>Upload</Button>
                                    </Grid>
                                    
                                </TableCell>
                            </TableRow>
                        )
                    })}
                </TableBody>
            </Table>

        </TableContainer>
    );
}