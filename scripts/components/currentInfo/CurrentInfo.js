import React from 'react';
import LatestPost from './LatestPost';
import NextBirthday from './NextBirthday';

var CurrentInfo = React.createClass({
	render: function() {
		return (
			<div className="current_info_container row">
				<LatestPost data={this.props.currentInfoData.latestPost} />
				<NextBirthday data={this.props.currentInfoData.nextitem} />
			</div>
		)
	}
});

export default CurrentInfo;