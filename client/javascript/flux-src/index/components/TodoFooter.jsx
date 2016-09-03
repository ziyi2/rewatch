'use strict';
import React from 'react';
import Li from './Li';
import Button from './Button';
import TodoConstants,{_onClick} from '../constants/TodoConstants';
import TodoFooterAction from '../actions/TodoFooterActions';

export default class TodoFooter extends React.Component {

    [_onClick](event) {
        let index = event.target.getAttribute('data-index');
        TodoFooterAction.delList(index);
    }


    render() {
        return (
            <div class="row">
                <ul className="list-group">
                {
                    this.props.lists.map((list,index,lists) => {
                        return (
                            <Li
                                className="list-group-item"
                                key={index}>
                                {list}
                                <Button className='btn btn-default' dataIndex={index} onClick={this[_onClick].bind(this)}>删除</Button>
                            </Li>
                        )
                    })
                }
                </ul>
            </div>
        )
    }
}

