import React, { PropTypes,Component } from 'react';

export default class Link extends Component {

	static propTypes = {
		active: PropTypes.bool.isRequired,
  		children: PropTypes.node.isRequired,
  		onClick: PropTypes.func.isRequired
	};


	render() {

		const { active,children,onClick } = this.props;

		if(active) {
			return (
				<span>{children}</span>
			)
		}

		return (
			<a 
				href="#"
				onClick={
					e => {
						e.preventDefault();
						onClick();
					}
				}
			>
			{children}
			</a>
		)
	}
}