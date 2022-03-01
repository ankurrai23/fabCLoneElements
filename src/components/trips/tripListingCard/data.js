const tripListingCardProps = {
  item: {
    tripId: 'TP962KDG',
    requestType: 'FLIGHT_AND_HOTEL',
    title: 'Trip to Gurgaon',
    isProcessing: true,
    coTravellers: 'Rahul Gupta +1',
    tripStartDate: 'Thu, 22 Nov',
    tripEndDate: 'Thu, 23 Nov',
    bookingStatus: 'CONFIRMED',
    tripIcons: [{}, {}, {}],
    isCancelled: true,
    cancelMsg: 'This trip is cancelled',
  },
  onCardPress: () => console.log('card pressed'),
};

export default tripListingCardProps;
