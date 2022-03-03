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
  HotelPreferenceCard,
  ManagerActions,
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
    name: 'CoTravellersDetail',
    component: <CoTravellerDetails {...data.coTravellersDetailProps} />,
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
    name: 'HotelPreferenceCard',
    component: <HotelPreferenceCard {...data.hotelPreferenceCardProps} />,
  },
  {
    name: 'ManagerActions',
    component: <ManagerActions {...data.managerActionsProps} />,
  },
];

export default [...COMMON_COMPONENTS, ...TRIP_COMPONENTS];
