import React from 'react';
import {View, StyleSheet} from 'react-native';
import {Color} from '../../../../utils/color';
import FText from '../../../../common/rn/FText';
import {DP} from '../../../../utils/Dimen';
import Icon from '../../../../assets/icons/Icon';

const ModificationAlertBox = ({icon, msg, style}) => {
  return (
    <View style={[Styles.modifyMsgContainer, style]}>
      {icon || (
        <Icon.Info
          width={DP._12}
          height={DP._12}
          stroke={Color.TWILIGHT_BLUE}
          style={{marginTop: DP._3}}
        />
      )}
      <FText style={Styles.modifyText} weight={400}>
        {msg}
      </FText>
    </View>
  );
};

export default ModificationAlertBox;

const Styles = StyleSheet.create({
  modifyMsgContainer: {
    backgroundColor: Color.DODGER_BLUE + '1a',
    padding: DP._8,
    borderRadius: DP._8,
    marginBottom: DP._16,
    flexDirection: 'row',
  },
  modifyText: {
    color: Color.TWILIGHT_BLUE,
    flex: 1,
    marginLeft: DP._8,
    fontSize: DP._12,
    lineHeight: DP._16,
  },
});
