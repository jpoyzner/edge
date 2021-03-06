import {createStore, applyMiddleware} from 'redux'
import reducers from './reducers'
import LogService from './models/logservice';

export default createStore(reducers, {}, applyMiddleware(LogService));