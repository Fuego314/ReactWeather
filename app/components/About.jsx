var React = require('react');

let About = props => {
	return (
		<div>
			<h1 className="text-center page-title">About</h1>
			<p className="text-center">This is a simple React weather app.</p>
			<p className="text-center">Type your location into the search bar and hit the button to see the weather where you are.</p>
		</div>
	)
};

module.exports = About;
