import { connect } from 'react-redux';
import { setVisibilityFilter } from '../actions';
import Link from '../components/Link';


const mapStateToProps = (state, ownProps) => {
	console.log(state.visibilityFilter);
	console.log(ownProps.filter);	
  return {
    active: ownProps.filter === state.visibilityFilter
  }
};


const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onClick: () => {
      dispatch(setVisibilityFilter(ownProps.filter));
    }
  }
};

const FilterLink = connect(
  mapStateToProps,
  mapDispatchToProps
)(Link);

export default FilterLink;

