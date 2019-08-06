import React from 'react';
import './Button.css';

function Button(props) {
  return (
    <button className={`button ${props.selected ? 'selected' : ''}`} onClick={props.onClick}>{props.label}</button>
  );
}

export default Button;
