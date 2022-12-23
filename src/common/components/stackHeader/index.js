import React from 'react';
import {View} from 'react-native';

import FText, {FONT_TYPE} from '../../rn/FText';
import FTouchableOpacity from '../../rn/FTouchableOpacity';

import {DP} from '../../../utils/Dimen';
import {Color} from '../../../utils/color';

import Styles from './Styles';
import Icon from '../../../assets/icons/Icon';

function StackHeader({
  onBackClick,
  shadowVisible,
  containerStyle,
  textStyle,
  title,
  subTitle,
  rightView,
  iconSize,
  iconColor,
}) {
  return (
    <View style={[Styles.container(shadowVisible), containerStyle]}>
      <FTouchableOpacity
        onPress={onBackClick}
        hitSlop={{top: 20, bottom: 20, left: 50, right: 20}}>
        <Icon.ChevronLeft
          width={iconSize || DP._24}
          height={iconSize || DP._24}
          stroke={iconColor || Color.WHITE}
        />
      </FTouchableOpacity>
      <View style={Styles.titleContainer}>
        <FText type={FONT_TYPE.MEDIUM} style={[Styles.title, textStyle]}>
          {title}
        </FText>
        <FText style={[Styles.subTitle]}>{subTitle}</FText>
      </View>
      {rightView}
    </View>
  );
}

StackHeader.defaultProps = {
  shadowVisible: false,
};

export default StackHeader;
