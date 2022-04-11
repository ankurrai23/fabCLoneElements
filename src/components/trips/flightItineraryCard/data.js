const flightItineraryCardProps = {
  item: {
    date: '22',
    month: 'Nov',
    slotDetail: 'Slot: 6PM - 9PM',
    source: 'Delhi',
    destination: 'Mumbai',
    sourceAirportCode: 'BOM - T3',
    destinationAirportCode: 'BLR - T2',
    departureTime: '18:30',
    arrivalTime: '22:30',
    flightNumber: '717',
    pnr: 'GBLP6Q',
    duration: '1h 50min',
    airline: 'Indigo',
    actionDisabled: false,
    stop: 'Non stop',
    status: {
      key: 'PROCESSED',
      value: 'Processed',
      textColor: '#d65656',
      bgColor: '#d656561a',
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
  },
  onActionPress: (item) => console.log('Action Pressed', item),
  onCardPress: (item) => console.log('Card Pressed', item),
  showLine: true,
  hideIcon: false,
  showInfo: false,
  preferenceSelected: true,
  timelineGreyed: false,
  processed: true,
};

export default flightItineraryCardProps;
