import React from 'react';
import PropTypes from 'prop-types';


const CalculatorScreenRow = (props) => {
  return (
    <input type="text"
           value={props.value}
           readOnly
           className="calculator-screen"/>
  );
}

CalculatorScreenRow.propTypes = {
  value: PropTypes.string
};

export default CalculatorScreenRow;
