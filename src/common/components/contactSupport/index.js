import React from 'react';
import {StyleSheet} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FTouchableOpacity from '../../rn/FTouchableOpacity';
import FText from '../../rn/FText';
import {DP} from '../../../utils/Dimen';
import {Color} from '../../../utils/color';
import SupportDialog from '../supportDialog';

// TODO: Handle the case when no data in supportDetails

export default function ContactSupport({
  item,
  supportDetails,
  onContactSupportPress,
  style,
  onPressClose,
}) {
  return (
    <>
      <FTouchableOpacity
        style={[styles.container, style]}
        onPress={onContactSupportPress}>
        <FText style={styles.textStyle}>
          {item?.name || 'Contact 24x7 Support'}
        </FText>
        <Ionicons name="call" size={DP._18} color={Color.DODGER_BLUE} />
      </FTouchableOpacity>
      <SupportDialog supportDetails={supportDetails} onClose={onPressClose} />
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: DP._16,
    paddingVertical: DP._14,
    backgroundColor: Color.WHITE,
    marginVertical: DP._16,
    marginTop: DP._16,
    // borderWidth: 0.5,
    // borderColor: Color.LIGHT_PINK_WINKLE,
    // borderRadius: DP._8,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  textStyle: {
    color: Color.DODGER_BLUE,
  },
});
