import {View} from 'react-native';
import React from 'react';
import Styles from './Styles';
import {FText} from '../../..';
import {DP} from '../../../utils/Dimen';

export default function RemarksContainer({remarks}) {
  const Remark = ({item}) => (
    <View style={Styles.remark(item.received)}>
      <FText style={{lineHeight: DP._20}}>{item.content}</FText>
      {item.senderName && (
        <FText type="medium" style={{marginVertical: DP._4}}>
          Ajit Mishra
        </FText>
      )}
    </View>
  );
  return (
    <View style={Styles.container}>
      <FText type="medium">Remarks</FText>
      {remarks.map((item, index) => (
        <Remark item={item} key={`${index}abc`} />
      ))}
    </View>
  );
}
