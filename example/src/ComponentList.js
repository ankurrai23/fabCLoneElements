import React from 'react';

import {
  data,
  FlightPreferenceCard,
  FlightPreferenceList,
  HotelDetailCard,
} from 'react-native-fab-elements';

export default [
  {name: 'Trips'},
  {
    name: 'FlightPreferenceCard',
    component: <FlightPreferenceCard {...data.flightCardProps} />,
  },
  {
    name: 'FlightPreferenceList',
    component: <FlightPreferenceList {...data.flightOptionsProps} />,
  },
  {
    name: 'HotelDetailCard',
    component: <HotelDetailCard {...data.hotelDetailCardProps} />,
  },
];
