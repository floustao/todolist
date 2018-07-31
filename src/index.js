import React from 'react';
import ReactDOM from 'react-dom';
import TodoList from './TodoList';
import Frame from './Frame';
import './index.css';

ReactDOM.render(<TodoList />, document.getElementById('todoApp'));
ReactDOM.render(<Frame />, document.getElementById('calculatorApp'));

