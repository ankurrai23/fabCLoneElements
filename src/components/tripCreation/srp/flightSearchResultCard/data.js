const flightSearchResultCardProps = {
  flightInfo: {
    airline: 'Air Asia',
    flightNumber: '113',
    airlineCode: 'G8',
    airlineIcon:
      'https://storage.googleapis.com/fabm-test-uploader/airline_logo/SG.png',
    price: '₹2600',
    departureTime: '18:30',
    sourceAirportCode: 'DEL',
    arrivalTime: '20:20',
    destinationAirportCode: 'BOM',
    flightDuration: '1h 50 mins',
    stops: 'Non stop',
    isOutOfPolicy: true,
  },
  onPress: () => console.log('Card Pressed'),
};

export default flightSearchResultCardProps;
