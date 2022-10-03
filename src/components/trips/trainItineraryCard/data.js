import {FlightSubTripActions} from '../../../utils/SubTripActions';

const trainItineraryCardProps = {
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
    seatNumber: '6E',
    trainNumber: '717',
    pnr: 'GBLP6Q',
    preferredTrain: 'Rajdhani Express',
    preferredClass: '2A',
    duration: '1h 50min',
    trainName: 'Indigo',
    actionDisabled: false,
    status: {
      key: 'PROCESSED',
      value: 'Processed',
      textColor: '#d65656',
      bgColor: '#d656561a',
    },
    actions: [
      {
        type: 'RESCHEDULE',
        name: 'Reschedule',
      },
      {
        type: 'CANCEL',
        name: 'Cancel',
      },
      {
        type: FlightSubTripActions.CANCELLATION_REQUESTED,
        name: 'You have sent a modification request for this booking.',
      },
    ],
    showStatus: false,
  },
  onActionPress: (item) => console.log('Action Pressed', item),
  onCardPress: (item) => console.log('Card Pressed', item),
  showLine: true,
  hideIcon: false,
  showInfo: true,
  isAlert: true,
  timelineGreyed: false,
  processed: false,
};

export default trainItineraryCardProps;
