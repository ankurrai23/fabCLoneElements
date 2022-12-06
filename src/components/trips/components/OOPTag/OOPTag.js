import {StyleSheet, View} from 'react-native';
import React from 'react';
import FText from '../../../../common/rn/FText';
import {Color} from '../../../../utils/color/index.travelPlus';
import {Strings} from '../../../../utils/strings/index.travelPlus';
import {DP} from '../../../../utils/Dimen';

export default function OOPTag(style) {
  return (
    <View style={styles.container(style)}>
      <FText style={styles.text}>{Strings.outOfPolicy}</FText>
    </View>
  );
}

const styles = StyleSheet.create({
  container: (style) => ({
    flexWrap: 'wrap',
    ...(style ?? {}),
  }),
  text: {
    fontSize: DP._10,
    paddingVertical: DP._1,
    paddingHorizontal: DP._4,
    backgroundColor: Color.PASTEL_RED_10,
    borderRadius: DP._2,
    overflow: 'hidden',
    color: Color.PASTEL_RED,
  },
});
