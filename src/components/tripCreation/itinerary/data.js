const itineraryCardProps = {
  itinerary: {
    source: {
      name: null,
      lat: 28.6,
      lon: 122.6,
      placeId: '1231SDasd',
      airportCode: 'DEL',
      airportName: 'IGI Airport',
      state: '',
      country: '',
      viewport: null,
    },
    destination: {
      name: null,
      lat: 28.6,
      lon: 122.6,
      placeId: '1231SDasd',
      airportCode: 'BOM',
      airportName: 'CSMI Airport',
      state: '',
      country: '',
      viewport: null,
    },
    departureDate: '2022-04-28',
    returnDate: '2022-04-28',
  },
  showSaveButton: true,
  showReturnDate: true,
  shouldCollapse: true,
  showLabel: false,
  showRemove: false,
  editClicked: (index) => {
    console.log('edit clicked for ', index);
  },
  removeClicked: (index) => {
    console.log('remove Itinerary Clicked for', index);
  },
  pickerFieldClicked: (cardIndex, fieldName) => {
    console.log(
      `picker field clicked for index = ${cardIndex} & field = ${fieldName}`,
    );
  },
  saveClicked: (cardIndex, itinerary) => {
    console.log(`save clicked for ${cardIndex} with data = ${itinerary}`);
  },
  label: 'Itinerary 2',
  index: 0,
  errors: {
    itinerarySameError: null,
    departureCityError: 'Please Enter departure city',
    arrivalCityError: 'Please enter arrival city',
    departureDateError: null,
    returnDateError: null,
    itineraryDetailsMissingError:
      'Enter a flight or a hotel in itinerary 2 to proceed',
  },
};

export default itineraryCardProps;
