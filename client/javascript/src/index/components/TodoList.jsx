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
            list:list   //只有这里设置了,表单input输入才会有反应并变化
        })
    }


    render() {

        //let addListProps = {
        //    list: this.state.list,
        //    setInputValue: this.setInputValue
        //
        //};
        //
        //
        //
        //console.log(...addListProps);

        return (
            <div className="row">
                <AddList {...this.state} />
                <ShowDelList {...this.state} />
            </div>
        );
    }
}

var to_do_list = document.getElementById('list-to-do');
ReactDOM.render(<TodoList/>,to_do_list);

