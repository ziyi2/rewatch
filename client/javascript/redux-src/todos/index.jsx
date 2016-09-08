import React from 'react';
import { render } from 'react-dom';
import { createStore } from 'readux';
import { Provider } from 'react-redux';

import reducer from './reducers';

const store =  createStore(reducer);


