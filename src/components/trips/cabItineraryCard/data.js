import {BusSubtripActions} from '../../../utils/SubTripActions';

const cabItineraryCardProps = {
  tripRequest: {
    date: '22',
    month: 'Nov',
    pickupTime: '07:00 PM',
    source: 'Mumbai flsfjldkfjlsdkjflsdfjlsdjffjlskdfj',
    destination: 'Lonavala fjlskfjsdlfjdslkfjsd ',
    sourceStop: 'Mumbai Airport fdkfjsldjfsldfjs',
    destinationStop: 'Tungarli road skfjsdlfjsldfjsdlkfj',
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
    source: 'Mumbai klsdjfldskfjlsdfjlsdfj',
    destination: 'Lonavalafl dfkdsjflsdjflksdjflskdfj',
    sourceStop: 'Mumbai Airport lkdjfsdjfldksjflsdkfj',
    destinationStop: 'Tungarli road flkdsjflsdkjflsdkfjlsdfj',
    departureTime: '18:30',
    arrivalTime: '22:30',
    duration: '1h 50min',
    carName: 'White Hyundai Grand i10 Nios',
    driverName: 'Mr. Arvind Swami ',
    driverContact: '+91 986856778',
    carNumber: 'MH 12A 2345',
    carInfo: 'Capella A/C Sleeper (2+1)',
    bookingId: '12345',
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

export default cabItineraryCardProps;
