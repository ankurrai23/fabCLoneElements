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
  onClose,
}) {
  console.log('support dialog', supportDetails);
  return (
    <>
      <FTouchableOpacity
        style={[styles.container, style]}
        onPress={onContactSupportPress}>
        <FText style={styles.textStyle}>
          {item?.name || 'Contact 24x7 Support'}
        </FText>
        <Ionicons name="call" size={DP._16} color={Color.DODGER_BLUE} />
      </FTouchableOpacity>
      {!!supportDetails?.length && (
        <SupportDialog
          visible={supportDetails.length > 0}
          onClose={onClose}
          supportDetails={supportDetails}
        />
      )}
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: Color.WHITE,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  textStyle: {
    color: Color.DARK,
    fontSize: DP._12,
  },
});
