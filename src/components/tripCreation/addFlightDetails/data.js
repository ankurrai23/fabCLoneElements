const addFlightDetailsProps = {
  tripType: 0,
  errors: {
    onwardFrom: false,
    onwardTo: false,
    onwardDepatureDate: false,
    onwoardFromTime: false,
    onwardToTime: false,
    returnFrom: false,
    returnTo: false,
    returnDepatureDate: false,
    returnFromTime: false,
    returnToTime: false,
  },
  flightDetails: [
    // default empty array, first position will be onward and second position will be treated as return flight
    {
      startTime: null,
      endTime: null,
      departureDate: null,

      source: 'Delhi',
      sourceAirportCode: 'DEL',
      sourcePlaceId: 'S123',

      destination: 'Mumbai',
      destinationAirportCode: 'BOM',
      destinationPlaceId: 'D123',
      // "type": "ONWARD",    // ONWARD, RETURN
    },
    {},
  ],
  onSubmit: () => console.log('submit flight detail'),
  openGoogleSearchOnwardFrom: () => console.log('onward from'),
  openGoogleSearchOnwardTo: () => console.log('onward to'),
  openGoogleSearchReturnFrom: () => console.log('return from'),
  openGoogleSearchReturnTo: () => console.log('return to'),
  onWardStartTimePicker: () => console.log('onward start time'),
  onWardEndTimePicker: () => console.log('onward end time'),
  returnStartTimePicker: () => console.log('return start time'),
  returnEndTimePicker: () => console.log('return end time'),
  openDatePickeronWord: () => console.log('onward date'),
  openDatePickerreturn: () => console.log('return date'),
};

export default addFlightDetailsProps;
