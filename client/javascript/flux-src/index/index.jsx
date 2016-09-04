'use strict';
//import 'babel-polyfill';
import React from 'react';
import {render} from 'react-dom';
import TodoApp from './components/TodoApp';


var list_to_do_flux = document.getElementById('list-to-do-flux');
render(<TodoApp/> , list_to_do_flux);