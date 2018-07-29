import React, { Component } from 'react';

class TodoItems extends Component {

  render() {
    let listItems = this.props.entries.map((entry) =>  {
      return <li key={entry.key}>{entry.text}</li>;
    })
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
