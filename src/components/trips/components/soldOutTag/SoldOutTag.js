import {StyleSheet, View} from 'react-native';
import React from 'react';
import FText from '../../../../common/rn/FText';
import {Color} from '../../../../utils/color/index.travelPlus';
import {Strings} from '../../../../utils/strings/index.travelPlus';
import {DP} from '../../../../utils/Dimen';

export default function SoldOutTag(style) {
  return (
    <View style={[styles.container, style]}>
      <FText style={styles.text}>{Strings.soldOut}</FText>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexWrap: 'wrap',
  },
  text: {
    fontSize: DP._12,
    paddingVertical: DP._1,
    paddingHorizontal: DP._10,
    backgroundColor: Color.PASTEL_RED_10,
    borderRadius: DP._9,
    overflow: 'hidden',
    color: Color.PASTEL_RED,
  },
});
