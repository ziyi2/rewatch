'use strict';
import React from 'react';
import ReactDom from 'react-dom';
import TodoApp from './components/TodoApp';

let list_to_do_flux = document.getElementById('list-to-do-flux');

ReactDom.render(<TodoApp />, list_to_do_flux);



