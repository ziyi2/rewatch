import React,{ Component } from 'react';



export default class Header extends Component {

	handleSubmit(e) {
		e.preventDefault();
		//alert(this.refs.input.value);
		// console.log(this.props);
		if(!this.refs.input.value.trim()) {
			return;
		}

		this.props.addTodo(this.refs.input.value);
		this.refs.input.value = '';
	}

	render() {
		return (
			<header className="row">
				<form onSubmit={this.handleSubmit.bind(this)} className='form-inline'>
					<input type="text" className="form-control" ref='input' placeholder='请输入项' />
					<button className="btn btn-default">
						添加
					</button>
				</form>
			</header>
		)
	}
}