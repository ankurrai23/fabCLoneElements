const hotelItineraryCardProps = {
  item: {
    date: '22-25',
    month: 'Nov',
    title: 'Mumbai',
    location: 'Andheri East',
    checkInTime: '1AM',
    status: {
      type: 'CANCELLED',
      text: 'Cancelled',
      color: '#000000',
    },
    actionsDisabled: false,
    actions: [
      {
        type: 'MODIFY',
        name: 'Modify',
      },
      {
        type: 'CANCEL',
        name: 'Cancel',
      },
      {
        type: 'DIRECTION',
        name: 'Directions',
      },
    ],
  },
  onActionPress: (action) => console.log('Action Pressed'),
  onCardPress: () => console.log('Card Pressed'),
  onInfoPress: () => console.log('Info Pressed'),
  showLine: true,
  showInfo: false,
  preferenceSelected: false,
  processed: true,
};

export default hotelItineraryCardProps;
