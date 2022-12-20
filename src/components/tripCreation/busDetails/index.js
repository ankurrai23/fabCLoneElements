import {View} from 'react-native';
import React from 'react';
import SubTripTitle from '../subTripTitle';
import {Strings} from '../../../utils/strings/index.travelPlus';
import BusItineraryCard from '../../trips/itineraryCards/busItineraryCard';
import Styles from './Styles';
import moment from 'moment';
import FText from '../../../common/rn/FText';
import {TRIP_CREATION_ACTIONS} from '../../../utils/Constants';
import {BusSubtripActions} from '../../../utils/SubTripActions';

export default function BusDetails({onPress, data, style, error}) {
  const generateRequestInfo = (item) => ({
    date: moment(item.departureDate).format('DD'),
    month: moment(item.departureDate).format('MMM'),
    slotDetail: Strings.slotInfo(item.startTime, item.endTime),
    source: item.source,
    destination: item.destination,
    sourceLocality: item.sourceLocality,
    destinationLocality: item.destinationLocality,
  });

  const handlePress = (action, index) => {
    switch (action.type) {
      case BusSubtripActions.EDIT:
        onPress?.({requestType: 'BUS', action: 'EDIT', index: index});
        break;
      case BusSubtripActions.REMOVE:
        onPress?.({requestType: 'BUS', action: 'REMOVE', index: index});
        break;
      default:
        onPress?.({requestType: 'BUS', action: 'ADD', index: data.length});
    }
  };

  return (
    <View style={style}>
      <SubTripTitle
        title={Strings.buses}
        onPress={handlePress}
        dataLength={data?.length}
        style={Styles.headerStyle(data)}
      />
      {!!error && <FText style={Styles.errorDetailText}>{error}</FText>}
      {data?.map((item, index) => (
        <BusItineraryCard
          tripRequest={generateRequestInfo(item)}
          showPreBookingCard={true}
          actions={TRIP_CREATION_ACTIONS}
          onActionPress={(action) => handlePress(action, index)}
          hideIcon
          style={Styles.cardStyle(data, index)}
        />
      ))}
    </View>
  );
}
