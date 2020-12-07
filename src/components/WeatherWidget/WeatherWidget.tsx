import React from 'react';

import { RootStateOrAny, useSelector } from 'react-redux'

//Material UI Components
import {
    Grid
} from '@material-ui/core';

//Custom components
import WeatherCard from '../WeatherCard';

const styles = {
    weatherWidgetContainer: {
        width: 800,
        height: "auto",
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    }
}

const WeatherWidget = () => {

    const weatherData = useSelector((state: RootStateOrAny) => state?.weatherData);

    console.log("Weather data widget ===", weatherData[0])

    return (
        <div style={styles.weatherWidgetContainer}>
            <Grid container spacing={3}>
                <Grid item md={3}>
                    <WeatherCard />
                </Grid>
                <Grid item md={3}>
                    <WeatherCard />
                </Grid>
                <Grid item md={3}>
                    <WeatherCard />
                </Grid>
                <Grid item md={3}>
                    <WeatherCard />
                </Grid>
            </Grid>
        </div>
    )

}

export default WeatherWidget;