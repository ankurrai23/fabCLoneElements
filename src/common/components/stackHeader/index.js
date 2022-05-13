import React from 'react';
import {View} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';

import FText from '../../rn/FText';
import FTouchableOpacity from '../../rn/FTouchableOpacity';

import {DP} from '../../../utils/Dimen';
import {Color} from '../../../utils/color';

import Styles from './Styles';

function StackHeader(props) {
  return (
    <View style={[Styles.container(props.shadowVisible), props.containerStyle]}>
      <FTouchableOpacity
        onPress={props.onBackClick}
        hitSlop={{top: 20, bottom: 20, left: 50, right: 20}}>
        <Feather name="chevron-left" size={DP._24} color={Color.BLACK} />
      </FTouchableOpacity>
      <FText type="medium" style={Styles.title}>
        {props.title}
      </FText>
    </View>
  );
}

StackHeader.defaultProps = {
  title: 'title here',
  shadowVisible: true,
};

export default StackHeader;
