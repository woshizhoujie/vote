import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, browserHistory, IndexRoute } from 'react-router'
import App from './App';
import Home from './containers/Home'
//import './index.css';
import Login from './containers/Login'
import List from './containers/List'
import Up from './containers/Up'


ReactDOM.render((
	<Router history={browserHistory}>
		<Route path='/' name='home' component={App}>
			<IndexRoute name='home' component={Home} />
			<Route path='/Login' name='Login' component={Login}/>
			<Route path='/List' name='List' component={List}/>
			<Route path='/Up' name='Up' component={Up}/>
		</Route>
	</Router>
), document.getElementById('root'));
