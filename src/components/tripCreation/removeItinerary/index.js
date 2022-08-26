import React from 'react';
import {View} from 'react-native';

import FText, {FONT_TYPE} from '../../../common/rn/FText';
import FTouchableOpacity from '../../../common/rn/FTouchableOpacity';

import Styles from './Styles';

import {Strings} from '../../../utils/strings/index.travelPlus';
import Icon from '../../../assets/icons/Icon';
import {DP} from '../../../utils/Dimen';

const RemoveItinerary = ({
  itinerary,
  _onPressRemove,
  showRemove,
  showLabel,
  errorText,
  margin: marginBottom,
}) => {
  return (
    <View style={Styles.marginBottom(marginBottom, itinerary)}>
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
            <Icon.Trash width={DP._16} height={DP._16} />
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
