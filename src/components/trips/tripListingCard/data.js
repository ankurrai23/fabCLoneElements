const tripListingCardProps = {
  item: {
    masterTripId: 'TP962KDG',
    tripRequestType: 'FLIGHT_AND_HOTEL',
    title: 'Trip to Gurgaon',
    isProcessing: false,
    coTravellers: null,
    subTripsIcon: [
      // {key: 'TRAIN'},
      {key: 'HOTEL'},
      // {key: 'CAB'},
      {key: 'BUS'},
      {key: 'FLIGHT'},
    ],
    tripStartDate: 'Thu, 22 Nov',
    tripEndDate: 'Thu, 23 Nov',
    bookingStatus: 'CONFIRMED',
    tripIcons: [{}, {}, {}],
    isCancelled: false,
    cancelMsg: 'This trip is cancelled',
    actionsDisabled: true,
  },
  onCardPress: (item) => console.log('card pressed', item),
};

export default tripListingCardProps;
