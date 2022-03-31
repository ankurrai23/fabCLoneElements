const hotelItineraryCardProps = {
  item: {
    checkIn: {date: '28', month: 'Nov'},
    checkOut: {date: '29', month: 'Nov'},
    title: 'Mumbai',
    location: 'Andheri East',
    checkInTime: '1AM',
    status: {
      key: 'APPROVAL_PENDING',
      value: 'Cancelled',
      textColor: '#d65656',
      bgColor: '#d656561a',
    },
    actionsDisabled: true,
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
  hideIcon: true,
  showLine: false,
  showInfo: false,
  preferenceSelected: false,
  processed: false,
  timelineGreyed: false,
  showConfirmedStatus: true,
};

export default hotelItineraryCardProps;
