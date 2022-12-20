import React from 'react';
import {View} from 'react-native';
import moment from 'moment';

import FText from '../../../common/rn/FText';
import Styles from './Styles';
import {Strings} from '../../../utils/strings/index.travelPlus';
import SubTripTitle from '../subTripTitle';
import HotelItineraryCard from '../../trips/itineraryCards/hotelItineraryCard';
import {TRIP_CREATION_ACTIONS} from '../../../utils/Constants';
import {HotelSubTripActions} from '../../../utils/SubTripActions';

const DATE = 'DD'; // 12, 13
const MONTH = 'MMM'; // Jan, Feb
const YEAR = 'YY';

export default function HotelDetails({data, error, onLayout, style, onPress}) {
  const generateRequestInfo = (item) => ({
    checkIn: {
      date: moment(item.checkInDate).format(DATE),
      month: moment(item.checkInDate).format(MONTH),
      year: moment(item.checkInDate).format(YEAR),
    },
    checkOut: {
      date: moment(item.checkOutDate).format(DATE),
      month: moment(item.checkOutDate).format(MONTH),
      year: moment(item.checkOutDate).format(YEAR),
    },
    title: item.city,
    location: item.location,
  });

  const handlePress = (action, index) => {
    switch (action.type) {
      case HotelSubTripActions.EDIT:
        onPress?.({requestType: 'HOTEL', action: 'EDIT', index: index});
        break;
      case HotelSubTripActions.REMOVE:
        onPress?.({requestType: 'HOTEL', action: 'REMOVE', index: index});
        break;
      default:
        onPress?.({requestType: 'HOTEL', action: 'ADD', index: data.length});
    }
  };

  return (
    <View onLayout={onLayout} style={style}>
      <SubTripTitle
        title={Strings.hotels}
        dataLength={data?.length}
        onPress={handlePress}
        style={Styles.headerStyle(data)}
      />
      {!!error && <FText style={Styles.errorDetailText}>{error}</FText>}
      {data?.map((item, index) => (
        <HotelItineraryCard
          tripRequest={generateRequestInfo(item)}
          showPreBookingCard={true}
          actions={TRIP_CREATION_ACTIONS}
          hideIcon
          onActionPress={(action) => handlePress(action, index)}
          style={Styles.cardStyle(data, index)}
        />
      ))}
    </View>
  );
}
