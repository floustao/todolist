import React from 'react';
import PropTypes from 'prop-types';


const Button = (props) => {

  return (
    <input className={props.type === "input" ? "button input-button" : "button action-button"}
           type="button"
           value={props.label}
           onClick={props.handleClick}/>

  );
}

Button.propTypes = {
  label: PropTypes.string,
  onClick: PropTypes.func
};
export default Button;
