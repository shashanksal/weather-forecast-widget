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
    let data = typeof weatherData !== "undefined" ? weatherData[0] : []

    return (
        <div style={styles.weatherWidgetContainer}>
            <Grid container spacing={3}>
                {
                    data.length > 0 ?
                        data.slice(1, 5).map((weather: any, i: number) => {
                            return (
                                <Grid item md={3} key={i}>
                                    <WeatherCard {...weather} key={i} />
                                </Grid>
                            )
                        })
                        :
                        <div></div>
                }
            </Grid>
        </div>
    )

}

export default WeatherWidget;