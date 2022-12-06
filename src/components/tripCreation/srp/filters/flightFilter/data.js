const flightFilterProps = {
  sortData: [
    {
      key: 'NON_STOP',
      value: 'Non-stop',
      isSelected: false,
    },
    {
      key: 'EARLIEST_FIRST',
      value: 'Earliest first',
      isSelected: true,
    },
    {
      key: 'CHEAPEST_FIRST',
      value: 'Cheapest first',
      isSelected: false,
    },
    {
      key: 'NON_STOP1',
      value: 'Non-stop',
      isSelected: false,
    },
  ],
  stopsData: [
    {
      noOfStops: '0',
      desc: 'Non stop',
      isSelected: false,
    },
    {
      noOfStops: '1',
      desc: 'Stop',
      isSelected: true,
    },
    {
      noOfStops: '1+',
      desc: 'Stops',
      isSelected: false,
    },
  ],
  entitlementData: [
    {
      key: 'IN_POLICY',
      value: 'In policy',
      isSelected: true,
    },
    {
      key: 'OUT_OF_POLICY',
      value: 'Out of policy',
      isSelected: false,
    },
  ],
  airlineData: [
    {
      airlineName: 'Air india',
      airlineIcon:
        'https://storage.googleapis.com/fabm-test-uploader/airline_logo/SG.png',
      isSelected: false,
    },
    {
      airlineName: 'Indigo',
      airlineIcon:
        'https://storage.googleapis.com/fabm-test-uploader/airline_logo/SG.png',
      isSelected: false,
    },
    {
      airlineName: 'Spice Jet',
      airlineIcon:
        'https://storage.googleapis.com/fabm-test-uploader/airline_logo/SG.png',
      isSelected: true,
    },
    {
      airlineName: 'Air india',
      airlineIcon:
        'https://storage.googleapis.com/fabm-test-uploader/airline_logo/SG.png',
      isSelected: false,
    },
    {
      airlineName: 'Indigo',
      airlineIcon:
        'https://storage.googleapis.com/fabm-test-uploader/airline_logo/SG.png',
      isSelected: false,
    },
    // {
    //   airlineName: 'Spice Jet',
    //   airlineIcon:
    //     'https://storage.googleapis.com/fabm-test-uploader/airline_logo/SG.png',
    //   isSelected: false,
    // },
    // {
    //   airlineName: 'Air india',
    //   airlineIcon:
    //     'https://storage.googleapis.com/fabm-test-uploader/airline_logo/SG.png',
    //   isSelected: false,
    // },
    // {
    //   airlineName: 'Indigo',
    //   airlineIcon:
    //     'https://storage.googleapis.com/fabm-test-uploader/airline_logo/SG.png',
    //   isSelected: false,
    // },
    // {
    //   airlineName: 'Spice Jet',
    //   airlineIcon:
    //     'https://storage.googleapis.com/fabm-test-uploader/airline_logo/SG.png',
    //   isSelected: false,
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
