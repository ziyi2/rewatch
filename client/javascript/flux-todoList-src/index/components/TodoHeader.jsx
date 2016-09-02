'use strict';
import React from 'react';
import Input from './Input';
import Button from './Button';

export default class TodoHeader extends React.Component {

    render() {
        return (
            <div className="row">
                <header>
                    <h1>TodoList - flux</h1>
                    <form action="" className="form-inline">
                        <div className="form-group">
                            <Input
                                type="text"
                                className='form-control'
                                placeholder="请输入项"
                                autoComplete="off"
                            />
                            <Button className="btn btn-default" onClick={this.props.addList}>添加</Button>
                        </div>
                    </form>
                </header>
                <br/>
            </div>
        )
    }
}




