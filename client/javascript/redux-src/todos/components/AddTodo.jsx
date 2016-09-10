import React,{ Component } from 'react';
import { connect } from 'react-redux';
import { addTodo } from '../actions';


export default class AddTodo extends Component {
	handleSubmit(e) {
		e.preventDefault();
		let value = this.refs.input.value;
		if(!value.trim()) {
			return;
		}

		this.props.dispatch(addTodo(value));
		this.refs.input.value = '';
	}

	render() {

		const { dispatch } = this.props;	

		return (
			<div className="row">
				<form className="form-line" onSubmit={this.handleSubmit.bind(this)}>
					<input className='form-control'  placeholder="请输入项" type="text" ref='input' />
					<button type='submit' className='btn btn-default'>添加</button>	
				</form>
			</div>
		)
	}
}


//使用connect方法包装component 
//连接 React 组件与 Redux store
//连新接操作不会改变原来的组件类，反而返回一个的已与 Redux store 连接的组件类

//任何一个从 connect() 包装好的组件都可以得到一个 
//dispatch 方法作为组件的 props，
//以及可以得到全局 state 中所需的任何内容(这个是不是要自己配置需要得到的state?)


//connect() 的唯一参数是 selector。
//此方法可以从 Redux store 接收到全局的 state，
//然后返回组件中需要的 props

//connect() 允许你从 Redux store 中指定准确的 state 到你想要获取的组件中。
//这让你能获取到任何级别颗粒度的数据        

//connect([mapStateToProps], [mapDispatchToProps], [mergeProps], [options])
//mapStateToProps(state, [ownProps]): stateProps  -> 如果你省略了这个参数，你的组件将不会监听 Redux store
// 如果定义该参数，组件将会监听 Redux store 的变化。任何时候，只要 Redux store 发生改变，mapStateToProps 函数就会被调用

//mapDispatchToProps(dispatch, [ownProps]): dispatchProps -> 
//如果你省略这个 mapDispatchToProps 参数，默认情况下，dispatch 会注入到你的组件 props 中

//返回值
//根据配置信息，返回一个注入了 state 和 action creator 的 React 组件。



//函数将被调用两次。第一次是设置参数，
//第二次是组件与 Redux store 连接：connect(mapStateToProps, mapDispatchToProps, mergeProps)(MyComponent)

//connect 函数不会修改传入的 React 组件，返回的是一个新的已与 Redux store 连接的组件，而且你应该使用这个新组件
//mapStateToProps 函数接收整个 Redux store 的 state 作为 props，然后返回一个传入到组件 props 的对象。该函数被称之为 selector

//情况一
//只注入 dispatch，不监听 store!!!
//最好在多个组件上使用 connect()，每个组件只监听它所关联的部分 state
//这里的组件是不会变化的,所以不需要监听state的变化
// AddTodo = connect()(AddTodo);  
// export default AddTodo;

//情况二
//注意
//不要这样做！这会导致每次 action 都触发整个 TodoApp 重新渲染，
//你做的所有性能优化都将付之东流。
//export default connect(state => state)(TodoApp);



//情况三
//注入 dispatch 和 todos
//function mapStateToProps(state) {
//   return { todos: state.todos };
// }

// export default connect(mapStateToProps)(TodoApp);

//情况四
// 注入 todos 和所有 action creator (addTodo, completeTodo, ...)
// import * as actionCreators from './actionCreators';

// function mapStateToProps(state) {
//   return { todos: state.todos };
// }

// export default connect(mapStateToProps, actionCreators)(TodoApp);

//情况五
//注入 todos 和指定的 action creator (addTodo)
// import { addTodo } from './actionCreators';
// import { bindActionCreators } from 'redux';

// function mapStateToProps(state) {
//   return { todos: state.todos };
// }

// function mapDispatchToProps(dispatch) {
//   return bindActionCreators({ addTodo }, dispatch);
// }

// export default connect(mapStateToProps, mapDispatchToProps)(TodoApp);







