const basicTravelDetailsProps = {
  errors: {
    sourceError: false,
    destinationError: false,
    defatureDateError: false,
    returnDateError: false,
  },
  data: {
    source: {name: 'Mumbai', id: 'WR34598'},
    destination: {name: 'Delhi', id: 'WER3456'},
    departureDate: '22 feb 22',
    returnDate: '26 feb 22',
  },
  tripType: 2,
  requestType: 'HOTEL',
  openSourceGoogleSearch: () => console.log('source location api'),
  openDestinationGoogleSearch: () => console.log('destination location api'),
  openDepatureDatePicker: () => console.log('Depature time'),
  openReturnDatePicker: () => console.log('return time'),
};

export default basicTravelDetailsProps;
