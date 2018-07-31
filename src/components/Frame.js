import React, { Component } from 'react';

class Frame extends Component {
  render() {
    return (
      <div className="calculator">
        <h1>Calculator</h1>
        <form>
          <div className="screen-container">
            <input type="text" placeholder="input"/>
            <input type="text" placeholder="output" readOnly/>
          </div>
          <div className="buttons">
            <div className="row-1">
              <button>7</button>
              <button>8</button>
              <button>9</button>
              <button>/</button>
            </div>
            <div className="row-2">
              <button>7</button>
              <button>8</button>
              <button>9</button>
              <button>-</button>
            </div>
            <div className="row-3">
              <button>1</button>
              <button>2</button>
              <button>3</button>
              <button>+</button>
            </div>
            <div className="row-4">
              <button>0</button>
              <button>.</button>
              <button>=</button>
              <button>*</button>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default Frame;
