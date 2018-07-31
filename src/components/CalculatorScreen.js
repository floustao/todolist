import React from 'react';
import CalculatorScreenRow from './CalculatorScreenRow';
import PropTypes from 'prop-types';


const CalculatorScreen  = (props) => {
  return (
    <div className="screen-rows">
      <CalculatorScreenRow value={props.input} />
      <CalculatorScreenRow value={props.output} />
    </div>
  );
}

CalculatorScreen.propTypes = {
  input: PropTypes.string,
  output: PropTypes.string
};

export default CalculatorScreen;
