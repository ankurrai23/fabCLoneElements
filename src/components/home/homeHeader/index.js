import React from 'react';
import {View} from 'react-native';
import {FText, FTouchableOpacity} from '../../..';
import Styles from './Styles';

export default function HomeHeader({data, ...props}) {
  return (
    <View style={Styles.profileNameContainer}>
      <FText type="medium" style={Styles.userName}>
        Hello, {data.profileName}!
      </FText>
      <FTouchableOpacity
        style={Styles.profilePicContainer}
        onPress={props.openProfileImagePicker}>
        <FText type={'medium'} style={Styles.letter}>
          {/* {data.profileName[0]} */}
        </FText>
      </FTouchableOpacity>
    </View>
  );
}
