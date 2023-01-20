import {StyleSheet, View} from 'react-native';
import React from 'react';
import FText from '../../../../common/rn/FText';
import {Color} from '../../../../utils/color/index.travelPlus';
import {Strings} from '../../../../utils/strings/index.travelPlus';
import {DP} from '../../../../utils/Dimen';

export default function OOPTag(style) {
  return (
    <View style={[styles.container, style]}>
      <FText style={styles.text}>{Strings.outOfPolicy}</FText>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexWrap: 'wrap',
    paddingVertical: DP._1,
    paddingHorizontal: DP._8,
    borderRadius: DP._22,
    backgroundColor: Color.PEARL_RED,
  },
  text: {
    color: Color.PASTEL_RED,
    fontSize: DP._10,
    overflow: 'hidden',
  },
});
