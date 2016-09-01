import React from 'react';

import ListStore from '../stores/ListStore';            //Model
import ButtonActions from '../actions/ButtonActions';   //Controller-Action
import Button from './Button';                          //View-Button



class ButtonController extends React.Component {
    constructor() {
        super();
    }

    //ES7
    state = {
        items: ListStore.getAll()
    };

    //render渲染成真实的DOM后添加监听事件
    componentDidMount() {
        ListStore.addChangeListener(this._onChange.bind(this));
    }

    //重新渲染前移除监听事件
    componentWillUnmount() {
        ListStore.removeChangeListener(this._onChange.bind(this));  //需要注意this指向问题
    }

    //私有函数
    _onChange() {
        this.setState({
            items: ListStore.getAll()
        });
    }

    //View -> Action
    createNewItem() {
        ButtonActions.addNewItem('new item!');
    }

    render() {
        return (
            <div className="row">
                <h1>buttonController</h1>
                <Button items={this.state.items} onClick={this.createNewItem.bind(this)}/>
            </div>
        );
    }
}

export default ButtonController;
