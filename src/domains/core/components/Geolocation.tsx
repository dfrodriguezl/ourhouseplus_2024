import { Fragment } from 'react';
import { makeStyles, Theme, Typography, Grid, Box, Button } from '@material-ui/core';
import { MapGeo } from 'domains/core/components'
import { marker } from 'assets'

const styles = makeStyles((theme: Theme) => ({
    whiteText: {
        color: 'white'
    },
    gridMarker:{
        padding: '0px 150px'
    },
    boxMarker:{
        borderBottom: '1px solid #707070',
        padding: '5px 0px',
        // margin: '20px 0px',
        width: '100%'
    },
    button: {
        borderRadius: 15,
        color: 'white',
        textTransform: 'none',
        border: '2px solid white',
        padding: '0px 150px',
        justify: 'center'
      },
}));

const Geolocation = () => {

    const classes = styles();

    return (
            <Grid container item xs={12}>
                <Grid xs={3}>
                </Grid>
                <Grid item container xs={6} justify="center" >
                    <Typography variant="h6" className={ classes.whiteText }>
                            Add project location
                    </Typography>    
                    <Grid xs={12} item className={ classes.gridMarker }>
                        <Box className={ classes.boxMarker } >
                            <img src={marker} alt="add-geolocation-icon" width="20px"/>
                        </Box>
                    </Grid>
                    <Grid item container xs={12} style={{height: '70%'}}>
                        <MapGeo markerDrop={true}/>
                    </Grid>
                    <Box>
                        <Button className={ classes.button }>
                            Save location
                        </Button>
                    </Box>       
                </Grid>
                <Grid xs={3}>
                </Grid>
            </Grid>
    )
}

export default Geolocation;