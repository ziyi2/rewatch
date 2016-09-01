import React from 'react';

class AddList extends React.Component {
    constructor() {
        super();
    }

    inputChange(event) {
        let list = event.target.value.trim().substr(0,10);  //input的value去掉空格,限制大小在10
        this.props.setInputValue(list);
    }

    addList(event) {
        let list = this.refs.addInput.value;
        if(list) {
            this.props.lists.push(list);
            this.props.addList(this.props.lists);
        }
    }


    render() {
        return (
            <div className="row">
                <h4>Compont - AddList</h4>
                <form action="" className="form-inline">
                    <div className="form-group">
                        <input type="text" className="form-control" ref="addInput" placeholder="请添加项" value={this.props.list} onChange={this.inputChange.bind(this)} autoComplete="off" />
                        <button type="button" className="btn btn-default" key="button" onClick={this.addList.bind(this)}>添加</button>
                    </div>
                </form>
            </div>
        );
    }
}



export default AddList;