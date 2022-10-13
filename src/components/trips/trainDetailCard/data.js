import {trainSubtripActions} from '../../../utils/SubTripActions';

const trainDetailCardProps = {
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
    sourceCity: 'Mumbailfkdjslfkjdslfksdjlkjflslkj',
    destinationStationCode: 'TVC',
    destinationCity:
      'Thiruvanthapuramlsdkjflsdkfjdlskfjsdlkfjsldkfjlksjflskjfslkdjfls',
    departureTime: '21:00, Tue, 22 Nov fjsdlkfjslk',
    arrivalTime: '09:00, Wed, 23 Nov fldskjflsdkfjs',
    sourcePF: '01',
    destinationPF: '03',
    duration: '1h 50min',
    trainName:
      'Mumbai - Madras Superfast Express dkfjdlsflskfjldskfjlskfjsdlkjf',
    pnr: '256-99589lskjfldsjfldskfjlsdkfjlsdkfjsldfjslsdkfjlsdkfjlsdkfjlsdkfj',
    class: 'AC 3 Tier Sleeper flasfjldsfjlasdkjflasdkjflasdkfjlsadkfj',
    berth: '42, Side upperlfsdjlfksjlfksdjlfksjlfksdjflksdjflsdkfjlsdkfj',
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
  actionDisabled: false,
  showStatus: true,
};

export default trainDetailCardProps;
