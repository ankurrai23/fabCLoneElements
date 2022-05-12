import React from 'react';
import {View} from 'react-native';

import {FText, FTouchableOpacity} from '../../..';
import Styles from './Styles';

export default function HeaderView(props) {
  return (
    <View style={Styles.container}>
      <FText type="medium" style={Styles.sectionTitle}>
        {props.title}
      </FText>
      {!!props.showViewAllButton && <FTouchableOpacity onPress={props.onPress}>
        <FText type="medium" style={Styles.seeMore}>
          See more
        </FText>
      </FTouchableOpacity>}
    </View>
  );
}
