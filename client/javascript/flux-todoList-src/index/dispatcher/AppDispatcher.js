'use strict';
import TodoConstants from '../constants/TodoConstants';
import flux from 'flux';
import TodoStore from '../stores/TodoStore';
let AppDispatcher =  new flux.Dispatcher();

//Dispatcher -> callbacks(Store)
AppDispatcher.register( (action) => {
    switch(action.actionType) {
        case TodoConstants.ADD:
            TodoStore.addList(action.list);
            TodoStore.emitChange();
            break;

        default:
            break;
    }
});




export default AppDispatcher;