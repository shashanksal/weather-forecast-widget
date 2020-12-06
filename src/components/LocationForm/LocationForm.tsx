import React, { useEffect, useState } from 'react';

//Material UI Components
import {
    TextField
} from '@material-ui/core';

import { makeRequest } from '../../controller/requestController';
import { makeCityFetchCall } from '../../controller/customCalls'
import { WEATHER_SEARCH_URL, WOEID_SEARCH_URL } from '../../utils/constants';
import City from '../../utils/City';

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
    const [location, setLocation] = useState<string>('');
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

    const handleSubmit = (event: any) => {
        event.preventDefault();
        const searchUrl = `${WEATHER_SEARCH_URL}` + location;
        let r1 = makeCityFetchCall(searchUrl, "GET", "")
            .then(res => {
                if (res && typeof res.response !== 'undefined' && !res.error) {
                    let searchResponse = res.response;
                    let city = new City(searchResponse);
                    return city.woeid;
                }
                else {
                    console.log("City name not valid");
                }
            })
            .then(woeid => {
                //console.log("Woeid ===", woeid);
                const woeidUrl = `${WOEID_SEARCH_URL}` + woeid;
                let r2 = makeRequest(woeidUrl, "GET", "")
                    .then(res => {
                        console.log("City result ===", res)
                    })
            })
    }

    const handleChange = (event: any) => {
        setLocation(event.target.value)
    }

    return (
        <div style={styles.alignItemsAndJustifyContent}>
            <form className="weather-form" noValidate autoComplete="off" onSubmit={handleSubmit}>
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
                    value={location}
                    onChange={handleChange}
                />
            </form>
        </div>
    )
}

export default LocationForm;