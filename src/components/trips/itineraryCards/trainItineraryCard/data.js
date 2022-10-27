import {TrainSubtripActions} from '../../../../utils/SubTripActions';

const TrainItineraryCardProps = {
  tripRequest: {
    date: '22',
    month: 'Nov',
    slotDetail: 'Slot: 6PM - 9PM',
    sourceStationCode: 'CSTM',
    source: 'Mumbai',
    departureDate: 'Tue, 22 Nov',
    destinationStationCode: 'TVC',
    destination: 'Thiruvanthapuram',
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
    source: 'Mumbai',
    destinationStationCode: 'TVC',
    destination: 'Thiruvanthapuram',
    departureTime: '21:00',
    arrivalTime: '09:00',
    departurePlatform: '01',
    arrivalPlatform: '03',
    estimateDuration: '1h 50min',
    trainName: 'Mumbai-Madras Superfast Express',
    trainClass: 'AC 3 Tier Sleeper',
    pnr: '256-99589',
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
  showLine: false,
  hideIcon: true,
  showInfo: true,
  isAlert: true,
  notificationText: 'This is notification text',
  timelineGreyed: false,
  actionDisabled: false,
  showStatus: false,
  showPreBookingCard: false,
  hideChevron: false,
};

export default TrainItineraryCardProps;
