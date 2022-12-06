import React from 'react';
import {
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
  HotelDetails,
  FlightDetails,
  OtherTravelDetails,
  ApprovalManager,
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
  StopDetailList,
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
  ItineraryCard,
  FieldStates,
  ApproverChain,
  TrainDetails,
  BusDetails,
  CabDetails,
  Selector,
} from 'react-native-fab-elements';

const COMMON_COMPONENTS = [
  {name: 'Components'},
  {
    name: 'Button',
    component: (props) => <Button {...props} />,
  },
  {
    name: 'TextField',
    component: (props) => <TextField {...props} />,
  },
  {
    name: 'PickerField',
    component: (props) => <PickerField {...props} />,
  },
  {
    name: 'DashedLine',
    component: (props) => <DashedLine {...props} />,
  },
  {
    name: 'EmptyScreen',
    component: (props) => <EmptyScreen {...props} />,
  },
  {
    name: 'ClaimsCard',
    component: (props) => <ClaimsCard {...props} />,
  },
  {
    name: 'FloatingAction',
    component: (props) => <FloatingAction {...props} />,
  },
  {
    name: 'Checkbox',
    component: (props) => <Checkbox {...props} />,
  },
  {
    name: 'StackHeader',
    component: (props) => <StackHeader {...props} />,
  },
  {
    name: 'ScrollableTabBar',
    component: (props) => <ScrollableTabBar {...props} />,
  },
  {
    name: 'Contact Support',
    component: (props) => <ContactSupport {...props} />,
  },
  {
    name: 'DropDown',
    component: (props) => <DropDown {...props} />,
  },
  {
    name: 'FieldStates',
    component: (props) => <FieldStates {...props} />,
  },
  {
    name: 'Selector',
    component: (props) => <Selector {...props} />,
  },
];

const TRIP_COMPONENTS = [
  {name: 'Trips'},
  {
    name: 'FlightPreferenceCard',
    component: (props) => <FlightPreferenceCard {...props} />,
  },
  {
    name: 'HotelDetailCard',
    component: (props) => <HotelDetailCard {...props} />,
  },
  {
    name: 'TripStatus',
    component: (props) => <TripStatus {...props} />,
  },
  {
    name: 'FlightItineraryCard',
    component: (props) => <FlightItineraryCard {...props} />,
  },
  {
    name: 'BusItineraryCard',
    component: (props) => <BusItineraryCard {...props} />,
  },
  {
    name: 'TrainItineraryCard',
    component: (props) => <TrainItineraryCard {...props} />,
  },
  {
    name: 'CabItineraryCard',
    component: (props) => <CabItineraryCard {...props} />,
  },
  {
    name: 'HotelItineraryCard',
    component: (props) => <HotelItineraryCard {...props} />,
  },
  {
    name: 'RemarksContainer',
    component: (props) => <RemarksContainer {...props} />,
  },
  {
    name: 'CoTravellers',
    component: (props) => <CoTravellers {...props} />,
  },
  {
    name: 'ItineraryHeader',
    component: (props) => <ItineraryHeader {...props} />,
  },
  {
    name: 'TripListingCard',
    component: (props) => <TripListingCard {...props} />,
  },
  {
    name: 'SubmittedTripCard',
    component: (props) => <SubmittedTripCard {...props} />,
  },
  {
    name: 'ReceivedTripCard',
    component: (props) => <ReceivedTripCard {...props} />,
  },
  {
    name: 'HotelPreferenceCard',
    component: (props) => <HotelPreferenceCard {...props} />,
  },
  {
    name: 'ManagerActions',
    component: (props) => <ManagerActions {...props} />,
  },
  {
    name: 'FlightDetailCard',
    component: (props) => <FlightDetailCard {...props} />,
  },
  {
    name: 'BusDetailCard',
    component: (props) => <BusDetailCard {...props} />,
  },
  {
    name: 'CabDetailCard',
    component: (props) => <CabDetailCard {...props} />,
  },
  {
    name: 'TrainDetailCard',
    component: (props) => <TrainDetailCard {...props} />,
  },
  {
    name: 'TripCardLoadingState',
    component: (props) => <TripCardLoadingState {...props} />,
  },
  {
    name: 'HotelPreferenceLoadingState',
    component: (props) => <HotelPreferenceLoadingState {...props} />,
  },
  {
    name: 'HotelDetailLoadingState',
    component: (props) => <HotelDetailLoadingState {...props} />,
  },
  {
    name: 'FlightPreferenceLoadingState',
    component: (props) => <FlightPreferenceLoadingState {...props} />,
  },
  {
    name: 'ListTypeFilter',
    component: (props) => <ListTypeFilter {...props} />,
  },
  {
    name: 'FlightDetailLoadingState',
    component: (props) => <FlightDetailLoadingState {...props} />,
  },
  {
    name: 'CabDetailLoadingState',
    component: (props) => <CabDetailLoadingState {...props} />,
  },
  {
    name: 'BusDetailLoadingState',
    component: (props) => <BusDetailLoadingState {...props} />,
  },
  {
    name: 'TrainDetailLoadingState',
    component: (props) => <TrainDetailLoadingState {...props} />,
  },
  {
    name: 'Approver Chain',
    component: (props) => <ApproverChain {...props} />,
  },
];

const TRIP_CREATION = [
  {name: 'Trips Creation'},
  {
    name: 'CoTravelersDetails',
    component: (props) => <CoTravelersDetails {...props} />,
  },
  {
    name: 'HotelDetails',
    component: (props) => <HotelDetails {...props} />,
  },
  {
    name: 'ItineraryCard',
    component: (props) => <ItineraryCard {...props} />,
  },
  {
    name: 'FlightDetails',
    component: (props) => <FlightDetails {...props} />,
  },
  {
    name: 'OtherTravelDetails',
    component: (props) => <OtherTravelDetails {...props} />,
  },
  {
    name: 'ApprovalManager',
    component: (props) => <ApprovalManager {...props} />,
  },
  {
    name: 'Remove Itinerary',
    component: (props) => <RemoveItinerary {...props} />,
  },
  {
    name: 'TrainDetails',
    component: (props) => <TrainDetails {...props} />,
  },
  {
    name: 'BusDetails',
    component: (props) => <BusDetails {...props} />,
  },
  {
    name: 'CabDetails',
    component: (props) => <CabDetails {...props} />,
  },
];

const HOME = [
  {name: 'Home'},
  {
    name: 'HomeHeader',
    component: (props) => <HomeHeader {...props} />,
  },
  {
    name: 'ClaimList',
    component: (props) => <ClaimsList {...props} />,
  },
  {
    name: 'MessageCard',
    component: (props) => <MessageCard {...props} />,
  },
  {
    name: 'HomeLoadingState',
    component: (props) => <HomeLoadingState {...props} />,
  },
];

const EXPENSE = [
  {name: 'Expense'},
  {
    name: 'ExpenseCard',
    component: (props) => <ExpenseCard {...props} />,
  },
  {
    name: 'ExpenseDetailCard',
    component: (props) => <ExpenseDetailCard {...props} />,
  },
  {
    name: 'StopDetailList',
    component: (props) => <StopDetailList {...props} />,
  },
  {
    name: 'ExpenseApprovalCard',
    component: (props) => <ExpenseApprovalCard {...props} />,
  },
  {
    name: 'ExpenseApprovalHeader',
    component: (props) => <ExpenseApprovalHeader {...props} />,
  },
  {
    name: 'LocationInputBox',
    component: (props) => <LocationInputBox {...props} />,
  },
  {
    name: 'Swiper',
    component: (props) => <Swiper {...props} />,
  },
  {
    name: 'MonthPicker',
    component: (props) => <MonthPicker {...props} />,
  },
  {
    name: 'ReceiptsList',
    component: (props) => <ReceiptsList {...props} />,
  },
  {
    name: 'ReceiptListView',
    component: (props) => <ReceiptListView {...props} />,
  },
];

export default [
  ...COMMON_COMPONENTS,
  ...TRIP_COMPONENTS,
  ...TRIP_CREATION,
  ...HOME,
  ...EXPENSE,
];
