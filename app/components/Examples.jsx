const React = require('react');
const {Link} = require('react-router');

let Examples = props => {
	return (
		<div>
			<h1 className="text-center page-title">Examples</h1>
			<p>Here are a few example locations to try out</p>
			<ol>
				<li>
					<Link to='/?Cowplain'>Cowplain, GB</Link>
				</li>
				<li>
					<Link to='/?Rio'>Rio, Brazil</Link>
				</li>
			</ol>
		</div>
	);
};

module.exports = Examples;
