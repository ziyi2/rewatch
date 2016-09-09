import { Component } from 'react';
import { connect } from 'react-redux';
import { add } from '../actions/todos.action';



class TodoHeader extends Component {
    render() {
        return (
            <h3>TodoHeader</h3>
        )
    }
}





export default connect(

)(TodoHeader);  //只注入dispatch，不监听store