import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
// This is for offline capabilities + more see 'TODO.md'
import registerServiceWorker from './registerServiceWorker';

const myTodo = {
  title: 'React',
  items: ['Eat ice cream', 'Do HW', 'Something else']
}

ReactDOM.render(
  <App todoTitle={myTodo.title} todoItems={myTodo.items}/>,
  document.getElementById('root'));
registerServiceWorker();
