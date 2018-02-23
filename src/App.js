import React, { Component } from 'react';
import './App.css';
import Item from './Item'

class App extends Component {
  constructor (props) {
    super()
    this.state = {
      todoItems: props.todoItems,
      newItem: ''
    }
  }

  addItem (e) {
    e.preventDefault()
    const todo = this.state.todoItems
    todo.push(this.state.newItem)
    this.setState({
      todoItems: todo,
      newItem: ''
    })
  }

  newItemChange (e) {
    this.setState({
      newItem: e.target.value
    })
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
          <input type="text" placeholder="Add todo item" onChange={e => this.newItemChange(e)} value={this.state.newItem} />
        </form>
      </div>
    );
  }
}

export default App;
