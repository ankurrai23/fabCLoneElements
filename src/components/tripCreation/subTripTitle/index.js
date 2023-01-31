import {View, StyleSheet} from 'react-native';
import React from 'react';
import FText, {FONT_TYPE} from '../../../common/rn/FText';
import FTouchableOpacity from '../../../common/rn/FTouchableOpacity';
import Icon from '../../../assets/icons/Icon';
import {DP} from '../../../utils/Dimen';
import {Color} from '../../../utils/color/index.travelPlus';
import {Strings} from '../../../utils/strings/index.travelPlus';

export default function SubTripTitle({title, dataLength, onPress, style}) {
  return (
    <View style={[Styles.titleContainer, style]}>
      <FText type={FONT_TYPE.MEDIUM} style={Styles.title}>
        {title}
      </FText>
      <FTouchableOpacity
        style={Styles.flexRow}
        hitSlop={Styles.hitSlop}
        onPress={onPress}>
        <Icon.Plus width={DP._16} height={DP._16} stroke={Color.DODGER_BLUE} />
        <FText type={FONT_TYPE.MEDIUM} style={Styles.addDetails}>
          {Strings.add}
        </FText>
      </FTouchableOpacity>
    </View>
  );
}

const Styles = StyleSheet.create({
  addDetails: {
    fontSize: DP._12,
    color: Color.DODGER_BLUE,
    marginLeft: DP._4,
    lineHeight: DP._16,
  },
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  title: {
    fontSize: DP._14,
    color: Color.DARK,
    lineHeight: DP._20,
  },
  flexRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  hitSlop: {
    top: DP._15,
    bottom: DP._15,
    left: DP._10,
    right: 0,
  },
});
