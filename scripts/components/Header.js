import React from 'react';
import Navigation from './Navigation';

var Header = React.createClass({

	render: function(){
		return (
			<div id="header">
				<Navigation />
			</div>
		)
	}
})

export default Header;