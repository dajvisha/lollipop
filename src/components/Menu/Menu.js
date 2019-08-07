import React from 'react';
import './Menu.css';
import StyleOptions from './Options/StyleOptions';
import DirectionOptions from './Options/DirectionOptions';
import ColorOptions from './Options/ColorOptions';

class Menu extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="menu">
        <div className="logo">
          <span role="img">🍭</span>
          <span style={{color: this.props.gradientColorOne}}>Lollipod</span>
        </div>
        <div className="menuSection">
          <p>Colors</p>
          <ColorOptions colorOne={this.props.gradientColorOne}
                        colorTwo={this.props.gradientColorTwo}
                        toggleChangeColor={this.props.toggleChangeColor}/>
        </div>
        <div className="menuSection">
          <p>Style</p>
          {StyleOptions(this.props)}
        </div>
        <div className="menuSection">
          <p>Direction</p>
          {DirectionOptions(this.props)}
        </div>
      </div>
    );
  }
}

export default Menu;
