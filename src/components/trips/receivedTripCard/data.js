const receivedTripCardProps = {
  item: {
    masterTripId: 'TP962KDG',
    requestedBy: 'Rohan Srivasatava',
    requestType: 'FLIGHT_AND_HOTEL',
    title: 'Delhi to Mumbai',
    isProcessing: true,
    coTravellers: [],
    tripStartDate: 'Thu, 22 Nov',
    tripEndDate: 'Thu, 23 Nov',
    bookingStatus: 'CONFIRMED',
    subtripsIcon: [
      {key: 'TRAIN'},
      {key: 'HOTEL'},
      {key: 'CAB'},
      {key: 'BUS'},
      {key: 'FLIGHT'},
    ],
    isCancelled: false,
    cancelMsg: 'This trip is cancelled',
    status: {
      key: 'APPROVAL_PENDING',
      value: 'Approval pending',
      textColor: '#ffa239',
      bgColor: '#ffa23915',
    },
    actions: [
      // {
      //   type: 'VIEW_DETAILS',
      //   name: 'View Details',
      // },
      {
        type: 'APPROVE',
        name: 'Approve',
      },
      {
        type: 'DENY',
        name: 'Reject',
      },
    ],
  },
  onCardPress: (item) => console.log('card pressed', item),
  onActionPress: (item) => console.log('Action Pressed', item),
};

export default receivedTripCardProps;
