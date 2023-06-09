import React from 'react';
import {
  data,
  Button,
  TextField,
  DashedLine,
  PickerField,
  FlightPreferenceCard,
  TripStatus,
  FlightItineraryCard,
  BusItineraryCard,
  TrainItineraryCard,
  CabItineraryCard,
  HotelItineraryCard,
  RemarksContainer,
  CoTravelersDetails,
  EmptyScreen,
  ItineraryHeader,
  TripListingCard,
  SubmittedTripCard,
  ReceivedTripCard,
  HotelPreferenceCard,
  ManagerActions,
  TripCardLoadingState,
  HotelPreferenceLoadingState,
  HotelDetailLoadingState,
  FlightPreferenceLoadingState,
  CoTravellers,
  HotelDetailCard,
  FlightDetailCard,
  BusDetailCard,
  CabDetailCard,
  TrainDetailCard,
  ListTypeFilter,
  FlightDetailLoadingState,
  CabDetailLoadingState,
  BusDetailLoadingState,
  TrainDetailLoadingState,
  HomeHeader,
  ClaimsCard,
  ClaimsList,
  MessageCard,
  FloatingAction,
  HomeLoadingState,
  Checkbox,
  StackHeader,
  ScrollableTabBar,
  ExpenseCard,
  ExpenseDetailCard,
  StopsDetail,
  ExpenseApprovalCard,
  ExpenseApprovalHeader,
  LocationInputBox,
  Swiper,
  MonthPicker,
  ReceiptsList,
  ReceiptListView,
  RemoveItinerary,
  ContactSupport,
  DropDown,
  FieldStates,
  ApproverChain,
  Selector,
  ProgressBar,
  FlightFilter,
  HotelFilter,
  Slider,
  RangeSlider,
  FlightFarePlanCard,
  HotelFarePlanCard,
  FlightSearchResultCard,
  HotelSearchResultCard,
  PendingPaymentSheet,
  PendingPaymentCarousel,
  EmployeeActions,
  SelectRoomSheet,
  PriceBreakupSheet,
  LoadingPlaceholder,
  AnimatedLoader,
  MealAddOn,
  BaggageAddOn,
  SeatSelection,
  TravellerSelection,
} from 'react-native-fab-elements';

const COMMON_COMPONENTS = [
  {name: 'Components'},
  {
    name: 'Button',
    component: props => <Button {...props} />,
    defaultProps: data.buttonProps,
  },
  {
    name: 'TextField',
    component: props => <TextField {...props} />,
    defaultProps: data.textFieldProps,
  },
  {
    name: 'PickerField',
    component: props => <PickerField {...props} />,
    defaultProps: data.pickerFieldProps,
  },
  {
    name: 'DashedLine',
    component: props => <DashedLine {...props} />,
    defaultProps: data.dashLineProps,
  },
  {
    name: 'EmptyScreen',
    component: props => <EmptyScreen {...props} />,
    defaultProps: data.emptyScreenProps,
  },
  {
    name: 'ClaimsCard',
    component: props => <ClaimsCard {...props} />,
    defaultProps: data.claimsCardProps,
  },
  {
    name: 'FloatingAction',
    component: props => <FloatingAction {...props} />,
    defaultProps: data.floatingActionProps,
  },
  {
    name: 'Checkbox',
    component: props => <Checkbox {...props} />,
    defaultProps: data.checkboxProps,
  },
  {
    name: 'StackHeader',
    component: props => <StackHeader {...props} />,
    defaultProps: data.stackHeaderProps,
  },
  {
    name: 'ScrollableTabBar',
    component: props => <ScrollableTabBar {...props} />,
    defaultProps: data.scrollableTabBarProps,
  },
  {
    name: 'Contact Support',
    component: props => <ContactSupport {...props} />,
    defaultProps: data.contactSupportProps,
  },
  {
    name: 'DropDown',
    component: props => <DropDown {...props} />,
    defaultProps: data.dropDownProps,
  },
  {
    name: 'FieldStates',
    component: props => <FieldStates {...props} />,
    defaultProps: data.fieldStatesProps,
  },
  {
    name: 'ProgressBar',
    component: props => <ProgressBar {...props} />,
    defaultProps: data.progressBarProps,
  },
  {
    name: 'Selector',
    component: props => <Selector {...props} />,
    defaultProps: data.selectorProps,
  },
  {
    name: 'Slider',
    component: props => <Slider {...props} />,
    defaultProps: data.sliderProps,
  },
  {
    name: 'RangeSlider',
    component: props => <RangeSlider {...props} />,
    defaultProps: data.rangeSliderProps,
  },
  {
    name: 'LoadingPlaceholder',
    component: props => <LoadingPlaceholder {...props} />,
    defaultProps: data.placeholderProps,
  },
  {
    name: 'AnimatedLoader',
    component: props => <AnimatedLoader {...props} />,
  },
];

const TRIP_COMPONENTS = [
  {name: 'Trips'},
  {
    name: 'FlightPreferenceCard',
    component: props => <FlightPreferenceCard {...props} />,
    defaultProps: data.flightPreferenceCardProps,
  },
  {
    name: 'HotelDetailCard',
    component: props => <HotelDetailCard {...props} />,
    defaultProps: data.hotelDetailCardProps,
  },
  {
    name: 'TripStatus',
    component: props => <TripStatus {...props} />,
    defaultProps: data.tripStatusProps,
  },
  {
    name: 'FlightItineraryCard',
    component: props => <FlightItineraryCard {...props} />,
    defaultProps: data.flightItineraryCardProps,
  },
  {
    name: 'BusItineraryCard',
    component: props => <BusItineraryCard {...props} />,
    defaultProps: data.busItineraryCardProps,
  },
  {
    name: 'TrainItineraryCard',
    component: props => <TrainItineraryCard {...props} />,
    defaultProps: data.trainItineraryCardProps,
  },
  {
    name: 'CabItineraryCard',
    component: props => <CabItineraryCard {...props} />,
    defaultProps: data.cabItineraryCardProps,
  },
  {
    name: 'HotelItineraryCard',
    component: props => <HotelItineraryCard {...props} />,
    defaultProps: data.hotelItineraryCardProps,
  },
  {
    name: 'RemarksContainer',
    component: props => <RemarksContainer {...props} />,
    defaultProps: data.remarksContainerProps,
  },
  {
    name: 'CoTravellers',
    component: props => <CoTravellers {...props} />,
    defaultProps: data.coTravellersProps,
  },
  {
    name: 'ItineraryHeader',
    component: props => <ItineraryHeader {...props} />,
    defaultProps: data.itineraryHeaderProps,
  },
  {
    name: 'TripListingCard',
    component: props => <TripListingCard {...props} />,
    defaultProps: data.tripListingCardProps,
  },
  {
    name: 'SubmittedTripCard',
    component: props => <SubmittedTripCard {...props} />,
    defaultProps: data.submittedTripCardProps,
  },
  {
    name: 'ReceivedTripCard',
    component: props => <ReceivedTripCard {...props} />,
    defaultProps: data.receivedTripCardProps,
  },
  {
    name: 'HotelPreferenceCard',
    component: props => <HotelPreferenceCard {...props} />,
    defaultProps: data.hotelPreferenceCardProps,
  },
  {
    name: 'ManagerActions',
    component: props => <ManagerActions {...props} />,
    defaultProps: data.managerActionsProps,
  },
  {
    name: 'FlightDetailCard',
    component: props => <FlightDetailCard {...props} />,
    defaultProps: data.flightDetailCardProps,
  },
  {
    name: 'BusDetailCard',
    component: props => <BusDetailCard {...props} />,
    defaultProps: data.busDetailCardProps,
  },
  {
    name: 'CabDetailCard',
    component: props => <CabDetailCard {...props} />,
    defaultProps: data.cabDetailCardProps,
  },
  {
    name: 'TrainDetailCard',
    component: props => <TrainDetailCard {...props} />,
    defaultProps: data.trainDetailCardProps,
  },
  {
    name: 'TripCardLoadingState',
    component: props => <TripCardLoadingState {...props} />,
    defaultProps: data.tripCardLoadingStateProps,
  },
  {
    name: 'HotelPreferenceLoadingState',
    component: props => <HotelPreferenceLoadingState {...props} />,
    defaultProps: data.hotelPreferenceLoadingStateProps,
  },
  {
    name: 'HotelDetailLoadingState',
    component: props => <HotelDetailLoadingState {...props} />,
    defaultProps: data.hotelDetailLoadingStateProps,
  },
  {
    name: 'FlightPreferenceLoadingState',
    component: props => <FlightPreferenceLoadingState {...props} />,
    defaultProps: data.flightPreferenceLoadingStateProps,
  },
  {
    name: 'ListTypeFilter',
    component: props => <ListTypeFilter {...props} />,
    defaultProps: data.listTypeFilterProps,
  },
  {
    name: 'FlightDetailLoadingState',
    component: props => <FlightDetailLoadingState {...props} />,
    defaultProps: data.flightDetailLoadingStateProps,
  },
  {
    name: 'CabDetailLoadingState',
    component: props => <CabDetailLoadingState {...props} />,
    defaultProps: data.cabDetailLoadingStateProps,
  },
  {
    name: 'BusDetailLoadingState',
    component: props => <BusDetailLoadingState {...props} />,
    defaultProps: data.busDetailLoadingStateProps,
  },
  {
    name: 'TrainDetailLoadingState',
    component: props => <TrainDetailLoadingState {...props} />,
    defaultProps: data.trainDetailLoadingStateProps,
  },
  {
    name: 'Approver Chain',
    component: props => <ApproverChain {...props} />,
    defaultProps: data.approverChainProps,
  },
  {
    name: 'Employee Actions',
    component: props => <EmployeeActions {...props} />,
    defaultProps: data.employeeActionsProps,
  },
  {
    name: 'PriceBreakupSheet',
    component: props => <PriceBreakupSheet {...props} />,
    defaultProps: data.priceBreakupSheetProps,
  },
];

const TRIP_CREATION = [
  {name: 'Trips Creation'},
  {
    name: 'CoTravelersDetails',
    component: props => <CoTravelersDetails {...props} />,
    defaultProps: data.coTravelersDetailsProps,
  },

  {
    name: 'Remove Itinerary',
    component: props => <RemoveItinerary {...props} />,
    defaultProps: data.removeItineraryProps,
  },
  {
    name: 'FlightFilter',
    component: props => <FlightFilter {...props} />,
    defaultProps: data.flightFilterProps,
  },
  {
    name: 'HotelFilter',
    component: props => <HotelFilter {...props} />,
    defaultProps: data.hotelFilterProps,
  },
  {
    name: 'FlightFarePlan',
    component: props => <FlightFarePlanCard {...props} />,
    defaultProps: data.flightFarePlanProps,
  },
  {
    name: 'HotelFarePlan',
    component: props => <HotelFarePlanCard {...props} />,
    defaultProps: data.hotelFarePlanProps,
  },
  {
    name: 'FlightSearchResultCard',
    component: props => <FlightSearchResultCard {...props} />,
    defaultProps: data.flightSearchResultCardProps,
  },
  {
    name: 'HotelSearchResultCard',
    component: props => <HotelSearchResultCard {...props} />,
    defaultProps: data.hotelSearchResultCardProps,
  },
  {
    name: 'SelectRoomSheet',
    component: props => <SelectRoomSheet {...props} />,
    defaultProps: data.selectRoomSheetProps,
  },
  {
    name: 'MealAddOn',
    component: props => <MealAddOn {...props} />,
    defaultProps: data.mealAddOnProps,
  },
  {
    name: 'BaggageAddOn',
    component: props => <BaggageAddOn {...props} />,
    defaultProps: data.baggageAddOnProps,
  },
  {
    name: 'SeatSelection',
    component: props => <SeatSelection {...props} />,
    defaultProps: data.seatSelectionsProps,
  },
  {
    name: 'TravellerSelection',
    component: props => <TravellerSelection {...props} />,
    defaultProps: data.travellerSelectionProps,
  },
];
console.log('something', data.travellerSelectionProps);

const HOME = [
  {name: 'Home'},
  {
    name: 'HomeHeader',
    component: props => <HomeHeader {...props} />,
    defaultProps: data.homeHeaderProps,
  },
  {
    name: 'ClaimList',
    component: props => <ClaimsList {...props} />,
    defaultProps: data.claimsListProps,
  },
  {
    name: 'MessageCard',
    component: props => <MessageCard {...props} />,
    defaultProps: data.messageCardProps,
  },
  {
    name: 'HomeLoadingState',
    component: props => <HomeLoadingState {...props} />,
    defaultProps: data.homeLoadingStateProps,
  },
  {
    name: 'PendingPaymentSheet',
    component: props => <PendingPaymentSheet {...props} />,
    defaultProps: data.pendingPaymentSheetProps,
  },
  {
    name: 'PendingPaymentCarousel',
    component: props => <PendingPaymentCarousel {...props} />,
    defaultProps: data.pendingPaymentCarouselProps,
  },
];

const EXPENSE = [
  {name: 'Expense'},
  {
    name: 'ExpenseCard',
    component: props => <ExpenseCard {...props} />,
    defaultProps: data.expenseCardProps,
  },
  {
    name: 'ExpenseDetailCard',
    component: props => <ExpenseDetailCard {...props} />,
    defaultProps: data.expenseDetailCardProps,
  },
  {
    name: 'StopsDetail',
    component: props => <StopsDetail.Card {...props} />,
    defaultProps: data.stopDetailListProps,
  },
  {
    name: 'ExpenseApprovalCard',
    component: props => <ExpenseApprovalCard {...props} />,
    defaultProps: data.expenseApprovalCardProps,
  },
  {
    name: 'ExpenseApprovalHeader',
    component: props => <ExpenseApprovalHeader {...props} />,
    defaultProps: data.expenseApprovalHeaderProps,
  },
  {
    name: 'LocationInputBox',
    component: props => <LocationInputBox {...props} />,
    defaultProps: data.locationInputBoxProps,
  },
  {
    name: 'Swiper',
    component: props => <Swiper {...props} />,
    defaultProps: data.swiperProps,
  },
  {
    name: 'MonthPicker',
    component: props => <MonthPicker {...props} />,
    defaultProps: data.monthPickerProps,
  },
  {
    name: 'ReceiptsList',
    component: props => <ReceiptsList {...props} />,
    defaultProps: data.receiptsListProps,
  },
  {
    name: 'ReceiptListView',
    component: props => <ReceiptListView {...props} />,
    defaultProps: data.receiptListViewProps,
  },
];

export default [
  ...COMMON_COMPONENTS,
  ...TRIP_COMPONENTS,
  ...TRIP_CREATION,
  ...HOME,
  ...EXPENSE,
];
