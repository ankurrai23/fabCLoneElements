const flightFilterProps = {
  sortData: [
    {
      key: 'NON_STOP',
      value: 'Non-stop',
      selected: false,
    },
    {
      key: 'EARLIEST_FIRST',
      value: 'Earliest first',
      selected: true,
    },
    {
      key: 'CHEAPEST_FIRST',
      value: 'Cheapest first',
      selected: false,
    },
    {
      key: 'NON_STOP1',
      value: 'Non-stop',
      selected: false,
    },
  ],
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
        name: 'Stop',
        selected: true,
      },
      {
        id: 'MULTI_STOP',
        noOfStops: '1+',
        name: 'Stops',
        selected: false,
      },
    ],
    entitlement: [
      {
        id: 'INPOLICY',
        name: 'In policy',
        selected: true,
      },
      {
        id: 'OUTOFPOLICY',
        name: 'Out of policy',
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
      // {
      //   airlineName: 'Spice Jet',
      //   airlineIcon:
      //     'https://storage.googleapis.com/fabm-test-uploader/airline_logo/SG.png',
      //   selected: false,
      // },
      // {
      //   airlineName: 'Air india',
      //   airlineIcon:
      //     'https://storage.googleapis.com/fabm-test-uploader/airline_logo/SG.png',
      //   selected: false,
      // },
      // {
      //   airlineName: 'Indigo',
      //   airlineIcon:
      //     'https://storage.googleapis.com/fabm-test-uploader/airline_logo/SG.png',
      //   selected: false,
      // },
      // {
      //   airlineName: 'Spice Jet',
      //   airlineIcon:
      //     'https://storage.googleapis.com/fabm-test-uploader/airline_logo/SG.png',
      //   selected: false,
      // },
    ],
  },
  onSortSelect: (item) => console.log('sort selected', item),
  onApply: (item) => console.log('apply clicked', item),
};

export default flightFilterProps;
