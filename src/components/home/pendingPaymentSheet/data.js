const pendingPaymentSheetProps = {
  paymentRequests: [
    {
      masterTripId: 'TPZSMYAJ',
      tripTitle: 'Trip to New Delhi',
      start: "06 Jan'23",
      end: "07 Jan'23",
      amount: 1860.32,
      deadline: '2023-01-07T04:00:00+05:30',
    },
    {
      masterTripId: 'TPZSMYAK',
      tripTitle: 'Trip to New Delhi',
      start: "06 Jan'23",
      end: "07 Jan'23",
      amount: 1860.32,
      deadline: '2023-01-08T04:00:00+05:30',
    },
    {
      masterTripId: 'TPZSMYAL',
      tripTitle: 'Trip to New Delhi',
      start: "06 Jan'23",
      end: "07 Jan'23",
      amount: 1860.32,
      deadline: '2023-01-09T04:00:00+05:30',
    },
    {
      masterTripId: 'TPZSMYAM',
      tripTitle: 'Trip to New Delhi',
      start: "06 Jan'23",
      end: "07 Jan'23",
      amount: 1860.32,
      deadline: '2023-01-02T04:00:00+05:30',
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
  showBottomSheet: true,
  onClose: () => console.log('close bottom sheet'),
};

export default pendingPaymentSheetProps;
