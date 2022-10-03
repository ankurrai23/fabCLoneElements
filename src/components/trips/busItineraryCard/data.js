import {FlightSubTripActions} from '../../../utils/SubTripActions';

const busItineraryCardProps = {
  item: {
    date: '22',
    month: 'Nov',
    slotDetail: 'Slot: 6PM - 9PM',
    source: 'Delhi',
    destination: 'Mumbai',
    sourceAirportCode: 'BOM',
    destinationAirportCode: 'BLR',
    sourceAirportTerminal: 'T2',
    destinationAirportTerminal: 'T3',
    departureTime: '18:30',
    arrivalTime: '22:30',
    flightNumber: '717',
    pnr: 'GBLP6Q',
    duration: '1h 50min',
    airline: 'Indigo',
    actionDisabled: false,
    stop: 'Non stop',
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
  processed: true,
};

export default busItineraryCardProps;
