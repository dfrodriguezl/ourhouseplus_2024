import { makeStyles, Theme, Typography, Grid, Box, Button } from '@material-ui/core';
import { MapGeo } from 'domains/core/components'
import { marker } from 'assets'
import { Fragment, useState } from 'react';

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
    button2: {
        cursor: 'pointer',
        borderRadius: 20,
        backgroundColor: '#FF6C6C',
        color: 'white',
        textTransform: 'none',
        margin: '30px 0px',
        '&:hover': {
            backgroundColor: '#FF6C6C'
        },
        padding: '10px 30px'
    },
    link: {
        textAlign: 'center',
        width: '100%',
        textDecoration: 'underline',
        '&:hover': {
            cursor: 'pointer'
        },
        color: '#A2A0A0'
    }
}));

interface StateProps {
    location?: string;
    close?: any;
}

interface OwnProps {
    title?: string;
    type?: string;
    nextAction?: any;
}

type Props = StateProps & OwnProps;
const Geolocation = (props: Props) => {

    const classes = styles();
    const { location, close, title, type, nextAction } = props;
    const [textLocation, setTextLocation] = useState<string>(location!)


    const updateLocationText = (text: string) => {
        setTextLocation(text)
    }

    const closeDialog = () => {
        close()
    }
    

    return (
        <Grid container item xs={12}>
            <Grid xs={3}>
            </Grid>
            <Grid item container xs={6} justify="center" >
                <Typography variant="h6" className={classes.whiteText}>
                    {title}
                </Typography>
                <Grid xs={12} item className={classes.gridMarker}>
                    <Box className={classes.boxMarker} >
                        <img src={marker} alt="add-geolocation-icon" width="20px" />
                        <span className={classes.whiteText} style={{ marginLeft: 20 }}>{textLocation}</span>
                    </Box>

                </Grid>
                <Grid item container xs={12} style={{ height: '70%' }}>
                    <MapGeo markerDrop={true} location={location} changeLocation={updateLocationText} exportMap={false} mapContainer={true} />
                </Grid>
                {type === "flow" ?
                    <Fragment>
                        <Grid xs={12} container justify="center">
                            <Button
                                size="large"
                                className={classes.button2}
                                onClick={() => {
                                    closeDialog();
                                    nextAction();
                                }}
                            >
                                Next
                            </Button>
                        </Grid>
                        <Grid xs={12} container>
                            <a className={classes.link}>
                                Save for later
                            </a>
                        </Grid>
                    </Fragment>
                    : <Box>
                        <Button className={classes.button} onClick={() => closeDialog()}>
                            Save location
                        </Button>
                    </Box>}

            </Grid>
            <Grid xs={3}>
            </Grid>
        </Grid>
    )
}

export default Geolocation;