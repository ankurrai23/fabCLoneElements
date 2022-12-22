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
  stopsData: [
    {
      noOfStops: '0',
      name: 'Non stop',
      selected: false,
    },
    {
      noOfStops: '1',
      name: 'Stop',
      selected: true,
    },
    {
      noOfStops: '1+',
      name: 'Stops',
      selected: false,
    },
  ],
  entitlement: [
    {
      id: 'IN_POLICY',
      name: 'In policy',
      selected: true,
    },
    {
      id: 'OUT_OF_POLICY',
      name: 'Out of policy',
      selected: false,
    },
  ],
  airline: [
    {
      id: 'SpiceJet',
      icon:
        'https://storage.googleapis.com/fabm-test-uploader/airline_logo/SG.png',
      name: 'SpiceJet',
      selected: false,
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
  onSortSelect: (item) => console.log('sort selected', item),
  onStopSelect: (item) => console.log('stop selected', item),
  onAirlineSelect: (item) => console.log('airplane selected', item),
  onEntitlementSelect: (item) => console.log('entitlement select', item),
  onApply: () => console.log('apply clicked'),
  onClearAll: () => console.log('clear all clicked'),
};

export default flightFilterProps;
