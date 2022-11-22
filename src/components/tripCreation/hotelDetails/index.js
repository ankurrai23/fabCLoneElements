import React from 'react';
import {View} from 'react-native';
import moment from 'moment';

import FText from '../../../common/rn/FText';
import Styles from './Styles';
import {Strings} from '../../../utils/strings/index.travelPlus';
import SubTripTitle from '../subTripTitle';
import HotelItineraryCard from '../../trips/itineraryCards/hotelItineraryCard';

const DATE = 'DD'; // 12, 13
const MONTH = 'MMM'; // Jan, Feb

export default function HotelDetails(props) {
  const {data, error} = props;

  const generateRequestInfo = (item) => ({
    checkIn: {
      date: moment(item.checkInDate).format(DATE),
      month: moment(item.checkInDate).format(MONTH),
    },
    checkOut: {
      date: moment(item.checkOutDate).format(DATE),
      month: moment(item.checkOutDate).format(MONTH),
    },
    title: item.city,
    location: item.location,
  });

  return (
    <View onLayout={props.onLayout} style={props.style}>
      <SubTripTitle
        title={Strings.hotels}
        dataLength={data?.length}
        onPress={props.onPress}
        style={Styles.headerStyle(data)}
      />
      {!!error && <FText style={Styles.errorDetailText}>{error}</FText>}
      {data?.map((item, index) => (
        <HotelItineraryCard
          tripRequest={generateRequestInfo(item)}
          showPreBookingCard={true}
          actionDisabled={true}
          hideIcon
          style={Styles.cardStyle(data, index)}
        />
      ))}
    </View>
  );
}
