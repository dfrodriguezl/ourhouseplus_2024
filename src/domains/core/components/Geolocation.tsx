import { makeStyles, Theme, Typography, Grid, Box, Button } from '@material-ui/core';
import { MapGeo } from 'domains/core/components'
import { marker } from 'assets'
import { useState } from 'react';

const styles = makeStyles((theme: Theme) => ({
    whiteText: {
        color: 'white'
    },
    gridMarker: {
        padding: '0px 150px'
    },
    boxMarker: {
        borderBottom: '1px solid #707070',
        padding: '5px 0px',
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

interface StateProps {
    location?: string;
}

type Props = StateProps;
const Geolocation = (props: Props) => {

    const classes = styles();
    const { location } = props;
    const [ textLocation, setTextLocation] = useState<string>(location!)


    const updateLocationText = (text:string) => {
        setTextLocation(text)
    }

    return (
        <Grid container item xs={12}>
            <Grid xs={3}>
            </Grid>
            <Grid item container xs={6} justify="center" >
                <Typography variant="h6" className={classes.whiteText}>
                    Add project location
                </Typography>
                <Grid xs={12} item className={classes.gridMarker}>
                    <Box className={classes.boxMarker} >
                        <img src={marker} alt="add-geolocation-icon" width="20px" />
                        <span className={classes.whiteText} style={{ marginLeft: 20 }}>{textLocation}</span>
                    </Box>

                </Grid>
                <Grid item container xs={12} style={{ height: '70%' }}>
                    <MapGeo markerDrop={true} location={location} changeLocation={updateLocationText}/>
                </Grid>
                <Box>
                    <Button className={classes.button}>
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