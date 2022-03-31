import React from 'react';
import {View} from 'react-native';
import {FText, FTouchableOpacity, FImage} from '../../..';
import Styles from './Styles';

export default function HomeHeader({...props}) {
  return (
    <View style={Styles.profileNameContainer}>
      <FText type="medium" style={Styles.userName}>
        Hello, {props.profileName}!
      </FText>
      <FTouchableOpacity
        style={Styles.profilePicContainer}
        onPress={props.openProfileImagePicker}>
        <FImage
          source={{
            uri: 'https://www.pngall.com/wp-content/uploads/12/Avatar-Profile-PNG-Images-HD.png',
          }}
          style={Styles.imageContainer}
        />
      </FTouchableOpacity>
    </View>
  );
}
