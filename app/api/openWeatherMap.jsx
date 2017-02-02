const axios = require('axios');
const OPEN_WEATHER_MAP_URL = 'http://api.openweathermap.org/data/2.5/weather?units=metric&appid=8a2ac96da79fc7b9d2190aa6332f0a45&q=';

module.exports = {
	getTemp: function (location) {
		let encodedLocation = encodeURIComponent(location);
		let requestURL = `${OPEN_WEATHER_MAP_URL}${encodedLocation}`;

		return axios.get(requestURL).then(function (res) {
			if (res.data.cod && res.data.message) {
				throw new Error(res.data.message);
			} else {
				return res.data.main.temp;
			}
		}, function (res) {
			throw new Error(res.data.message);
		});
	}
}
