import React from 'react';
import {View} from 'react-native';

import Styles from './Styles';

/*
'containerStyle' was added to handle cases where we want to give a background color to separator.
Has been used in flight itinerary card
*/

function Separator({containerStyle, style, ...props}) {
  if (containerStyle) {
    return (
      <View style={containerStyle} {...props}>
        <View style={[Styles.container, style]} />
      </View>
    );
  }
  return <View style={[Styles.container, style]} />;
}

export default Separator;
