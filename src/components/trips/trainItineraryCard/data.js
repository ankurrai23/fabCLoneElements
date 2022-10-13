import {TrainSubtripActions} from '../../../utils/SubTripActions';

const TrainItineraryCardProps = {
  tripRequest: {
    date: '22',
    month: 'Nov',
    slotDetail: 'Slot: 6PM - 9PM',
    sourceStationCode: 'CSTMslkflskjflsdjflsdkjflskj',
    sourceCity: 'Mumbaisdkjflskdjflsdkfjlsdkfjslkdfjslj',
    departureDate: 'Tue, 22 Nov lskjflsdkjfldskfjlskj',
    destinationStationCode: 'TVClskjflskjflsdkjflskdjflsdkjflsdkj',
    destinationCity: 'Thiruvanthapuramslkdfjsldkfjsldkfjsdlkfjs',
    arrivalDate: 'Wed, 23 Nov slkfjdlkfjsldjfslslkfj',
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
