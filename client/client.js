import './css/style.scss';

import React from 'react';
import ReactDOM from 'react-dom';
import Store from './store';
import Router from './components/router'

const render = () => ReactDOM.render(<Router />, document.getElementById('jp-container'));
Store.subscribe(render);

render();
Store.dispatch({type: 'GETLOGS'});