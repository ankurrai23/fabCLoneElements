const flightDetailsProps = {
  data: [
    {
      startTime: '09:00 AM',
      endTime: '09:00 AM',
      departureDate: '16 feb 22',

      source: 'Delhi',
      sourceAirportCode: 'DEL',
      sourcePlaceId: 'S123',

      destination: 'Mumbai',
      destinationAirportCode: 'BOM',
      destinationPlaceId: 'D123',
      // "type": "ONWARD",    // ONWARD, RETURN
    },
    {
      startTime: '09:00 AM',
      endTime: '09:00 AM',
      returnDate: '18 feb 22',

      source: 'Mumbai',
      sourceAirportCode: 'BOM',
      sourcePlaceId: 'S123',

      destination: 'Delhi',
      destinationAirportCode: 'DEL',
      destinationPlaceId: 'D123',
      // "type": "ONWARD",    // ONWARD, RETURN
    },
  ],
  tripType: 0,
  requestType: 'FLIGHT',
};

export default flightDetailsProps;
