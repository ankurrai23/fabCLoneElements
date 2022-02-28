const hotelCardProps = {
  item: {
    date: '22-25',
    month: 'Nov',
    title: 'Taj Continental',
    location: 'Lower Parel',
    checkInTime: '1AM',
    status: {
      type: 'PROCESSED',
      text: 'Processed',
      color: '#000000',
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
    ],
  },
  onActionPress: () => console.log('Action Pressed'),
  onCardPress: () => console.log('Card Pressed'),
  onInfoPress: () => console.log('Info Pressed'),
  itineraryView: true,
  showLine: true,
  showInfo: false,
  preferenceSelected: false,
};

export default hotelCardProps;
