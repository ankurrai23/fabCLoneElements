import React from 'react';

import {
  data,
  Button,
  TextField,
  DashedLine,
  PickerField,
  FlightPreferenceCard,
  FlightPreferenceList,
  HotelDetailCard,
  TripStatus,
  FlightCard,
  HotelCard,
  RemarksContainer,
  CoTravellerDetails,
  EmptyScreen,
  ItineraryHeader,
  TripListingCard,
  SubmittedTripCard,
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
    name: 'FlightPreferenceList',
    component: <FlightPreferenceList {...data.flightOptionsProps} />,
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
    name: 'FlightCard',
    component: <FlightCard {...data.flightCardProps} />,
  },
  {name: 'HotelCard', component: <HotelCard {...data.hotelCardProps} />},
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
];

export default [...COMMON_COMPONENTS, ...TRIP_COMPONENTS];
