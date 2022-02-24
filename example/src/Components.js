import React from 'react';
import {Text} from 'react-native';
import {FlightCard, FlightOptions} from 'react-native-fab-elements';

const Components = ({route}) => {
  switch (route.name) {
    case 'FlightCard':
      return <FlightCard />;
    case 'FlightOptions':
      return <FlightOptions />;
    default:
      return <Text>Component Not Found</Text>;
  }
};

export default Components;
