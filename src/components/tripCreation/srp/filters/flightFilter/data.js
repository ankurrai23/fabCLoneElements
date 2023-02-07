const flightFilterProps = {
  quickLinks: [
    {
      key: 'NON_STOP',
      value: 'Non-stop',
      selected: false,
      type: 'FILTER',
    },
    {
      key: 'EARLIEST_FIRST',
      value: 'Earliest first',
      selected: true,
      type: 'SORT',
    },
    {
      key: 'CHEAPEST_FIRST',
      value: 'Cheapest first',
      selected: false,
      type: 'SORT',
    },
    {
      key: 'NON_STOP1',
      value: 'Non-stop',
      selected: false,
      type: 'SORT',
    },
  ],
  showOOP: true,
  filterData: {
    stop: [
      {
        id: 'NON_STOP',
        noOfStops: '0',
        name: 'Non stop',
        selected: false,
      },
      {
        id: 'ONE_STOP',
        noOfStops: '1',
        name: '1 Stop',
        selected: true,
      },
      {
        id: 'MULTI_STOP',
        noOfStops: '1+',
        name: '1+ Stops',
        selected: false,
      },
    ],
    filterAirline: [
      {
        id: 'SpiceJet',
        icon:
          'https://storage.googleapis.com/fabm-test-uploader/airline_logo/SG.png',
        name: 'SpiceJet',
        selected: true,
      },
      {
        id: 'Indigo',
        icon:
          'https://storage.googleapis.com/fabm-test-uploader/airline_logo/6E.png',
        name: 'Indigo',
        selected: false,
      },
      {
        id: 'AirIndia',
        icon:
          'https://storage.googleapis.com/fabm-test-uploader/airline_logo/SG.png',
        name: 'Air India',
        selected: false,
      },
      {
        id: 'Vistara',
        icon:
          'https://storage.googleapis.com/fabm-test-uploader/airline_logo/6E.png',
        name: 'Vistara',
        selected: false,
      },
      {
        id: 'GoAir',
        icon:
          'https://storage.googleapis.com/fabm-test-uploader/airline_logo/6E.png',
        name: 'Go Air',
        selected: false,
      },
      {
        name: 'Spice Jet',
        icon:
          'https://storage.googleapis.com/fabm-test-uploader/airline_logo/SG.png',
        selected: false,
      },
      {
        name: 'Air india',
        icon:
          'https://storage.googleapis.com/fabm-test-uploader/airline_logo/SG.png',
        selected: false,
      },
      {
        name: 'Indigo',
        icon:
          'https://storage.googleapis.com/fabm-test-uploader/airline_logo/SG.png',
        selected: false,
      },
      {
        name: 'Spice Jet',
        icon:
          'https://storage.googleapis.com/fabm-test-uploader/airline_logo/SG.png',
        selected: false,
      },
    ],
  },
  onQuickLinkSelect: (item) => console.log('sort selected', item),
  onApply: (item) => console.log('apply clicked', item),
};

export default flightFilterProps;
