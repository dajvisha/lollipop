import React from 'react';
import Button from '../widgets/Button';
import constants from '../../helpers';
import './Menu.css';

class Menu extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="menu">
        <div className="logo"><span role="img">🍭</span> Lollipod</div>
        <div className="menuSection">
          <p>Style</p>
          {styleOptions(this.props)}
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

function styleOptions(props) {
  let { gradientType, toggleChangeGradient } = props; 
  return (
    <div>
      <Button label="Linear"
              selected={gradientType === constants.GRADIENT_TYPE.LINEAR}
              onClick={(_) => toggleChangeGradient({gradientType: constants.GRADIENT_TYPE.LINEAR})} />
      <Button label="Radial"
              selected={gradientType === constants.GRADIENT_TYPE.RADIAL} 
              onClick={(_) => toggleChangeGradient({gradientType: constants.GRADIENT_TYPE.RADIAL})} />
    </div>
  );
}

export default Menu;
