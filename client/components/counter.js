import React, {Component} from 'react';
import Store from '../store';

export default class Counter extends Component {
    render() {
        return (
            <p>
                Clicked: {Store.getState()} times
                {' '}
                <button onClick={this.onIncrement}>
                  +
                </button>
                {' '}
                <button onClick={this.onDecrement}>
                  -
                </button>
                {' '}
                <button onClick={this.incrementIfOdd.bind(this)}>
                  Increment if odd
                </button>
                {' '}
                <button onClick={this.incrementAsync.bind(this)}>
                  Increment async
                </button>
            </p>
        )
    }

    incrementIfOdd() {
        if (Store.getState() % 2 !== 0) {
            this.onIncrement()
        }
    }

    incrementAsync() {
        setTimeout(this.onIncrement, 1000)
    }

    onIncrement() {
        Store.dispatch({type: 'INCREMENT'});
    }

    onDecrement() {
        Store.dispatch({type: 'DECREMENT'});
    } 
}