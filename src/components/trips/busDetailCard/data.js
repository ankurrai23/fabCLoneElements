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
    source: 'Mumbaisdfsfssdfslskdfjlsk',
    destination: 'Lonavalasfsdfssfsdf',
    sourceBusStop: 'Mumbai Airport lsdfjlsfjlskdfjlsdfj ',
    destinationBusStop: 'Tungarli road akldfjlakdjflakdjflakj',
    departureTime: '18:30 laksdjfasldkfj;askdfja;lskfj',
    arrivalTime: '22:30 fa;dlkjfa;lskdfja;ldjf;alskfj',
    duration: '1h 50min',
    travelCompany: 'Dolphin Tour and Travell fslkjfldskjflskdjflskjflsdjfl',
    coordinatorName: 'Mr. Arvind Swami kljflsdkjflsadkfjlsadkfjla',
    contact: '+91 986856778',
    busNo: 'MH 12A 2345',
    pnr: '12344556',
    busNumber:
      'lskflsdkfjsdlfjsdlfkjdslfkdsjflsdjalsdkjfal;skdfjaliejflasldfkjlkajfalsj',
    busInfo: 'sldfksdlfjpoeirvnv,zf;z.zfjlifaoifkejaf;ldjgogurfafalfufjal;fjd',
    seatNumber: 'L23flkasjdflaskdjflasdkjflasdkfjalsdkfjlasdkfjalksjdf',
    travellersDetails: [
      {
        name: 'person 1 flsdkfjdlkkdfjkddk',
        seat: 'L23 fldkfjsdlfjlfksdjfldskfjldskfjsdlkfj',
      },
      {
        name: 'person 2 slkfjsldkfjslfjsdsjldfkj',
        seat: 'L23 flskdfjlsdkfjsldfkjsdlfkjsldf',
      },
      {
        name: 'person 3 slkdfjldsfjsdlfjdslfjdslkfj',
        seat: 'L23 ldksflsdkjflsdkjflsdkfjlsdkfjsldjf',
      },
      {
        name: 'person 4 ldksfjlsdfkjdlskfj',
        seat: 'L23 flskfjlsdkfjldsfjlsdkfjsdlkfjslfj',
      },
      {
        name: 'person 5 lsdjflsdjfdlkfjsdlkjfs',
        seat: 'L23 lfsdkjflsdkjflsdkjflsdkj',
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
