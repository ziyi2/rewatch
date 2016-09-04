'use strict';
//import 'babel-polyfill';
import React from 'react';
import {render} from 'react-dom';
import {Router,Route,hashHistory} from 'react-router'

import Home from './components/Home';
import About from './components/About';


var react_router = document.getElementById('react-router');
//render(<App/> , react_router);

render((
    <Router history={hashHistory}>
        <Route path='/' component={Home}  />
        <Route path='/about' component={About}  />
    </Router>
),react_router);