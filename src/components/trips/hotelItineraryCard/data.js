const hotelItineraryCardProps = {
  item: {
    date: '22-25',
    month: 'Nov',
    title: 'Mumbai',
    location: 'Andheri East',
    // checkInTime: '1AM',
    // status: {
    //   type: 'PROCESSED',
    //   text: 'Processed',
    //   color: '#000000',
    // },
    actionsDisabled: true,
    actions: [
      {
        type: 'MODIFY',
        name: 'Modify',
      },
      {
        type: 'CANCEL',
        name: 'Cancel',
      },
    ],
  },
  onActionPress: () => console.log('Action Pressed'),
  onCardPress: () => console.log('Card Pressed'),
  onInfoPress: () => console.log('Info Pressed'),
  showLine: true,
  showInfo: false,
  preferenceSelected: false,
};

export default hotelItineraryCardProps;
