import React from 'react';
import $ from 'jquery';
window.$ = $;
import CurrentInfo from './currentInfo/CurrentInfo';
import Header from './header/Header';
import Filters from './filter/Filters';
import ItemsContainer from './itemsContainer/ItemsContainer';

import Rebase from 're-base';
var base = Rebase.createClass('https://torrid-heat-7589.firebaseio.com/');


var App = React.createClass({
	getInitialState: function(){
		return {
			items: {},
			posts: {}
		}
	},
	componentDidMount: function(){
		base.syncState('catalogger/items', {
			context: this,
			state: 'items'
		});
		base.syncState('catalogger/posts', {
			context: this,
			state: 'posts'
		});
	},

	addItem: function(item){
		var timestamp = new Date().getTime();
		this.state.items['item-'+timestamp] = item;
		this.setState({items: this.state.items});
	},
	deleteItem: function(item){
		this.state.items[item] = null;
		this.setState({items: this.state.items});
	},

	render: function(){
		return(
			<div className="catalogger-app container">
				<Header />
				<CurrentInfo posts={this.state.posts} />
				<hr />
				<Filters addItem={this.addItem} />
				<ItemsContainer items={this.state.items} deleteItem={this.deleteItem} /> 
			</div>
		)
	}
})

export default App; 
