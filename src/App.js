import React, { Component } from 'react';
import './App.css';
import Item from './Item'

class App extends Component {
  constructor (props) {
    super()
    this.state = {
      todoItems: props.todoItems
    }
  }


  render() {
    const todoItemsArray = this.state.todoItems.map((todoItem, i) => (
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
