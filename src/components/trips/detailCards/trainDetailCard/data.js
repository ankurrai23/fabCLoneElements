const trainDetailCardProps = {
  bookingDetails: {
    arrivalDate: {date: '22', month: 'Dec', year: '22'},
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
    pnr: '256-99589',
    trainClass: 'AC 3 Tier Sleeper ',
    berth: '42, Side upper',
    trainBookingStatus: 'CONFIRMED',
    travellerDetails: [
      {
        travellerName: 'Sahil Malhan',
        seatNo: 'b1, 42',
      },
      {
        travellerName: 'Vaibhav Agrawal',
        seatNo: 'b1, 42',
      },
    ],
    reduceOpacity: true,
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
  notificationText: 'Some thing to notify',
  actionDisabled: false,
};

export default trainDetailCardProps;
