import React,{ Component } from 'react';
import AddTodoContainer from './AddTodo.Container';
import TodoListContainer from './TodoList.Container';
import Footer from '../components/Footer';

//containers文件夹
//容器组件 最顶层 路由处理
//从Redux获取state
//向Redux派发actions
//
//compinents组件文件夹
//展示组件
//中间和子组件 例如中间组件:Footer 子组件 Link
//从props获取数据
//从props调用回调函数


export default class AppContainer extends Component {
	render() {
		return (
			<div className="row">
				<AddTodoContainer />
				<br/>
				<TodoListContainer />
				<Footer />
			</div>
		)
	}
}