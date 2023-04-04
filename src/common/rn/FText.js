import React from 'react';
import PropTypes from 'prop-types';
import {Text} from 'react-native';

import {Specs, FontWeightSpec} from '../../utils/Utils';
import {Color} from '../../utils/color/index.travelPlus';

export const FONT_TYPE = {
  LIGHT: 'light',
  REGULAR: 'regular',
  MEDIUM: 'medium',
  SEMI_BOLD: 'semiBold',
  BOLD: 'bold',
};

function FText({children, type, weight, style, greyedOut, ...props}) {
  function getFont() {
    return weight ? {...FontWeightSpec[weight]} : {...Specs[type]};
  }

  if (style && Array.isArray(style)) {
    style = Object.assign({}, ...style);
  }

  return (
    <Text
      style={[
        getFont(),
        style,
        {
          color: greyedOut ? Color.BLUEY_GREY : style?.color ?? Color.DARK,
        },
      ]}
      {...props}>
      {children}
    </Text>
  );
}

export default FText;
