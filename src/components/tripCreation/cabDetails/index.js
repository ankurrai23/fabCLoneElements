import {View} from 'react-native';
import React from 'react';
import SubTripTitle from '../subTripTitle';
import {Strings} from '../../../utils/strings/index.travelPlus';
import CabItineraryCard from '../../trips/itineraryCards/cabItineraryCard';
import Styles from './Styles';
import moment from 'moment';

export default function CabDetails({onPress, data, style}) {
  const generateRequestInfo = (item) => ({
    date: moment(item.departureDate).format('DD'),
    month: moment(item.departureDate).format('MMM'),
    source: item.source,
    destination: item.destination,
    sourceLocality: item.sourceLocality,
    destinationLocality: item.destinationLocality,
    pickupTime: item.startTime,
  });
  return (
    <View style={style}>
      <SubTripTitle
        title={Strings.cabs}
        onPress={onPress}
        dataLength={data?.length}
        style={Styles.headerStyle(data)}
      />
      {data?.map((item, index) => (
        <CabItineraryCard
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
