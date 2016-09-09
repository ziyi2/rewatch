import { SHOW } from '../constants';

const todoShow = (state = [], action) => {

    console.log('todoShow was called with state', state, 'and action', action);

    switch (action.type) {
        case SHOW:
            return state;

        default:
            return state;

        //用 switch 的时候， **永远** 不要忘记放个 “default” 来返回 “state”，否则，
        //你的 reducer 可能会返回 “undefined” （等于你的 state 就丢了）
    }
};

export default todoShow;

