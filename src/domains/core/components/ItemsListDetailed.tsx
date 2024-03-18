import React, { useEffect, useState } from 'react';
import { Button, Grid, IconButton, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Theme, Typography } from '@mui/material';
import makeStyles from '@mui/styles/makeStyles';
import { Item, Room } from "../models";
import AddCircleIcon from '@mui/icons-material/AddCircle';
import { image_1 } from 'assets';
import RadioButtonGroupOpts from './RadioButtonGroupOpts';

const useStyles = makeStyles((theme: Theme) => ({
  containerStyle: {
    backgroundColor: 'white',
    color: 'gray',
  },
  containerTextStyle: {
    marginTop: 20,
    marginBottom: 20
  },
  buttonStyle: {
    padding: 0
  },
  imgStyle: {
    borderRadius: 10
  },
  buttonTextStyle: {
    color: 'black',
    padding: 0,
    textTransform: 'none',
    fontSize: 10
  }
}));

interface OwnProps {
  room: Room;
}

type Props = OwnProps;
function ItemsListDetailed(props: Props) {
  const { room } = props;
  const classes = useStyles();
  const [items, setItems] = useState<Item[]>([]);

  useEffect(() => {
    setItems(room.furnitures!)
  }, [room])

  return (
    <Grid container className={classes.containerStyle} justifyContent="space-between">
      <Grid container direction="row" justifyContent="space-between" className={classes.containerTextStyle}>
        <Typography>{room.order}. {room.name.toUpperCase()}</Typography>
        <Typography>PRICE $8.000 TTC + DELIVERY ESTIMATE $2.000</Typography>
        <Typography>PROJECTED TOTAL $10.000</Typography>
        <IconButton
          aria-label="create item"
          component="div"
          size="large"
          className={classes.buttonStyle}>
          <AddCircleIcon fontSize='large' />
        </IconButton>
      </Grid>
      <TableContainer component={Paper}>
        <Table size="small" aria-label="A table of detailed items">
          <TableHead>
            <TableRow>
              <TableCell>QT</TableCell>
              <TableCell>TYPE</TableCell>
              <TableCell>ROOM</TableCell>
              <TableCell>SELLER</TableCell>
              <TableCell>REFERENCE</TableCell>
              <TableCell>DIMENSIONS</TableCell>
              <TableCell>FINISHES MAIN</TableCell>
              <TableCell>FINISHES SEC</TableCell>
              <TableCell>PRODUCTION TIME</TableCell>
              <TableCell>TRADE PRICE</TableCell>
              <TableCell>PRICE HT</TableCell>
              <TableCell>PRICE TTC</TableCell>
              <TableCell>DELIVERY EST*</TableCell>
              <TableCell>TOTAL CLIENT</TableCell>
              <TableCell></TableCell>
              <TableCell></TableCell>
              <TableCell></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {items?.map((item: Item) => {
              return (
                <TableRow>
                  <TableCell>{item.quantity}</TableCell>
                  <TableCell>{item.type}</TableCell>
                  <TableCell></TableCell>
                  <TableCell>${item.price}</TableCell>
                  <TableCell></TableCell>
                  <TableCell></TableCell>
                  <TableCell></TableCell>
                  <TableCell></TableCell>
                  <TableCell></TableCell>
                  <TableCell></TableCell>
                  <TableCell></TableCell>
                  <TableCell></TableCell>
                  <TableCell></TableCell>
                  <TableCell></TableCell>
                  <TableCell>
                    <img src={image_1} alt="Item" width="45px" className={classes.imgStyle} />
                  </TableCell>
                  <TableCell>
                    <RadioButtonGroupOpts />
                  </TableCell>
                  <TableCell>
                    <Grid container direction="column" justifyContent="space-between">
                      <Button className={classes.buttonTextStyle}>Search</Button>
                      <Button className={classes.buttonTextStyle} style={{ marginTop: 5 }}>Upload</Button>
                    </Grid>
                  </TableCell>
                </TableRow>
              )
            })}
          </TableBody>
        </Table>

      </TableContainer>
    </Grid>
  );
}

export default ItemsListDetailed;