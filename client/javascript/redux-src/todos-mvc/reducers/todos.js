import * as types from '../constants/ActionTypes';

const initialState = [
	{
		text:'User Redux',
		completed: false,
		id:0
	}
];

function todo(state,action) {
	switch(action.type) {
		case types.ADD_TODO:
			return {
				id: state.reduce((maxId, todo) => Math.max(todo.id, maxId), -1) + 1,
				completed: false,
			  	text: action.text
			};

		case types.DEL_TODO:
			console.log('DEL_TODO 2');
			console.log('action.id:',action.id);
			console.log('state.id:',state.id);
			// if(state.id !== action.id) {
			// 	return false;
			// } 
			// return true;
			return (state.id !== action.id);

		default:
			return state;	
	}
}



export default function todos(state=initialState,action) {

	console.log('todos was called with state', state, 'and action', action);


	switch(action.type) {
		case types.ADD_TODO:
			return [
				todo(state,action),
				...state
			];

		case types.DEL_TODO:
			console.log('DEL_TODO 1');
			return state.filter(t =>		//map不修改原数组,这也是我们所规定的不能修改state,使用filter返回的总是稠密数组
											//需要注意的是map可以返回稀疏数组
				todo(t,action)
			);

		default:
			return state;
	}
}








