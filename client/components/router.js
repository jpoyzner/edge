import React, {Component} from 'react';
import {BrowserRouter as Router, Route, browserHistory, Link} from 'react-router-dom';
import Nav from './nav';
import Counter from './counter';

export default () => (
  	<Router>
  		<div>
    		<Route path="/" component={Nav} />
			<Route path="/a" render={() => <Counter text="AAA" />} />
			<Route path="/b" render={() => <Counter text="BBB" />} />
		</div>
  	</Router>
);