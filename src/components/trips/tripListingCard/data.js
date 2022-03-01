const tripListingCardProps = {
  item: {
    masterTripId: 'TP962KDG',
    requestType: 'FLIGHT_AND_HOTEL',
    title: 'Trip to Gurgaon',
    isProcessing: true,
    coTravellers: ['Rahul Gupta', 'Abhishek Gupta'],
    tripStartDate: 'Thu, 22 Nov',
    tripEndDate: 'Thu, 23 Nov',
    bookingStatus: 'CONFIRMED',
    tripIcons: [{}, {}, {}],
    isCancelled: false,
    cancelMsg: 'This trip is cancelled',
  },
  onCardPress: (item) => console.log('card pressed', item),
};

export default tripListingCardProps;
