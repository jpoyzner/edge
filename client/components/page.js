import Store from '../store';
import React, {Component} from 'react';
import Nav from './nav';
import Counter from './counter';

export default class Page extends Component {
    render() {
    	const appState = Store.getState();

    	return (
			<div>
				<Nav />
				{appState.page === 'A' ? <Counter text="AAA" /> : null}
				{appState.page === 'B' ? <Counter text="BBB" /> : null}
			</div>
		);
	}
}