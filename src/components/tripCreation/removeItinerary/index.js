import React from 'react';
import {View} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';

import FText from '../../../common/rn/FText';
import FTouchableOpacity from '../../../common/rn/FTouchableOpacity';

import Styles from './Styles';

import FImage from '../../../common/rn/FImage';

import {ImageConst} from '../../../utils/imageConst/index.travelPlus';

const RemoveItinerary = ({
  itinerary,
  _onPressRemove,
  showRemove,
  showLabel,
  errorText,
  margin: marginBottom,
}) => {
  return (
    <View style={Styles.marginBottom(marginBottom)}>
      <View style={Styles.removeItinerary}>
        {showLabel && (
          <FText
            type="medium"
            style={Styles.itineraryTxt}>{`Itinerary ${itinerary}`}</FText>
        )}
        {showRemove && (
          <FTouchableOpacity
            onPress={_onPressRemove}
            hitSlop={Styles.removeSlope}
            style={Styles.removeView}>
            <FImage source={ImageConst.trashIcon} />
            <FText type="medium" style={Styles.removeTxt}>
              {' '}
              Remove
            </FText>
          </FTouchableOpacity>
        )}
      </View>
      {errorText ? (
        <FText type="regular" style={Styles.errorTxt}>
          {errorText}
        </FText>
      ) : null}
    </View>
  );
};

export default RemoveItinerary;
