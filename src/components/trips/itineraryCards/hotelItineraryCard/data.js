const hotelItineraryCardProps = {
  status: {
    key: 'CANCELLED',
    value: 'Cancelled',
    textColor: '#d65656',
    bgColor: '#d656561a',
  },
  tripRequest: {
    checkIn: {date: '8', month: 'Oct'},
    checkOut: {date: '29', month: 'Nov'},
    title: 'Mumbai',
    location: 'Andheri East',
    reduceOpacity: false,
  },
  bookingDetails: {
    checkIn: {date: '8', month: 'Oct'},
    checkOut: {date: '29', month: 'Nov'},
    title: 'Mumbai',
    location: 'Andheri East',
    checkInTime: '1AM',
    reduceOpacity: false,
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
  onActionPress: (action) => console.log('Action Pressed'),
  onCardPress: () => console.log('Card Pressed'),
  hideIcon: false,
  showLine: true,
  showInfo: false,
  timelineGreyed: false,
  showPreBookingCard: true,
  showConfirmedStatus: false,
  hideChevron: false,
};

export default hotelItineraryCardProps;
