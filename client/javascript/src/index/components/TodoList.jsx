import React from 'react';
import ReactDOM from 'react-dom';

import AddList from './AddList';
import ShowDelList from './ShowDelList';

class TodoList extends React.Component {
    constructor() {
        super();
        //ES6
        //this.state = {
        //    lists : ['1','2']      //需要显示的所有列表,每次变动需要重新渲染
        //}
    }

    //ES7
    state = {
        lists : [],    //需要显示的所有列表,每次变动需要重新渲染
        list: ''       //表单数据,可控表单,每次input输入变化时重新渲染
    };                 //这里需要加分号

    setInputValue(list) {
        this.setState({
            list:list
        });
    }

    setLists(lists) {
        this.setState({
            lists:lists
        });
    }


    render() {
        let addListProps = {
            list: this.state.list,
            lists: this.state.lists,
            setInputValue: this.setInputValue.bind(this),
            addList: this.setLists.bind(this)
        };

        let showDelListProps = {
            lists: this.state.lists,
            delList: this.setLists.bind(this)
        };

        return (
            <div className="row">
                <AddList  {...addListProps} />
                <ShowDelList {...showDelListProps} />
            </div>
        );
    }
}

var to_do_list = document.getElementById('list-to-do');
ReactDOM.render(<TodoList/>,to_do_list);

