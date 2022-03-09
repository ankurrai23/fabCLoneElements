import {View} from 'react-native';
import React from 'react';

import {FImage, FText} from '../../../..';
import Styles from './Styles';

export default function ComingSoon({title, subTitle}) {
  return (
    <View style={Styles.container}>
      {/* <FImage source={ImageConst.comingSoon} style={Styles.image} /> */}
      <FText style={Styles.title}>{title}</FText>
      <FText style={Styles.subTitle}>{subTitle}</FText>
    </View>
  );
}
