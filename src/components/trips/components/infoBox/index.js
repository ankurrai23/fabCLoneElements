import {StyleSheet} from 'react-native';
import React from 'react';
import FText from '../../../../common/rn/FText';
import {DP} from '../../../../utils/Dimen';
import {Color} from '../../../../utils/color';
import FTouchableOpacity from '../../../../common/rn/FTouchableOpacity';
import Icon from '../../../../assets/icons/Icon';

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
      {isAlert ? (
        <Icon.Info
          width={DP._16}
          height={DP._16}
          style={styles.icon}
          stroke={Color.DODGER_BLUE}
        />
      ) : (
        <Icon.CheckCircle
          width={DP._16}
          height={DP._16}
          style={styles.icon}
          stroke={Color.DARK_SEA_FOAM}
        />
      )}
      <FText style={styles.text(isAlert)}>{text}</FText>
      {showChevron && (
        <Icon.ChevronRight
          stroke={Color.DODGER_BLUE}
          style={styles.alignCenter}
        />
      )}
    </FTouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: (isAlert) => ({
    paddingVertical: DP._16,
    backgroundColor: isAlert
      ? Color.DODGER_BLUE + '12'
      : Color.DARK_SEA_FOAM_10,
    flexDirection: 'row',
    paddingLeft: DP._16,
    paddingRight: DP._8,
    // borderBottomLeftRadius: DP._12,
    // borderBottomRightRadius: DP._12,
    // borderWidth: isAlert ? 0 : DP._0_5,
    // borderColor: isAlert ? null : Color.DARK_SEA_FOAM,
  }),
  text: (isAlert) => ({
    color: isAlert ? Color.TWILIGHT_BLUE : Color.DARK,
    lineHeight: DP._16,
    marginRight: DP._16,
    fontSize: DP._12,
    flex: 1,
  }),
  alignCenter: {alignSelf: 'center'},
  icon: {
    marginRight: DP._8,
    marginTop: DP._2,
  },
});
