import React from 'react';
import LatestPost from './LatestPost';
import NextBirthday from './NextBirthday';

var CurrentInfo = React.createClass({
	renderLatestPost: function(key){

		if(this.props.posts[key].latestPost){
			return (
				<LatestPost key={key} latestPost={this.props.posts[key]} />
			)
		}
	},

	render: function() {
		return (
			<div className="current_info_container row">
				{Object.keys(this.props.posts).map(this.renderLatestPost)}
				{/*<NextBirthday data={this.props.currentInfoData.nextitem} />*/}
			</div>
		)
	}
});

export default CurrentInfo;