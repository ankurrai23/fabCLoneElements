import React from 'react';
import PropTypes from 'prop-types';
import {Text} from 'react-native';

import {Specs, FontWeightSpec} from '../../utils/Utils';
import {Color} from '../../utils/color';

function FText({children, type, weight, style, ...props}) {
  function getFont() {
    return weight ? {...FontWeightSpec[weight]} : {...Specs[type]};
  }

  return (
    <Text style={[getFont(), {color: Color.DARK}, style]} {...props}>
      {children}
    </Text>
  );
}

FText.propTypes = {
  type: PropTypes.oneOf(['regular', 'light', 'bold', 'medium', 'semiBold']),
  weight: PropTypes.oneOf([300, 400, 500, 600, 700]),
};

FText.defaultProps = {
  children: '',
  type: 'regular',
  weight: 'normal',
};

export default FText;
