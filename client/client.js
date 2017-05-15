import './css/style.css';
import React from 'react'
import ReactDOM from 'react-dom'
import Store from './store';
import Page from './components/page'

const render = () => ReactDOM.render(<Page />, document.getElementById('jp-container'));
render()
Store.subscribe(render)