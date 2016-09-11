import React from 'react';
import { render } from 'react-dom';
import { createStore } from 'redux';
import { Provider }  from 'react-redux';

import  reducer from './reducers';

const store = createStore(reducer);


const redux_todos_mvc = docment.getElementById('react-redux-todos-mvc');

render(
	<Provider store={store}>

	</Provider>
);


