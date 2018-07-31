import React from 'react';
import PropTypes from 'prop-types';


const ScreenRow = (props) => {
  return (
    <input type="text"
           value={props.value}
           readOnly/>
  );
}

ScreenRow.propTypes = {
  value: PropTypes.string
};

export default ScreenRow;
