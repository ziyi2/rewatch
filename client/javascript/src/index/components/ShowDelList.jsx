import React from 'react';

class ShowDelList extends React.Component {
    constructor() {
        super();
    }

    render() {
        return (
            <div className="row">
                <h4>ShowDelList</h4>
                <ul className="list-group">
                    {
                        this.props.lists.map(function(list,index,lists) {
                            return (
                               <li className="list-group-item" key={i}> /*key用来避免diff计算,防止不必要的重新渲染*/
                                   {list}
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