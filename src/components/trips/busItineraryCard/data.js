import {BusSubtripActions} from '../../../utils/SubTripActions';

const busItineraryCardProps = {
  tripRequest: {
    date: '22',
    month: 'Nov',
    slotDetail: 'Slot: 6PM - 9PM',
    source: 'Mumbailkjsdflkdsjflsdkfjsd',
    destination: 'Lonavala slkdjflsdkfjldsfj',
    sourceBusStop: 'Mumbai Airport sfjlsfjsdlfsldkjfsl',
    destinationBusStop: 'Tungarli road lsdkfjslkfjsldkjf',
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
    source: 'Mumbaisdfsfssdfslskdfjlsk',
    destination: 'Lonavalasfsdfssfsdf',
    sourceBusStop: 'Mumbai Airport lsdfjlsfjlskdfjlsdfj ',
    destinationBusStop: 'Tungarli road akldfjlakdjflakdjflakj',
    departureTime: '18:30 laksdjfasldkfj;askdfja;lskfj',
    arrivalTime: '22:30 fa;dlkjfa;lskdfja;ldjf;alskfj',
    duration: '1h 50min',
    travelCompany: 'Dolphin Tour and Travell fslkjfldskjflskdjflskjflsdjfl',
    coordinatorName: 'Mr. Arvind Swami ',
    contact: '+91 986856778',
    busNumber: 'lskflsdkfjsdlfjsdlfkjdslfkdsjflsdjalsdkjfal;skdfjaliejflasldfkjlkajfalsj',
    busInfo: 'sldfksdlfjpoeirvnv,zf;z.zfjlifaoifkejaf;ldjgogurfafalfufjal;fjd',
    seatNumber: 'L23flkasjdflaskdjflasdkjflasdkfjalsdkfjlasdkfjalksjdf',
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
  isAlert: false,
  notificationText: 'This is notification text',
  timelineGreyed: false,
  actionDisabled: false,
  showStatus: true,
  showPreBookingCard: false,
  hideChevron: true,
};

export default busItineraryCardProps;
