import React from 'react';
import {View} from 'react-native';
import FText from '../../../common/rn/FText';
import Styles from './Styles';
import moment from 'moment';
import FTouchableOpacity from '../../../common/rn/FTouchableOpacity';
import Feather from 'react-native-vector-icons/Feather';
import {DP} from '../../../utils/Dimen';
import {Color} from '../../../utils/color/index.travelPlus';

function BasicTravelDetailsCard({data, index, editBasicDetailPosition}) {
  console.log('newewe', index);
  return (
    <View style={Styles.container}>
      <View style={Styles.flexView()}>
        <View style={Styles.flex6}>
          <FText numberOfLines={1} type="medium" style={Styles.sourceTxt}>
            {`${data.source.name} to ${data.destination.name}`}
          </FText>
        </View>
        <View style={Styles.iteneryView}>
          <FText style={Styles.itineraryTxt}>{`Itinerary ${index + 1}`}</FText>
        </View>
      </View>
      <View style={Styles.flexView('margin')}>
        <View style={Styles.flex6}>
          <FText style={Styles.dateTxt}>
            {moment(data.departureDate).format('ddd, DD MMM')}
          </FText>
        </View>
        <FTouchableOpacity
          onPress={() => editBasicDetailPosition(index)}
          hitSlop={Styles.touchView}
          style={Styles.flexView()}>
          <Feather name="edit-2" size={DP._15} color={Color.DODGER_BLUE} />
          <FText style={Styles.editTxt}>Edit</FText>
        </FTouchableOpacity>
      </View>
    </View>
  );
}

export default BasicTravelDetailsCard;
