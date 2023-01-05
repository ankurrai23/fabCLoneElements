const flightItineraryCardProps = {
  status: {
    key: 'PROCESSED',
    value: 'Processed',
    textColor: '#d65656',
    bgColor: '#d656561a',
  },
  tripRequest: {
    date: '22',
    month: 'Nov',
    year: '22',
    slotDetail: 'Slot: 6PM - 9PM',
    source: 'Delhi',
    destination: 'Mumbai',
    sourceAirportCode: 'BOM',
    destinationAirportCode: 'BLR',
    reduceOpacity: false,
    stop: 'Non stop (via Mumbai)',
    airlineIcon:
      'https://storage.googleapis.com/fabm-test-uploader/airline_logo/SG.png',
    isPriceFetched: true,
    price: '₹2600',
    modificationCharge: '₹600',
    airlineCode: 'G8',
    flightNumber: '717',
    isOutOfPolicy: true,
    isSoldOut: false,
    sourceAirportTerminal: 'Terminal 1',
    destinationAirportTerminal: 'Terminal 3',
    reasonDetails: {
      title: 'Reason for modification',
      text: 'Meeting is postponed due to client unavailability',
    },
  },
  bookingDetails: {
    flightBookingStatus: 'CONFIRMED',
    date: '22',
    month: 'Nov',
    year: '22',
    sourceAirportCode: 'BOM',
    destinationAirportCode: 'BLR',
    departureTime: '18:30',
    arrivalTime: '22:30',
    airlineCode: 'G8',
    flightNumber: '717',
    sourceAirportTerminal: 'Terminal 1',
    destinationAirportTerminal: 'Terminal 3',
    // pnr: 'GBLP6Q',
    duration: '1h 50min',
    airline: 'Indigo',
    stop: 'Non stop',
    reduceOpacity: false,
    airlineIcon:
      'https://storage.googleapis.com/fabm-test-uploader/airline_logo/SG.png',
    isPriceFetched: true,
    price: '₹2600',
    modificationCharge: '₹600',
    isOutOfPolicy: true,
    isSoldOut: true,
    reasonDetails: {
      title: 'Reason for modification',
      text: 'Meeting is postponed due to client unavailability',
    },
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
  ],
  onActionPress: (item) => console.log('Action Pressed', item),
  onCardPress: (item) => console.log('Card Pressed', item),
  showLine: false,
  hideIcon: true,
  showInfo: false,
  isAlert: true,
  timelineGreyed: false,
  actionDisabled: true,
  showStatus: false,
  notificationText: null,
  showPreBookingCard: false,
  hideChevron: false,
};

export default flightItineraryCardProps;
