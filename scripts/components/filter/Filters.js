import React from 'react';
import FilterSortBy from './FilterSortBy';
import FilterFilterBy from './FilterFilterBy';

var Section_Filters = React.createClass({
	render: function() {
		return (
			<div className="filters_container row">
				<FilterSortBy />
				<FilterFilterBy />
			</div>
		)
	}
});

export default Section_Filters;