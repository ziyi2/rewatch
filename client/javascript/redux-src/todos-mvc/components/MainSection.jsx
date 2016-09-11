import React, { Component, PropTypes } from 'react';
import TodoItem from './TodoItem';


export default class MainSection extends Component {
	render() {
		const { todos, actions } = this.props;	
		console.log('MainSection,this.props:',this.props);

		return (
			<section className="row">
				<ul className="list-group">
				{
					todos.map(todo => 
						<TodoItem key={todo.id} todo={todo} delTodo={actions.delTodo} />
					)
				}
				</ul>
			</section>
		)
	}
}




