import { useState } from 'react';
import { Grid, Typography, Box } from '@material-ui/core';
import { useLoadScript, GoogleMap, Marker, InfoWindow } from '@react-google-maps/api';

import Logo from 'components/UIElements/Logo';

import useStyles from './MapStyles';

export interface MapProps {}

const mapContainerStyle = {
    width: '100%',
    height: '80vh',
};
const center = {
    lat: 50.0703435236209,
    lng: 20.03920750300476,
};

export const Map: React.FC<MapProps> = () => {
    const classes = useStyles();
    const [open, setOpen] = useState(false);
    const { isLoaded, loadError } = useLoadScript({ googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS });

    const handleOpen = () => {
        setOpen((prevState) => !prevState);
    };

    if (loadError) return <h1>Error</h1>;
    if (!isLoaded) return <h1>Loading</h1>;
    return (
        <Grid item xs={12} component='section'>
            <GoogleMap mapContainerStyle={mapContainerStyle} zoom={17} center={center}>
                <Marker position={center} onClick={handleOpen} />
                {open && (
                    <InfoWindow position={center} onCloseClick={handleOpen}>
                        <div>
                            <Logo />
                            <Box textAlign='center'>
                                <Typography className={classes.InfoWindowText}> Osiedle Centrum E 14</Typography>
                                <Typography className={classes.InfoWindowText}> 31-934 Kraków</Typography>
                                <Typography className={classes.InfoWindowText}> Email: zlobekhuta@gmail.com</Typography>
                                <Typography className={classes.InfoWindowText}> Tel: 739 048 513</Typography>
                            </Box>
                        </div>
                    </InfoWindow>
                )}
            </GoogleMap>
        </Grid>
    );
};

export default Map;
