'use strict';
import React, {PropTypes} from 'react';


export default class Button extends React.Component {

    static propTypes = {
        className: PropTypes.string.isRequired,
        onClick: PropTypes.func.isRequired
    };


    render() {
        const {className,onClick} = this.props;

        return (
            <button className={className} onClick={onClick}>
                {this.props.children}
            </button>
        );
    }
}
