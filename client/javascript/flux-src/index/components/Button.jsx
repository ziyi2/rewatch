import React from 'react';

//这里的Button是一个纯组件,不含任何状态,方便复用和测试
//this.props.onClick是由上面的父组件传递

class Button extends React.Component {

    render() {


        return (
          <div class="row">
              <ul className="list-group">
              {
                  this.props.items.map((item,index,items) => {
                    return (
                        <li className="list-group-item" key={index}>{item}</li>
                    )
                  })
              }
              </ul>

              <button className="btn btn-default" onClick={this.props.onClick}>New Item</button>
          </div>
        );
    }
}

export default Button;



