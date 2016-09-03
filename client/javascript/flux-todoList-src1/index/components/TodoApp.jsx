'use strict';
import React from 'react';
import TodoHeader from './TodoHeader';
import TodoHeadAction from '../actions/TodoHeadActions';
import TodoFooter from './TodoFooter';
import TodoStore from '../stores/TodoStore';
import TodoConstants,{_onChange,_addList} from '../constants/TodoConstants';

export default class TodoApp extends React.Component {
	constructor() {
		super();
	}

	state = {
		lists: TodoStore.getAllLists()
	};

	componentDidMount() {
		TodoStore.addChangeListener(this[_onChange].bind(this));
	}

	componentWillUnmount() {
		TodoStore.removeChangeListener(this[_onChange].bind(this));  //需要注意this指向问题
	}


	[_onChange]() {
		this.setState({
			lists: TodoStore.getAllLists()
		});
	}

	[_addList]() {
		TodoHeadAction.addList(1);
	}


	render() {

		let headProps = {
			lists: this.state.lists,
			addList: this[_addList]
		};

		let footerProps = {
			lists: this.state.lists
		};

		return (
			<div className="row">
				<TodoHeader {...headProps} />
				<TodoFooter {...footerProps}/>
			</div>
		)
	}
}




