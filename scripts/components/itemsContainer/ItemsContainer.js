import React from 'react';
import Item from './Item';

var ItemsContainer = React.createClass({
	render: function() {
 
		return (
			<div className="items_container row">
				{this.props.itemsData.map(function(item, i){
					return <Item key={i} data={item} />;
				})} 
			</div>
		);
	}
});

export default ItemsContainer;