import React from 'react';

var AddItem = React.createClass({
	createItem: function(e) {
		e.preventDefault();
		var item = {
			name: this.refs.name.value,
			type: 'fruit',
			dateAdded: new Date().toJSON()
		};
		this.props.addItem(item);
		this.refs.addItemForm.reset();
	},

	render: function(){
		return (
			<div className="col-md-2">
				<form onSubmit={this.createItem} ref="addItemForm">
					<button className="additem">Add Item</button>
					<input type="text" ref="name"></input>
				</form>
			</div>
		)
	}
});

export default AddItem;