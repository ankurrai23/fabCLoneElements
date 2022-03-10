import React from 'react';
import {View, StyleSheet} from 'react-native';
import {Color} from '../../../../utils/color';
import Feather from 'react-native-vector-icons/Feather';
import FText from '../../../../common/rn/FText';
import {DP} from '../../../../utils/Dimen';

const ModificationAlertBox = ({msg}) => {
  return (
    <View style={Styles.modifyMsgContainer}>
      <Feather
        name="info"
        size={DP._12}
        color={Color.TWILIGHT_BLUE}
        style={{marginTop: DP._3}}
      />
      <FText style={Styles.modifyText}>{msg}</FText>
    </View>
  );
};

export default ModificationAlertBox;

const Styles = StyleSheet.create({
  modifyMsgContainer: {
    backgroundColor: Color.DODGER_BLUE + '1a',
    padding: DP._8,
    borderRadius: DP._8,
    marginBottom: DP._4,
    flexDirection: 'row',
  },
  modifyText: {
    color: Color.TWILIGHT_BLUE,
    flex: 1,
    marginLeft: DP._8,
    fontSize: DP._12,
    lineHeight: DP._20,
  },
});
