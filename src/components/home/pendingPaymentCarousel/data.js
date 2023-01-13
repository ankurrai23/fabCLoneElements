const pendingPaymentCarouselProps = {
  paymentRequests: [
    {
      masterTripId: 'TPZSMYAJ',
      tripTitle: 'Trip to New Delhi',
      start: "06 Jan'23",
      end: "07 Jan'23",
      amount: 1860.32,
      deadline: {
        key: null,
        value: 'Hurry up! Pay before your trip gets cancelled.',
      },
    },
    {
      masterTripId: 'TPZSMYAK',
      tripTitle: 'Trip to New Delhi',
      start: "06 Jan'23",
      end: "07 Jan'23",
      amount: 1860.32,
      deadline: null,
    },
    {
      masterTripId: 'TPZSMYAL',
      tripTitle: 'Trip to New Delhi',
      start: "06 Jan'23",
      end: "07 Jan'23",
      amount: 1860.32,
      deadline: {
        key: '5 hours 26 mins',
        value: 'left to pay. Else trip will be cancelled.',
      },
    },
    {
      masterTripId: 'TPZSMYAM',
      tripTitle: 'Trip to New Delhi',
      start: "06 Jan'23",
      end: "07 Jan'23",
      amount: 1860.32,
      deadline: {
        key: '6 hours 26 mins',
        value: 'left to pay. Else trip will be cancelled.',
      },
    },
    // {
    //   tripId: 'TPX23ND',
    //   tripTitle: 'Delhi to Mumbai +2',
    //   amount: '₹9,000',
    //   tripStartDate: "28 Dec'22",
    //   tripEndDate: "01 Jan'22",
    // },
    // {
    //   tripId: 'TPX23NE',
    //   tripTitle: 'Delhi to Mumbai +2',
    //   amount: '₹9,000',
    //   tripStartDate: "28 Dec'22",
    //   tripEndDate: "01 Jan'22",
    // },
    // {
    //   tripId: 'TPX23NF',
    //   tripTitle: 'Delhi to Mumbai +2',
    //   amount: '₹9,000',
    //   tripStartDate: "28 Dec'22",
    //   tripEndDate: "01 Jan'22",
    // },
    // {
    //   tripId: 'TPX23ND',
    //   tripTitle: 'Delhi to Mumbai +2',
    //   amount: '₹9,000',
    //   tripStartDate: "28 Dec'22",
    //   tripEndDate: "01 Jan'22",
    // },
    // {
    //   tripId: 'TPX23NE',
    //   tripTitle: 'Delhi to Mumbai +2',
    //   amount: '₹9,000',
    //   tripStartDate: "28 Dec'22",
    //   tripEndDate: "01 Jan'22",
    // },
    // {
    //   tripId: 'TPX23NF',
    //   tripTitle: 'Delhi to Mumbai +2',
    //   amount: '₹9,000',
    //   tripStartDate: "28 Dec'22",
    //   tripEndDate: "01 Jan'22",
    // },
    // {
    //   tripId: 'TPX23ND',
    //   tripTitle: 'Delhi to Mumbai +2',
    //   amount: '₹9,000',
    //   tripStartDate: "28 Dec'22",
    //   tripEndDate: "01 Jan'22",
    // },
    // {
    //   tripId: 'TPX23NE',
    //   tripTitle: 'Delhi to Mumbai +2',
    //   amount: '₹9,000',
    //   tripStartDate: "28 Dec'22",
    //   tripEndDate: "01 Jan'22",
    // },
    // {
    //   tripId: 'TPX23NF',
    //   tripTitle: 'Delhi to Mumbai +2',
    //   amount: '₹9,000',
    //   tripStartDate: "28 Dec'22",
    //   tripEndDate: "01 Jan'22",
    // },
  ],
  onPressPayment: (tripId) => console.log({tripId}),
};

export default pendingPaymentCarouselProps;
