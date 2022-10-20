import {BusSubtripActions} from '../../../utils/SubTripActions';

const busDetailCardProps = {
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
        carName: 'White Hyundai Grand i10',
        vehicleNumber: 'MH 12A 2345',
        driverName: 'Mr. Arvind Swami',
        driverPhone: '+91 7988380849',
        bookingId: '12345',
      },
      {
        carName: 'White Hyundai Grand i10',
        vehicleNumber: 'MH 12A 2345',
        driverName: 'Mr. Arvind Swami',
        driverPhone: '+91 7988380849',
        bookingId: '12345',
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
  onPhoneNumberClicked: () => console.log('phoneNumber clicked'),
  actionDisabled: false,
  showStatus: true,
};

export default busDetailCardProps;
