import { ADD } from '../constants';

const todoAdd = (state = [], action) => {
    switch (action.type) {
        case ADD:

        default:
            return state;
    }
};

export default todoAdd;