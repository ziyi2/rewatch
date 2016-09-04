//import 'babel-polyfill';
import React from 'react';
import {render} from 'react-dom';
import {Router,Route,IndexRoute} from 'react-router'

import Home from './Home';
import About from './About';
import App from './App';
import Repos from './Repos';
import Repo from './Repo';
import Index from './Index';

module.exports = (
    <Route path='/' component={App}>
        <IndexRoute component={Index} />
        <Route path='/home' component={Home} />
        <Route path='/about' component={About} />
        <Route path='/repos' component={Repos} >
            <Route path='/repos/:userName/:repoName' component={Repo} />
        </Route>
    </Route>
)
