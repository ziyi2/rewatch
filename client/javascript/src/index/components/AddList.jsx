import React from 'react';

class AddList extends React.Component {
    constructor() {
        super();
    }

    inputChange(event) {
        let list = event.target.value.trim().substr(0,10);  //input的value去掉空格,限制大小在10
        console.log(list);
        this.props.setInputValue(list);
    }

    render() {
        return (
            <div className="row">
                <h4>Compont - AddList</h4>
                <form action="" className="form-inline">
                    <div className="form-group">
                        <input type="text" className="form-control" placeholder="请添加项" value={this.props.list} onChange={this.inputChange} autoComplete="off" />
                        <button className="btn btn-default" key="button" >添加</button>
                    </div>
                </form>
            </div>
        );
    }
}



export default AddList;