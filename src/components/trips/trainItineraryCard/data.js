import {BusSubtripActions} from '../../../utils/SubTripActions';

const busItineraryCardProps = {
  tripRequest: {
    date: '22',
    month: 'Nov',
    slotDetail: 'Slot: 6PM - 9PM',
    sourceStationCode: 'CSTM',
    sourceCity: 'Mumbai',
    TravelDate: 'Tue, 22 Nov',
    destinationStationCode: 'TVC',
    destinationCity: 'Thiruvanthapuram',
    arrivalDate: 'Wed, 23 Nov',
  },
  status: {
    key: 'PROCESSED',
    value: 'Processed',
    textColor: '#d65656',
    bgColor: '#d656561a',
  },
  bookingDetails: {
    date: '22',
    month: 'Nov',
    sourceStationCode: 'CSTM',
    sourceCity: 'Mumbai',
    TravelDate: 'Tue, 22 Nov',
    destinationStationCode: 'TVC',
    destinationCity: 'Thiruvanthapuram',
    departureTime: '21:00, Tue, 22 Nov',
    arrivalTime: '09:00, Wed, 23 Nov',
    duration: '1h 50min',
    sourcePlatform: '',
    destinationPlatform: '',
    trainName: 'Mumbai - Madras Superfast Express',
    pnr: '256-99589',
    class: 'AC 3 Tier Sleeper',
    berth: '42, Side upper',
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
    // {
    //   type: FlightSubTripActions.CANCELLATION_REQUESTED,
    //   name: 'You have sent a modification request for this booking.',
    // },
  ],
  onActionPress: (item) => console.log('Action Pressed', item),
  onCardPress: (item) => console.log('Card Pressed', item),
  showLine: true,
  hideIcon: false,
  showInfo: true,
  isAlert: true,
  notificationText: 'This is notification text',
  timelineGreyed: false,
  actionDisabled: false,
  showStatus: false,
  showPreBookingCard: false,
};

export default busItineraryCardProps;
