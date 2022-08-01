import {View} from 'react-native';
import React from 'react';
import Styles from './Styles';
import FText, {FONT_TYPE} from '../../../common/rn/FText';
import FTouchableOpacity from '../../../common/rn/FTouchableOpacity';
import FImage from '../../../common/rn/FImage';
import {ImageConst} from '../../../utils/imageConst/index.travelPlus';
import {Strings} from '../../../utils/strings/index.travelPlus';

export default function CoTravelersDetails(props) {
  function renderPickerChildren() {
    return props.data?.map((item, index) => {
      return (
        <View style={Styles.coTravelerContainer}>
          <FText style={Styles.coTravelerName}>{item.fullName}</FText>
        </View>
      );
    });
  }

  return (
    <View style={Styles.container}>
      <View style={Styles.titleContainer}>
        <View style={Styles.titleSubContainer}>
          <FText type={FONT_TYPE.MEDIUM} style={Styles.title}>
            {Strings.cotravelerOptional}
          </FText>
          {!props.data?.length && (
            <FText style={Styles.subText}>{Strings.coTravellerInfoText}</FText>
          )}
        </View>
        <FTouchableOpacity
          style={Styles.flexRow}
          hitSlop={Styles.hitSlop}
          onPress={props.onPressCoTraveler}>
          <FImage
            source={props.data?.length ? ImageConst.edit2 : ImageConst.plus}
          />
          <FText type={FONT_TYPE.MEDIUM} style={Styles.addDetails}>
            {!props.data?.length ? Strings.add : Strings.edit}
          </FText>
        </FTouchableOpacity>
      </View>
      {!props.data?.length ? null : (
        <View style={Styles.listSubContainer}>{renderPickerChildren()}</View>
      )}
    </View>
  );
}
