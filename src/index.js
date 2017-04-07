import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, browserHistory, IndexRoute } from 'react-router'
import App from './App';
import Home from './containers/Home'
//import './index.css';
import Login from './containers/Login'
import List from './containers/List'
import Up from './containers/Up'
import NewPerson from './containers/NewPerson'
import Detail from './containers/Detail'
import PersonCenter from './containers/PersonCenter'


ReactDOM.render((
	<Router history={browserHistory}>
		<Route path='/' name='home' component={App}>
			<IndexRoute name='home' component={Home} />
			<Route path='/Login' name='Login' component={Login} />
			<Route path='/List' name='List' component={List} />
			<Route path='/Up' name='Up' component={Up} />
			<Route path='/NewPerson' name='NewPerson' component={NewPerson} />
			<Route path='/Detail/:ID' name='Detail' component={Detail} />
			<Route path='/PersonCenter' name='PersonCenter' component={PersonCenter} />

		</Route>
	</Router>
), document.getElementById('root'));
