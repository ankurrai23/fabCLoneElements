import React from 'react';
import {View} from 'react-native';

import FText, {FONT_TYPE} from '../../../common/rn/FText';
import FTouchableOpacity from '../../../common/rn/FTouchableOpacity';
import TripStatus from '../tripStatus';

import {DP} from '../../../utils/Dimen';
import {Color} from '../../../utils/color';
import Styles from './Styles';
import Separator from '../../../common/components/separator';
import {Strings} from '../../../utils/strings/index.travelPlus';
import Icon from '../../../assets/icons/Icon';

function ItineraryHeader(props) {
  return (
    <View style={Styles.container}>
      <View style={Styles.flexRow}>
        <FTouchableOpacity
          onPress={props.onBackClick}
          hitSlop={{left: 50, right: 20, bottom: 20, top: 20}}>
          <Icon.ChevronLeft stroke={Color.BLACK} />
        </FTouchableOpacity>
        <FText type={FONT_TYPE.MEDIUM} style={Styles.title}>
          {props.itinerary}
        </FText>
      </View>
      <View style={Styles.datesContainer}>
        <FText style={Styles.tripId}>{props.tripId}</FText>
        {props.status && <TripStatus statusObj={props.status} />}
      </View>
      {props.cancelledMessage && (
        <FText style={Styles.cancelMessage}>{props.cancelledMessage}</FText>
      )}
      {props.tripRequesterInfo && (
        <>
          <View style={Styles.subContainer}>
            <View style={Styles.detailsContainer}>
              <FText style={Styles.detailsTitle}>{Strings.requestBy}</FText>
              <FText>{props.tripRequesterInfo.name}</FText>
            </View>
            <View style={Styles.detailsContainer}>
              <FText style={Styles.detailsTitle}>{Strings.department}</FText>
              <FText>{props.tripRequesterInfo.department}</FText>
            </View>
            <View style={Styles.detailsContainer_2}>
              <FText style={Styles.detailsTitle}>{Strings.designation}</FText>
              <FText>{props.tripRequesterInfo.designation}</FText>
            </View>
          </View>
          <Separator style={{height: DP._8}} />
        </>
      )}
    </View>
  );
}

export default ItineraryHeader;
