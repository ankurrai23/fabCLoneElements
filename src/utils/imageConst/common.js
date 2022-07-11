const IMG_DIRECTORY = '../../assets/images/';
const TRIP_DIRECTORY = IMG_DIRECTORY + 'trips/';
const EXPENSE_DIRECTORY = IMG_DIRECTORY + 'expense/';

export default {
  fabCredits: require(IMG_DIRECTORY + 'fab_credits.png'),
  couponGreen: require(IMG_DIRECTORY + 'coupon_green.png'),

  //Icons related to trip/travel module
  rescheduleIcon: require(TRIP_DIRECTORY + 'itinerary-reschedule-icon.png'),
  hotelIconWithBorder: require(TRIP_DIRECTORY + 'itinerary-hotel-border.png'),
  grayHotelIconWithBorder: require(TRIP_DIRECTORY +
    'itinerary-hotel-border-grey.png'),
  flightIconWithBorder: require(TRIP_DIRECTORY + 'itinerary-flight-border.png'),
  grayFlightIconWithBorder: require(TRIP_DIRECTORY +
    'itinerary-flight-border-grey.png'),
  hotelIcon: require(TRIP_DIRECTORY + 'itinerary-hotel-icon.png'),
  flightIcon: require(TRIP_DIRECTORY + 'itinerary-flight-icon.png'),
  bellIcon: require(TRIP_DIRECTORY + 'bell-icon.png'),
  editIcon: require(TRIP_DIRECTORY + 'edit.png'),
  comingSoon: require(TRIP_DIRECTORY + 'comingSoon.png'),
  edit2: require(TRIP_DIRECTORY + 'edit-2.png'),
  plus: require(TRIP_DIRECTORY + 'plus.png'),
  searchCity: require(TRIP_DIRECTORY + 'search-city.png'),
  searchAirport: require(TRIP_DIRECTORY + 'search-airport.png'),
  searchCoTraveler: require(TRIP_DIRECTORY + 'search-cotraveler.png'),

  //Icons for FAB button
  rupees: require(TRIP_DIRECTORY + 'rupees.png'),

  //Icons related to expense module
  emptyClaims: require(EXPENSE_DIRECTORY + 'empty_claims.png'),
  emptyApprovals: require(EXPENSE_DIRECTORY + 'empty_approvals.png'),
  addReceipt: require(EXPENSE_DIRECTORY + 'add_receipt.png'),
  localCommute: require(EXPENSE_DIRECTORY + 'local_commute.png'),
  typeDetails: require(EXPENSE_DIRECTORY + 'type_details.png'),
  file: require(EXPENSE_DIRECTORY + 'file_icon.png'),
  confirmation: require(EXPENSE_DIRECTORY + 'confirmation.png'),
};
