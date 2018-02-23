import React, { Component } from 'react';
import './App.css';

class Item extends Component {
  constructor (props) {
    super()
    this.state = {
      active: false
    }
  }

  toggleClass(e) {
    this.setState({ active: !this.state.active})
  }
  render() {
    return (
      <li onClick={e => this.toggleClass(e)} className={this.state.active ? 'checked' : null}>{this.props.body}</li>
    );
  }
}

export default Item;
