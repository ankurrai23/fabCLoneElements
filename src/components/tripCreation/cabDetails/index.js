import {View} from 'react-native';
import React from 'react';
import SubTripTitle from '../subTripTitle';
import {Strings} from '../../../utils/strings/index.travelPlus';
import CabItineraryCard from '../../trips/itineraryCards/cabItineraryCard';
import Styles from './Styles';
import moment from 'moment';
import FText from '../../../common/rn/FText';
import {TRIP_CREATION_ACTIONS} from '../../../utils/Constants';
import {CabSubtripActions} from '../../../utils/SubTripActions';

const CAB_TYPE = {
  outstation: 'OUTSTATION',
  airportTransfer: 'AIRPORT_TRANSFER',
};

export default function CabDetails({onPress, data, style, error}) {
  const generateRequestInfo = (item) => ({
    date: moment(item.departureDate).format('DD'),
    month: moment(item.departureDate).format('MMM'),
    source: item.source,
    destination: item.destination,
    sourceLocality: item.sourceLocality,
    destinationLocality: item.destinationLocality,
    pickupTime: item.cabType === CAB_TYPE.outstation ? item.startTime : null,
  });

  const handlePress = (action, index) => {
    switch (action.type) {
      case CabSubtripActions.EDIT:
        onPress?.({requestType: 'CAB', action: 'EDIT', index: index});
        break;
      case CabSubtripActions.REMOVE:
        onPress?.({requestType: 'CAB', action: 'REMOVE', index: index});
        break;
      default:
        onPress?.({requestType: 'CAB', action: 'ADD', index: data.length});
    }
  };

  return (
    <View style={style}>
      <SubTripTitle
        title={Strings.cabs}
        onPress={handlePress}
        dataLength={data?.length}
        style={Styles.headerStyle(data)}
      />
      {!!error && <FText style={Styles.errorDetailText}>{error}</FText>}
      {data?.map((item, index) => (
        <CabItineraryCard
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
