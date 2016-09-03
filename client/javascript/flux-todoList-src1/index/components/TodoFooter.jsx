'use strict';
import React from 'react';
import Li from './Li';


export default class TodoFooter extends React.Component {
    render() {
        return(
            <div className="row">
                <ul className="list-group">
                {
                    this.props.lists.map((list,index,lists) => {
                        return(
                            <Li className="list-group-item" key={index}>{list}</Li>
                        );
                    })
                }
                </ul>
            </div>
        );
    }
}

