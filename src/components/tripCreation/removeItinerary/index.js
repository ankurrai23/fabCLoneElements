import React from 'react';
import {View} from 'react-native';

import FText, {FONT_TYPE} from '../../../common/rn/FText';
import FTouchableOpacity from '../../../common/rn/FTouchableOpacity';

import Styles from './Styles';

import FImage from '../../../common/rn/FImage';

import {ImageConst} from '../../../utils/imageConst/index.travelPlus';
import {Strings} from '../../../utils/strings/index.travelPlus';

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
          <FText type={FONT_TYPE.MEDIUM} style={Styles.itineraryTxt}>
            {Strings.itineraryNumber(itinerary)}
          </FText>
        )}
        {showRemove && (
          <FTouchableOpacity
            onPress={_onPressRemove}
            hitSlop={Styles.removeSlope}
            style={Styles.removeView}>
            <FImage source={ImageConst.trashIcon} />
            <FText type={FONT_TYPE.MEDIUM} style={Styles.removeTxt}>
              {' '}
              {Strings.remove}
            </FText>
          </FTouchableOpacity>
        )}
      </View>
      {errorText ? (
        <FText type={FONT_TYPE.REGULAR} style={Styles.errorTxt}>
          {errorText}
        </FText>
      ) : null}
    </View>
  );
};

export default RemoveItinerary;
