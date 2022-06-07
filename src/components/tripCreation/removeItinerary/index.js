import React from 'react';
import {View} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';

import FText from '../../../common/rn/FText';
import FTouchableOpacity from '../../../common/rn/FTouchableOpacity';

import Styles from './Styles';
import {DP} from '../../../utils/Dimen';
import {Color} from '../../../utils/color/index.travelPlus';

const RemoveItinerary = ({itinerary, _onPressRemove}) => {
  return (
    <View style={Styles.removeItinerary}>
      <FText
        type="medium"
        style={Styles.itineraryTxt}>{`Itinerary ${itinerary}`}</FText>
      <FTouchableOpacity
        onPress={_onPressRemove}
        hitSlop={Styles.removeSlope}
        style={Styles.removeView}>
        <AntDesign name="delete" size={DP._16} color={Color.PASTEL_RED} />
        <FText type="medium" style={Styles.removeTxt}>
          {' '}
          Remove
        </FText>
      </FTouchableOpacity>
    </View>
  );
};

export default RemoveItinerary;
