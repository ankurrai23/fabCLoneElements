import {View} from 'react-native';
import React from 'react';
import Styles from './Styles';
import FText, {FONT_TYPE} from '../../../common/rn/FText';
import FTouchableOpacity from '../../../common/rn/FTouchableOpacity';
import {Strings} from '../../../utils/strings/index.travelPlus';
import Icon from '../../../assets/icons/Icon';
import {DP} from '../../../utils/Dimen';
import {Color} from '../../../utils/color/index.travelPlus';

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
          {props.data?.length ? (
            <Icon.EditFilled width={DP._12} height={DP._12} />
          ) : (
            <Icon.Plus
              width={DP._16}
              height={DP._16}
              stroke={Color.DODGER_BLUE}
            />
          )}
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
