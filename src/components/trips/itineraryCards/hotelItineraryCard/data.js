const hotelItineraryCardProps = {
  status: {
    key: 'APPROVAL_PEnDING',
    value: 'Approval pending',
    textColor: '#d65656',
    bgColor: '#d656561a',
  },
  tripRequest: {
    checkIn: {date: '8', month: 'Oct', year: '22'},
    checkOut: {date: '29', month: 'Nov', year: '22'},
    title: 'Lemon Tree Premier Hotel',
    checkInTime: null,
    location: 'Andheri East, Mumbai',
    roomTypeName: 'Deluxe room',
    ratePlanName: 'Room with breakfast and meals',
    reduceOpacity: false,
    price: '₹3600',
    gstIncluded: false,
    isOutOfPolicy: true,
    isSoldOut: true,
    isPriceFetched: true,
  },
  bookingDetails: {
    checkIn: {date: '8', month: 'Oct', year: '22'},
    checkOut: {date: '29', month: 'Nov', year: '22'},
    title: 'Lemon Tree Premier Hotel',
    location: 'Andheri East, Mumbai',
    checkInTime: '1AM',
    roomTypeName: 'Deluxe room',
    ratePlanName: 'Room with breakfast and meals',
    reduceOpacity: false,
    isOutOfPolicy: false,
    price: '₹3600',
    bookingId: 'AZCD123',
    isSoldOut: false,
    gstIncluded: false,
    remarks: 'Room with breakfast and meals',
    isPriceFetched: true,
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
  showPreBookingCard: false,
  showConfirmedStatus: false,
  hideChevron: true,
};

export default hotelItineraryCardProps;
