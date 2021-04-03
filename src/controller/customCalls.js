import request from "./requestController";
//const request = require('./requestController');
/**
 * Method to make initial call based on city name.
 * @param url {string} HTTP url for making request
 * @param method {string} HTTP request type GET | POST | PUT | DELETE
 * @param data {Object} body param object for POST request
 * Returns Response: { "error": {boolean}, "response": [{"title":{string},"location_type":"City","woeid":{number},"latt_long":{string}}] }
 */
const makeCityFetchCall = async (url, method, data) => {
	return request.makeRequest(url, method, data).then(res => {
		return {
			error: res.error,
			response: res.response[0] //Get First element of array for a single city handling
			//TODO - Handle multiple cities in backend and UI
		};
	});
};

/**
 * Method to make city weather call based on woeid.
 * @param url {string} HTTP url for making request
 * @param method {string} HTTP request type GET | POST | PUT | DELETE
 * @param data {Object} body param object for POST request
 * Returns Response: { "error": {boolean}, "response": [ {....},{....}, .....] }
 */
const makeWeatherCalls = async (url, method, data) => {
	return request.makeRequest(url, method, data).then(res => {
		return {
			error: res.error,
			response: res?.response.consolidated_weather
		};
	});
};

const customCalls = {
	makeCityFetchCall,
	makeWeatherCalls
};
export default customCalls;
