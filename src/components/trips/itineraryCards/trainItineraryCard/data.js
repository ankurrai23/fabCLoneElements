const TrainItineraryCardProps = {
  tripRequest: {
    date: '22',
    month: 'Nov',
    year: '22',
    slotDetail: 'Slot: 6PM - 9PM',
    sourceStationCode: 'CSTM',
    source: 'Mumbai',
    destinationStationCode: 'TVC',
    destination: 'Thiruvanthapuram',
  },
  status: {
    key: 'PROCESSED',
    value: 'Processed',
    textColor: '#d65656',
    bgColor: '#d656561a',
  },
  bookingDetails: {
    trainBookingStatus: 'CONFIRMED',
    arrivalDate: {date: '28', month: 'Nov', year: '22'},
    departureDate: {date: '22', month: 'Nov', year: '22'},
    sourceStationCode: 'CSTM',
    source: 'Mumbai',
    destinationStationCode: 'TVC',
    destination: 'Thiruvanthapuram',
    departureTime: '21:00',
    arrivalTime: '09:00',
    sourcePlatform: 1,
    destinationPlatform: 2,
    estimateDuration: '1h 50min',
    trainName: '22928, Mumbai-Madras Superfast Express',
    trainNumber: '2222',
    trainClass: 'AC 3 Tier Sleeper',
    pnr: '256-99589',
  },
  remarks: {
    title: 'Remarks',
    text: 'Change of plans',
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
  showInfo: false,
  isAlert: true,
  // notificationText: 'This is notification text',
  timelineGreyed: true,
  actionDisabled: false,
  showStatus: false,
  showPreBookingCard: true,
  hideChevron: false,
  reduceOpacity: true,
};

export default TrainItineraryCardProps;
