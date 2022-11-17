const cabDetailCardProps = {
  bookingDetails: {
    cabBookingStatus: 'CONFIRMED',
    date: '22',
    month: 'Nov',
    source: 'Mumbai',
    destination: 'Lonavala',
    sourceLocality: 'Mumbai Airport',
    destinationLocality: 'Tungarli road',
    departureTime: '18:30',
    arrivalTime: '22:30',
    estimateDuration: '1h 50min',
    vehicleDetails: [
      {
        carName: 'White Hyundai Grand i10',
        vehicleNumber: 'MH 12A 2345',
        driverName: 'Mr. Arvind Swami',
        driverPhone: '7988380849',
        countryCode: '+91',
        bookingId: '12345',
      },
      {
        carName: 'White Hyundai Grand i10',
        vehicleNumber: 'MH 12A 2345',
        driverName: 'Mr. Arvind Swami',
        countryCode: '+91',
        driverPhone: '7988380849',
        bookingId: '12345',
      },
    ],
    reduceOpacity: false,
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
  onPhoneNumberClicked: () => console.log('phoneNumber clicked'),
  actionDisabled: false,
  notificationText: 'Some thing to notify',
};

export default cabDetailCardProps;
