import { ADD,DEL } from '../constants';

const todoOper = (state = [], action) => {

    console.log('todoOper was called with state', state, 'and action', action);


    switch (action.type) {
        case ADD:
            return [
                ...state,
                action.text
            ];

        case DEL:
            return state;


        default:
            return state;
    }
};

export default todoOper;