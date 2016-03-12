import React from 'react';
import { browserHistory } from 'react-router';

var Posts = React.createClass({
	click_home: function(e){
		e.preventDefault();
		browserHistory.push('/');
	},

	render: function(){
		return (
			<div>
				Posts
				<button onClick={this.click_home}>Home</button>
			</div>
		)
	}
})

export default Posts;