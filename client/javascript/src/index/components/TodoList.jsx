import React from 'react';
import ReactDOM from 'react-dom';

class TodoList extends React.Component {
    constructor() {
        super();
    }
    render() {
        return <h1>Hello,React!</h1>;
    }
}

var to_do_list = document.getElementById('to-do-list');
ReactDOM.render(<TodoList/>,to_do_list);

