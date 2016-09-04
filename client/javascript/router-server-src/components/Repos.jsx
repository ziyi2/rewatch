import React, {PropTypes} from 'react';
import {Link} from 'react-router';

export default class Repos extends React.Component {

    render() {
        return (
            <div className='row'>
                <h2>Repos</h2>
                <ul>
                    <li><Link to="/repos/facebook/react">React</Link></li>
                    <li><Link to="/repos/reactjs/react-router">React Router</Link></li>
                </ul>

                {this.props.children}
            </div>
        )
    }
}