import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Counter from '../components/Counter';
import * as CounterActions from '../actions';

//将state.counter绑定到props的counter
function mapStateToProps(state) {
  return {
    counter: state.counter
  }
}



//将action的所有方法绑定到props上
function mapDispatchToProps(dispatch) {
  return bindActionCreators(CounterActions, dispatch)
}



//let boundActionCreators = bindActionCreators(TodoActionCreators, dispatch);
//console.log(boundActionCreators);
//// {
////   addTodo: Function,
////   removeTodo: Function
//// }


//console.log(CounterActions);
// {
//   addTodo: Function,
//   removeTodo: Function
// }



//bindActionCreators

//把 action creators 转成拥有同名 keys 的对象，
//但使用 dispatch 把每个 action creator 包围起来，这样可以直接调用它们。

//惟一使用 bindActionCreators 的场景是当你需要
// 把 action creator 往下传到一个组件上，
// 却不想让这个组件觉察到 Redux 的存在，
// 而且不希望把 Redux store 或 dispatch 传给它


//通过react-redux提供的connect方法将我们需要的state中的数据和actions中的方法绑定到props上
export default connect(mapStateToProps, mapDispatchToProps)(Counter)