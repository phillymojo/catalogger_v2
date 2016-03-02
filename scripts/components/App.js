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
			items: []
		}
	},
	componentDidMount: function(){
		base.syncState('catalogger/items', {
			context: this,
			state: 'items'
		});
	},

	addItem: function(itemdata){
		console.log('add item button clicked');
	},
	render: function(){
		return(
			<div className="catalogger-app container">
				<Header headerData={this.props.pageData.headerData} />
				<CurrentInfo currentInfoData={this.props.pageData.currentInfo} />
				<hr />
				<Filters addItem={this.addItem} />
				<ItemsContainer itemsData={this.state.items} />
			</div>
		)
	}
})

export default App; 
