const hotelItineraryCardProps = {
  item: {
    checkIn: {date: '8', month: 'Oct'},
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
      {
        type: 'VIEW_SHORTLISTED_HOTEL_TRIPS',
        name: 'You have sent a cancellation request for this booking.',
      },
    ],
  },
  onActionPress: (action) => console.log('Action Pressed'),
  onCardPress: () => console.log('Card Pressed'),
  hideIcon: false,
  showLine: true,
  showInfo: true,
  processed: false,
  timelineGreyed: false,
  showConfirmedStatus: true,
};

export default hotelItineraryCardProps;
