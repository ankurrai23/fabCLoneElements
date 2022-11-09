const trainDetailCardProps = {
  bookingDetails: {
    date: '22',
    month: 'Nov',
    sourceStationCode: 'CSTM',
    source: 'Mumbai',
    destinationStationCode: 'TVC',
    destination: 'Thiruvanthapuram',
    departureTime: '21:00',
    arrivalTime: '09:00',
    departurePlatform: '01',
    arrivalPlatform: '03',
    estimateDuration: '1h 50min',
    trainName: '22928, Mumbai-Madras Superfast Express',
    pnr: '256-99589',
    trainClass: 'AC 3 Tier Sleeper ',
    berth: '42, Side upper',
    trainBookingStatus: 'CONFIRMED',
    travellersDetails: [
      {
        travellerName: 'Sahil Malhan',
        seatNo: 'b1, 42',
      },
      {
        travellerName: 'Vaibhav Agrawal',
        seatNo: 'b1, 42',
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
  notificationText: 'Some thing to notify',
  actionDisabled: false,
};

export default trainDetailCardProps;
