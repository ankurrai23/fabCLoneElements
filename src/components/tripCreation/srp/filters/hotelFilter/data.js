const hotelFilterProps = {
  filterData: {
    showOOP: true,
    travelPlusPreferredFilter: false,
    contractedRatePreferredFilter: true,
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
      maxLimit: 100000,
      granularity: 100,
      minValue: 0,
      maxValue: 100000,
      changed: false,
    },
  },
  onApply: (item) => console.log('on filter apply', item),
  onQuickLinkSelect: (item) => console.log('sorted', item),
};

export default hotelFilterProps;
