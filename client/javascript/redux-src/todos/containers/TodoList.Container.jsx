import { connect } from 'react-redux';
import TodoList from '../components/TodoList';
import { toggleTodo } from '../actions';

//和TodoList有关的state
//这样的话只会重新渲染与该容器所对应的子组件,而不会关联到其他容器的组件
//渲染的性能提高

//我们需要从所有的state中获取与该容器有关的state
//
//组件将会监听 Redux store 的变化
//任何时候，只要 Redux store 发生改变，mapStateToProps 函数就会被调用
//该回调函数必须返回一个纯对象，这个对象会与组件的 props 合并
//如果你省略了这个参数，你的组件将不会监听 Redux store

const getVisibleTodos = (todos,filter) => {
	switch(filter) {
		case 'SHOW_ALL':
			console.log('SHOW_ALL todos:',todos);
			return todos; 	//显示全部todos

		case 'SHOW_ACTIVE':
			console.log('SHOW_ACTIVE todos:',todos);
			return todos.filter(t => t.completed);

		case 'SHOW_COMPLETED':	
			console.log('SHOW_COMPLETED todos:',todos);
			return todos.filter(t => !t.completed);
			
		default:
			throw new Error('Unknown filter:' + filter);	
	}
}


const mapStateToProps = (state) => {	//这个state是全局state,也就是所有的state
	return {
		todos: getVisibleTodos(state.todos, state.visibilityFilter)
	}
};
//state.todos和state.visibilityFilter和reducers/index.js中的
// const todoApp = combineReducers({
// 	todos,
// 	visibilityFilter
// });
//一一对应

//如果传递的是一个对象，
//那么每个定义在该对象的函数都将被当作 Redux action creator，
//而且这个对象会与 Redux store 绑定在一起，
//其中所定义的方法名将作为属性名，
//合并到组件的 props 中


//如果你省略这个 mapDispatchToProps 参数，
//默认情况下，dispatch 会注入到你的组件 props 中

//注入指定的action creator (toggleTodo)
const mapDispatchToProps = (dispatch) => {
	return {
		onTodoClick: (id) => {
			dispatch(toggleTodo(id));
		}
	};
};



const TodoListContainer = connect(
	mapStateToProps,
	mapDispatchToProps
)(TodoList);
export default TodoListContainer;
