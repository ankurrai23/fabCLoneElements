import React from 'react';
import {View} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';

import FText, {FONT_TYPE} from '../../rn/FText';
import FTouchableOpacity from '../../rn/FTouchableOpacity';

import {DP} from '../../../utils/Dimen';
import {Color} from '../../../utils/color';

import Styles from './Styles';

function StackHeader({
  onBackClick,
  shadowVisible,
  containerStyle,
  textStyle,
  title,
  rightView,
  iconSize,
  iconColor,
}) {
  return (
    <View style={[Styles.container(shadowVisible), containerStyle]}>
      <FTouchableOpacity
        onPress={onBackClick}
        hitSlop={{top: 20, bottom: 20, left: 50, right: 20}}>
        <Feather
          name="chevron-left"
          size={iconSize || DP._24}
          color={iconColor || Color.WHITE}
        />
      </FTouchableOpacity>
      <FText type={FONT_TYPE.MEDIUM} style={[Styles.title, textStyle]}>
        {title}
      </FText>
      {rightView}
    </View>
  );
}

StackHeader.defaultProps = {
  shadowVisible: false,
};

export default StackHeader;
