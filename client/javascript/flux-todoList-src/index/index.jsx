import React from 'react';
import ReactDom from 'react-dom';

import TodoList from './components/TodoList';

let list_to_do_flux = document.getElementById('list-to-do-flux');

ReactDom.render(<TodoList />, list_to_do_flux);



