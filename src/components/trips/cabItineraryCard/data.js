import {CabSubtripActions} from '../../../utils/SubTripActions';

const cabItineraryCardProps = {
  tripRequest: {
    date: '22',
    month: 'Nov',
    pickupTime: '07:00 PM',
    source: 'Mumbai flsfjldkfjlsdkjflsdfjlsdjffjlskdfj',
    destination: 'Lonavala fjlskfjsdlfjdslkfjsd ',
    sourceLocality: 'Mumbai Airport fdkfjsldjfsldfjs',
    destinationLocality: 'Tungarli road skfjsdlfjsldfjsdlkfj',
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
    sourceLocality: 'Mumbai Airport lkdjfsdjfldksjflsdkfj',
    destinationLocality: 'Tungarli road flkdsjflsdkjflsdkfjlsdfj',
    departureTime: '18:30 fldfla;kdjfa;dklfja;lkdjfas;lfkdj',
    arrivalTime: '22:30 flsakjf;aslkfdja;lkdfjakdlfja;lkfdja;lsdfkj;;;;;',
    estimateDuration: '1h 50min',
    vehicleDetails: [
      {
        vehicleName:
          'White Hyundai Grand i10 Nios jfa;sdkfjadkfja;dkfjalskdfja;lsdkfjas;lkdfj',
        vehicleNumber:
          'MH 12A 2345 fdksflaskdjflsadkjflaskfjalsfjasdlfkja;lfkjasl;fkjaslfkja;lkfjas;lfjslkjafl;fjk',
      },
      {
        vehicleName:
          'White Hyundai Grand i10 Nios jfa;sdkfjadkfja;dkfjalskdfja;lsdkfjas;lkdfj',
        vehicleNumber:
          'MH 12A 2345 fdksflaskdjflsadkjflaskfjalsfjasdlfkja;lfkjasl;fkjaslfkja;lkfjas;lfjslkjafl;fjk',
      },
      {
        vehicleName:
          'White Hyundai Grand i10 Nios jfa;sdkfjadkfja;dkfjalskdfja;lsdkfjas;lkdfj',
        vehicleNumber:
          'MH 12A 2345 fdksflaskdjflsadkjflaskfjalsfjasdlfkja;lfkjasl;fkjaslfkja;lkfjas;lfjslkjafl;fjk',
      },
    ],
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
  hideChevron: false,
};

export default cabItineraryCardProps;
