const hotelFilterProps = {
  sortData: [
    {
      id: 'NON_STOP',
      value: 'Non-stop',
      selected: false,
    },
    {
      id: 'EARLIEST_FIRST',
      value: 'Earliest first',
      selected: true,
    },
    {
      id: 'CHEAPEST_FIRST',
      value: 'Cheapest first',
      selected: false,
    },
    {
      id: 'NON_STOP1',
      value: 'Non-stop',
      selected: false,
    },
  ],
  filterData: {
    entitlement: [
      {
        id: 'IN_POLICY',
        value: 'In policy',
        selected: true,
      },
      {
        id: 'OUT_OF_POLICY',
        value: 'Out of policy',
        selected: false,
      },
    ],
    preferredType: [
      {
        id: 'CONTRACTED_RATE',
        value: 'Contracted rate',
        selected: false,
      },
      {
        id: 'TRAVELPLUS_PREFERRED',
        value: 'TravelPlus preferred',
        selected: false,
      },
    ],
    starRating: [
      {
        id: '2',
        starRating: '<2',
        selected: true,
      },
      {
        id: '3',
        starRating: '3',
        selected: false,
      },
      {
        id: '4',
        starRating: '4',
        selected: true,
      },
      {
        id: '5',
        starRating: '5',
        selected: false,
      },
    ],
    priceData: {
      minLimit: 2000,
      maxLimit: 40000,
      granularity: 400,
      minValue: 6000,
      maxValue: 13000,
      onChange: (initialValue, finalValue) =>
        console.log('slider moved', initialValue, finalValue),
    },
  },
};

export default hotelFilterProps;
