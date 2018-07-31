import React, { Component } from 'react';
import TodoItems from './TodoItems';

class TodoList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      items:[]
    }
    this.addItem = this.addItem.bind(this);
    this.deleteItem = this.deleteItem.bind(this);
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

  deleteItem(key) {
    let filteredItems = this.state.items.filter(item => item.key !== key);
    this.setState({items: filteredItems});
  }

  render() {
    return (

      <div className="todo-container">
        <div className="todo-form">
          <h1>Todo App</h1>
          <form onSubmit={this.addItem}>
            <input type="text" placeholder="Add a task..." ref={ (a) => this.myRef = a }/>
            <button type="submit" className="button input-button">+</button>
          </form>
        </div>

        <div className="todo-items">
          <TodoItems entries={this.state.items}
                     deletions={this.deleteItem}
                     />
        </div>
      </div>
    )
  }
}
export default TodoList;
