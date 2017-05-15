import Store from '../store';
import React, {Component} from 'react';

export default class Page extends Component {
    render() {
    	const appState = Store.getState();

    	return (
			<div id="jp-nav">
				<div onClick={this.gotoA}>GOTO A</div>
				<div onClick={this.gotoB}>GOTO B</div>
			</div>
		);
	}

	gotoA() {
		Store.dispatch({type: 'GOTOA'});
	}

	gotoB() {
		Store.dispatch({type: 'GOTOB'});
	}
}