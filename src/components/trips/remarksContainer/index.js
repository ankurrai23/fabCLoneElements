import {View} from 'react-native';
import React from 'react';
import Styles from './Styles';
import FText, {FONT_TYPE} from '../../../common/rn/FText';
import {DP} from '../../../utils/Dimen';
import {Strings} from '../../../utils/strings/index.travelPlus';

export default function RemarksContainer({remarks}) {
  const Remark = ({item}) => (
    <View style={Styles.remark(item.received)}>
      <FText style={{lineHeight: DP._20}}>{item.content}</FText>
      {item.senderName && (
        <FText type={FONT_TYPE.MEDIUM} style={{marginVertical: DP._4}}>
          {item.senderName}
        </FText>
      )}
    </View>
  );
  return (
    <View style={Styles.container}>
      <FText type={FONT_TYPE.MEDIUM}>{Strings.remarks}</FText>
      {remarks.map((item, index) => (
        <Remark item={item} key={`${index}abc`} />
      ))}
    </View>
  );
}
