const addHotelDetailsProps = {
  data: {
    city: {
      city: 'Mumbai',
      cityLat: '0.987654',
      cityLon: '12.34455',
      cityPlaceId: '1231SDasd',
    },
    preferredLocality: {
      location: 'Andheri East',
      locationLat: '0.98765',
      locationLon: '12.3456',
      placeId: '1231SDasd',
      placeDetails: 'near adventure park ahead of lake',
    },
    checkInDate: null,
    checkOutDate: null,
  },
  errors: {
    city: false,
    preferredLocality: false,
    checkInDate: false,
    checkOutDate: false,
  },
  onSubmit: () => console.log('submit hotal data'),
  openGoogleSearch: () => console.log('open location'),
  openCheckInDatePicker: () => console.log('checkin date'),
  openCheckOutDatePicker: () => console.log('checkout date'),
  showLocation: true,
};

export default addHotelDetailsProps;
