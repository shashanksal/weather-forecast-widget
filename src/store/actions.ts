import * as actionTypes from "./actionTypes";

export const storeWeatherData = (weatherData: any) => {
	const action: any = {
		type: actionTypes.TYPE_ADD_WEATHER_DATA,
		weatherData
	};
	return action;
};
