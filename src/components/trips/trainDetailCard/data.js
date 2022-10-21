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
    travellersDetails: [
      {
        travellerName: 'Sahil Malhan',
        coach: 'b1',
        birth: '42',
      },
      {
        travellerName: 'Vaibhav Agrawal',
        coach: 'c1',
        birth: '48',
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
