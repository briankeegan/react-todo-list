import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
// This is for offline capabilities + more see 'TODO.md'
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
