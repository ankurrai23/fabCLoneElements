import {StyleSheet, View} from 'react-native';
import React from 'react';
import FText, {FONT_TYPE} from '../../../../common/rn/FText';
import {Color} from '../../../../utils/color/index.travelPlus';
import {Strings} from '../../../../utils/strings/index.travelPlus';
import {DP} from '../../../../utils/Dimen';

export default function remarksBox(remarks) {
  return (
    <View style={styles.container}>
      <FText style={styles.title} type={FONT_TYPE.MEDIUM}>
        {Strings.remarks}
      </FText>
      <FText style={styles.text}>{remarks}</FText>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: DP._16,
    paddingVertical: DP._8,
    backgroundColor: Color.DODGER_BLUE + '12',
    borderBottomLeftRadius: DP._12,
    borderBottomRightRadius: DP._12,
  },
  title: {
    fontSize: DP._12,
    lineHeight: DP._14,
  },
  text: {
    fontSize: DP._12,
    lineHeight: DP._16,
  },
});
