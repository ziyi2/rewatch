'use strict';
import Event,{EventEmitter} from 'events';
import assign from 'object-assign';




//Store -> View
var TodoStore = assign({}, EventEmitter.prototype, {
    lists: [1,2],

    getAllLists() {
        return this.lists;
    },

    addList(list) {
        this.lists.push(list);
    },

    emitChange() {
        this.emit('change');
    },

    addChangeListener(callback) {
        this.on('change', callback);
    },

    removeChangeListener(callback) {
        this.removeListener('change', callback);
    }
});

export default TodoStore;
