import React, { useEffect } from 'react';

//Material UI Components
import {
    TextField
} from '@material-ui/core';

const styles = {
    alignItemsAndJustifyContent: {
        width: 500,
        height: 80,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'gold',
        border: '2px solid #FFF',
        borderRadius: '4px'
    },
    textField: {
        width: 400,
        margin: 8
    }
}

const LocationForm = (props: any) => {

    useEffect(() => {
        // Check if Browser supports Geolocation API.
        // If true, proceed
        // else throw/print not available
        if ("geolocation" in navigator) {
            navigator.geolocation.getCurrentPosition(function (position) {
                console.log("Latitude is :", position.coords.latitude);
                console.log("Longitude is :", position.coords.longitude);
            });
        } else {
            console.log("Not Available");
        }
    }, []);

    return (
        <div style={styles.alignItemsAndJustifyContent}>
            <form className="weather-form" noValidate autoComplete="off">
                <TextField
                    id="standard-full-width"
                    label="Location"
                    style={styles.textField}
                    placeholder="Enter Location"
                    fullWidth
                    margin="normal"
                    InputLabelProps={{
                        shrink: true,
                    }}
                />
            </form>
        </div>
    )
}

export default LocationForm;