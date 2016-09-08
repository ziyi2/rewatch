import { combineReducers } from 'redux';
import todoAdd from './todoAdd';
import todoDel from './todoDel';

//这里拆分只是为了说明reducers是可以做细化处理的

const todoApp = combineReducers({
    todoAdd,
    todoDel
});

