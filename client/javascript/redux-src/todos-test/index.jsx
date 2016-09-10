import React from 'react';
import { render } from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import App from './components/App';

import todoReducers from './reducers';

// createStore 函数必须接收一个能够修改应用状态的函数

// 往 createStore 传 Reducer 的过程就是给 Redux 绑定
// action 处理函数（也就是 Reducer）的过程
let store =  createStore(todoReducers);

//console.log(store.getState());
/*
{
    todoOper: [],
    todoShow: []
}
 */


//这里当store变化的时候可以重新渲染视图
//store.subscribe(function() {
//    console.log('store has been updated. Latest store state:', store.getState());
//    // 在这里更新你的视图
//});



//store.dispatch({type:'ACTION'});
//store.dispatch(add(1));
//console.log('state after action:', store.getState());
/*
 {
 todoOper: [],
 todoShow: []
 }
 */


//store.dispatch(add('1'));
//console.log('state after action:', store.getState());

/*
 {
 todoOper: [1],
 todoShow: []
 }
 */
//store.dispatch({type:'ACTION'});
//console.log('state after action:', store.getState());

/*
 {
 todoOper: [1],
 todoShow: []
 }
 */



const react_redux_todos = document.getElementById('react-redux-todos');

render(
    <Provider store={store}>
        <App />
    </Provider>,
    react_redux_todos
);



/*
                  _________               ____________               ___________
                 |         |             |            |             |           |
                 | Action  |------------▶| Dispatcher |------------▶| callbacks |
                 |_________|             |____________|             |___________|
                     ▲                                                   |
                     |                                                   |
                     |                                                   |
 _________       ____|_____                                          ____▼____
 |         |◀----|  Action  |                                        |         |
 | Web API |     | Creators |                                        |  Store  |
 |_________|----▶|__________|                                        |_________|
                     ▲                                                   |
                     |                                                   |
                 ____|________           ____________                ____▼____
                 |   User       |         |   React   |              | Change  |
                 | interactions |◀--------|   Views   |◀-------------| events  |
                 |______________|         |___________|              |_________|
 */
