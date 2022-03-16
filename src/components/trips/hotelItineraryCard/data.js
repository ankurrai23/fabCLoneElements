const hotelItineraryCardProps = {
  item: {
    date: '22-25',
    month: 'Nov',
    title: 'Mumbai',
    location: 'Andheri East',
    checkInTime: '1AM',
    status: {
      key: 'CANCELLED',
      value: 'Cancelled',
      textColor: '#d65656',
      bgColor: '#d656561a',
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
  hideIcon: false,
  showLine: true,
  showInfo: false,
  preferenceSelected: false,
  processed: true,
  timelineGreyed: false,
};

export default hotelItineraryCardProps;
