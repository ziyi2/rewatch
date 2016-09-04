import React, {PropTypes} from 'react';
import {Link} from 'react-router';

export default class Repos extends React.Component {
    
    static contextTypes = {
        router: PropTypes.object
    };

    handleSumbit(event) {
        event.preventDefault();
        const userName = event.target.elements[0].value;
        const repo = event.target.elements[1].value;
        const path = `/repos/${userName}/${repo}`;
        //console.log(path);
        this.context.router.push(path);
    }

    render() {
        return (
            <div className='row'>
                <h2>Repos</h2>
                <ul>
                    <li><Link to="/repos/facebook/react">React</Link></li>
                    <li><Link to="/repos/reactjs/react-router">React Router</Link></li>
                </ul>
                
                <form action="" className="form-inline" onSubmit={this.handleSumbit.bind(this)}>
                    <input type="text" className='form-control' placeholder='userName'/> / {' '}
                    <input type="text" className='form-control' placeholder='repo'/>{' '}
                    <button className='btn btn-default' type='submit'>提交</button>  
                </form>  
                
                {this.props.children}
            </div>
        )
    }
}