import React from 'react';
import {View} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';

import {FText, FTouchableOpacity, TripStatus} from '../../..';
import {DP} from '../../../utils/Dimen';
import {Color} from '../../../utils/color';

import Styles from './Styles';
import Separator from '../../../common/components/separator';

function ItineraryHeader(props) {
  return (
    <>
      <View style={Styles.flexRow}>
        <FTouchableOpacity onPress={props.onBackClick}>
          <Feather name="arrow-left" size={DP._24} color={Color.BLACK} />
        </FTouchableOpacity>
        <FText type="medium" style={Styles.title}>
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
              <FText style={Styles.detailsTitle}>Request by: </FText>
              <FText>{props.tripRequesterInfo.name}</FText>
            </View>
            <View style={Styles.detailsContainer}>
              <FText style={Styles.detailsTitle}>Department: </FText>
              <FText>{props.tripRequesterInfo.department}</FText>
            </View>
            <View style={Styles.detailsContainer_2}>
              <FText style={Styles.detailsTitle}>Designation: </FText>
              <FText>{props.tripRequesterInfo.designation}</FText>
            </View>
          </View>
          <Separator style={{height: DP._8}} />
        </>
      )}
    </>
  );
}

export default ItineraryHeader;
