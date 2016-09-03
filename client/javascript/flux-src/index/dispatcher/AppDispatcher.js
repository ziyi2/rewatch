'use strict';
import flux from 'flux';
import TodoConstants from '../constants/TodoConstants';
import TodoStore from '../stores/TodoStore';
let AppDispatcher =  new flux.Dispatcher();

//Dispatcher只用来派发Action注册相应的回调函数,不应该有其他操作
//注册Action的回调函数
//Dispatcher -> callbacks
AppDispatcher.register( (action) => {
    switch(action.actionType) {

        case TodoConstants.SET:
            TodoStore.setList(action.list);
            TodoStore.emitChange();
            break;

        case TodoConstants.ADD:
            TodoStore.addList(action.list);
            TodoStore.emitChange();
            break;

        case TodoConstants.DEL:
            TodoStore.delList(action.index);
            TodoStore.emitChange();
            break;

        default:
            break;
    }
});




export default AppDispatcher;

