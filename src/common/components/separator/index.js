import React from 'react';
import {View} from 'react-native';

import Styles from './Styles';

function Separator({style, ...props}) {
  return <View style={[Styles.container, style]} {...props} />;
}

export default Separator;
