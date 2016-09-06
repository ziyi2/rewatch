'use strict';
import React from 'react';
import { render } from 'react-dom';
import Counter from './Counter';

import { createStore } from 'redux';
//用于设置state的初始状体
//这对开发同构应用时非常有用，
//服务器端 redux 应用的 state 结构可以与客户端保持一致,
//那么客户端可以将从网络接收到的服务端 state
//直接用于本地数据初始化。
//let store = createStore(todoApp, window.STATE_FROM_SERVER)


import counter  from '../reducers/counter.reducer';
const store = createStore(counter); //第二参数用于设置state的初始状态

import { add, del } from '../actions/counter.action';

//getState 获取
//dispatch 更新
//subscribe 注册监听器
//subscribe返回的函数 注销监听器

var react_redux = document.getElementById('react-redux');


function ren() {
    render() (
            <Counter
                value={store.getState()}
                add = { () => store.dispatch(add('add')) }
                del = { () => store.dispatch(del('del')) }
             />,
        react_redux
    )
}

ren();
store.subscribe(ren);


