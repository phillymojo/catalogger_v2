import React from 'react';

var Item = React.createClass({
	itemDelete: function(){
		this.props.deleteItem(this.props.mykey);
	},
  render: function(){
    return (
      <div className="itembox col-md-3" ref={this.props.key} data-id={this.props.data._id}>
      	<div className="itemDelete" onClick={this.itemDelete}>X</div>
        <div className="itemimage"></div>
        <div className="itemname">{this.props.data.name}</div>
      </div>
    )
  }
}); 

export default Item;