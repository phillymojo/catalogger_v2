import React from 'react';

var Login = React.createClass({
	handleClick: function(event){
		alert('hi tori');
	},

	render: function(){
		return (
			<div className="login col-md-2"> 
				<button className="btn btn-default btn-sm" type="button" value="Login" onClick={this.handleClick}>Login</button>
			</div>
		)
	}
}); 

export default Login;