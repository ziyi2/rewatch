import React,{ Component } from 'react';
import AddTodo from './AddTodo';

export default class App extends Component {
	render() {
		return (
			<div className="row">
				<AddTodo />
				<VisibleTodoList />
			</div>
		)
	}
}