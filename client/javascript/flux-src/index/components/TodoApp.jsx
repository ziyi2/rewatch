'use strict';
import React from 'react';
import TodoConstants,{_onChange,_addList} from '../constants/TodoConstants';
import TodoStore from '../stores/TodoStore';            //Model
import Button from './Button';                          //View-Button
import Input from './Input';
import TodoHeader from './TodoHeader';
import TodoFooter from './TodoFooter';
import TodoHeaderActions from '../actions/TodoHeaderActions';


class TodoApp extends React.Component {

    state = {
        lists: TodoStore.getAllLists(),
        list: TodoStore.getList()
    };

    componentDidMount() {
        TodoStore.addChangeListener(this[_onChange].bind(this));
    }

    componentWillUnmount() {
        TodoStore.removeChangeListener(this[_onChange].bind(this));  //需要注意this指向问题
    }

    [_onChange]() {
        this.setState({
            lists: TodoStore.getAllLists(),
            list: TodoStore.getList()
        });
    }

    render() {

        let footerProps = {
            lists: this.state.lists
        },

        headerProps = {
                list: this.state.list
        };

        return (
            <div className="row">
                <h1>TodoList</h1>
                <TodoHeader {...headerProps}/>
                <hr/>
                <TodoFooter {...footerProps} />
            </div>
        );
    }
}

export default TodoApp;
