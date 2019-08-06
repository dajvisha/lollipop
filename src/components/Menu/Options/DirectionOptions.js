import React from 'react';
import Button from '../../widgets/Button/Button';
import constants from '../../../helpers';

function DirectionOptions(props) {
  let options = [
    'TOP_LEFT', 'TOP', 'TOP_RIGHT',
    'LEFT', 'CENTER', 'RIGHT',
    'BOTTOM_LEFT', 'BOTTOM', 'BOTTOM_RIGHT'
  ];

  let { gradientType, gradientDirection, toggleChangeGradient } = props;
  let directions = gradientType === constants.GRADIENT_TYPE.LINEAR ? constants.GRADIENT_DIRECTION.LINEAR : constants.GRADIENT_DIRECTION.RADIAL;

  return (
    <div className="grid">
      {options.map((value, index) => (
        <Button key={`direction-${index+1}`}
                selected={gradientDirection === directions[value]}
                onClick={(_) => toggleChangeGradient({gradientDirection: directions[value]})}>
          <img className="directionImg" src={process.env.PUBLIC_URL + `/img/${index+1}.png`}/>
        </Button>
      ))}
    </div>
  );
}

export default DirectionOptions;
