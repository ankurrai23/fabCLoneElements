import React from 'react';
import {View} from 'react-native';
import FText from '../../rn/FText';
import Styles from './Styles';
export default ({
  dataIcon,
  leftData,
  rightData,
  leftDefaultData,
  rightDefaultData,
  style,
  rightDataStyle,
  leftDataStyle,
}) => {
  return (
    <View style={[Styles.flexDirectionRow, style]}>
      <View style={[Styles.flexRow, Styles.width_48]}>
        {dataIcon}
        <FText
          style={[Styles.detailLableStyle, leftDataStyle]}
          numberOfLines={1}>
          {leftData ?? leftDefaultData}
        </FText>
      </View>
      <FText
        style={[
          Styles.fontSize_12,
          Styles.width_48,
          Styles.textAlign_right,
          rightDataStyle,
        ]}
        numberOfLines={1}>
        {rightData ?? rightDefaultData}
      </FText>
    </View>
  );
};
