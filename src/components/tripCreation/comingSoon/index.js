import {View} from 'react-native';
import React from 'react';

import FImage from '../../../common/rn/FImage';
import FText from '../../../common/rn/FText';
import Styles from './Styles';
import {ImageConst} from '../../../utils/imageConst/index.fabhotel';

export default function ComingSoon({title, subTitle}) {
  return (
    <View style={Styles.container}>
      <FImage source={ImageConst.comingSoon} style={Styles.image} />
      <FText style={Styles.title}>{title}</FText>
      <FText style={Styles.subTitle}>{subTitle}</FText>
    </View>
  );
}
