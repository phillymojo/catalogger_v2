import React from 'react';
import DropdownButton from 'react-bootstrap/lib/DropdownButton';
import MenuItem from 'react-bootstrap/lib/MenuItem';

var FilterSortBy = React.createClass({
	render: function(){
		return(
			<div className="filter sort_by col-md-2 col-md-offset-6 col-xs-6">
				<div className="dropdown">
				<DropdownButton bsStyle="primary" title="Sort by:" id="filter_sort_by" pullRight={false}>
					<MenuItem eventKey="1">Action</MenuItem>
		      <MenuItem eventKey="2">Another action</MenuItem>
		      <MenuItem eventKey="3" active>Active Item</MenuItem>
		      <MenuItem divider />
		      <MenuItem eventKey="4">Separated link</MenuItem>
				</DropdownButton>
				</div>
			</div>
		)
	}
});

export default FilterSortBy;