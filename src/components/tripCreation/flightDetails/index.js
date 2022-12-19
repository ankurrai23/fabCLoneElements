import React from 'react';
import {View} from 'react-native';

import FText from '../../../common/rn/FText';
import Styles from './Styles';
import {Strings} from '../../../utils/strings/index.travelPlus';
import SubTripTitle from '../subTripTitle';
import FlightItineraryCard from '../../trips/itineraryCards/flightItineraryCard';
import moment from 'moment';
import {FlightSubTripActions} from '../../../utils/SubTripActions';

const DATE = 'DD'; // 12, 13
const MONTH = 'MMM'; // Jan, Feb
const YEAR = 'YY';

const DEFAULT_ACTIONS = [
  {
    type: 'EDIT',
    name: 'Edit',
  },
  {
    type: 'REMOVE',
    name: 'Remove',
  },
];

export default function FlightDetails({data, onLayout, style, onPress, error}) {
  const generateRequestInfo = (item) => ({
    date: moment(item.departureDate).format(DATE),
    month: moment(item.departureDate).format(MONTH),
    year: moment(item.departureDate).format(YEAR),
    slotDetail: Strings.slotInfo(item.startTime, item.endTime),
    source: item.source,
    destination: item.destination,
    sourceAirportCode: item.sourceAirportCode,
    destinationAirportCode: item.destinationAirportCode,
  });

  const handlePress = (action, index) => {
    switch (action.type) {
      case FlightSubTripActions.EDIT:
        onPress?.({requestType: 'FLIGHT', action: 'EDIT', index: index});
        break;
      case FlightSubTripActions.REMOVE:
        onPress?.({requestType: 'FLIGHT', action: 'REMOVE', index: index});
        break;
      default:
        onPress?.({requestType: 'FLIGHT', action: 'ADD', index: data.length});
    }
  };

  return (
    <View onLayout={onLayout} style={style}>
      <SubTripTitle
        title={Strings.flights}
        dataLength={data?.length}
        onPress={handlePress}
        style={Styles.headerStyle(data)}
      />
      {!!error && <FText style={Styles.errorDetailText}>{error}</FText>}
      {data?.map((item, index) => (
        <FlightItineraryCard
          tripRequest={generateRequestInfo(item)}
          showPreBookingCard={true}
          actions={DEFAULT_ACTIONS}
          hideIcon
          style={Styles.cardStyle(data, index)}
          onActionPress={(action) => handlePress(action, index)}
        />
      ))}
    </View>
  );
}
