//like MVC's Model

import Event from 'events';
import assign from 'object-assign';

let EventEmitter  = Event.EventEmitter;

//Store -> View
let ListStore = assign({}, EventEmitter.prototype, {
    items: [],

    getAll() {
        return this.items;
    },

    addNewItemHandler(text) {
        this.items.push(text);
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
