import {View} from 'react-native';
import React from 'react';
import SubTripTitle from '../subTripTitle';
import {Strings} from '../../../utils/strings/index.travelPlus';

export default function CabDetails({onPress, data, style}) {
  return (
    <View style={style}>
      <SubTripTitle
        title={Strings.cabs}
        onPress={onPress}
        dataLength={data?.length}
      />
    </View>
  );
}
