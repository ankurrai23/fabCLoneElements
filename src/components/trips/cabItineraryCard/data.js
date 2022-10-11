import {CabSubtripActions} from '../../../utils/SubTripActions';

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
    departureTime: '18:30 fldfla;kdjfa;dklfja;lkdjfas;lfkdj',
    arrivalTime: '22:30 flsakjf;aslkfdja;lkdfjakdlfja;lkfdja;lsdfkj;;;;;',
    duration: '1h 50min',
    carName: 'White Hyundai Grand i10 Nios jfa;sdkfjadkfja;dkfjalskdfja;lsdkfjas;lkdfj',
    driverName: 'Mr. Arvind Swami fkajs;dflajsdf;lkajsdfl;kajfl;askdjfa;lskfdj',
    driverContact: '+91 986856778 alskdfja;dlfkja;ldfkja;lfkjas;lkfja;lsfkj',
    carNumber: 'MH 12A 2345 fdksflaskdjflsadkjflaskfjalsfjasdlfkja;lfkjasl;fkjaslfkja;lkfjas;lfjslkjafl;fjk',
    carInfo: 'Capella A/C Sleeper (2+1) lsa;jf;skdjfa;lkdfjalkdfja;lskdjfl;akdjf',
    bookingId: '12345;fasldkfjasdlfkja;dlfkjas;dlfkja;sldkjfa;slkdjfa;lsdjkf',
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
