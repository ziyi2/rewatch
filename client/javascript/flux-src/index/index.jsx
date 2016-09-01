//import 'babel-polyfill';

import React from 'react';
import ReactDOM from 'react-dom';
import ButtonController from './components/ButtonController';


var to_do_list_flux = document.getElementById('list-to-do-flux');
ReactDOM.render(<ButtonController/> , to_do_list_flux);