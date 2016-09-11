import { connect } from 'react-redux';
import Footer from '../components/Footer';


const mapStateToProps = (state,ownProps) => {
	return {
		active: ownProps.filter === state.visibilityFilter
	}
};




const FooterContainer = connect()(Footer);
export default FooterContainer;


