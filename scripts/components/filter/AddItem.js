import React from 'react';

var AddItem = React.createClass({
	render: function(){
		return (
			<div className="col-md-2">
				<button className="additem" onClick={this.props.addItem}>Add Item</button>
			</div>
		)
	}
});

export default AddItem;