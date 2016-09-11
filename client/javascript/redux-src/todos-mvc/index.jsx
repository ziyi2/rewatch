import React from 'react';
import { render } from 'react-dom';
import { createStore } from 'redux';
import { Provider }  from 'react-redux';

import AppContainer from './containers/App.Container';

import  reducer from './reducers';

const store = createStore(reducer);
console.log('index.jsx store.getState():' , store.getState());

const redux_todos_mvc = document.getElementById('react-redux-todos-mvc');

render(
	<Provider store={store}>
		<AppContainer />
	</Provider>,
	redux_todos_mvc
);


