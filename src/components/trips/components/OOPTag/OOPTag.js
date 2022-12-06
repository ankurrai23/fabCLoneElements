import {StyleSheet, View} from 'react-native';
import React from 'react';
import FText from '../../../../common/rn/FText';
import {DP} from '../../../../utils/Dimen';
import {Color} from '../../../../utils/color';

export default function OOPTag() {
  return (
    <View style={styles.container}>
      <FText style={styles.text}>{'Out of policy'}</FText>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexWrap: 'wrap',
  },
  text: {
    fontSize: DP._10,
    paddingVertical: DP._1,
    paddingHorizontal: DP._4,
    backgroundColor: Color.PASTEL_RED_10,
    borderRadius: DP._2,
    color: Color.PASTEL_RED,
  },
});
