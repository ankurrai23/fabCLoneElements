const hotelPreferenceCardProps = {
  item: {
    preferenceText: 'TravelPlus preferred',
    hotelImages: [
      'https://images.livemint.com/rf/Image-621x414/LiveMint/Period2/2018/10/18/Photos/Processed/fabhotels-kgmE--621x414@LiveMint.jpg',
      'https://images.livemint.com/rf/Image-621x414/LiveMint/Period2/2018/10/18/Photos/Processed/fabhotels-kgmE--621x414@LiveMint.jpg',
      'https://images.livemint.com/rf/Image-621x414/LiveMint/Period2/2018/10/18/Photos/Processed/fabhotels-kgmE--621x414@LiveMint.jpg',
      'https://images.livemint.com/rf/Image-621x414/LiveMint/Period2/2018/10/18/Photos/Processed/fabhotels-kgmE--621x414@LiveMint.jpg',
    ],
    starRating: 2,
    hotelName: 'Lemon Tree Premier',
    hotelAddress:
      'Andheri - Kurla Rd, opposite Mittal Industrial Estate, Gamdevi, Marol, …',
    distanceToProperty: '220 m from Marol naka Metro Station',
    cost: '₹260923',
    ratingScore: 80,
    reviewsCount: '4.5/5 (134 reviews)',
    colleaguesCount: 22,
    colleaguesRatingAvg: 4.2,
    googleMapUrl: 'https://www.google.com',
    preference: 5,
    includesBreakfast: true,
    cancellationText: 'Free cancellation before 12 Nov',
    disablePref: true,
  },
  onTapToSetPreferences: () => console.log('preferences tapped'),
  onViewMapPress: (item) => console.log(item),
  onCardPress: (item) => console.log('Card pressed'),
  offline: false,
};

export default hotelPreferenceCardProps;
