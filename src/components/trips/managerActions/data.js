const managerActionsProps = {
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
