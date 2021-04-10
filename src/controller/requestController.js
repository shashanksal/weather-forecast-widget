/**
 * Create  request and make Fetch Call
 * @param url {string} HTTP url for making request
 * @param method {string} HTTP request type GET | POST | PUT | DELETE
 * @param data {Object} body param object for POST request
 */
const makeRequest = async (url, method, data) => {
	//AbortController for Timeout fetch request safely
	const controller = new AbortController();
	const params = createParams(method, data);
	const config = { ...params, signal: controller.signal };

	const timeOut = setTimeout(() => {
		controller.abort();
	}, 20000);

	return makeFetchCall(url, config)
		.then(res => {
			return res;
		})
		.catch(err => {
			if (err.name === "AbortError") {
				return {
					error: true,
					response: {
						Message: err
					}
				};
			}
		});
};

/**
 * Create header params
 * @param method {string} HTTP request type GET | POST | PUT | DELETE
 * @param data {Object} body param object for POST request
 */
const createParams = async (method, data) => {
	let params = Object.create({
		method: method,
		headers: {
			"Content-Type": "application/json",
			"Access-Control-Allow-Origin": "*"
		},
		body: ""
	});
	//Stringify data only if data present -> eg. POST request
	if (data) params.body = JSON.stringify(data);
	else delete params.body;

	return params;
};

/**
 * Make call using Fetch API
 * @param url {string} HTTP url for making request
 * @param config Config object
 */
const makeFetchCall = async (url, config) => {
	let obj = {
		error: false,
		response: Object
	};
	try {
		const request = await fetch(url, config);
		if (typeof request !== "undefined" && request.status === 200) {
			const response = await request.json();
			//TODO - implement Interface to assign response value
			obj.response = response;
		} else {
			obj.error = true;
			obj.response = {};
		}
	} catch (err) {
		obj.error = true;
		obj.response = err;
	}
	return obj;
};

const requestController = {
	makeRequest,
	createParams,
	makeFetchCall
};

export default requestController;
