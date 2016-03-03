import React from 'react';
import Item from './Item';

var ItemsContainer = React.createClass({
	renderItems: function(key){
		return (
			<Item key={key} data={this.props.itemsData[key]} mykey={key} {...this.props}/>	
		)
	},

	render: function() { 
		return (
			<div className="items_container row">
				{
					Object.keys(this.props.itemsData).map(this.renderItems)
				} 
			</div>
		);
	}
});

export default ItemsContainer;