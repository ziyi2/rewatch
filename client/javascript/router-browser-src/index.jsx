'use strict';
//import 'babel-polyfill';
import React from 'react';
import {render} from 'react-dom';
import {Router,Route,hashHistory,browserHistory,IndexRoute} from 'react-router'

import Home from './components/Home';
import About from './components/About';
import App from './components/App';
import Repos from './components/Repos';
import Repo from './components/Repo';
import Index from './components/Index';

var react_router = document.getElementById('react-router');
//render(<App/> , react_router);


//ex.1  http://localhost:3000/ or http://localhost:3000/#/about
//render((
//    <Router history={hashHistory}>
//        <Route path='/' component={Home}  />
//        <Route path='/about' component={About}  />
//    </Router>
//),react_router);


//ex.2
//render((
//    <Router history={hashHistory}>
//        <Route path='/' component={App}>
//            <Route path='/home' component={Home}  />
//            <Route path='/about' component={About}  />
//        </Route>
//    </Router>
//),react_router);

//ex.3
//render((
//    <Router history={hashHistory}>
//        <Route path='/' component={App} />
//        <Route path='/home' component={Home}  />
//        <Route path='/about' component={About}  />
//    </Router>
//),react_router);

//ex.4 Link

//render((
//    <Router history={hashHistory}>
//        <Route path='/' component={App} />
//        <Route path='/home' component={Home}  />
//        <Route path='/about' component={About}  />
//    </Router>
//),react_router);


//ex.5 Link
//render((
//    <Router history={hashHistory}>
//        <Route path='/' component={App}>
//            <Route path='/home' component={Home}  />
//            <Route path='/about' component={About}  />
//            <Route path='/repos' component={Repos}  />
//            <Route path='/repos/:userName/:repoName' component={Repo}  />
//        </Route>
//    </Router>
//),react_router);


//ex.6  Index -> {this,props.children || <Index/>} 如果App不渲染任何子组件,则默认渲染Index
render((
    <Router history={browserHistory}>
        <Route path='/' component={App}>
            <IndexRoute component={Index} />
            <Route path='/home' component={Home}  />
            <Route path='/about' component={About}  />
            <Route path='/repos' component={Repos} >
                <Route path='/repos/:userName/:repoName' component={Repo}  />
            </Route>
        </Route>
    </Router>
),react_router);
