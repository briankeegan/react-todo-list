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

  addItem (e) {
    e.preventDefault()
    const input = e.target.firstChild
    const todo = this.state.todoItems
    todo.push(input.value)
    this.setState({
      todoItems: todo
    })
    input.value = ''
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
        <form onSubmit={e => this.addItem(e)}>
          <input type="text" placeholder="Add todo item" />
        </form>
      </div>
    );
  }
}

export default App;
