import React, { useEffect } from 'react';
import { trackPromise } from 'react-promise-tracker';
import {  useDispatch } from 'react-redux'

//Material UI Components
import {
    TextField,
    Button
} from '@material-ui/core';

import customCalls from '../../controller/customCalls'

import { WEATHER_SEARCH_URL, WOEID_SEARCH_URL } from '../../utils/constants';
import { storeWeatherData } from '../../store/actions';
import City from '../../utils/City';

//const customCalls = require('../../controller/customCalls');

const styles = {
    alignItemsAndJustifyContent: {
        width: 600,
        height: 150,
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

const LocationForm = () => {
    const dispatch = useDispatch();
    const [location, setLocation] = React.useState<string>('');

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

        trackPromise(customCalls.makeCityFetchCall(searchUrl, "GET", "")
            .then(res => {
                console.log(res);
                if (res && typeof res.response !== 'undefined' && !res.error) {
                    let searchResponse = res.response;
                    let city = new City(searchResponse);
                    return city.woeid;
                }
                else {
                    console.log("City name not valid");
                    alert("City name not valid");
                }
            })
            .then(woeid => {
                if (woeid) {
                    const woeidUrl = `${WOEID_SEARCH_URL}` + woeid;
                    customCalls.makeWeatherCalls(woeidUrl, "GET", "")
                        .then(res => {
                            dispatch(storeWeatherData(res.response));
                        })
                }
            })
        )
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
                <Button variant="contained" color="primary" className="submit-btn" onClick={handleSubmit}>
                    SEARCH
                </Button>
            </form>
        </div>
    )
}

export default LocationForm;
