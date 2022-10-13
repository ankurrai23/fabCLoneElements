import {View} from 'react-native';
import React from 'react';
import SubTripTitle from '../subTripTitle';
import {Strings} from '../../../utils/strings/index.travelPlus';

export default function TrainDetails({onPress, data, style}) {
  return (
    <View style={style}>
      <SubTripTitle
        title={Strings.trains}
        onPress={onPress}
        dataLength={data?.length}
      />
    </View>
  );
}
