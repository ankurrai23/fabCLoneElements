export default {
  add: 'Add',
  firstExpenseClaim: (date) => ` your first expense claim for ${date}`,
  actionNeeded: 'Action needed',
  contactSupport: 'Contact 24x7 Support',
  nothingInItineraryMsg: 'Nothing on your itinerary',
  reasonToProceed: 'Please enter a reason to proceed',
  support: 'Support',
  addAReceipt: 'Add a receipt',
  openCamera: 'Open camera',
  uploadFromGallery: 'Upload from gallery',
  importFromFiles: 'Import from files',
  clearAll: 'Clear all',
  filterExpenseType: 'Filter expense type',
  cancel: 'Cancel',
  apply: 'Apply',
  outOfPolicy: 'Out of policy',
  soldOut: 'Sold out',
  viewReceipt: ' View receipt',
  viewReceipts: (receiptCount) => ` View ${receiptCount} receipts`,
  claim: 'claim',
  uploadReceipt: 'Upload receipt',
  start: 'Start',
  stop: 'Stop',
  selectMonth: 'Select month',
  addAnother: 'Add another',
  upload: 'Upload',
  selectedFile: 'Selected file',
  kb: 'KB',
  addMore: 'Add more',
  uploadedReceipt: 'Uploaded receipt',
  stopsCount: (count) => `${count} stops`,
  helloUser: (profileName) => ` Hello, ${profileName}`,
  updates: 'Updates',
  seeMore: 'See more',
  approvalManager: 'Approval manager',
  coTravelers: 'Co-travelers',
  optional: '(optional)',
  coTravellerInfoText:
    'You can only add other TravelPlus users within your company.',
  edit: 'Edit',
  slotInfo: (startTime, endTime) => `Slot: ${startTime} - ${endTime}`,
  addReturnFlight: 'Add return flight detail',
  flights: 'Flight(s)',
  hotels: 'Hotel(s)',
  returnDate: 'Return date',
  departureDate: 'Departure date',
  arrivalCity: 'Arrival city',
  departureCity: 'Departure city',
  basicTravelDetails: 'Enter basic travel details',
  sourcToDestination: (source, destination) => `${source} to ${destination}`,
  otherDetails: 'Other details',
  purposeOfTravel: 'Purpose of travel',
  otherRemarks: 'Other remarks (optional)',
  remove: 'Remove',
  itineraryNumber: (number) => `Itinerary ${number}`,
  coTravelerDetails: 'Co-traveler detail(s)',
  none: 'None',
  pnr: 'PNR',
  tapToSetPreference: (preference) =>
    `Tap to ${preference ? 'reset' : 'set'} preference`,
  depart: 'DEPART',
  return: 'RETURN',
  helpColleagueDecideNextTime: 'Help your colleague decide the next time',
  bookingId: 'Booking ID',
  bookingId2: 'Booking ID: ',
  directions: 'Directions',
  checkInDate: 'Check-in date',
  checkOutDate: 'Check-out date',
  checkInTime: `Check-in time: `,
  checkOutTime: `Check-out time: `,
  checkIn: (time) => `Check-in: ${time}`,
  checkOut: (time) => `Check-out: ${time}`,
  inclusions: 'Inclusions',
  rooms: 'Rooms',
  moreInclusions: (count) => ` +${count} more`,
  paymentMode: 'Payment mode',
  NA: 'N.A',
  viewDetails: (expanded) => `View ${expanded ? 'less' : 'more'} details`,
  starHotel: (starRating) => `${starRating} star hotel`,
  viewOnMap: 'View on map',
  your: 'Your ',
  colleagueAvgRating: (rating) => ` colleagues rated it ${rating} (avg)`,
  requestBy: 'Request by: ',
  department: 'Department: ',
  designation: 'Designation: ',
  requestForModification: 'Request for modification',
  confirm: 'Confirm',
  approveRequest: 'Approve request',
  approve: 'Approve',
  rejectRequest: 'Reject request',
  reject: 'Reject',
  cotravelers: 'Co-traveler(s): ',
  remarks: 'Remarks',
  sort: 'Sort',
  filter: 'Filter',
  processing: 'Processing',
  viewdetails: 'View details',
  addAStop: 'Add a stop',
  class: 'Class',
  preferredTrain: 'Preferred train',
  pickupTime: 'Pickup time: ',
  driverName: 'Driver Name',
  phoneNo: 'Phone no.',
  seatNumber: 'Seat no',
  coordinatorName: 'Coordinator Name',
  berth: 'Berth',
  platform: 'Platform',
  track: 'Track',
  trains: 'Train(s)',
  buses: 'Bus(es)',
  cabs: 'Cab(s)',
  carNa: 'Car - NA',
  trainNa: 'Train - NA',
  busNa: 'Travel company - NA',
  name: 'Name',
  coordinatorDetails: 'Coordinator details',
  travelersDetails: 'Travelers details',
  driverDetails: 'Driver details',
  vehicle: 'Vehicle',
  details: 'details',
  selectStops: 'Select stops',
  airlines: 'Airlines',
  showMoreAirlines: (moreFlights) =>
    `Show ${moreFlights ? 'less' : 'more'} airlines`,
  selectEntitlement: 'Select entitlement',
  preferredType: 'Preferred type',
  hotelRating: 'Hotel rating',
  price: 'Price',
  cancellationPolicy: 'View cancellation policy',
  perNight: 'per night',
  inclGst: '(Incl GST)',
  exGst: '(ex GST)',
  includeModificationCharge: 'Includes modification charges',
  includeCancellationCharge: 'Includes cancellation charges',
  travelerDetails: 'Traveler details',
  ticketNumber: 'Ticket Number',
  paymentPending: 'Payment pending',
  pay: 'Pay',
  tripId: 'Trip ID: ',
  inclGST: 'Incl GST',
  payNow: 'Pay now',
  rupee: '₹',
  notify: 'Notify',
  requestModification: 'Request modification',
  selectRoom: 'Select room',
  contractedRate: 'Contracted rate',
  travelPlusPreferred: 'TravelPlus preferred',
  two: '2',
  lessThanTwo: '<2',
  one: '1',
  selectRoomAndTraveler: 'No. of rooms and traveler(s)',
  removeRoom: 'Remove room',
  addRoom: 'Add room',
  selectNoOfAdults: 'Select no. of adult(s)',
  roomNo: (num) => `Room ${num}`,
  selectRoomForTraveler: (num) => `Select room for ${num} traveler(s)`,
  travellerError: (num) => `Add ${num} more traveler(s) to proceed.`,
  priceBreakup: {
    title: 'Price breakup',
    flightCharges: 'Flight charges',
    convenienceFee: 'Convenience fee',
    hotelCharges: 'Hotel charges',
    gst: 'GST',
    hotelCancellationCharges: 'Hotel cancellation',
    hotelModificationCharges: 'Hotel modification',
    flightCancellationCharges: 'Flight cancellation',
    flightModificationCharges: 'Flight modification',
    totalAmount: 'Total amount',
    paidAmount: 'Paid amount',
    included: '(included)',
  },
  ok: 'Ok',
  leftToPayElseApprovalCancel: 'left to pay. Else approval shall be cancelled',

  makePaymentElseApprovalCancel:
    'Hurry up! Make the payment now else your approval shall be cancelled.',
  perAdult: ' per adult',
  view: 'View',
  soldOut2: 'Sold Out!',
};
