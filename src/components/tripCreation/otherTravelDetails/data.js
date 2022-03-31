const otherTravelDetailsProps = {
  purposeOfTravel: [
    {
      key: 'Client meeting',
      value: 'Client meeting',
    },
    {
      key: 'Hotel Booking',
      value: 'Hotel Booking',
    },
    {
      key: 'Flight Booking',
      value: 'Flight Booking',
    },
    {
      key: 'Go Outside',
      value: 'Go Outside',
    },
    {
      key: 'None Of ',
      value: 'None Of ',
    },
  ],
  selectedValue: {key: null, value: null},
  _onPressApply: (value) => console.log('apply', value),
};

export default otherTravelDetailsProps;