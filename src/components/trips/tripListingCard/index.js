import React from 'react';
import {View} from 'react-native';
import {FText, FTouchableOpacity, FImage} from '../../..';
import Styles from './Styles';
import {DP} from '../../../utils/Dimen';
import {Color} from '../../../utils/color';
import {ImageConst} from '../../../utils/imageConst';

const TripListingCard = ({item, onCardPress}) => {
  const tripIcons = (requestType) => {
    switch (item.requestType) {
      case 'HOTEL':
        return [ImageConst.hotelIcon];
      case 'FLIGHT':
        return [ImageConst.flightIcon];
      case 'FLIGHT_AND_HOTEL':
        return [ImageConst.flightIcon, ImageConst.hotelIcon];
      default:
        return [];
    }
  };
  return (
    <FTouchableOpacity
      onPress={() => onCardPress(item)}
      style={[Styles.container, {borderRadius: DP._12}]}>
      <View style={Styles.tripIdContainer}>
        <View style={Styles.flexDirectionRow}>
          {tripIcons(item.requestType).map((item) => (
            <FImage source={item} style={Styles.imageStyle} />
          ))}
        </View>
        {item.isProcessing && (
          <View style={Styles.flexRowAndAlignCenter}>
            <FImage
              source={ImageConst.rescheduleIcon}
              style={Styles.rescheduleIcon}
            />
            <FText style={Styles.tripId}>Processsing</FText>
          </View>
        )}
      </View>
      <View style={Styles.flexRow}>
        <FText numberOfLines={1} style={Styles.destination} type="medium">
          {item.title}
        </FText>
      </View>
      <View style={Styles.flexRow}>
        <FText
          style={
            Styles.date
          }>{`${item.tripStartDate} - ${item.tripEndDate}`}</FText>
      </View>
      <View style={Styles.flexRow}>
        <FText style={{color: Color.GREYISH_PURPLE}}>Co-traveller(s): </FText>
        <FText>{item.coTravellers}</FText>
      </View>
      {item.isCancelled && (
        <View style={Styles.flexRow}>
          <View style={Styles.cancelledDot} />
          <FText style={Styles.cancelledText}>{item.cancelMsg}</FText>
        </View>
      )}
      <View style={Styles.footer}>
        <FText style={Styles.action}>View Details</FText>
      </View>
    </FTouchableOpacity>
  );
};

export default TripListingCard;
