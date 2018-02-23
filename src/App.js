import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <h1>{this.props.todoName} Todo List</h1>
        <ul>
          <li>{this.props.todoItems[0]}</li>
          <li>{this.props.todoItems[1]}</li>
          <li>{this.props.todoItems[2]}</li>
        </ul>
      </div>
    );
  }
}

export default App;
