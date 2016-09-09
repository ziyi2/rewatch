import { Component } from 'react';
import TodoHeader from './TodoHeader';
import TodoFooter from './TodoFooter';

export default class App extends Component {

    render() {
        return (
           <div className="row">
               <h1>TodoList</h1>
               <TodoHeader />
               <br/>
               <TodoFooter />
           </div>
        )
    }
}


