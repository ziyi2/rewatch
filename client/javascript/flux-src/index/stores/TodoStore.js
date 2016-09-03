'use strict';
import Event,{EventEmitter} from 'events';
import assign from 'object-assign';


//Store -> View
let ListStore = assign({}, EventEmitter.prototype, {
    lists: [],
    list: "",

    getAllLists() {
        return this.lists;
    },

    getList() {
      return this.list
    },

    setList(list) {
       this.list = list;
    },

    addList(list) {
        this.lists.push(list);
    },

    delList(index) {
        this.lists.splice(index,1);
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

export default ListStore;
