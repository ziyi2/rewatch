import React from 'react';

import {Link} from 'react-router';


export default class App extends React.Component {

    render() {
        return (
            <div className="row">
                <ul className="nav nav-tabs" role="nav">
                    <li role="presentation"><Link to="/" activeClassName="active" onlyActiveOnIndex={true}>Index</Link></li>
                    <li role="presentation"><Link to="/home">Home</Link></li>
                    <li role="presentation"><Link to="/about">About</Link></li>
                    <li role="presentation"><Link to="/repos">Repos</Link></li>
                </ul>

                {this.props.children}
            </div>
        )
    }
}

