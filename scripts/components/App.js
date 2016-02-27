import React from 'react';
import $ from 'jquery';
window.$ = $;
import CurrentInfo from './currentInfo/CurrentInfo';
import Header from './header/Header';
import Filters from './filter/Filters';
import ItemsContainer from './itemsContainer/ItemsContainer';


var App = React.createClass({
	render: function(){
		return(
			<div className="catalogger-app container">
				<Header headerData={this.props.pageData.headerData} />
				<CurrentInfo currentInfoData={this.props.pageData.currentInfo} />
				<hr />
				<Filters />
				<ItemsContainer itemsData={[{name: 'Stinky'}]}/>
			</div>
		)
	}
})

export default App; 
