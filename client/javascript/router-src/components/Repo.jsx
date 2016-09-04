import React from 'react';

export default class Repo extends React.Component {

    render() {
        return (
            <h2>{this.props.params.repoName}</h2>
        )
    }
}