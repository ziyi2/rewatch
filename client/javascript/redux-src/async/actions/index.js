//导出加一的方法
export function increment() {
  return {
    type: 'INCREMENT_COUNTER'
  }
}
//导出减一的方法
export function decrement() {
  return {
    type: 'DECREMENT_COUNTER'
  }
}
//导出奇数加一的方法，该方法返回一个方法，包含dispatch和getState两个参数，dispatch用于执行action的方法，getState返回state
export function incrementIfOdd() {
  return (dispatch, getState) => {
    //获取state对象中的counter属性值
    const { counter } = getState()

    //偶数则返回
    if (counter % 2 === 0) {
      return
    }
    //没有返回就执行加一
    dispatch(increment())
  }
}
//导出一个方法,包含一个默认参数delay,返回一个方法,一秒后加一   
//注意这里是异步执行,延迟两秒后执行 
//
//
//
//
//这里有个诀窍：不返回 action，而是返回 function。这个 function 会在合适的时机 dispatch action。但是如果我们希望
// 这个 function 能够 dispatch action，那么就需要向它传入 dispatch 函数。于是代码类似如下：
// 
// 你可能再次注意到 action creator 返回的不是 action 而是 function。
// 所以 reducer 函数很可能不知道如何处理这样的返回值，
// 
// // console.log("\n", 'Running our async action creator:', "\n")
// store.dispatch(asyncSayActionCreator_1('Hi'))

// 输出：
//     ...
//     /Users/classtar/Codes/redux-tutorial/node_modules/redux/node_modules/invariant/invariant.js:51
//         throw error;
//               ^
//     Error: Invariant Violation: Actions must be plain objects. Use custom middleware for async actions.
//     ...

// 我们所设计的 function 似乎没有进入 reducer 函数。但是 Redux 给出了温馨提示：使用自定义中间件（middleware）来支持异步 action。
// 看来我们的方向是正确的，可中间件（middleware）又是什么呢？

// 我向你保证 action creator asyncSayActionCreator_1 不仅没有问题，而且只要我们搞清楚 middleware 的概念并掌握它的使用方法，
// 这个异步 action creator 就会按照我们所设想的结果执行。
// 具体查看store/configureStore.js
export function incrementAsync(delay = 1000) {
  return dispatch => {
    setTimeout(() => {
      dispatch(increment())
    }, delay)
  }
}

//这些方法都导出,在其他文件导入时候,使用import * as actions 就可以生成一个actions对象包含所有的export


//action (Object†): 描述应用变化的普通对象。
// Action 是把数据传入 store 的惟一途径，所以任何数据，无论来自 UI 事件，
// 网络回调或者是其它资源如 WebSockets，
// 最终都应该以 action 的形式被 dispatch。
// 按照约定，action 具有 type 字段来表示它的类型。
// type 也可被定义为常量或者是从其它模块引入。
// 最好使用字符串，而不是 Symbols 作为 action，因为字符串是可以被序列化的。除了 type 字段外，action 对象的结构完全取决于你。
// 参照 Flux 标准 Action 获取如何组织 action 的建议。



//更多了解服务器端渲染
//http://cn.redux.js.org/docs/api/applyMiddleware.html