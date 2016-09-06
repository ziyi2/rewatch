
import { ADD, DEL } from '../constants/counter.type';

export function add(text) {
    return {
        type: ADD,
        text
    }
}


export function del(text) {
    return {
        type: DEL,
        text
    }
}