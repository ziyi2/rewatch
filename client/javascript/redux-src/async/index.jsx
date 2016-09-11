import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import App from './containers/App';
import configureStore from './store/configureStore';

const store = configureStore();
console.log('index.jsx:' , store.getState());



render(
  <Provider store={store}>
   	 <App />	
  </Provider>,
  document.getElementById('react-redux-async')
)