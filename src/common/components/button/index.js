import React from 'react';

import FText from '../../rn/FText';
import FTouchableOpacity from '../../rn/FTouchableOpacity';

import {Color} from '../../../utils/color';

import Styles from './Styles';

function Button({
  children,
  type = 'PRIMARY',
  onPress,
  textFont = 'regular',
  textStyle,
  style,
  selected,
  disabled,
  ...props
}) {
  function _onPress(e) {
    onPress && onPress(e);
  }

  function renderChildren() {
    if (typeof children === 'string') {
      return (
        <FText
          type={textFont}
          style={[
            Styles.textStyle(type, disabled),
            textStyle,
            selected && {color: Color.WHITE},
          ]}>
          {children}
        </FText>
      );
    }
    return children;
  }

  return (
    <FTouchableOpacity
      style={[Styles.container(type, selected, disabled), style]}
      onPress={_onPress}
      disabled={disabled}
      {...props}>
      {renderChildren()}
    </FTouchableOpacity>
  );
}

export default Button;
