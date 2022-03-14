import {View} from 'react-native';
import React from 'react';
import {FText, FTouchableOpacity, Button, FImage} from '../../..';
import {DP} from '../../../utils/Dimen';
import {ImageConst} from '../../../utils/imageConst';
import Styles from './Styles';

export default function ManagerActions({
  onRequestModification,
  onReject,
  onApprove,
}) {
  return (
    <View style={Styles.container}>
      <View style={Styles.requestForModificationContainer}>
        <FText style={{fontSize: DP._16}}>Request for modification</FText>
        <FTouchableOpacity onPress={onRequestModification}>
          <FImage source={ImageConst.editIcon} style={Styles.editIcon} />
        </FTouchableOpacity>
      </View>
      <View style={{flexGrow: 1}}/>
      <View style={Styles.buttonContainer}>
        <Button
          style={Styles.rejectButtonStyle}
          textStyle={{fontSize: DP._16}}
          textFont="medium"
          onPress={onReject}>
          Reject
        </Button>
        <Button
          style={Styles.approveButtonStyle}
          textStyle={{fontSize: DP._16}}
          textFont="medium"
          onPress={onApprove}>
          Approve
        </Button>
      </View>
    </View>
  );
}
