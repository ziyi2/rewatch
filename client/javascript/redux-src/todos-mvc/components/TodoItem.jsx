import React, { Component, PropTypes } from 'react';


export default class TodoItem extends Component {

	handleClick() {
		this.props.delTodo(this.props.todo.id);
	}

	render() {
		return (
				<li className="list-group-item">
					{this.props.todo.text}
					<button className='btn btn-default' onClick={this.handleClick.bind(this)}>删除</button>
				</li>
		)
	}
}
