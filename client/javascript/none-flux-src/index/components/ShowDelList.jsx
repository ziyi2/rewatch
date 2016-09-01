import React from 'react';

class ShowDelList extends React.Component {
    constructor() {
        super();
    }

    delList(event) {
        let index = event.target.getAttribute('data-index');
        this.props.lists.splice(index,1); {/*splice方法改变原数组*/}
        this.props.delList(this.props.lists);
    }

    render() {

        let _this = this;  //打包时时刻要注意this的指向问题

        return (
            <div className="row">
                <h4>Compont - ShowDelList</h4>
                <ul className="list-group">
                    {
                        _this.props.lists.map(function(list,index,lists) {
                            return (
                               <li className="list-group-item" key={index}>
                                   {list}
                                   <button className="btn btn-default" data-index={index} key={'button' + index} onClick={_this.delList.bind(_this)}>删除</button>
                               </li>
                            )
                        })
                    }
                </ul>
            </div>
        );
    }
}


export default ShowDelList;