import React from 'react';
import {View} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';

import {FText, FTouchableOpacity} from '../../..';
import {Color} from '../../../utils/color/index.fabhotel';
import {DP} from '../../../utils/Dimen';
import Styles from './Styles';

export default function HeaderView(props) {
  return (
    <View style={Styles.container}>
      <FText type="medium" style={Styles.sectionTitle}>
        {props.title}
      </FText>
      <FTouchableOpacity onPress={props.onPress}>
        <AntDesign name="rightcircle" size={DP._17} color={Color.DODGER_BLUE} />
      </FTouchableOpacity>
    </View>
  );
}
