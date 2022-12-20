import {View} from 'react-native';
import React from 'react';
import SubTripTitle from '../subTripTitle';
import {Strings} from '../../../utils/strings/index.travelPlus';
import Styles from './Styles';
import TrainItineraryCard from '../../trips/itineraryCards/trainItineraryCard';
import moment from 'moment';
import FText from '../../../common/rn/FText';
import {TRIP_CREATION_ACTIONS} from '../../../utils/Constants';
import {TrainSubtripActions} from '../../../utils/SubTripActions';

export default function TrainDetails({onPress, data, style, error}) {
  const generateRequestInfo = (item) => ({
    date: moment(item.departureDate).format('DD'),
    month: moment(item.departureDate).format('MMM'),
    slotDetail: Strings.slotInfo(item.startTime, item.endTime),
    source: item.source,
    destination: item.destination,
    sourceStationCode: item.sourceStationCode,
    destinationStationCode: item.destinationStationCode,
  });

  const handlePress = (action, index) => {
    switch (action.type) {
      case TrainSubtripActions.EDIT:
        onPress?.({requestType: 'TRAIN', action: 'EDIT', index: index});
        break;
      case TrainSubtripActions.REMOVE:
        onPress?.({requestType: 'TRAIN', action: 'REMOVE', index: index});
        break;
      default:
        onPress?.({requestType: 'TRAIN', action: 'ADD', index: data.length});
    }
  };

  return (
    <View style={style}>
      <SubTripTitle
        title={Strings.trains}
        onPress={handlePress}
        dataLength={data?.length}
        style={Styles.headerStyle(data)}
      />
      {!!error && <FText style={Styles.errorDetailText}>{error}</FText>}
      {data?.map((item, index) => (
        <TrainItineraryCard
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
