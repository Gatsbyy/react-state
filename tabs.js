import React, { Component } from 'react';
import { render } from 'react-dom';

import './tabs.css';

class Tabs extends Component {
  constructor(props) {
    super(props);
    this.state = {
      index: 0,
      tabArray: ['tab1', 'tab2', 'tab3']
    };

    this.selectClick = this.selectClick.bind(this);
  }

  selectClick(e) {
    this.setState({
      index : e.target.value
    });
  }

  render() {
    return (
      <div>
        <select name="select" id="select" value={this.state.index} onChange={this.selectClick}>
          {this.state.tabArray.map((value, index)=>{
            return (
              <option key={index} value={index}>{value}</option>
            )
          })}
        </select>
        <ul>
          {this.state.tabArray.map((value, index)=>{
            if(index == this.state.index) {
              return (
                <li className="cur" key={index}>{value}</li>
              )
            } else {
              return (
                <li key={index}>{value}</li>
              )
            }
          })}
        </ul>
      </div>
    )
  }
}

render(<Tabs />, document.getElementById('app'));