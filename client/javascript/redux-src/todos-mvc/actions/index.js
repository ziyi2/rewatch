import * as types from '../constants/ActionTypes';

export function addTodo(text) {

	console.log('actions,types.ADD_TODO:',types.ADD_TODO);

	return {
		type: types.ADD_TODO,
		text
	}
}


export function delTodo(id) {

	console.log('actions,types.DEL_TODO:',types.DEL_TODO);

	return {
		type: types.DEL_TODO,
		id
	}
}





