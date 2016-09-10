import React,{ Component } from 'react';
import LinkFilterContainer from '../containers/LinkFilterContainer';

export default class Footer extends Component {
	render() {
		return(
			<p>
				显示:
				{' : '}
				<LinkFilterContainer filter="SHOW_ALL">所有</LinkFilterContainer>
				{' | '}
				<LinkFilterContainer filter="SHOW_ACTIVE">已划线</LinkFilterContainer>
				{' | '}	
				<LinkFilterContainer filter="SHOW_COMPLETED">未划线</LinkFilterContainer>
				{' | '}
			</p>
		)
	}
}