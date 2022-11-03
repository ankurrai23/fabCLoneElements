import {View} from 'react-native';
import React from 'react';
import SubTripTitle from '../subTripTitle';
import {Strings} from '../../../utils/strings/index.travelPlus';
import Styles from './Styles';
import TrainItineraryCard from '../../trips/itineraryCards/trainItineraryCard';
import moment from 'moment';

export default function TrainDetails({onPress, data, style}) {
  const generateRequestInfo = (item) => ({
    date: moment(item.departureDate).format('DD'),
    month: moment(item.departureDate).format('MMM'),
    slotDetail: `Slot: ${item.startTime} - ${item.endTime}`,
    source: item.source,
    destination: item.destination,
    sourceStationCode: item.sourceStationCode,
    destinationStationCode: item.destinationStationCode,
  });
  return (
    <View style={style}>
      <SubTripTitle
        title={Strings.trains}
        onPress={onPress}
        dataLength={data?.length}
        style={Styles.headerStyle(data)}
      />
      {data?.map((item, index) => (
        <TrainItineraryCard
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
