import React from 'react';
import Title from './Title';
import Login from './Login';

var Header = React.createClass({

	render: function(){
		return (
			<div className="header row">
	    	<Title headerData={this.props.headerData} />
	    	<Login data={this.props} />
	    </div>
		)
	}
})

export default Header;
