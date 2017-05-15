import React, {Component} from 'react';
import {BrowserRouter as Router, Route, browserHistory, Link} from 'react-router-dom';
import Nav from './nav';
import Counter from './counter';
import LogDisplay from './logdisplay';

export default () => (
  	<Router>
  		<div>
    		<Route path="/" component={Nav} />
			<Route path="/a" render={() => <Counter text="AAA" />} />
			<Route path="/b" component={LogDisplay} />
		</div>
  	</Router>
);