import React from 'react';
import Button from '../widgets/Button';
import constants from '../../helpers';
import './Menu.css';

class Menu extends React.Component {
  constructor(props) {
    super(props);
  }

  changeGradientType = (type) => {
    this.props.toggleChangeGradient({gradientType: type});
  }

  render() {
    return (
      <div className="menu">
        <div className="logo"><span role="img">🍭</span> Lollipod</div>
        <div className="menuSection">
          <p>Style</p>
          <Button label="Linear"
                  selected={this.props.gradientType == constants.GRADIENT_TYPE.LINEAR}
                  onClick={(_) => this.changeGradientType(constants.GRADIENT_TYPE.LINEAR)} />
          <Button label="Radial"
                  selected={this.props.gradientType == constants.GRADIENT_TYPE.RADIAL} 
                  onClick={(_) => this.changeGradientType(constants.GRADIENT_TYPE.RADIAL)} />
        </div>
        <div className="menuSection">
          <p>Direction</p>
        </div>
        <div className="menuSection">
          <p>Colors</p>
        </div>
      </div>
    );
  }
}

export default Menu;
