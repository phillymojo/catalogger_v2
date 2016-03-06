import React from 'react';

var LatestPost = React.createClass({
	render: function(){
		return (
			<div>
				<div className="latest_post col-md-10">
					<div className="latest_post_title">{this.props.latestPost.title}</div>
					<div className="latest_post_content">{this.props.latestPost.content}</div>
					<div className="latest_post_all_posts">
						<button className="btn btn-default btn-xs" type="button" value="All Posts">All Posts</button>
					</div>
				</div>
			</div>
		) 
	}
});

export default LatestPost;