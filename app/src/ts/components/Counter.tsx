import React from 'react';

import { connect } from 'react-redux'
import { increment, decrement } from '../../AC/index';

interface ICounter {
    counter: any;
    dispatch: any;
    increment: Function;
    decrement: Function;
}

class Counter extends React.Component<ICounter> {

    render() {
        return <>
            {this.props.counter}
            <button onClick={this.handleIncrement}>Increment</button>
            <button onClick={this.handleDecrement}>Decrement</button>
        </>
    }

    handleIncrement = () => {
        this.props.increment();
    }
    handleDecrement = () => {
        this.props.decrement();
    }
}

export default connect((state:any) => ({
    counter: state.counter
}), {
    increment, 
    decrement
})((Counter as any));