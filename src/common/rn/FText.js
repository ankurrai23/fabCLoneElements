import React from 'react';
import PropTypes from 'prop-types';
import {Text} from 'react-native';

import {Specs} from '../../utils/Utils';
import {Color} from '../../utils/color';

function FText({children, type, style, ...props}) {
  function getFont() {
    return Specs[type];
  }

  return (
    <Text style={[getFont(), {color: Color.DARK}, style]} {...props}>
      {children}
    </Text>
  );
}

FText.propTypes = {
  type: PropTypes.oneOf(['regular', 'light', 'bold', 'medium', 'semiBold']),
};

FText.defaultProps = {
  children: '',
  type: 'regular',
};

export default FText;
