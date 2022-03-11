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
  CoTravellerDetails,
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
} from 'react-native-fab-elements';

const COMMON_COMPONENTS = [
  {name: 'Components'},
  {name: 'Button', component: <Button {...data.buttonProps} />},
  {name: 'TextField', component: <TextField {...data.textFieldProps} />},
  {name: 'PickerField', component: <PickerField {...data.pickerFieldProps} />},
  {name: 'DashedLine', component: <DashedLine {...data.dashLineProps} />},
  {name: 'EmptyScreen', component: <EmptyScreen {...data.emptyScreenProps} />},
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
];

const TRIP_CREATION = [
  {name: 'Trips Creation'},
  {
    name: 'CoTravellersDetail',
    component: <CoTravellerDetails {...data.coTravellersDetailProps} />,
  },
  {
    name: 'Coming Soon',
    component: <ComingSoon {...data.comingSoonProps} />,
  },
  {
    name: 'Request Type',
    component: <RequestType {...data.requestTypeProps} />,
  },
  {
    name: 'Basic Travel Details',
    component: <BasicTravelDetails {...data.basicTravelDetailsProps} />,
  },
  {
    name: 'Hotel Details',
    component: <HotelDetails {...data.hotelDetailsProps} />,
  },
  {
    name: 'Flight Details',
    component: <FlightDetails {...data.flightDetailsProps} />,
  },
  {
    name: 'Other Travel Details',
    component: <OtherTravelDetails {...data.otherTravelDetailsProps} />,
  },
  {
    name: 'Approval Manager',
    component: <ApprovalManager {...data.approvalManagerProps} />,
  },
  {
    name: 'Add flight Details',
    component: <AddFlightDetails {...data.addFlightDetailsProps} />,
  },
  {
    name: 'Add hotel Details',
    component: <AddHotelDetails {...data.addHotelDetailsProps} />,
  },
];

export default [...COMMON_COMPONENTS, ...TRIP_COMPONENTS, ...TRIP_CREATION];
