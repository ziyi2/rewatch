'use strict';
import AppDispatcher from '../dispatcher/AppDispatcher';
import TodoConstants from '../constants/TodoConstants';


//Action -> Dispatcher

let TodoHeadAction = {

    /**
     * @param  {string} add List to the lists
     * @param  {string} list
     */
    addList(list) {
        AppDispatcher.dispatch({
            actionType: TodoConstants.ADD,
            list: list
        });
    }
};


export default TodoHeadAction;