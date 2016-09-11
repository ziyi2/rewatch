import react,{ PropTypes,Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as TodoActions from '../actions';
import Header from '../components/Header';
import MainSection from '../components/MainSection';

class AppContainer extends Component {

	static propTypes = {
		todos: PropTypes.array.isRequired,
		actions: PropTypes.object.isRequired
	};


	render() {
		const { todos,actions } = this.props;
		console.log('App.Container, this.props:',this.props);

		return (
			<div className="row">
				<Header addTodo={actions.addTodo} />
				<br />	
				<MainSection {...this.props} />
			</div>
		)
	}
}


function mapStateToProps(state) {
	return {
		todos: state.todos
	}
}

function mapDispatchToProps(dispatch) {
	console.log('App.Container,TodoActions:',TodoActions);
	return {
		actions: bindActionCreators(TodoActions,dispatch)
	}
}


export default connect(
	mapStateToProps,
	mapDispatchToProps
)(AppContainer);

