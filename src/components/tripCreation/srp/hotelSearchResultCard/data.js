const hotelSearchResultCardProps = {
  item: {
    preferenceText: 'TravelPlus preferred',
    rateType: 'Contracted rate',
    hotelImages: [
      'https://images.livemint.com/rf/Image-621x414/LiveMint/Period2/2018/10/18/Photos/Processed/fabhotels-kgmE--621x414@LiveMint.jpg',
      'https://pimg.fabhotels.com/propertyimages/751/images/photos-fabhotel-west-inn-mumbai-Hotels_1646734398021.jpg',
      'https://pimg.fabhotels.com/propertyimages/751/images/photos-fabhotel-west-inn-mumbai-Hotels_1659005712181.jpg',
      'https://pimg.fabhotels.com/propertyimages/751/images/photos-fabhotel-west-inn-mumbai-Hotels_1659005715974.jpg',
    ],
    starRating: 5,
    hotelName: 'Lemon Tree Premier',
    hotelAddress:
      'Andheri - Kurla Rd, opposite Mittal Industrial Estate, Gamdevi, Marol, Andheri East, Mumbai, Maharashtra 400059',
    cost: '₹2603',
    ratingScore: 4.1,
    reviewsCount: '4.5/5 (134 reviews)',
    colleaguesCount: 5,
    colleaguesRatingAvg: 4.2,
    googleMapUrl: 'https://www.google.com',
    preference: 5,
    cancellationText: 'Free cancellation before 12 Nov',
    gstIncluded: true,
    isOutOfPolicy: true,
  },
  onCardPress: (item) => console.log('Card pressed'),
};

export default hotelSearchResultCardProps;
