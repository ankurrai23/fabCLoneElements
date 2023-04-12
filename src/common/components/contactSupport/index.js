import React from 'react';
import {StyleSheet, View} from 'react-native';
import FTouchableOpacity from '../../rn/FTouchableOpacity';
import FText from '../../rn/FText';
import {DP} from '../../../utils/Dimen';
import {Color} from '../../../utils/color';
import {Strings} from '../../../utils/strings/index.travelPlus';
import Icon from '../../../assets/icons/Icon';

export default function ContactSupport({
  item,
  onContactSupportPress,
  style,
  isGreyedOut,
}) {
  return (
    <FTouchableOpacity
      style={[styles.container, style]}
      onPress={onContactSupportPress}>
      <View style={{flexDirection: 'row', alignItems: 'center'}}>
        <View style={styles.headingNotch} />
        <FText greyedOut={isGreyedOut} style={styles.textStyle} weight={500}>
          {item?.name || Strings.contactSupport}
        </FText>
      </View>
      <Icon.Phone fill={isGreyedOut ? Color.BLUEY_GREY : Color.DODGER_BLUE} />
    </FTouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: Color.WHITE,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  textStyle: {
    color: Color.DARK,
    fontSize: DP._12,
    lineHeight: DP._14,
  },
  headingNotch: {
    width: DP._4,
    backgroundColor: Color.TWILIGHT_BLUE,
    height: DP._21,
    marginRight: DP._12,
    borderTopRightRadius: DP._4,
    borderBottomRightRadius: DP._4,
  },
});
