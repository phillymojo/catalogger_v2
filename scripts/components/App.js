import React from 'react';
import $ from 'jquery';
window.$ = $;
import Header from './Header';
import Body from './Body';
import Footer from './Footer';

var App = React.createClass({
	render: function(){
		return(
			<div className="container">
				<Header />
				<Body />
				<Footer />
			</div>
		)
	}
})

export default App; 