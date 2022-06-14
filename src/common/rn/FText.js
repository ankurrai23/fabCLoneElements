import React from 'react';
import PropTypes from 'prop-types';
import {Text} from 'react-native';

import {Specs} from '../../utils/Utils';
import {Color} from '../../utils/color';

function FText({children, type, weight, style, ...props}) {
  function getFont() {
    if(weight !== null && weight !== undefined){
      return {...Specs[type], fontWeight: weight};
    }
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
  weight: PropTypes.oneOf(['400', '500', '600', '700']),
};

FText.defaultProps = {
  children: '',
  type: 'regular',
  weight: null,
};

export default FText;
