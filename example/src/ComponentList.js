import React from 'react';
import {ScrollView} from 'react-native-gesture-handler';
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
    component: (props) => {
      return props ? <Button {...props} /> : <Button {...data.buttonProps} />;
    },
  },
  {
    name: 'TextField',
    component: (props) => {
      return props && Object.keys(props).length !== 0 ? (
        <TextField {...props} />
      ) : (
        <TextField {...data.textFieldProps} />
      );
    },
  },
  {
    name: 'PickerField',
    component: (props) =>
      props && Object.keys(props).length !== 0 ? (
        <PickerField {...props} />
      ) : (
        <PickerField {...data.pickerFieldProps} />
      ),
  },
  {
    name: 'DashedLine',
    component: (props) =>
      props && Object.keys(props).length !== 0 ? (
        <DashedLine {...props} />
      ) : (
        <DashedLine {...data.dashLineProps} />
      ),
  },
  {
    name: 'EmptyScreen',
    component: (props) =>
      props && Object.keys(props).length !== 0 ? (
        <EmptyScreen {...props} />
      ) : (
        <EmptyScreen {...data.emptyScreenProps} />
      ),
  },
  {
    name: 'ClaimsCard',
    component: (props) =>
      props && Object.keys(props).length !== 0 ? (
        <ClaimsCard {...props} />
      ) : (
        <ClaimsCard {...data.claimsCardProps} />
      ),
  },
  {
    name: 'FloatingAction',
    component: (props) =>
      props && Object.keys(props).length !== 0 ? (
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
      props && Object.keys(props).length !== 0 ? (
        <StackHeader {...props} />
      ) : (
        <StackHeader {...data.stackHeaderProps} />
      ),
  },
  {
    name: 'ScrollableTabBar',
    component: (props) =>
      props && Object.keys(props).length !== 0 ? (
        <ScrollableTabBar {...props} />
      ) : (
        <ScrollableTabBar {...data.scrollableTabBarProps} />
      ),
  },
  {
    name: 'Contact Support',
    component: (props) =>
      props && Object.keys(props).length !== 0 ? (
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
      props && Object.keys(props).length !== 0 ? (
        <FieldStates {...props} />
      ) : (
        <FieldStates {...data.fieldStatesProps} />
      ),
  },
  {
    name: 'Selector',
    component: <Selector {...data.selectorProps} />,
  },
];

const TRIP_COMPONENTS = [
  {name: 'Trips'},
  {
    name: 'FlightPreferenceCard',
    component: (props) =>
      props && Object.keys(props).length !== 0 ? (
        <FlightPreferenceCard {...props} />
      ) : (
        <FlightPreferenceCard {...data.flightPreferenceCardProps} />
      ),
  },
  {
    name: 'HotelDetailCard',
    component: (props) => (
      <ScrollView>
        {props && Object.keys(props).length !== 0 ? (
          <HotelDetailCard {...props} />
        ) : (
          <HotelDetailCard {...data.hotelDetailCardProps} />
        )}
      </ScrollView>
    ),
  },
  {
    name: 'TripStatus',
    component: (props) =>
      props && Object.keys(props).length !== 0 ? (
        <TripStatus {...props} />
      ) : (
        <TripStatus {...data.tripStatusProps} />
      ),
  },
  {
    name: 'FlightItineraryCard',
    component: (props) =>
      props && Object.keys(props).length !== 0 ? (
        <FlightItineraryCard {...props} />
      ) : (
        <FlightItineraryCard {...data.flightItineraryCardProps} />
      ),
  },
  {
    name: 'BusItineraryCard',
    component: (props) =>
      props && Object.keys(props).length !== 0 ? (
        <BusItineraryCard {...props} />
      ) : (
        <BusItineraryCard {...data.busItineraryCardProps} />
      ),
  },
  {
    name: 'TrainItineraryCard',
    component: (props) =>
      props && Object.keys(props).length !== 0 ? (
        <TrainItineraryCard {...props} />
      ) : (
        <TrainItineraryCard {...data.trainItineraryCardProps} />
      ),
  },
  {
    name: 'CabItineraryCard',
    component: (props) =>
      props && Object.keys(props).length !== 0 ? (
        <CabItineraryCard {...props} />
      ) : (
        <CabItineraryCard {...data.cabItineraryCardProps} />
      ),
  },
  {
    name: 'HotelItineraryCard',
    component: (props) =>
      props && Object.keys(props).length !== 0 ? (
        <HotelItineraryCard {...props} />
      ) : (
        <HotelItineraryCard {...data.hotelItineraryCardProps} />
      ),
  },
  {
    name: 'RemarksContainer',
    component: (props) =>
      props && Object.keys(props).length !== 0 ? (
        <RemarksContainer {...props} />
      ) : (
        <RemarksContainer {...data.remarksContainerProps} />
      ),
  },
  {
    name: 'CoTravellers',
    component: (props) =>
      props && Object.keys(props).length !== 0 ? (
        <CoTravellers {...props} />
      ) : (
        <CoTravellers {...data.coTravellersProps} />
      ),
  },
  {
    name: 'ItineraryHeader',
    component: (props) =>
      props && Object.keys(props).length !== 0 ? (
        <ItineraryHeader {...props} />
      ) : (
        <ItineraryHeader {...data.itineraryHeaderProps} />
      ),
  },
  {
    name: 'TripListingCard',
    component: (props) =>
      props && Object.keys(props).length !== 0 ? (
        <TripListingCard {...props} />
      ) : (
        <TripListingCard {...data.tripListingCardProps} />
      ),
  },
  {
    name: 'SubmittedTripCard',
    component: (props) =>
      props && Object.keys(props).length !== 0 ? (
        <SubmittedTripCard {...props} />
      ) : (
        <SubmittedTripCard {...data.submittedTripCardProps} />
      ),
  },
  {
    name: 'ReceivedTripCard',
    component: (props) =>
      props && Object.keys(props).length !== 0 ? (
        <ReceivedTripCard {...props} />
      ) : (
        <ReceivedTripCard {...data.receivedTripCardProps} />
      ),
  },
  {
    name: 'HotelPreferenceCard',
    component: (props) =>
      props && Object.keys(props).length !== 0 ? (
        <HotelPreferenceCard {...props} />
      ) : (
        <HotelPreferenceCard {...data.hotelPreferenceCardProps} />
      ),
  },
  {
    name: 'ManagerActions',
    component: (props) =>
      props && Object.keys(props).length !== 0 ? (
        <ManagerActions {...props} />
      ) : (
        <ManagerActions {...data.managerActionsProps} />
      ),
  },
  {
    name: 'FlightDetailCard',
    component: (props) =>
      props && Object.keys(props).length !== 0 ? (
        <FlightDetailCard {...props} />
      ) : (
        <FlightDetailCard {...data.flightDetailCardProps} />
      ),
  },
  {
    name: 'BusDetailCard',
    component: (props) =>
      props && Object.keys(props).length !== 0 ? (
        <BusDetailCard {...props} />
      ) : (
        <BusDetailCard {...data.busDetailCardProps} />
      ),
  },
  {
    name: 'CabDetailCard',
    component: (props) =>
      props && Object.keys(props).length !== 0 ? (
        <CabDetailCard {...props} />
      ) : (
        <CabDetailCard {...data.cabDetailCardProps} />
      ),
  },
  {
    name: 'TrainDetailCard',
    component: (props) =>
      props && Object.keys(props).length !== 0 ? (
        <TrainDetailCard {...props} />
      ) : (
        <TrainDetailCard {...data.trainDetailCardProps} />
      ),
  },
  {
    name: 'TripCardLoadingState',
    component: (props) =>
      props && Object.keys(props).length !== 0 ? (
        <TripCardLoadingState {...props} />
      ) : (
        <TripCardLoadingState {...data.listTypeFilterProps} />
      ),
  },
  {
    name: 'HotelPreferenceLoadingState',
    component: (props) =>
      props && Object.keys(props).length !== 0 ? (
        <HotelPreferenceLoadingState {...props} />
      ) : (
        <HotelPreferenceLoadingState />
      ),
  },
  {
    name: 'HotelDetailLoadingState',
    component: (props) =>
      props && Object.keys(props).length !== 0 ? (
        <HotelDetailLoadingState {...props} />
      ) : (
        <HotelDetailLoadingState />
      ),
  },
  {
    name: 'FlightPreferenceLoadingState',
    component: (props) =>
      props && Object.keys(props).length !== 0 ? (
        <FlightPreferenceLoadingState {...props} />
      ) : (
        <FlightPreferenceLoadingState />
      ),
  },
  {
    name: 'ListTypeFilter',
    component: (props) =>
      props && Object.keys(props).length !== 0 ? (
        <ListTypeFilter {...props} />
      ) : (
        <ListTypeFilter {...data.listTypeFilterProps} />
      ),
  },
  {
    name: 'FlightDetailLoadingState',
    component: (props) =>
      props && Object.keys(props).length !== 0 ? (
        <FlightDetailLoadingState {...props} />
      ) : (
        <FlightDetailLoadingState />
      ),
  },
  {
    name: 'CabDetailLoadingState',
    component: (props) =>
      props && Object.keys(props).length !== 0 ? (
        <CabDetailLoadingState {...props} />
      ) : (
        <CabDetailLoadingState />
      ),
  },
  {
    name: 'BusDetailLoadingState',
    component: (props) =>
      props && Object.keys(props).length !== 0 ? (
        <BusDetailLoadingState {...props} />
      ) : (
        <BusDetailLoadingState />
      ),
  },
  {
    name: 'TrainDetailLoadingState',
    component: (props) =>
      props && Object.keys(props).length !== 0 ? (
        <TrainDetailLoadingState {...props} />
      ) : (
        <TrainDetailLoadingState />
      ),
  },
  {
    name: 'Approver Chain',
    component: (props) =>
      props && Object.keys(props).length !== 0 ? (
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
      props && Object.keys(props).length !== 0 ? (
        <CoTravelersDetails {...props} />
      ) : (
        <CoTravelersDetails {...data.coTravellersDetailProps} />
      ),
  },
  {
    name: 'HotelDetails',
    component: (props) =>
      props && Object.keys(props).length !== 0 ? (
        <HotelDetails {...props} />
      ) : (
        <HotelDetails {...data.hotelDetailsProps} />
      ),
  },
  {
    name: 'ItineraryCard',
    component: (props) =>
      props && Object.keys(props).length !== 0 ? (
        <ItineraryCard {...props} />
      ) : (
        <ItineraryCard {...data.itineraryCardProps} />
      ),
  },
  {
    name: 'FlightDetails',
    component: (props) =>
      props && Object.keys(props).length !== 0 ? (
        <FlightDetails {...props} />
      ) : (
        <FlightDetails {...data.flightDetailsProps} />
      ),
  },
  {
    name: 'OtherTravelDetails',
    component: (props) =>
      props && Object.keys(props).length !== 0 ? (
        <OtherTravelDetails {...props} />
      ) : (
        <OtherTravelDetails {...data.otherTravelDetailsProps} />
      ),
  },
  {
    name: 'ApprovalManager',
    component: (props) =>
      props && Object.keys(props).length !== 0 ? (
        <ApprovalManager {...props} />
      ) : (
        <ApprovalManager {...data.approvalManagerProps} />
      ),
  },
  {
    name: 'Remove Itinerary',
    component: (props) =>
      props && Object.keys(props).length !== 0 ? (
        <RemoveItinerary {...props} />
      ) : (
        <RemoveItinerary {...data.removeItineraryProps} />
      ),
  },
  {
    name: 'TrainDetails',
    component: (props) =>
      props && Object.keys(props).length !== 0 ? (
        <TrainDetails {...props} />
      ) : (
        <TrainDetails {...data.trainDetailsProps} />
      ),
  },
  {
    name: 'BusDetails',
    component: (props) =>
      props && Object.keys(props).length !== 0 ? (
        <BusDetails {...props} />
      ) : (
        <BusDetails {...data.busDetailsProps} />
      ),
  },
  {
    name: 'CabDetails',
    component: (props) =>
      props && Object.keys(props).length !== 0 ? (
        <CabDetails {...props} />
      ) : (
        <CabDetails {...data.cabDetailsProps} />
      ),
  },
];

const HOME = [
  {name: 'Home'},
  {
    name: 'HomeHeader',
    component: (props) =>
      props && Object.keys(props).length !== 0 ? (
        <HomeHeader {...props} />
      ) : (
        <HomeHeader {...data.homeHeaderProps} />
      ),
  },
  {
    name: 'ClaimList',
    component: (props) =>
      props && Object.keys(props).length !== 0 ? (
        <ClaimsList {...props} />
      ) : (
        <ClaimsList {...data.claimsListProps} />
      ),
  },
  {
    name: 'MessageCard',
    component: (props) =>
      props && Object.keys(props).length !== 0 ? (
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
      props && Object.keys(props).length !== 0 ? (
        <ExpenseCard {...props} />
      ) : (
        <ExpenseCard {...data.expenseCardProps} />
      ),
  },
  {
    name: 'ExpenseDetailCard',
    component: (props) =>
      props && Object.keys(props).length !== 0 ? (
        <ExpenseDetailCard {...props} />
      ) : (
        <ExpenseDetailCard {...data.expenseDetailCardProps} />
      ),
  },
  {
    name: 'StopDetailList',
    component: (props) =>
      props && Object.keys(props).length !== 0 ? (
        <StopDetailList {...props} />
      ) : (
        <StopDetailList {...data.stopDetailListProps} />
      ),
  },
  {
    name: 'ExpenseApprovalCard',
    component: (props) =>
      props && Object.keys(props).length !== 0 ? (
        <ExpenseApprovalCard {...props} />
      ) : (
        <ExpenseApprovalCard {...data.expenseApprovalCardProps} />
      ),
  },
  {
    name: 'ExpenseApprovalHeader',
    component: (props) =>
      props && Object.keys(props).length !== 0 ? (
        <ExpenseApprovalHeader {...props} />
      ) : (
        <ExpenseApprovalHeader {...data.expenseApprovalHeaderProps} />
      ),
  },
  {
    name: 'LocationInputBox',
    component: (props) =>
      props && Object.keys(props).length !== 0 ? (
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
      props && Object.keys(props).length !== 0 ? (
        <MonthPicker {...props} />
      ) : (
        <MonthPicker {...data.monthPickerProps} />
      ),
  },
  {
    name: 'ReceiptsList',
    component: (props) =>
      props && Object.keys(props).length !== 0 ? (
        <ReceiptsList {...props} />
      ) : (
        <ReceiptsList {...data.receiptsListProps} />
      ),
  },
  {
    name: 'ReceiptListView',
    component: (props) =>
      props && Object.keys(props).length !== 0 ? (
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
