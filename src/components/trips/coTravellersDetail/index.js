import {View} from 'react-native';
import React from 'react';
import Styles from './Styles';
import {FText} from '../../..';
import {DP} from '../../../utils/Dimen';

export default function CoTravelersDetails({data}) {
  return (
    <View style={Styles.container}>
      {data.names?.length > 0 && (
        <>
          <View style={Styles.subContainer}>
            <FText style={Styles.title}>Co-traveler details</FText>
            <FText style={Styles.cotravelerCount}>
              {data.cotravellerCount}
            </FText>
          </View>
          <FText
            style={[
              Styles.marginTop_8,
              {paddingBottom: data.purpose ? DP._24 : 0},
            ]}>
            {data.names}
          </FText>
        </>
      )}
      {!!data.purpose && (
        <>
          <FText style={[Styles.title]}>Purpose of travel</FText>
          <FText style={Styles.marginTop_8}>{data.purpose}</FText>
        </>
      )}
    </View>
  );
}
