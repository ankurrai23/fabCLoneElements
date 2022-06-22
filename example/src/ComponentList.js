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
  FlightDetailLoadingState,
  HomeHeader,
  ClaimsCard,
  ClaimsList,
  MessageCard,
  FloatingAction,
  HomeLoadingState,
  Checkbox,
  DropDownList,
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
  BasicTravelDetailsCard,
  ReceiptsList,
  ReceiptListView,
  RemoveItinerary,
  ContactSupport,
} from 'react-native-fab-elements';

const COMMON_COMPONENTS = [
  {name: 'Components'},
  {name: 'Button', component: <Button {...data.buttonProps} />},
  {name: 'TextField', component: <TextField {...data.textFieldProps} />},
  {name: 'PickerField', component: <PickerField {...data.pickerFieldProps} />},
  {name: 'DashedLine', component: <DashedLine {...data.dashLineProps} />},
  {name: 'EmptyScreen', component: <EmptyScreen {...data.emptyScreenProps} />},
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
    name: 'Drop Down List',
    component: <DropDownList {...data.dropDownListProps} />,
  },
  {
    name: 'StackHeader',
    component: <StackHeader {...data.stackHeaderProps} />,
  },
  {
    name: 'ScrollableTabBar',
    component: <ScrollableTabBar {...data.scrollableTabBarProps} />,
  },
  {
    name: 'Contact Support',
    component: <ContactSupport {...data.contactSupportProps} />,
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
  {
    name: 'BasicTravelDetailsCard',
    component: <BasicTravelDetailsCard {...data.basicTravelDetailsCardProps} />,
  },
  {
    name: 'Remove Itinerary',
    component: <RemoveItinerary {...data.removeItineraryProps} />,
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
  {
    name: 'Swiper',
    component: <Swiper {...data.swiperProps} />,
  },
  {
    name: 'MonthPicker',
    component: <MonthPicker {...data.monthPickerProps} />,
  },
  {
    name: 'ReceiptsList',
    component: <ReceiptsList {...data.receiptsListProps} />,
  },
  {
    name: 'ReceiptListView',
    component: <ReceiptListView {...data.receiptListViewProps} />,
  },
];

export default [
  ...COMMON_COMPONENTS,
  ...TRIP_COMPONENTS,
  ...TRIP_CREATION,
  ...HOME,
  ...EXPENSE,
];
