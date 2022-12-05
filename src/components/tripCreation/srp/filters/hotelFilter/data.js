const hotelFilterProps = {
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
  preferredTypeData: [
    {
      key: 'CONTRACTED_RATE',
      value: 'Contracted rate',
      isSelected: false,
    },
    {
      key: 'TRAVELPLUS_PREFERRED',
      value: 'TravelPlus preferred',
      isSelected: false,
    },
  ],
  hotelRatingData: [
    {
      starRating: '<2',
      isSelected: true,
    },
    {
      starRating: '3',
      isSelected: false,
    },
    {
      starRating: '4',
      isSelected: true,
    },
    {
      starRating: '5',
    },
  ],
};

export default hotelFilterProps;
