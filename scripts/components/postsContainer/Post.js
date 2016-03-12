import React from 'react';

var Post = React.createClass({
	render: function(){
		return (
			<div className="post">
				<div className="post_title">{this.props.data.title}</div>
				<div className="post_content">{this.props.data.content}</div>
			</div>
		)
	}
})

export default Post;