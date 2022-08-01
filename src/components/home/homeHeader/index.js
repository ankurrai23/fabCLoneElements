import React from 'react';
import {View} from 'react-native';
import FText, {FONT_TYPE} from '../../../common/rn/FText';
import FTouchableOpacity from '../../../common/rn/FTouchableOpacity';
import FImage from '../../../common/rn/FImage';
import Styles from './Styles';
import {Strings} from '../../../utils/strings/index.travelPlus';

export default function HomeHeader({...props}) {
  return (
    <View style={Styles.profileNameContainer}>
      <FText numberOfLines={1} type={FONT_TYPE.MEDIUM} style={Styles.userName}>
        {Strings.helloUser(props.profileName)}
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
