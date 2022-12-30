const hotelFilterProps = {
  sortData: [
    {
      key: 'CHEAPEST',
      value: 'Cheapest',
      selected: false,
    },
    {
      key: 'POPULAR',
      value: 'Popular',
      selected: true,
    },
    {
      key: 'HIGHEST_RATING',
      value: 'Highest rating',
      selected: false,
    },
  ],
  filterData: {
    entitlement: [
      {
        id: 'INPOLICY',
        value: 'In policy',
        selected: true,
      },
      {
        id: 'OUTOFPOLICY',
        value: 'Out of policy',
        selected: false,
      },
    ],
    travelPlusPreferredFilter: false,
    contractedRatePreferredFilter: false,
    starRatings: [
      {
        id: '1',
        name: '1 Star',
        selected: false,
      },
      {
        id: '2',
        name: '2 Star',
        selected: false,
      },
      {
        id: '3',
        name: '3 Star',
        selected: false,
      },
      {
        id: '4',
        name: '4 Star',
        selected: false,
      },
      {
        id: '5',
        name: '5 Star',
        selected: false,
      },
    ],
    priceData: {
      minLimit: 0,
      maxLimit: 1000000,
      granularity: 100,
      minValue: 0,
      maxValue: 1000000,
      changed: false,
    },
  },
};

export default hotelFilterProps;
