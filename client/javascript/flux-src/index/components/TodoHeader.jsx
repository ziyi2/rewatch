'use strict';
import React from 'react';
import Input from './Input';
import Button from './Button';
import ToConstants,{_onChange,_addList} from '../constants/TodoConstants';
import TodoHeaderActions from '../actions/TodoHeaderActions';

export default class TodoHeader extends React.Component {

    [_addList]() {
        let list = this.refs.input.props.value;

        if(list){
            TodoHeaderActions.addList(list);
        }
    }

    [_onChange](event) {
        let list = event.target.value.trim().substr(0,10);
        TodoHeaderActions.setList(list);
    }

    render() {
        return (
            <form className="form-inline">
                <Input
                    type="text"
                    className='form-control'
                    placeholder="请输入项"
                    autoComplete="off"
                    ref='input'
                    value={this.props.list}
                    onChange={this[_onChange]}
                />
                <Button
                    type="button"
                    className='btn btn-default'
                    onClick={this[_addList].bind(this)}>
                    添加
                </Button>
            </form>
        )
    }
}
