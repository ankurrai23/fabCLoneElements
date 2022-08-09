import {View} from 'react-native';
import React from 'react';
import Styles from './Styles';
import FText from '../../../common/rn/FText';
import FTouchableOpacity from '../../../common/rn/FTouchableOpacity';
import FImage from '../../../common/rn/FImage';
import {ImageConst} from '../../../utils/imageConst/index.travelPlus';

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
    <View style={[Styles.container, props.style]}>
      <View style={Styles.titleContainer}>
        <View style={Styles.titleSubContainer}>
          <FText type="medium" style={Styles.title}>
            {'Co-travelers (optional)'}
          </FText>
          {!props.data?.length && (
            <FText style={Styles.subText}>
              Same hotel and flight details as filled above shall be applicable
              to all travelers.
            </FText>
          )}
        </View>
        <FTouchableOpacity
          style={Styles.flexRow}
          hitSlop={Styles.hitSlop}
          onPress={props.onPressCoTraveler}>
          <FImage
            source={props.data?.length ? ImageConst.edit2 : ImageConst.plus}
          />
          <FText type="medium" style={Styles.addDetails}>
            {!props.data?.length ? 'Add' : 'Edit'}
          </FText>
        </FTouchableOpacity>
      </View>
      {!props.data?.length ? null : (
        <View style={Styles.listSubContainer}>{renderPickerChildren()}</View>
      )}
    </View>
  );
}
