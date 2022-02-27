export default {
  data: {
    bookingId: 'QHS12E',
    hotelName: 'Lemon Tree Premier, Mumbai Internation Airport',
    address:
      'Opposite Mittal Industrial Estate, Andheri Kurla Road, Andheri East, Mumbai -400059, Maharashtra',
    directions: '220 m from Marol naka Metro station',
    weather: {
      weatherIcon: '',
      weatherName: 'Cloudy (Current)',
    },
    checkIn: {
      date: 'Tue, 22 Jun',
      time: '1PM',
    },
    checkOut: {
      date: 'Fri, 25 Jun',
      time: '11AM',
    },
    noOfRooms: 1,
    inclusions: [
      {
        icon: '',
        detail: 'Lunch Ala Carte (veg)',
      },
      {
        icon: '',
        detail: 'Lunch Ala Carte (Non veg)',
      },
      {
        icon: '',
        detail: 'Dinner Ala Carte (Non veg)',
      },
      {
        icon: '',
        detail: 'Lunch Ala Carte (veg)',
      },
      {
        icon: '',
        detail: 'Lunch Ala Carte (veg)',
      },
      {
        icon: '',
        detail: 'Lunch Ala Carte (veg)',
      },
    ],
    coTravellers: ['Abhishek Gupta', 'Pranay Shah'],
    paymentStatus: {
      icon: '',
      status: '',
      color: '',
    },
  },
  onModifyPress: () => console.log('Modify button pressed'),
  onCancelPress: () => console.log('Cancel button pressed'),
  onMorePress: () => console.log('More button pressed'),
  onDirectionPress: () => console.log('Directions button pressed'),
};
