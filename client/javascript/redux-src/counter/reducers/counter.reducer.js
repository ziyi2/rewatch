import { ADD, DEL } from '../constants/counter.type';


export default function counter(state = 0, action) {
    switch (action.type) {
        case ADD:
            console.log(action.text);
            return state + 1;
        case DEL:
            console.log(action.text);
            return state - 1;
        default:
            return state;
    }
}