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
  HotelDetails,
  FlightDetails,
  OtherTravelDetails,
  ApprovalManager,
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
} from 'react-native-fab-elements';

const COMMON_COMPONENTS = [
  {name: 'Components'},
  {
    name: 'Button',
    component: (props) => {
      return props ? <Button {...props} /> : <Button {...data.buttonProps} />;
    },
  },
  {
    name: 'TextField',
    component: (props) => {
      return props ? (
        <TextField {...props} />
      ) : (
        <TextField {...data.textFieldProps} />
      );
    },
  },
  {
    name: 'PickerField',
    component: (props) =>
      props ? (
        <PickerField {...props} />
      ) : (
        <PickerField {...data.pickerFieldProps} />
      ),
  },
  {
    name: 'DashedLine',
    component: (props) =>
      props ? (
        <DashedLine {...props} />
      ) : (
        <DashedLine {...data.dashLineProps} />
      ),
  },
  {
    name: 'EmptyScreen',
    component: (props) =>
      props ? (
        <EmptyScreen {...props} />
      ) : (
        <EmptyScreen {...data.emptyScreenProps} />
      ),
  },
  {
    name: 'ClaimsCard',
    component: (props) =>
      props ? (
        <ClaimsCard {...props} />
      ) : (
        <ClaimsCard {...data.claimsCardProps} />
      ),
  },
  {
    name: 'FloatingAction',
    component: (props) =>
      props ? (
        <FloatingAction {...props} />
      ) : (
        <FloatingAction {...data.floatingActionProps} />
      ),
  },
  {
    name: 'Checkbox',
    component: (props) =>
      props ? <Checkbox {...props} /> : <Checkbox {...data.checkboxProps} />,
  },
  {
    name: 'StackHeader',
    component: (props) =>
      props ? (
        <StackHeader {...props} />
      ) : (
        <StackHeader {...data.stackHeaderProps} />
      ),
  },
  {
    name: 'ScrollableTabBar',
    component: (props) =>
      props ? (
        <ScrollableTabBar {...props} />
      ) : (
        <ScrollableTabBar {...data.scrollableTabBarProps} />
      ),
  },
  {
    name: 'Contact Support',
    component: (props) =>
      props ? (
        <ContactSupport {...props} />
      ) : (
        <ContactSupport {...data.contactSupportProps} />
      ),
  },
  {
    name: 'DropDown',
    component: (props) =>
      props ? <DropDown {...props} /> : <DropDown {...data.dropDownProps} />,
  },
  {
    name: 'FieldStates',
    component: (props) =>
      props ? (
        <FieldStates {...props} />
      ) : (
        <FieldStates {...data.fieldStatesProps} />
      ),
  },
];

const TRIP_COMPONENTS = [
  {name: 'Trips'},
  {
    name: 'FlightPreferenceCard',
    component: (props) =>
      props ? (
        <FlightPreferenceCard {...props} />
      ) : (
        <FlightPreferenceCard {...data.flightPreferenceCardProps} />
      ),
  },
  {
    name: 'HotelDetailCard',
    component: (props) =>
      props ? (
        <HotelDetailCard {...props} />
      ) : (
        <HotelDetailCard {...data.hotelDetailCardProps} />
      ),
  },
  {
    name: 'TripStatus',
    component: (props) =>
      props ? (
        <TripStatus {...props} />
      ) : (
        <TripStatus {...data.tripStatusProps} />
      ),
  },
  {
    name: 'FlightItineraryCard',
    component: (props) =>
      props ? (
        <FlightItineraryCard {...props} />
      ) : (
        <FlightItineraryCard {...data.flightItineraryCardProps} />
      ),
  },
  {
    name: 'HotelItineraryCard',
    component: (props) =>
      props ? (
        <HotelItineraryCard {...props} />
      ) : (
        <HotelItineraryCard {...data.hotelItineraryCardProps} />
      ),
  },
  {
    name: 'RemarksContainer',
    component: (props) =>
      props ? (
        <RemarksContainer {...props} />
      ) : (
        <RemarksContainer {...data.remarksContainerProps} />
      ),
  },
  {
    name: 'CoTravellers',
    component: (props) =>
      props ? (
        <CoTravellers {...props} />
      ) : (
        <CoTravellers {...data.coTravellersProps} />
      ),
  },
  {
    name: 'ItineraryHeader',
    component: (props) =>
      props ? (
        <ItineraryHeader {...props} />
      ) : (
        <ItineraryHeader {...data.itineraryHeaderProps} />
      ),
  },
  {
    name: 'TripListingCard',
    component: (props) =>
      props ? (
        <TripListingCard {...props} />
      ) : (
        <TripListingCard {...data.tripListingCardProps} />
      ),
  },
  {
    name: 'SubmittedTripCard',
    component: (props) =>
      props ? (
        <SubmittedTripCard {...props} />
      ) : (
        <SubmittedTripCard {...data.submittedTripCardProps} />
      ),
  },
  {
    name: 'ReceivedTripCard',
    component: (props) =>
      props ? (
        <ReceivedTripCard {...props} />
      ) : (
        <ReceivedTripCard {...data.receivedTripCardProps} />
      ),
  },
  {
    name: 'HotelPreferenceCard',
    component: (props) =>
      props ? (
        <HotelPreferenceCard {...props} />
      ) : (
        <HotelPreferenceCard {...data.hotelPreferenceCardProps} />
      ),
  },
  {
    name: 'ManagerActions',
    component: (props) =>
      props ? (
        <ManagerActions {...props} />
      ) : (
        <ManagerActions {...data.managerActionsProps} />
      ),
  },
  {
    name: 'FlightDetailCard',
    component: (props) =>
      props ? (
        <FlightDetailCard {...props} />
      ) : (
        <FlightDetailCard {...data.flightDetailCardProps} />
      ),
  },
  {
    name: 'TripCardLoadingState',
    component: (props) =>
      props ? (
        <TripCardLoadingState {...props} />
      ) : (
        <TripCardLoadingState {...data.listTypeFilterProps} />
      ),
  },
  {
    name: 'HotelPreferenceLoadingState',
    component: (props) =>
      props ? (
        <HotelPreferenceLoadingState {...props} />
      ) : (
        <HotelPreferenceLoadingState />
      ),
  },
  {
    name: 'HotelDetailLoadingState',
    component: (props) =>
      props ? (
        <HotelDetailLoadingState {...props} />
      ) : (
        <HotelDetailLoadingState />
      ),
  },
  {
    name: 'FlightPreferenceLoadingState',
    component: (props) =>
      props ? (
        <FlightPreferenceLoadingState {...props} />
      ) : (
        <FlightPreferenceLoadingState />
      ),
  },
  {
    name: 'ListTypeFilter',
    component: (props) =>
      props ? (
        <ListTypeFilter {...props} />
      ) : (
        <ListTypeFilter {...data.listTypeFilterProps} />
      ),
  },
  {
    name: 'FlightDetailLoadingState',
    component: (props) =>
      props ? (
        <FlightDetailLoadingState {...props} />
      ) : (
        <FlightDetailLoadingState />
      ),
  },
  {
    name: 'Approver Chain',
    component: (props) =>
      props ? (
        <ApproverChain {...props} />
      ) : (
        <ApproverChain {...data.approverChainProps} />
      ),
  },
];

const TRIP_CREATION = [
  {name: 'Trips Creation'},
  {
    name: 'CoTravelersDetails',
    component: (props) =>
      props ? (
        <CoTravelersDetails {...props} />
      ) : (
        <CoTravelersDetails {...data.coTravellersDetailProps} />
      ),
  },
  {
    name: 'HotelDetails',
    component: (props) =>
      props ? (
        <HotelDetails {...props} />
      ) : (
        <HotelDetails {...data.hotelDetailsProps} />
      ),
  },
  {
    name: 'ItineraryCard',
    component: (props) =>
      props ? (
        <ItineraryCard {...props} />
      ) : (
        <ItineraryCard {...data.itineraryCardProps} />
      ),
  },
  {
    name: 'FlightDetails',
    component: (props) =>
      props ? (
        <FlightDetails {...props} />
      ) : (
        <FlightDetails {...data.flightDetailsProps} />
      ),
  },
  {
    name: 'OtherTravelDetails',
    component: (props) =>
      props ? (
        <OtherTravelDetails {...props} />
      ) : (
        <OtherTravelDetails {...data.otherTravelDetailsProps} />
      ),
  },
  {
    name: 'ApprovalManager',
    component: (props) =>
      props ? (
        <ApprovalManager {...props} />
      ) : (
        <ApprovalManager {...data.approvalManagerProps} />
      ),
  },
  {
    name: 'Remove Itinerary',
    component: (props) =>
      props ? (
        <RemoveItinerary {...props} />
      ) : (
        <RemoveItinerary {...data.removeItineraryProps} />
      ),
  },
];

const HOME = [
  {name: 'Home'},
  {
    name: 'HomeHeader',
    component: (props) =>
      props ? (
        <HomeHeader {...props} />
      ) : (
        <HomeHeader {...data.homeHeaderProps} />
      ),
  },
  {
    name: 'ClaimList',
    component: (props) =>
      props ? (
        <ClaimsList {...props} />
      ) : (
        <ClaimsList {...data.claimsListProps} />
      ),
  },
  {
    name: 'MessageCard',
    component: (props) =>
      props ? (
        <MessageCard {...props} />
      ) : (
        <MessageCard {...data.messageCardProps} />
      ),
  },
  {
    name: 'HomeLoadingState',
    component: (props) =>
      props ? <HomeLoadingState {...props} /> : <HomeLoadingState />,
  },
];

const EXPENSE = [
  {name: 'Expense'},
  {
    name: 'ExpenseCard',
    component: (props) =>
      props ? (
        <ExpenseCard {...props} />
      ) : (
        <ExpenseCard {...data.expenseCardProps} />
      ),
  },
  {
    name: 'ExpenseDetailCard',
    component: (props) =>
      props ? (
        <ExpenseDetailCard {...props} />
      ) : (
        <ExpenseDetailCard {...data.expenseDetailCardProps} />
      ),
  },
  {
    name: 'StopDetailList',
    component: (props) =>
      props ? (
        <StopDetailList {...props} />
      ) : (
        <StopDetailList {...data.stopDetailListProps} />
      ),
  },
  {
    name: 'ExpenseApprovalCard',
    component: (props) =>
      props ? (
        <ExpenseApprovalCard {...props} />
      ) : (
        <ExpenseApprovalCard {...data.expenseApprovalCardProps} />
      ),
  },
  {
    name: 'ExpenseApprovalHeader',
    component: (props) =>
      props ? (
        <ExpenseApprovalHeader {...props} />
      ) : (
        <ExpenseApprovalHeader {...data.expenseApprovalHeaderProps} />
      ),
  },
  {
    name: 'LocationInputBox',
    component: (props) =>
      props ? (
        <LocationInputBox {...props} />
      ) : (
        <LocationInputBox {...data.locationInputBoxProps} />
      ),
  },
  {
    name: 'Swiper',
    component: (props) =>
      props ? <Swiper {...props} /> : <Swiper {...data.swiperProps} />,
  },
  {
    name: 'MonthPicker',
    component: (props) =>
      props ? (
        <MonthPicker {...props} />
      ) : (
        <MonthPicker {...data.monthPickerProps} />
      ),
  },
  {
    name: 'ReceiptsList',
    component: (props) =>
      props ? (
        <ReceiptsList {...props} />
      ) : (
        <ReceiptsList {...data.receiptsListProps} />
      ),
  },
  {
    name: 'ReceiptListView',
    component: (props) =>
      props ? (
        <ReceiptListView {...props} />
      ) : (
        <ReceiptListView {...data.receiptListViewProps} />
      ),
  },
];

export default [
  ...COMMON_COMPONENTS,
  ...TRIP_COMPONENTS,
  ...TRIP_CREATION,
  ...HOME,
  ...EXPENSE,
];
