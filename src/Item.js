import React, { Component } from 'react';
import './App.css';

class Item extends Component {
  render() {
    return (
      <li>{this.props.body}</li>
    );
  }
}

export default Item;
