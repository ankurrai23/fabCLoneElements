import {View} from 'react-native';
import React from 'react';
import Styles from './Styles';
import FText from '../../../common/rn/FText';
import {DP} from '../../../utils/Dimen';
import {Strings} from '../../../utils/strings/index.travelPlus';

export default function CoTravellers({data}) {
  return (
    <View style={Styles.container}>
      <>
        <View style={Styles.subContainer}>
          <FText style={Styles.title}>{Strings.coTravelerDetails}</FText>
          {data.names?.length > 0 && (
            <FText style={Styles.cotravelerCount}>
              {data.cotravellerCount}
            </FText>
          )}
        </View>
        <FText
          style={[
            Styles.marginTop_8,
            {paddingBottom: data.purpose ? DP._24 : 0},
          ]}>
          {data.names?.length > 0 ? data.names : Strings.none}
        </FText>
      </>
      {!!data.purpose && (
        <>
          <FText style={[Styles.title]}>{Strings.purposeOfTravel}</FText>
          <FText style={Styles.marginTop_8}>{data.purpose}</FText>
        </>
      )}
    </View>
  );
}
