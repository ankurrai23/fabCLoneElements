import React, {useEffect, useState} from 'react';
import {StyleSheet} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

import FTouchableOpacity from '../../../../common/rn/FTouchableOpacity';
import FText from '../../../../common/rn/FText';
import {shadowObj} from '../../../../utils/Utils';
import {DP} from '../../../../utils/Dimen';
import {Color} from '../../../../utils/color';
import SupportDialog from '../../../../common/components/supportDialog';

// TODO: Handle the case when no data in supportDetails

export default function ContactSupport({item, supportDetails, onPress, style}) {
  const [visible, setVisible] = useState(false);

  // useEffect(() => {
  //   if (supportDetails) {
  //     setVisible(true);
  //   }
  // }, [supportDetails]);

  return (
    <>
      <FTouchableOpacity
        style={[styles.container, style]}
        onPress={() => {
          onPress();
          setVisible(true);
        }}>
        <FText style={styles.textStyle}>
          {item?.name || 'Contact 24x7 Support'}
        </FText>
        <Ionicons name="call" size={DP._18} color={Color.DODGER_BLUE} />
      </FTouchableOpacity>
      <SupportDialog
        visible={visible}
        setVisible={setVisible}
        supportDetails={supportDetails}
      />
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
    borderWidth: 0.5,
    borderColor: Color.LIGHT_PERIWINKLE,
    borderRadius: DP._8,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    ...shadowObj,
  },
  textStyle: {
    color: Color.DODGER_BLUE,
  },
});
