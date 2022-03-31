import React from 'react';

import {
  data,
  Button,
  TextField,
  DashedLine,
  PickerField,
  FlightPreferenceCard,
  HotelDetailCard,
  TripStatus,
  FlightItineraryCard,
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
  ItineraryViewLoadingState,
  HotelPreferenceLoadingState,
  HotelDetailLoadingState,
  FlightPreferenceLoadingState,
  ComingSoon,
  RequestType,
  BasicTravelDetails,
  HotelDetails,
  FlightDetails,
  OtherTravelDetails,
  ApprovalManager,
  AddFlightDetails,
  AddHotelDetails,
  CoTravellers,
  FlightDetailCard,
  ListTypeFilter,
  ContactSupport,
  FlightDetailLoadingState,
  HomeHeader,
  ClaimsCard,
  ClaimsList,
  HeaderView,
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
} from 'react-native-fab-elements';

const COMMON_COMPONENTS = [
  {name: 'Components'},
  {name: 'Button', component: <Button {...data.buttonProps} />},
  {name: 'TextField', component: <TextField {...data.textFieldProps} />},
  {name: 'PickerField', component: <PickerField {...data.pickerFieldProps} />},
  {name: 'DashedLine', component: <DashedLine {...data.dashLineProps} />},
  {name: 'EmptyScreen', component: <EmptyScreen {...data.emptyScreenProps} />},
  {
    name: 'ContactSupport',
    component: <ContactSupport {...data.contactSupportProps} />,
  },
  {
    name: 'ClaimsCard',
    component: <ClaimsCard {...data.claimsCardProps} />,
  },
  {
    name: 'FloatingAction',
    component: <FloatingAction {...data.floatingActionProps} />,
  },
  {
    name: 'Checkbox',
    component: <Checkbox {...data.checkboxProps} />,
  },
  {
    name: 'StackHeader',
    component: <StackHeader {...data.stackHeaderProps} />,
  },
  {
    name: 'ScrollableTabBar',
    component: <ScrollableTabBar {...data.scrollableTabBarProps} />,
  },
];

const TRIP_COMPONENTS = [
  {name: 'Trips'},
  {
    name: 'FlightPreferenceCard',
    component: <FlightPreferenceCard {...data.flightPreferenceCardProps} />,
  },
  {
    name: 'HotelDetailCard',
    component: <HotelDetailCard {...data.hotelDetailCardProps} />,
  },
  {
    name: 'TripStatus',
    component: <TripStatus {...data.tripStatusProps} />,
  },
  {
    name: 'FlightItineraryCard',
    component: <FlightItineraryCard {...data.flightItineraryCardProps} />,
  },
  {
    name: 'HotelItineraryCard',
    component: <HotelItineraryCard {...data.hotelItineraryCardProps} />,
  },
  {
    name: 'RemarksContainer',
    component: <RemarksContainer {...data.remarksContainerProps} />,
  },
  {
    name: 'CoTravellers',
    component: <CoTravellers {...data.coTravellersProps} />,
  },
  {
    name: 'ItineraryHeader',
    component: <ItineraryHeader {...data.itineraryHeaderProps} />,
  },
  {
    name: 'TripListingCard',
    component: <TripListingCard {...data.tripListingCardProps} />,
  },
  {
    name: 'SubmittedTripCard',
    component: <SubmittedTripCard {...data.submittedTripCardProps} />,
  },
  {
    name: 'ReceivedTripCard',
    component: <ReceivedTripCard {...data.receivedTripCardProps} />,
  },
  {
    name: 'HotelPreferenceCard',
    component: <HotelPreferenceCard {...data.hotelPreferenceCardProps} />,
  },
  {
    name: 'ManagerActions',
    component: <ManagerActions {...data.managerActionsProps} />,
  },
  {
    name: 'FlightDetailCard',
    component: <FlightDetailCard {...data.flightDetailCardProps} />,
  },
  {
    name: 'TripCardLoadingState',
    component: <TripCardLoadingState {...data.listTypeFilterProps} />,
  },
  {
    name: 'ItineraryViewLoadingState',
    component: <ItineraryViewLoadingState />,
  },
  {
    name: 'HotelPreferenceLoadingState',
    component: <HotelPreferenceLoadingState />,
  },
  {
    name: 'HotelDetailLoadingState',
    component: <HotelDetailLoadingState />,
  },
  {
    name: 'FlightPreferenceLoadingState',
    component: <FlightPreferenceLoadingState />,
  },
  {
    name: 'ListTypeFilter',
    component: <ListTypeFilter {...data.listTypeFilterProps} />,
  },
  {
    name: 'FlightDetailLoadingState',
    component: <FlightDetailLoadingState />,
  },
];

const TRIP_CREATION = [
  {name: 'Trips Creation'},
  {
    name: 'CoTravelersDetails',
    component: <CoTravelersDetails {...data.coTravellersDetailProps} />,
  },
  {
    name: 'ComingSoon',
    component: <ComingSoon {...data.comingSoonProps} />,
  },
  {
    name: 'RequestType',
    component: <RequestType {...data.requestTypeProps} />,
  },
  {
    name: 'BasicTravelDetails',
    component: <BasicTravelDetails {...data.basicTravelDetailsProps} />,
  },
  {
    name: 'HotelDetails',
    component: <HotelDetails {...data.hotelDetailsProps} />,
  },
  {
    name: 'FlightDetails',
    component: <FlightDetails {...data.flightDetailsProps} />,
  },
  {
    name: 'OtherTravelDetails',
    component: <OtherTravelDetails {...data.otherTravelDetailsProps} />,
  },
  {
    name: 'ApprovalManager',
    component: <ApprovalManager {...data.approvalManagerProps} />,
  },
  {
    name: 'AddFlightDetails',
    component: <AddFlightDetails {...data.addFlightDetailsProps} />,
  },
  {
    name: 'AddHotelDetails',
    component: <AddHotelDetails {...data.addHotelDetailsProps} />,
  },
];

const HOME = [
  {name: 'Home'},
  {
    name: 'HomeHeader',
    component: <HomeHeader {...data.homeHeaderProps} />,
  },
  {
    name: 'ClaimList',
    component: <ClaimsList {...data.claimsListProps} />,
  },
  {
    name: 'HeaderView',
    component: <HeaderView {...data.headerViewProps} />,
  },
  {
    name: 'MessageCard',
    component: <MessageCard {...data.messageCardProps} />,
  },
  {
    name: 'HomeLoadingState',
    component: <HomeLoadingState />,
  },
];

const EXPENSE = [
  {name: 'Expense'},
  {
    name: 'ExpenseCard',
    component: <ExpenseCard {...data.expenseCardProps} />,
  },
  {
    name: 'ExpenseDetailCard',
    component: <ExpenseDetailCard {...data.expenseDetailCardProps} />,
  },
  {
    name: 'StopDetailList',
    component: <StopDetailList {...data.stopDetailListProps} />,
  },
  {
    name: 'ExpenseApprovalCard',
    component: <ExpenseApprovalCard {...data.expenseApprovalCardProps} />,
  },
  {
    name: 'ExpenseApprovalHeader',
    component: <ExpenseApprovalHeader {...data.expenseApprovalHeaderProps} />,
  },
  {
    name: 'LocationInputBox',
    component: <LocationInputBox {...data.locationInputBoxProps} />,
  },
];

export default [
  ...COMMON_COMPONENTS,
  ...TRIP_COMPONENTS,
  ...TRIP_CREATION,
  ...HOME,
  ...EXPENSE,
];
