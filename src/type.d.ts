interface IWeatherData {
    id: number,
    weather_state_name: string,
    //weather_state_abbr: string,
    wind_direction_compass: string,
    //created: Date,
    applicable_date: Date,
    min_temp: number,
    max_temp: number,
    the_temp: number,
    wind_speed: number,
    wind_direction: number,
    //air_pressure: number,
    //humidity: number,
    //visibility: number,
    //predictability: number
}

type WeatherDataState = {
    weatherData: IWeatherData[]
}

type WeatherAction = {
    type: string,
    weatherData: IWeatherData
}

type DispatchType = (args: WeatherAction) => WeatherAction
