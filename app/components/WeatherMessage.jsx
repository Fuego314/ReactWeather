const React = require('react');

let WeatherMessage = ({temp, location}) => {
	return (
		<div>
			<p className="text-center">It is {temp} in {location}.</p>
		</div>
	);
};

module.exports = WeatherMessage;
