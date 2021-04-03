interface IWeatherData {
	id: number;
	weather_state_name: string;
	wind_direction_compass: string;
	applicable_date: Date;
	min_temp: number;
	max_temp: number;
	the_temp: number;
	wind_speed: number;
	wind_direction: number;
}

type WeatherDataState = {
	weatherData: IWeatherData[];
};

type WeatherAction = {
	type: string;
	weatherData: IWeatherData;
};

type DispatchType = (args: WeatherAction) => WeatherAction;
