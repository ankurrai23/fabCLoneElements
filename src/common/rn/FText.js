import React from 'react';
import PropTypes from 'prop-types';
import {Text} from 'react-native';

import {Specs, FontWegithSpec} from '../../utils/Utils';
import {Color} from '../../utils/color';

function FText({children, type, weight, style, ...props}) {
  function getFont() {
    return {...Specs[type], ...FontWegithSpec[weight]};
  }

  return (
    <Text style={[getFont(), {color: Color.DARK}, style]} {...props}>
      {children}
    </Text>
  );
}

FText.propTypes = {
  type: PropTypes.oneOf(['regular', 'light', 'bold', 'medium', 'semiBold']),
  weight: PropTypes.oneOf(['normal', 'medium', 'semiBold', 'bold']),
};

FText.defaultProps = {
  children: '',
  type: 'regular',
  weight: 'normal',
};

export default FText;
