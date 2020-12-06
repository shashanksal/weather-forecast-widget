import * as actionTypes from './actionTypes';

const initialState: any = {
    weatherData: [

    ]
}

const reducer = (
    state: any = initialState,
    action: any
): any => {
    switch (action.type) {
        case actionTypes.TYPE_ADD_WEATHER_DATA:
            const newWeatherData: any = {
                id: action.weatherData.id,
                weather_state_name: action.weatherData.weather_state_name,
                wind_direction_compass: action.weatherData.wind_direction_compass,
                applicable_date: action.weatherData.applicable_date,
                min_temp: action.weatherData.min_temp,
                max_temp: action.weatherData.max_temp,
                the_temp: action.weatherData.the_temp,
                wind_speed: action.weatherData.wind_speed,
                wind_direction: action.weatherData.wind_direction,
            }
            return {
                ...state,
                weatherData: state.weatherData.concat(newWeatherData)
            }
    }
}

export default reducer;