import { connect } from 'react-redux';
import { ActionCreators as UndoActionCreators } from 'redux-undo';
import UndoRedo from '../components/UndoRedo';

const mapStateToProps = (state) => {
  return {
    canUndo: state.todos.past.length > 0,
    canRedo: state.todos.future.length > 0
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    onUndo: () => dispatch(UndoActionCreators.undo()),
    onRedo: () => dispatch(UndoActionCreators.redo())
  }
};

const UndoRedoContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(UndoRedo);

export default UndoRedoContainer;


