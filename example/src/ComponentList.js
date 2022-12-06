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
  FlightFarePlanCard,
} from 'react-native-fab-elements';
import {HotelFarePlanCard, ProgressBar} from '../../src';

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
  {
    name: 'DropDown',
    component: <DropDown {...data.dropDownProps} />,
  },
  {
    name: 'FieldStates',
    component: <FieldStates />,
  },
  {
    name: 'ProgressBar',
    component: <ProgressBar />,
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
    component: <FlightPreferenceCard {...data.flightPreferenceCardProps} />,
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
    name: 'BusItineraryCard',
    component: <BusItineraryCard {...data.busItineraryCardProps} />,
  },
  {
    name: 'TrainItineraryCard',
    component: <TrainItineraryCard {...data.trainItineraryCardProps} />,
  },
  {
    name: 'CabItineraryCard',
    component: <CabItineraryCard {...data.cabItineraryCardProps} />,
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
    name: 'HotelDetailCard',
    component: (
      <ScrollView>
        <HotelDetailCard {...data.hotelDetailCardProps} />
      </ScrollView>
    ),
  },
  {
    name: 'FlightDetailCard',
    component: <FlightDetailCard {...data.flightDetailCardProps} />,
  },
  {
    name: 'BusDetailCard',
    component: <BusDetailCard {...data.busDetailCardProps} />,
  },
  {
    name: 'CabDetailCard',
    component: <CabDetailCard {...data.cabDetailCardProps} />,
  },
  {
    name: 'TrainDetailCard',
    component: <TrainDetailCard {...data.trainDetailCardProps} />,
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
  {
    name: 'CabDetailLoadingState',
    component: <CabDetailLoadingState />,
  },
  {
    name: 'BusDetailLoadingState',
    component: <BusDetailLoadingState />,
  },
  {
    name: 'TrainDetailLoadingState',
    component: <TrainDetailLoadingState />,
  },
  {
    name: 'Approver Chain',
    component: <ApproverChain {...data.approverChainProps} />,
  },
];

const TRIP_CREATION = [
  {name: 'Trips Creation'},
  {
    name: 'CoTravelersDetails',
    component: <CoTravelersDetails {...data.coTravellersDetailProps} />,
  },
  {
    name: 'HotelDetails',
    component: <HotelDetails {...data.hotelDetailsProps} />,
  },
  {
    name: 'ItineraryCard',
    component: <ItineraryCard {...data.itineraryCardProps} />,
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
    name: 'Remove Itinerary',
    component: <RemoveItinerary {...data.removeItineraryProps} />,
  },
  {
    name: 'TrainDetails',
    component: <TrainDetails {...data.trainDetailsProps} />,
  },
  {
    name: 'BusDetails',
    component: <BusDetails {...data.busDetailsProps} />,
  },
  {
    name: 'CabDetails',
    component: <CabDetails {...data.cabDetailsProps} />,
  },
  {
    name: 'FlightFarePlan',
    component: <FlightFarePlanCard {...data.flightFarePlanProps} />,
  },
  {
    name: 'HotelFarePlan',
    component: <HotelFarePlanCard {...data.hotelFarePlanProps} />,
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
