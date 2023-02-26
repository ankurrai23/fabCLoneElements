import React, {useEffect, useRef} from 'react';
import {StyleSheet} from 'react-native';
import FTouchableOpacity from '../../rn/FTouchableOpacity';
import FText from '../../rn/FText';
import {DP} from '../../../utils/Dimen';
import {Color} from '../../../utils/color';
import {Strings} from '../../../utils/strings/index.travelPlus';
import Icon from '../../../assets/icons/Icon';
import SupportDialog from '../supportDialog';

export default function ContactSupport({
  item,
  supportDetails,
  onContactSupportPress,
  style,
  isGreyedOut,
}) {
  const sheetRef = useRef(null);

  useEffect(() => {
    if (supportDetails?.length) {
      sheetRef.current.expand();
    }
  }, [supportDetails]);

  return (
    <>
      <FTouchableOpacity
        style={[styles.container, style]}
        onPress={onContactSupportPress}>
        <FText greyedOut={isGreyedOut} style={styles.textStyle}>
          {item?.name || Strings.contactSupport}
        </FText>
        <Icon.Phone fill={isGreyedOut ? Color.BLUEY_GREY : Color.DODGER_BLUE} />
      </FTouchableOpacity>
      <SupportDialog ref={sheetRef} supportDetails={supportDetails} />
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
