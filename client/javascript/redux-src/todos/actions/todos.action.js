
import { ADD, DEL, SHOW } from '../constants';


//一般约定action是一个拥有type属性的对象
//输出的是一个对象
//ActionCreators -> Action

export const add = (text) => {
  return {
      type: ADD,
      text
  }
};




export const del = (index)  => {
    return {
        type: DEL,
        index
    }
};


export const show = () => {
    return {
        type: SHOW
    }
};

