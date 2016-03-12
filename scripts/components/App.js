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
			catalogger: {
				items: {},
				posts: {}
			}
		}
	},
	componentDidMount: function(){
		this.rebase_catalogger = base.syncState('catalogger', {
			context: this,
			state: 'catalogger'
		});
	},
	componentWillUnmount: function(){
		base.removeBinding(this.rebase_catalogger);
	},

	addItem: function(item){
		var timestamp = new Date().getTime();
		this.state.catalogger.items['item-'+timestamp] = item;
		this.setState({catalogger: this.state.catalogger});
	},
	deleteItem: function(item){
		this.state.catalogger.items[item] = null;
		this.setState({catalogger: this.state.catalogger});
	},

	render: function(){
		return(
			<div className="catalogger-app container">
				<Header />
				<CurrentInfo posts={this.state.catalogger.posts} />
				<hr />
				<Filters addItem={this.addItem} />
				<ItemsContainer items={this.state.catalogger.items} deleteItem={this.deleteItem} />
			</div>
		)
	}
})

export default App; 
