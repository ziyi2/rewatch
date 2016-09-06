import React, { Component, PropTypes } from 'react'

export default class Counter extends Component {
    constructor(props) {
        super(props);
        this.incrementAsync = this.incrementAsync.bind(this);
        this.incrementIfOdd = this.incrementIfOdd.bind(this);
    }

    incrementIfOdd() {
        if (this.props.value % 2 !== 0) {
            this.props.add()
        }
    }

    incrementAsync() {
        setTimeout(this.props.add, 1000)
    }

    render() {
        const { value, add, del } = this.props;
        return (
            <p>
                Clicked: {value} times
                {' '}
                <button onClick={add}>
                    +
                </button>
                {' '}
                <button onClick={del}>
                    -
                </button>
                {' '}
                <button onClick={this.incrementIfOdd}>
                    Increment if odd
                </button>
                {' '}
                <button onClick={this.incrementAsync}>
                    Increment async
                </button>
            </p>
        )
    }
}

Counter.propTypes = {
    value: PropTypes.number.isRequired,
    onIncrement: PropTypes.func.isRequired,
    onDecrement: PropTypes.func.isRequired
};

