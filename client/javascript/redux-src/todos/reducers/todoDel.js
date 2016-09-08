import { DEL } from '../constants';

const todoDel = (state = [], action) => {
    switch (action.type) {
        case DEL:

        default:
            return state;
    }
};

export default todoDel;