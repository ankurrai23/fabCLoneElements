import React from 'react';

import FText, {FONT_TYPE} from '../../rn/FText';
import FTouchableOpacity from '../../rn/FTouchableOpacity';

import {Color} from '../../../utils/color';

import Styles from './Styles';

export const BUTTON_TYPE = {
  PRIMARY: 'PRIMARY',
  SECONDARY: 'SECONDARY',
};

function Button({
  children,
  type = BUTTON_TYPE.PRIMARY,
  onPress,
  textFont = FONT_TYPE.REGULAR,
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
            selected && {color: Color.DODGER_BLUE},
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
