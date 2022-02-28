import {StyleSheet} from 'react-native';
import React from 'react';
import FText from '../../../../common/rn/FText';
import Feather from 'react-native-vector-icons/Feather';
import {DP} from '../../../../utils/Dimen';
import {Color} from '../../../../utils/color';
import FTouchableOpacity from '../../../../common/rn/FTouchableOpacity';

export default function InfoBox({preferenceSelected, onPress}) {
  return (
    <FTouchableOpacity
      style={styles.container(preferenceSelected)}
      onPress={onPress}>
      <Feather
        name={preferenceSelected ? 'check-circle' : 'info'}
        size={DP._16}
        color={preferenceSelected ? Color.DARK_SEA_FOAM : Color.TWILIGHT_BLUE}
        style={styles.icon}
      />
      <FText style={styles.text(preferenceSelected)}>
        {preferenceSelected
          ? 'Bravo! You have set order of preference for shortlisted flights. Booking details shall be shared shortly.'
          : 'Your travel desk has shared shortlisted flight options. Please set order of preference asap.'}
      </FText>
      {!preferenceSelected && (
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
  container: (preferenceSelected) => ({
    paddingVertical: DP._16,
    backgroundColor: !preferenceSelected ? Color.DODGER_BLUE + '12' : 'white',
    flexDirection: 'row',
    paddingLeft: DP._16,
    paddingRight: DP._8,
    borderBottomLeftRadius: 12,
    borderBottomRightRadius: 12,
    borderWidth: preferenceSelected && 0.5,
    borderColor: preferenceSelected && Color.DARK_SEA_FOAM,
  }),
  text: (preferenceSelected) => ({
    color: !preferenceSelected && Color.TWILIGHT_BLUE,
    lineHeight: DP._21,
    marginRight: DP._16,
    flex: 1,
  }),
  alignCenter: {alignSelf: 'center'},
  icon: {marginRight: DP._8, paddingTop: DP._2},
});
