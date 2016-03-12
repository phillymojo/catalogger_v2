import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, browserHistory } from 'react-router';
import { createHistory } from 'history';

import App from './components/App';
import Posts from './components/Posts';

var routes = (
	<Router history={browserHistory} >
		<Route path="/" component={App}></Route>
		<Route path="/posts" component={Posts}></Route>
	</Router>
)

ReactDOM.render(routes, document.querySelector('#main'));
