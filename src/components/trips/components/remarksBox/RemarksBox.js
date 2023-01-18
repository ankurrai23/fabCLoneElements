import {StyleSheet, View} from 'react-native';
import React from 'react';
import FText, {FONT_TYPE} from '../../../../common/rn/FText';
import {Color} from '../../../../utils/color/index.travelPlus';
import {Strings} from '../../../../utils/strings/index.travelPlus';
import {DP} from '../../../../utils/Dimen';

export default function RemarksBox({title, remarks, roundBottomCorners}) {
  return (
    <View style={styles.container(roundBottomCorners)}>
      <FText style={styles.title} type={FONT_TYPE.MEDIUM}>
        {title}
      </FText>
      <FText style={styles.text}>{remarks}</FText>
    </View>
  );
}

const styles = StyleSheet.create({
  container: (roundBottomCorners) => ({
    paddingHorizontal: DP._16,
    paddingVertical: DP._8,
    backgroundColor: Color.DODGER_BLUE + '12',
    // borderBottomLeftRadius: roundBottomCorners ? DP._12 : 0,
    // borderBottomRightRadius: roundBottomCorners ? DP._12 : 0,
  }),
  title: {
    fontSize: DP._12,
    lineHeight: DP._14,
  },
  text: {
    fontSize: DP._12,
    lineHeight: DP._16,
  },
});
