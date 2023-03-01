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

FText.propTypes = {
  type: PropTypes.oneOf([
    FONT_TYPE.LIGHT,
    FONT_TYPE.REGULAR,
    FONT_TYPE.MEDIUM,
    FONT_TYPE.SEMI_BOLD,
    FONT_TYPE.BOLD,
  ]),
  weight: PropTypes.oneOf([300, 400, 500, 600, 700]),
};

FText.defaultProps = {
  children: '',
  type: FONT_TYPE.REGULAR,
};

export default FText;
