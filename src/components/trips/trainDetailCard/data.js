import {TrainSubtripActions} from '../../../utils/SubTripActions';

const trainItineraryCardProps = {
  title: 'Itinerary 1',
  item: {
    date: '22',
    month: 'Nov',
    slotDetail: 'Slot: 6PM - 9PM',
    source: 'Delhi',
    destination: 'Mumbai',
    sourceStationCode: 'BOM',
    destinationStationCode: 'BLR',
    departureTime: '18:30',
    arrivalTime: '22:30',
    seatType: '6E',
    trainNumber: '717',
    pnr: '256-9877567',
    preferredTrain: 'Rajdhani Express',
    preferredClass: '2A',
    duration: '1h 50min',
    trainName: 'Mumbai - Lonavala Superfast Express',
    actionDisabled: false,
    trainBookingStatus: 'CONFIRMED',
    actions: [
      {
        type: 'RESCHEDULE',
        name: 'Reschedule',
      },
      {
        type: 'CANCEL',
        name: 'Cancel',
      },
    ],
    showStatus: true,
  },
  onActionPress: (item) => console.log('Action Pressed', item),
  onCardPress: (item) => console.log('Card Pressed', item),
};

export default trainItineraryCardProps;
