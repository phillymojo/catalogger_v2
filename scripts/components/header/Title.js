import React from 'react';

var Title = React.createClass({
	render: function(){
		return (
			<div className="title col-md-10">
				{this.props.headerData.text}
			</div>
		)
	}
});

export default Title;