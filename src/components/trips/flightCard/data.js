const flightCardProps = {
  item: {
    date: '22 Nov',
    flightName: 'Indigo: 6E 2033',
    boardingPort: 'BOM',
    arrivalPort: 'BLR',
    boardingTime: '18:30',
    arrivalTime: '20:20',
    terminal: 'T3',
    pnr: 'GBLP6Q',
    flightDuration: '1h 50m',
    actionsDisabled: false,
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
  onInfoPress: () => console.log('Info Pressed'),
  modified: false,
  itineraryView: true,
  showLine: true,
  showInfo: true,
  preferenceSelected: true,
};

export default flightCardProps;
