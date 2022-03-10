import {Color} from '../../../utils/color';

export default {
  data: {
    bookingId: 'QHS12E',
    hotelName: 'Lemon Tree Premier, Mumbai Internation Airport',
    mainImage:
      'https://media-cdn.tripadvisor.com/media/photo-s/16/04/49/70/room.jpg',
    address:
      'Opposite Mittal Industrial Estate, Andheri Kurla Road, Andheri East, Mumbai -400059, Maharashtra',
    directions: '220 m from Marol naka Metro station',
    weather: {
      weatherIcon: 'https://static.fabhotels.com/weather-icon/clear-sky.png',
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
        icon: 'https://static.fabhotels.com/weather-icon/clear-sky.png',
        detail: 'Lunch Ala Carte (veg)',
      },
      {
        icon: 'https://static.fabhotels.com/weather-icon/clear-sky.png',
        detail: 'Lunch Ala Carte (Non veg)',
      },
      {
        icon: 'https://static.fabhotels.com/weather-icon/clear-sky.png',
        detail: 'Dinner Ala Carte (Non veg)',
      },
      {
        icon: 'https://static.fabhotels.com/weather-icon/clear-sky.png',
        detail: 'Lunch Ala Carte (veg)',
      },
      {
        icon: 'https://static.fabhotels.com/weather-icon/clear-sky.png',
        detail: 'Lunch Ala Carte (veg)',
      },
      {
        icon: 'https://static.fabhotels.com/weather-icon/clear-sky.png',
        detail: 'Lunch Ala Carte (veg)',
      },
    ],
    coTravellers: ['Abhishek Gupta', 'Pranay Shah'],
    paymentStatus: {
      statusText: 'payment pending',
      color: Color.MANGO,
      icon: 'info',
    },
    actions: [
      {
        type: 'MODIFY',
        name: 'Modify',
      },
      {
        type: 'CANCEL',
        name: 'Cancel',
      },
      {
        type: 'DIRECTION',
        name: 'Directions',
      },
    ],
  },
  onActionPress: (item) => console.log(item),
  onMainImagePress: () => console.log('image press'),
};
