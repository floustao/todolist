import React from 'react';
import ScreenRow from './ScreenRow';
import PropTypes from 'prop-types';


const Screen  = (props) => {
  return (
    <div className="screen-rows">
      <ScreenRow value={props.input}/>
      <ScreenRow value={props.output}/>
    </div>
  );
}

Screen.propTypes = {
  input: PropTypes.string,
  output: PropTypes.string
};

export default Screen;
