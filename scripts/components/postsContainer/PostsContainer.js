import React from 'react';
import { browserHistory } from 'react-router';

import Rebase from 're-base';
var base = Rebase.createClass('https://torrid-heat-7589.firebaseio.com/');

import Post from './Post';

var Posts = React.createClass({

	getInitialState: function(){
		return {
			posts: {}
		}
	},
	componentDidMount: function(){
		this.rebase_posts = base.syncState('catalogger/posts', {
			context: this,
			state: 'posts'
		});
	},
	componentWillUnmount: function(){
		base.removeBinding(this.rebase_posts);
	},

	renderPosts: function(key){
		return (
			<Post key={key} data={this.state.posts[key]} mykey={key} />	
		)
	},

	click_home: function(e){
		e.preventDefault();
		browserHistory.push('/');
	},

	render: function(){
		return (
			<div className="catalogger-posts container">
				Posts
				<button onClick={this.click_home}>Home</button>
				{Object.keys(this.state.posts).map(this.renderPosts)}
			</div>
		)
	}
})

export default Posts;