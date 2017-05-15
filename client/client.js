import './css/style.css';
import React from 'react'
import ReactDOM from 'react-dom'
import Store from './store';
import Counter from './components/counter'

const render = () => ReactDOM.render(<Counter />, document.getElementById('jp-container'));
render()
Store.subscribe(render)