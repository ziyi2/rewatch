import React from 'react';
import ReactDOM from 'react-dom';

class TodoList extends React.Component {
    constructor() {
        super();
    }
    render() {
        return <h1>Hello4321432423,React!</h1>;
    }
}

var to_do_list = document.getElementById('list-to-do');
ReactDOM.render(<TodoList/>,to_do_list);

