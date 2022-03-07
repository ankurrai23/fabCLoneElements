const submittedTripCardProps = {
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
    status: {
      key: 'APPROVAL_PENDING',
      value: 'Approval pending',
      textColor: '#ffa239',
      bgColor: '#fef5eb',
    },
    actions: [
      {
        type: 'SEND_REMINDER',
        name: 'Send Reminder',
      },
      {
        type: 'VIEW_OPTIONS',
        name: 'View options',
      },
    ],
  },
  onCardPress: (item) => console.log('card pressed', item),
  onActionPress: (item) => console.log('Action Pressed', item),
};

export default submittedTripCardProps;
