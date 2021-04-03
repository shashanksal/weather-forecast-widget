import * as actionTypes from "./actionTypes";

const initialState: any = {
	weatherData: []
};

const weatherReducer = (state: any = initialState, action: any): any => {
	switch (action.type) {
		case actionTypes.TYPE_ADD_WEATHER_DATA:
			const newWeatherData: any = [action.weatherData];
			let newState = {
				...state,
				weatherData: newWeatherData
			};
			return newState;
	}
};

export default weatherReducer;
