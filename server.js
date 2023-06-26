const express = require("express");
const path = require("path");
const fetch = require("node-fetch");
const app = express();

const MET_WEATHER_BASE_URL = "https://www.metaweather.com/api/location";
const WEATHER_SEARCH_URL = `${MET_WEATHER_BASE_URL}/search/?query=`;
const WOEID_SEARCH_URL = `${MET_WEATHER_BASE_URL}/`;

app.use(express.static(path.join(__dirname, "build")));

/**
 * GET - Get Metaweather City entity
 * 	/metaweather/city/Rivendell -  Get Metaweather City entity with city name 'Rivendell'
 */
app.get("/metaweather/city/:city", (req, res) => {
	const city = req.params.city;
	const searchUrl = `${WEATHER_SEARCH_URL}` + city;
	let promise = fetch(searchUrl);
	promise
		.then(res => res.json())
		.then(body => {
			return res.send(body);
		});
});

/**
 * GET - Get Metaweather Weather information for next 5 days
 * 	/metaweather/woeid/54321 -  Get Metaweather Weather for city with woeid '54321'
 */
app.get("/metaweather/woeid/:id", (req, res) => {
	const id = req.params.id;
	const searchUrl = `${WOEID_SEARCH_URL}` + id;
	let promise = fetch(searchUrl);
	promise
		.then(res => res.json())
		.then(body => {
			return res.send(body);
		});
});

/**
 * GET - Main endpoint to the app serving static build files
 */
app.get("/", (req, res) => {
	res.sendFile(path.join(__dirname, "build", "index.html"));
});

app.listen(8080, () =>
	console.log(
		"Metaweather middleware running on port 8080.\n Goto http://localhost:8080/ to access the app"
	)
);
