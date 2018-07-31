import React, { Component } from 'react';
import Screen from './Screen';
import Button from './Button';

class Frame extends Component {
  constructor(props) {
    super(props);

    this.state = {
      input: '',
      output: ''
    }

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(event) {
    const value = event.currentTarget.value;
    if (value === '=') {
      let result = eval(this.state.input).toString();
      this.setState({output: result});
    } else {
      this.setState((prevState) => {
        return {input: prevState.input.concat(value), output: ""}
      });
    }
  }

  render() {
    return (
      <div className="frame">
        <h1>Calculator</h1>
        <form>
          <div className="screen-container">
            <Screen input={this.state.input} output={this.state.output} />
          </div>
          <div className="buttons">
            <div className="row-1">
              <Button label={'7'} handleClick={this.handleClick} type="input" />
              <Button label={'8'} handleClick={this.handleClick} type="input" />
              <Button label={'9'} handleClick={this.handleClick} type="input" />
              <Button label={'/'} handleClick={this.handleClick} type="action" />
            </div>
            <div className="row-2">
              <Button label={'4'} handleClick={this.handleClick} type="input" />
              <Button label={'5'} handleClick={this.handleClick} type="input" />
              <Button label={'6'} handleClick={this.handleClick} type="input" />
              <Button label={'-'} handleClick={this.handleClick} type="action" />
            </div>
            <div className="row-3">
              <Button label={'1'} handleClick={this.handleClick} type="input" />
              <Button label={'2'} handleClick={this.handleClick} type="input" />
              <Button label={'3'} handleClick={this.handleClick} type="input" />
              <Button label={'+'} handleClick={this.handleClick} type="action" />
            </div>
            <div className="row-4">
              <Button label={'0'} handleClick={this.handleClick} type="input" />
              <Button label={'.'} handleClick={this.handleClick} type="action" />
              <Button label={'='} handleClick={this.handleClick} type="action" />
              <Button label={'*'} handleClick={this.handleClick} type="action" />
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default Frame;
