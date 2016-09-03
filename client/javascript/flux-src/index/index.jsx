'use strict';
//import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import TodoApp from './components/TodoApp';


var list_to_do_flux = document.getElementById('list-to-do-flux');
ReactDOM.render(<TodoApp/> , list_to_do_flux);