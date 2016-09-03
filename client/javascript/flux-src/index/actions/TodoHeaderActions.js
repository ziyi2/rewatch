'use strict';
import AppDispatcher from '../dispatcher/AppDispatcher';
import TodoConstants from '../constants/TodoConstants';



//Action -> Dispatcher
let TodoHeaderActions = {

     setList(list) {
         AppDispatcher.dispatch({
             actionType: TodoConstants.SET,
             list: list
         });
     },

     addList(list) {
         AppDispatcher.dispatch({
             actionType: TodoConstants.ADD,
             list: list
         });
     }
};


export default  TodoHeaderActions;