const cabItineraryCardProps = {
  tripRequest: {
    date: '22',
    month: 'Nov',
    year: '22',
    pickupTime: '07:00 PM',
    source: 'Mumbai flsfjldkfjlsdkjflsdfjlsdjffjlskdfj',
    destination: 'Lonavala fjlskfjsdlfjdslkfjsd ',
    sourceLocality: 'Mumbai Airport fdkfjsldjfsldfjs',
    destinationLocality: 'Tungarli road skfjsdlfjsldfjsdlkfj',
    reduceOpacity: true,
  },
  status: {
    key: 'PROCESSED',
    value: 'Processed',
    textColor: '#d65656',
    bgColor: '#d656561a',
  },
  bookingDetails: {
    cabBookingStatus: 'CONFIRMED',
    date: '22',
    month: 'Nov',
    year: '22',
    source: 'Mumbai',
    destination: 'Lonavala',
    sourceLocality: 'Mumbai Airport',
    destinationLocality: 'Tungarli road',
    departureTime: '18:30',
    arrivalTime: '22:30',
    estimateDuration: '1h 50min',
    vehicleDetails: [
      {
        vehicleName: 'White Hyundai Grand i10 Nios ',
        vehicleNumber: 'MH 12A 2345 ',
        bookingId: '1234567',
      },
      {
        vehicleName: 'White Hyundai Grand i10 Nios ',
        vehicleNumber: 'MH 12A 2345 ',
        bookingId: '1234567',
      },
      {
        vehicleName: 'White Hyundai Grand i10 Nios ',
        vehicleNumber: 'MH 12A 2345 ',
        bookingId: '1234567',
      },
    ],
    reduceOpacity: true,
  },
  remarks: {
    title: 'Remarks',
    text: 'Change of plans',
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
    // {
    //   type: FlightSubTripActions.CANCELLATION_REQUESTED,
    //   name: 'You have sent a modification request for this booking.',
    // },
  ],
  onActionPress: (item) => console.log('Action Pressed', item),
  onCardPress: (item) => console.log('Card Pressed', item),
  showLine: true,
  hideIcon: false,
  showInfo: false,
  isAlert: true,
  notificationText: 'This is notification text',
  timelineGreyed: false,
  actionDisabled: false,
  showStatus: false,
  showPreBookingCard: true,
  hideChevron: false,
};

export default cabItineraryCardProps;
