import React from 'react';
import FilterSortBy from './FilterSortBy';
import FilterFilterBy from './FilterFilterBy';
import AddItem from './AddItem'

var Section_Filters = React.createClass({
	render: function() {
		return (
			<div className="filters_container row">
				<AddItem {...this.props} />
				<FilterSortBy />
				<FilterFilterBy />
			</div>
		)
	}
});

export default Section_Filters;