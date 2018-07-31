import React from 'react';
import ReactDOM from 'react-dom';
import TodoList from './components/TodoList';
import Frame from './components/Frame';
import './styling/index.css';

ReactDOM.render(<TodoList />, document.getElementById('todoApp'));
ReactDOM.render(<Frame />, document.getElementById('calculatorApp'));

