import react from 'react';
import { render } from 'react-dom';
import { createStore } from 'redux';
import { Provider }  from 'react-redux';

import App from './containers/App.Container';
import reducer from './reducers';


// 创建 Redux store 来存放应用的状态。
// API 是 { subscribe, dispatch, getState }。
const store = createStore(reducer);
//console.log(store.getState());
//
//createStore() 的第二个参数是可选的, 
//用于设置 state 初始状态。这对开发同构应用时非常有用，
//服务器端 redux 应用的 state 结构可以与客户端保持一致, 
//那么客户端可以将从网络接收到的服务端 state 直接用于本地数据初始化。
//let store = createStore(todoApp, window.STATE_FROM_SERVER)


// 测试的时候用
store.subscribe(() =>
  console.log(store.getState())
);

// 改变内部 state 惟一方法是 dispatch 一个 action。
// action 可以被序列化，用日记记录和储存下来，后期还可以以回放的方式执行
// store.dispatch({ type: 'INCREMENT' });

const react_redux_todos = document.getElementById('react-redux-todos');


//redux本身和react是没有联系的
//使App组件连接到Redux并且让它能够dispatch actions以及从Redux store读取state
//dispatch actions -> store.dispatch({type:'ACTION'}); 详细见todos-test

//第一步
//首先将App组件包装进react-redux提供的Provider容器
//这样store就能为App中的组件所用


//第二步
//通过react-redux提供的connect()方法包装好的组件连接到Redux
//从º≥技术上来说你可以将应用中的任何一个组件 connect() 到 Redux store 中，
//但尽量避免这么做，因为这个数据流很难追踪。


//任何一个从 connect() 包装好的组件都可以得到一个 
//dispatch 方法作为组件的 props，
//以及得到全局 state 中所需的任何内容


//connect() 的唯一参数是 selector。
//此方法可以从 Redux store 接收到全局的 state，
//然后返回组件中需要的 props

//<Provider store> 使组件层级中的 connect() 方法都能够获得 Redux store
//正常情况下，你的根组件应该嵌套在 <Provider> 中才能使用 connect() 方法。

//store (Redux Store): 应用程序中唯一的 Redux store 对象


//redux store
//应用中所有的 state 都以一个对象树的形式储存在一个单一的 store 中
//整个应用的 state 被储存在一棵 object tree 中，并且这个 object tree 只存在于唯一一个 store 中
//维持应用的 state；
//
//
//维持应用的 state；
//提供 getState() 方法获取 state；
//提供 dispatch(action) 方法更新 state；
//通过 subscribe(listener) 注册监听器;                       
//通过 subscribe(listener) 返回的函数注销监听器

//再次强调一下 Redux 应用只有一个单一的 store。当需要拆分数据处理逻辑时，
//你应该使用 reducer 组合 而不是创建多个 store


render (
	<Provider store={store}>	
		<App />
	</Provider>,
	react_redux_todos
)

