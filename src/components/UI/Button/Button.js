import React from 'react';

import './Button.css';

const Button = props => {
  console.log(props.Valid);
  return (
    <button type={props.type} className={`button ${props.Valid ? 'valid' : 'Invalid'}`} onClick={props.onClick}>
      {props.children}
    </button>
  );
};

export default Button;
