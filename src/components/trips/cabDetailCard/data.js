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
    sourceStop: 'Mumbai Airport lkdjfsdjfldksjflsdkfj',
    destinationStop: 'Tungarli road flkdsjflsdkjflsdkfjlsdfj',
    departureTime: '18:30 fldfla;kdjfa;dklfja;lkdjfas;lfkdj',
    arrivalTime: '22:30 flsakjf;aslkfdja;lkdfjakdlfja;lkfdja;lsdfkj;;;;;',
    duration: '1h 50min',
    cabsData: [
      {
        carName:
          'White Hyundai Grand i10 Nios jfa;sdkfjadkfja;dkfjalskdfja;lsdkfjas;lkdfj',
        driverName:
          'Mr. Arvind Swami fkajs;dflajsdf;lkajsdfl;kajfl;askdjfa;lskfdj',
        driverContact: '+91 7988380849',
        carNumber:
          'MH 12A 2345 fdksflaskdjflsadkjflaskfjalsfjasdlfkja;lfkjasl;fkjaslfkja;lkfjas;lfjslkjafl;fjk',
        bookingId:
          '12345;fasldkfjasdlfkja;dlfkjas;dlfkja;sldkjfa;slkdjfa;lsdjkf',
      },
      {
        carName:
          'White Hyundai Grand i10 Nios jfa;sdkfjadkfja;dkfjalskdfja;lsdkfjas;lkdfj',
        driverName:
          'Mr. Arvind Swami fkajs;dflajsdf;lkajsdfl;kajfl;askdjfa;lskfdj',
        driverContact: '+91 986856778 ',
        carNumber: 'MH 12A 2345',
        bookingId:
          '12345;fasldkfjasdlfkja;dlfkjas;dlfkja;sldkjfa;slkdjfa;lsdjkf',
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
