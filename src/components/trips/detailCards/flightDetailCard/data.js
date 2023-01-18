const flightDetailCardProps = {
  title: 'Return Flight',
  tripDetails: {
    date: '22',
    month: 'Nov',
    year: '22',
    source: 'Delhi',
    destination: 'Mumbai',
    sourceAirportCode: 'BOM',
    destinationAirportCode: 'BLR',
    sourceAirportTerminal: 'Terminal 2',
    destinationAirportTerminal: 'Terminal 3',
    departureTime: '18:30',
    arrivalTime: '22:30',
    airlineCode: '6G',
    flightNumber: '717',
    pnr: 'GBLP6Q',
    duration: '1h 50min',
    airline: 'Indigo',
    flightBookingStatus: 'CONFIRMED',
    stop: 'Non stop',
    reduceOpacity: false,
    price: '₹2600',
    airlineIcon:
      'https://storage.googleapis.com/fabm-test-uploader/airline_logo/SG.png',
    travelersInfo: [
      {
        name: 'Sahil Malhan',
        seat: '123456',
      },
      {
        name: 'Vibhav Bhadauriya',
        seat: '123456',
      },
      {
        name: 'Sahil Malhan',
        seat: '123456',
      },
      {
        name: 'Vibhav Bhadauriya',
        seat: '123456',
      },
    ],
    bookingId: 'ABDC1234',
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
    {
      type: 'SUPPORT',
      name: 'Contact 24x7 Support',
    },
  ],
  actionsDisabled: false,
  onActionPress: (item) => console.log('Action Pressed', item),
  onCardPress: (item) => console.log('Card Pressed', item),
  notificationText: 'Some thing to notify',
  onContactSupportPress: () => console.log('contact support pressed'),
};

export default flightDetailCardProps;
