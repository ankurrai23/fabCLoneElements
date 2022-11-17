import {FlightSubTripActions} from '../../../../utils/SubTripActions';

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
    reduceOpacity: false,
  },
  bookingDetails: {
    flightBookingStatus: 'CONFIRMED',
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
    reduceOpacity: false,
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
  showLine: false,
  hideIcon: true,
  showInfo: false,
  isAlert: true,
  timelineGreyed: false,
  actionDisabled: false,
  showStatus: false,
  notificationText: null,
  showPreBookingCard: false,
  hideChevron: false,
};

export default flightItineraryCardProps;
