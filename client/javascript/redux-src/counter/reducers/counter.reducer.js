import { ADD, DEL } from '../constants/counter.type';


export default function counter(state = 0, action) {
    switch (action.type) {
        case ADD:
            return state + 1;
        case DEL:
            return state - 1;
        default:
            return state;
    }
}