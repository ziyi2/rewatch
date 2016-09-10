import assign from 'object-assign';

const todo = (state, action) => {
	switch (action.type) {
		case 'ADD_TODO':
			console.log('ADD_TODO:2');
		  	return {
		  		id: action.id,
		  		text: action.text,
		  		completed: false
		  	};

		case 'TOOGLE_TODO':
			console.log('TOGGLE_TODO:2');
			console.log('state:', state);
			if(state.id !== action.id) {
				return state;
			}

			// return assign({},state,{
			// 	completed: !state.completed
			// });
			// ES7 stage-2 redux-native已经大胆使用,所以放心吧
			console.log('state change completed:', state);
			return {
				...state,
				completed: !state.completed
			}

		default:
			return state;  		
	}
};

//永远不要在 reducer 里做这些操作
//修改传入参数
//执行有副作用的操作，如 API 请求和路由跳转
//调用非纯函数，如 Date.now() 或 Math.random()
//


const todos = (state = [], action) => { 	//state是一个数组对象,里面都是对象

	console.log('todos was called with state', state, 'and action', action);

	switch(action.type) {
		case 'ADD_TODO':
			console.log('ADD_TODO:1');
			return [						//当 state 变化时需要返回全新的对象，而不是修改传入的参数。
				...state,
				todo(undefined,action)
			];

		case 'TOOGLE_TODO':
			console.log('TOOGLE_TODO:1');
			return state.map(t => todo(t,action));

		default:
			return state;
	}

};

export default todos;
