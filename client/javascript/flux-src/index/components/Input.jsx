'use strict';
import React, {PropTypes} from 'react';

export default class Input extends  React.Component {

    //https://facebook.github.io/react/docs/top-level-api.html
    //https://facebook.github.io/react/docs/reusable-components.html
    static propTypes = {
        inputType: PropTypes.string.isRequired,
        className: PropTypes.string.isRequired,
        id: PropTypes.string,
        placeholder: PropTypes.string,
        //value: PropTypes.string,
        //autoFocus: React.PropTypes.bool,
        //required: React.PropTypes.string,
        name: PropTypes.string,
        autocomplete: PropTypes.oneOf(['on', 'off']),
        onChange: PropTypes.func.isRequired,
        ref: PropTypes.string,
        value: PropTypes.string
    };


    render() {

        const {
            inputType,
            className,
            id,
            placeholder,
            name,
            autocomplete,
            ref,
            value,
            onChange} = this.props;


        return (
            <input
                type={inputType}
                className={className}
                id={id}
                placeholder={placeholder}
                name={name}
                autocomplete={autocomplete}
                ref={ref}
                value={value}
                onChange={onChange}
            />
        );
    }
}


