const priceBreakupSheetProps = {
  data: {
    flightBreakup: {
      flightCharges: 1200,
      convFeeWithGst: 100,
    },
    hotelBreakup: {
      hotelCharges: 1200,
      convFee: 100,
      gst: 18,
    },
    hotelCancellationCharges: {
      amount: 1200.0,
      convFeeWithGst: 100.0,
    },
    hotelModificationCharges: {
      amount: 1200.0,
      convFeeWithGst: 100.0,
    },
    flightCancellationCharges: {
      amount: 1200.0,
      convFeeWithGst: 100.0,
    },
    flightModificationCharges: {
      amount: 1200.0,
      convFeeWithGst: 100.0,
    },
    grandTotal: 2636.0,
    paidAmount: 1200.0,
  },
};

export default priceBreakupSheetProps;
