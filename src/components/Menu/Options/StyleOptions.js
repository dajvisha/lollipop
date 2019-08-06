import React from 'react';
import Button from '../../widgets/Button/Button';
import constants from '../../../helpers';

function StyleOptions(props) {
  let { gradientType, toggleChangeGradient } = props;

  return (
    <div>
      <Button selected={gradientType === constants.GRADIENT_TYPE.LINEAR}
              onClick={(_) => toggleChangeGradient({gradientType: constants.GRADIENT_TYPE.LINEAR})}>
              Linear
      </Button>
      <Button selected={gradientType === constants.GRADIENT_TYPE.RADIAL}
              onClick={(_) => toggleChangeGradient({gradientType: constants.GRADIENT_TYPE.RADIAL})}>
              Radial
      </Button>
    </div>
  );
}

export default StyleOptions;
