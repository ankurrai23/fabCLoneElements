import {StyleSheet} from 'react-native';
import React from 'react';
import FText from '../../../../common/rn/FText';
import Feather from 'react-native-vector-icons/Feather';
import {DP} from '../../../../utils/Dimen';
import {Color} from '../../../../utils/color';
import FTouchableOpacity from '../../../../common/rn/FTouchableOpacity';

export default function InfoBox({
  isAlert,
  onPress,
  text,
  disablePressEvent,
  showChevron,
}) {
  return (
    <FTouchableOpacity
      style={styles.container(isAlert)}
      onPress={onPress}
      disabled={disablePressEvent}>
      <Feather
        name={isAlert ? 'info' : 'check-circle'}
        size={DP._16}
        color={isAlert ? Color.TWILIGHT_BLUE : Color.DARK_SEA_FOAM}
        style={styles.icon}
      />
      <FText style={styles.text(isAlert)}>{text}</FText>
      {showChevron && (
        <Feather
          name="chevron-right"
          size={DP._24}
          color={Color.DODGER_BLUE}
          style={styles.alignCenter}
        />
      )}
    </FTouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: (isAlert) => ({
    paddingVertical: DP._16,
    backgroundColor: isAlert ? Color.DODGER_BLUE + '12' : 'white',
    flexDirection: 'row',
    paddingLeft: DP._16,
    paddingRight: DP._8,
    borderBottomLeftRadius: DP._12,
    borderBottomRightRadius: DP._12,
    borderWidth: isAlert ? 0 : DP._0_5,
    borderColor: isAlert ? null : Color.DARK_SEA_FOAM,
  }),
  text: (isAlert) => ({
    color: isAlert ? Color.TWILIGHT_BLUE : Color.DARK,
    lineHeight: DP._21,
    marginRight: DP._16,
    flex: 1,
  }),
  alignCenter: {alignSelf: 'center'},
  icon: {
    marginRight: DP._8,
    paddingTop: DP._2,
  },
});
