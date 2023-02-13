import React from 'react';

import FText, {FONT_TYPE} from '../../rn/FText';

import {Color} from '../../../utils/color';

import Styles from './Styles';
import {DP} from '../../../utils/Dimen';
import {TouchableOpacity} from 'react-native-gesture-handler';

export const BUTTON_TYPE = {
  PRIMARY: 'PRIMARY',
  SECONDARY: 'SECONDARY',
  NO_COLOR: 'NO_COLOR',
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
          ]}
          weight={type === BUTTON_TYPE.NO_COLOR && DP._500}>
          {children}
        </FText>
      );
    }
    return children;
  }

  return (
    <TouchableOpacity
      activeOpacity={1}
      // style={[Styles.container(type, selected, disabled), style]}
      containerStyle={[Styles.container(type, selected, disabled), style]}
      onPress={_onPress}
      disabled={disabled}
      {...props}>
      {renderChildren()}
    </TouchableOpacity>
  );
}

export default Button;
