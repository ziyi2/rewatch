'use strict';
import React, {PropTypes} from 'react';


export default class Li extends React.Component {

    static propTypes = {
        className: PropTypes.string.isRequired,
        key: PropTypes.number.isRequired
    };


    render() {
        const {className,key} = this.props;

        return (
            <li className={className} key={key}>
                {this.props.children}
            </li>
        );
    }
}
