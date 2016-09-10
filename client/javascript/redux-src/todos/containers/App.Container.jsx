import React,{ Component } from 'react';
import AddTodoContainer from './AddTodo.Container';

export default class App extends Component {
	render() {
		return (
			<div className="row">
				<AddTodoContainer />
			</div>
		)
	}
}