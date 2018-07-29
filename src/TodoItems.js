import React, { Component } from 'react';

class TodoItems extends Component {

  delete(key) {
    this.props.deletions(key);
  }

  create(task) {
    return <li key={task.key}
               onClick={() => this.delete(task.key)}>
               {task.text}</li>;
  }

  render() {
    let listItems = this.props.entries.map((entry) =>  this.create(entry));

    return (
      <div>
        <ul className="list">
          {listItems}
        </ul>
      </div>
    )
  }
}

export default TodoItems;
