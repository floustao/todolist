import React from 'react';
import ReactDOM from 'react-dom';
import TodoList from './components/TodoList';
import CalculatorFrame from './components/CalculatorFrame';
import './styles/index.css';

ReactDOM.render(<TodoList />, document.getElementById('todoApp'));
ReactDOM.render(<CalculatorFrame />, document.getElementById('calculatorApp'));

