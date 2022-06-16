const itineraryCardProps = {
  itinerary: {
    sourceCity: 'Delhi',
    sourceCityLat: 28.6,
    sourceCityLon: 122.6,
    sourceCityPlaceId: '1231SDasd',
    sourceCityAirportCode: 'DEL',
    destinationCity: 'Mumbai',
    destinationCityLat: 28.6,
    destinationCityLon: 122.6,
    destinationCityPlaceId: '1231SDasd',
    destinationCityAirportCode: 'BOM',
    departureDate: '2022-04-28',
    returnDate: '2022-04-28',
  },
  showSaveButton: true,
  showReturnDate: true,
  shouldCollapse: false,
  editClicked: (index) => {
    console.log('edit clicked for ', index);
  },
  pickerFieldClicked: (cardIndex, fieldName) => {
    console.log(
      `picker field clicked for index = ${cardIndex} & field = ${fieldName}`,
    );
  },
  saveClicked: (cardIndex, itinerary) => {
    console.log(`save clicked for ${cardIndex} with data = ${itinerary}`);
  },
  label: 'Itinerary 1',
  index: 0,
  // errors
};

export default itineraryCardProps;
