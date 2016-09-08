
//ex.1
import React from 'react'
import ReactDOM from 'react-dom'
import { createStore } from 'redux'
import Counter from './components/Counter'
import counter from './reducers/counter.reducer.js'
import { add, del } from './actions/counter.action.js'

const store = createStore(counter);
const react_redux_counter = document.getElementById('react-redux-counter');

function render() {
    ReactDOM.render(
        <Counter
            value={store.getState()}
            onIncrement={() => store.dispatch(add('add'))}
            onDecrement={() => store.dispatch(del('del'))}
        />,
        react_redux_counter
    )
}

render();
store.subscribe(render);


