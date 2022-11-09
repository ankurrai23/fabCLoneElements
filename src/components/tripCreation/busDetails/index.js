import {View} from 'react-native';
import React from 'react';
import SubTripTitle from '../subTripTitle';
import {Strings} from '../../../utils/strings/index.travelPlus';
import BusItineraryCard from '../../trips/itineraryCards/busItineraryCard';
import Styles from './Styles';
import moment from 'moment';
import FText from '../../../common/rn/FText';

export default function BusDetails({onPress, data, style, error}) {
  const generateRequestInfo = (item) => ({
    date: moment(item.departureDate).format('DD'),
    month: moment(item.departureDate).format('MMM'),
    slotDetail: `Slot: ${item.startTime} - ${item.endTime}`,
    source: item.source,
    destination: item.destination,
    sourceLocality: item.sourceLocality,
    destinationLocality: item.destinationLocality,
  });

  return (
    <View style={style}>
      <SubTripTitle
        title={Strings.buses}
        onPress={onPress}
        dataLength={data?.length}
        style={Styles.headerStyle(data)}
      />
      {!!error && <FText style={Styles.errorDetailText}>{error}</FText>}
      {data?.map((item, index) => (
        <BusItineraryCard
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
