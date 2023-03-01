import {StyleSheet, View} from 'react-native';
import React from 'react';
import FText from '../../../../common/rn/FText';
import {Color} from '../../../../utils/color/index.travelPlus';
import {Strings} from '../../../../utils/strings/index.travelPlus';
import {DP} from '../../../../utils/Dimen';

export default function OOPTag({style, greyedOut}) {
  return (
    <View style={[styles.container(greyedOut), style]}>
      <FText style={styles.text} greyedOut={greyedOut}>
        {Strings.outOfPolicy}
      </FText>
    </View>
  );
}

const styles = StyleSheet.create({
  container: (greyedOut) => ({
    flexWrap: 'wrap',
    borderRadius: DP._22,
    paddingVertical: DP._1,
    paddingHorizontal: DP._8,
    backgroundColor: greyedOut ? Color.LIGHT_RED : Color.PEARL_RED,
  }),
  text: {
    fontSize: DP._10,
    color: Color.PASTEL_RED,
  },
});
