import React from 'react';
import './Button.css';

function Button(props) {
  return (
    <a className={`button ${props.selected ? 'selected' : ''}`} onClick={props.onClick}>
      {props.children}
    </a>
  );
}

export default Button;
