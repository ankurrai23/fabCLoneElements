import React from 'react';
import {View} from 'react-native';

import FText from '../../../common/rn/FText';
import Styles from './Styles';
import {Strings} from '../../../utils/strings/index.travelPlus';
import SubTripTitle from '../subTripTitle';
import FlightItineraryCard from '../../trips/itineraryCards/flightItineraryCard';
import moment from 'moment';

const DATE = 'DD'; // 12, 13
const MONTH = 'MMM'; // Jan, Feb

export default function FlightDetails(props) {
  const {data} = props;
  const generateRequestInfo = (item) => ({
    date: moment(item.departureDate).format(DATE),
    month: moment(item.departureDate).format(MONTH),
    slotDetail: Strings.slotInfo(item.startTime, item.endTime),
    source: item.source,
    destination: item.destination,
    sourceAirportCode: item.sourceAirportCode,
    destinationAirportCode: item.destinationAirportCode,
  });
  return (
    <View onLayout={props.onLayout} style={props.style}>
      <SubTripTitle
        title={Strings.flights}
        dataLength={props.data?.length}
        onPress={props.onPress}
        style={Styles.headerStyle(data)}
      />
      {!!props.error && (
        <FText style={Styles.errorDetailText}>{props.error}</FText>
      )}
      {data?.map((item, index) => (
        <FlightItineraryCard
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
