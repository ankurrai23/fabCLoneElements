import {View} from 'react-native';
import React from 'react';
import Styles from './Styles';
import {FText} from '../../..';

export default function CoTravellerDetails({data}) {
  return (
    <View style={Styles.container}>
      <View style={Styles.subContainer}>
        <FText style={Styles.title}>Co-traveler details</FText>
        <FText style={Styles.cotravelerCount}>{data.cotravellerCount}</FText>
      </View>
      <FText style={Styles.marginTop_8}>{data.names}</FText>
      <FText style={[Styles.title, Styles.marginTop_24]}>
        Purpose of travel
      </FText>
      <FText style={Styles.marginTop_8}>{data.purpose}</FText>
    </View>
  );
}
