import React, { Component } from 'react';
import './App.css';
import Item from './Item'

class App extends Component {
  render() {
    const todoItemsArray = this.props.todoItems.map((todoItem, i) => (
      <Item body={todoItem} key={i} />
    ))
    return (
      <div>
        <h1>{this.props.todoName} Todo List</h1>
        <ul>
          {todoItemsArray}
        </ul>
      </div>
    );
  }
}

export default App;
