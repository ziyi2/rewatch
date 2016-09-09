import { combineReducers } from 'redux';
import todoOper from './todoOper';
import todoShow from './todoShow';

//这里拆分只是为了说明reducers是可以做细化处理的
//两个reducer中的state是不同的,数据类型也可以不一样


// combineReducers 接收一个对象并返回一个函数，
// 当 combineReducers 被调用时，它会去调用每个reducer，
// 并把返回的每一块 state 重新组合成一个大 state 对象（也就是 Redux 中的 Store）
const todoReducers = combineReducers({
    todoOper,
    todoShow
});

export default todoReducers;