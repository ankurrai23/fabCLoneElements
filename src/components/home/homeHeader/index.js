import React from 'react';
import {View} from 'react-native';
import {FText, FTouchableOpacity, FImage} from '../../..';
import Styles from './Styles';

export default function HomeHeader({...props}) {
  return (
    <View style={Styles.profileNameContainer}>
      <FText numberOfLines={1} type="medium" style={Styles.userName}>
        Hello, {props.profileName}
      </FText>
      <FTouchableOpacity
        style={Styles.profilePicContainer}
        onPress={props.openProfileImagePicker}>
        <FImage
          source={{
            uri: props.profileImage,
          }}
          style={Styles.imageContainer}
        />
      </FTouchableOpacity>
    </View>
  );
}
