

import flux from 'flux';
import ListStore from '../stores/ListStore';
let AppDispatcher =  new flux.Dispatcher();

//Dispatcher只用来派发Action注册相应的回调函数,不应该有其他操作
//注册Action的回调函数
//Dispatcher -> callbacks
AppDispatcher.register( (action) => {
    switch(action.actionType) {
        case "ADD_NEW_ITEM":
            ListStore.addNewItemHandler(action.text);
            ListStore.emitChange();
            break;

        default:
            break;
    }
});




export default AppDispatcher;

