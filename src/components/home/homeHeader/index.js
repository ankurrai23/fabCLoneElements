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
        {props.profileImage ? (
          <FImage
            source={{
              uri: props.profileImage,
            }}
            style={Styles.imageContainer}
          />
        ) : (
          <View style={Styles.initialsContainer}>
            <FText style={Styles.initials}>{props.nameInitials}</FText>
          </View>
        )}
      </FTouchableOpacity>
    </View>
  );
}
