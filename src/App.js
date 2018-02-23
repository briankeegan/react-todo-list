import React, { Component } from 'react';
import './App.css';
import Item from './Item'

class App extends Component {
  render() {
    return (
      <div>
        <h1>{this.props.todoName} Todo List</h1>
        <ul>
          <Item body={this.props.todoItems[0]} />
          <Item body={this.props.todoItems[1]} />
          <Item body={this.props.todoItems[2]} />
        </ul>
      </div>
    );
  }
}

export default App;
