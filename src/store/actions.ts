import * as actionTypes from './actionTypes';

export const storeWeatherData = (weatherData: IWeatherData) => {
    const action: WeatherAction = {
        type: actionTypes.TYPE_ADD_WEATHER_DATA,
        weatherData
    }
    return action;
}