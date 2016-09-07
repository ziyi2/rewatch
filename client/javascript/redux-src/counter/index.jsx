
//ex.1
import React from 'react'
import ReactDOM from 'react-dom'
import { createStore } from 'redux'
import Counter from './components/Counter'
import counter from './reducers/counter.reducer.js'
import { add, del } from './actions/counter.action.js'

const store = createStore(counter);
const rootEl = document.getElementById('react-redux');

function render() {
    ReactDOM.render(
        <Counter
            value={store.getState()}
            onIncrement={() => store.dispatch(add('add'))}
            onDecrement={() => store.dispatch(del('del'))}
        />,
        rootEl
    )
}

render();
store.subscribe(render);


