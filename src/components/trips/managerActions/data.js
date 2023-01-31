const managerActionsProps = {
  msg: {
    value: 'Flight is sold out. Please notify Nikhil',
    type: 'ERROR', // INFO/ERROR
  },
  isSubTripSoldOut: true,
  amount: '$100',
  actions: [
    {
      type: 'REQUEST_MODIFICATION',
      name: 'Request for modification',
    },
    {
      type: 'APPROVE',
      name: 'Approve',
    },
    {
      type: 'DENY',
      name: 'Deny',
    },
  ],
  onApprove: () => console.log('approve pressed'),
};

export default managerActionsProps;
