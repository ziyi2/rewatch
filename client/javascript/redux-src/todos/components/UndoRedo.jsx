import React,{ Component } from 'react';

export default class UndoRedo extends Component {
	render() {

		const { canUndo,canRedo,onUndo,onRedo  } = this.props;

		return (
			<p>
			    <button className='btn btn-default' onClick={onUndo} disabled={!canUndo}>
			      撤销
			    </button>
			    <button className='btn btn-default' onClick={onRedo} disabled={!canRedo}>
			      前进
			    </button>
		  	</p>
		)
	}
}


