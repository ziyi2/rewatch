
//reducer其实也是个方法而已,参数是state和action,返回值是新的state
export default function counter(state = 0, action) {

  console.log('counter was called with state', state, 'and action', action);	

  switch (action.type) {
    case 'INCREMENT_COUNTER':
      return state + 1;
    case 'DECREMENT_COUNTER':
      return state - 1;
    default:
      return state;
  }
}


//如果 state 是普通对象，永远不要修改它！
//比如，reducer 里不要使用 Object.assign(state, newData)，
//应该使用 Object.assign({}, state, newData)。
//这样才不会覆盖旧的 state。
//也可以使用 Babel 阶段 1 中的 ES7 对象的 spread 操作 特性中的
//return { ...state, ...newData }。


//对于服务端运行的同构应用，
//为每一个请求创建一个 store 实例，
//以此让 store 相隔离。
// dispatch 一系列请求数据的 action 到 store 实例上，
// 等待请求完成后再在服务端渲染应用。


//如果你以前使用 Flux，
// 那么你只需要注意一个重要的区别。
// Redux 没有 Dispatcher 且不支持多个 store。
// 相反，只有一个单一的 store 和一个根级的 reduce 函数（reducer）。
// 随着应用不断变大，你应该把根级的 reducer 拆成多个小的 reducers，分别独立地操作 state 树的不同部分，而不是添加新的 stores。
// 这就像一个 React 应用只有一个根级的组件，这个根组件又由很多小组件构成。
