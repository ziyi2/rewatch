import React,{ Component } from 'react';
import Todo from './Todo';

export default class TodoList extends Component {
	render() {

	    const { todos, onTodoClick } = this.props;
	    console.log("TodoList's props",this.props);

	    /*  SHOW_ALL:
	    	todos: [],
	    	onTodoClick: function onTodoClick(id)
	     */

		return (
			<div className="row">
				<ul className="list-group">
				{
					todos.map( (todo,index,todos) => {
						return (
							<Todo
								key={todo.id}
								{...todo}
								onClick={() => onTodoClick(todo.id)}
							/>		
						)
					})
				}
				</ul>
			</div>
		)
	}
}