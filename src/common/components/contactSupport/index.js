import React from 'react';
import {StyleSheet} from 'react-native';
import FTouchableOpacity from '../../rn/FTouchableOpacity';
import FText from '../../rn/FText';
import {DP} from '../../../utils/Dimen';
import {Color} from '../../../utils/color';
import SupportDialog from '../supportDialog';
import {Strings} from '../../../utils/strings/index.travelPlus';
import Icon from '../../../assets/icons/Icon';

export default function ContactSupport({
  item,
  supportDetails,
  onContactSupportPress,
  style,
  onClose,
}) {
  return (
    <>
      <FTouchableOpacity
        style={[styles.container, style]}
        onPress={onContactSupportPress}>
        <FText style={styles.textStyle}>
          {item?.name || Strings.contactSupport}
        </FText>
        <Icon.Phone />
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
    lineHeight: DP._14,
  },
});
