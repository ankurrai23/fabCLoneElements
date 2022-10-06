import {FlightSubTripActions} from '../../../utils/SubTripActions';

const flightItineraryCardProps = {
  status: {
    key: 'PROCESSED',
    value: 'Processed',
    textColor: '#d65656',
    bgColor: '#d656561a',
  },
  tripRequest: {
    date: '22',
    month: 'Nov',
    slotDetail: 'Slot: 6PM - 9PM',
    source: 'Delhi',
    destination: 'Mumbai',
    sourceAirportCode: 'BOM',
    destinationAirportCode: 'BLR',
  },
  bookingDetails: {
    date: '22',
    month: 'Nov',
    sourceAirportCode: 'BOM',
    destinationAirportCode: 'BLR',
    departureTime: '18:30',
    arrivalTime: '22:30',
    flightNumber: '717',
    pnr: 'GBLP6Q',
    duration: '1h 50min',
    airline: 'Indigo',
    stop: 'Non stop',
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
  ],
  onActionPress: (item) => console.log('Action Pressed', item),
  onCardPress: (item) => console.log('Card Pressed', item),
  showLine: true,
  hideIcon: false,
  showInfo: false,
  isAlert: true,
  timelineGreyed: false,
  actionDisabled: false,
  showStatus: false,
  notificationText: null,
  showPreBookingCard: false,
};

export default flightItineraryCardProps;
