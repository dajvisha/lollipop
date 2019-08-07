import React from 'react';
import './Text.css';

function Text(props) {
  return (
    <div className="text">
      {props.children}
    </div>
  );
}

export default Text;
