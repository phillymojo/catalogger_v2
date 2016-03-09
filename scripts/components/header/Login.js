import React from 'react';

var Login = React.createClass({
	handleClick: function(event){
		alert('hi tori');
	},

	render: function(){
		return (
			<div className="login col-md-1 col-xs-1"> 
				<button className="btn btn-primary btn-xs" type="button" value="Login" onClick={this.handleClick}>Login</button>
			</div>
		)
	}
}); 

export default Login;