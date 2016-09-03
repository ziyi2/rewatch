'use strict';
import AppDispatcher from '../dispatcher/AppDispatcher';
import TodoConstants from '../constants/TodoConstants';



//Action -> Dispatcher
let TodoFooterActions = {
    delList(index) {
        AppDispatcher.dispatch({
            actionType: TodoConstants.DEL,
            index: index
        });
    }
};


export default  TodoFooterActions;