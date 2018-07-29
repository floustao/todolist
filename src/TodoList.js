import React, { Component } from 'react';
import TodoItems from './TodoItems';

class TodoList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      items:[]
    }
    this.addItem = this.addItem.bind(this);
  }

  addItem(e) {
    e.preventDefault();
    if (this.myRef.value !== "") {
      let newTask = {
        text: this.myRef.value,
        key: Date.now()
      };
      this.setState((prevState) => {
        return {items: prevState.items.concat(newTask)};
      });
    }
    this.myRef.value = "";
    console.log(this.state.items);
  }

  render() {
    return (

      <div className="main">
        <h1>Todo App</h1>
        <div className="main-form">
          <form onSubmit={this.addItem}>
            <input type="text" placeholder="add a task" ref={ (a) => this.myRef = a }/>
            <button type="submit">+</button>
          </form>
        </div>
      <TodoItems entries={this.state.items} />
      </div>
    )
  }
}
export default TodoList;
