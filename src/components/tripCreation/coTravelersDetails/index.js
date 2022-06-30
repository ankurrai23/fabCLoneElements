import {View} from 'react-native';
import React from 'react';
import Feather from 'react-native-vector-icons/Feather';
import Entypo from 'react-native-vector-icons/Entypo';

import {FText, FTouchableOpacity} from '../../..';
import Styles from './Styles';
import {Color} from '../../../utils/color/index.travelPlus';
import {DP} from '../../../utils/Dimen';
import Utils from '../../../utils/Utils';

export default function CoTravelersDetails(props) {
  function renderPickerChildren() {
    return props.data?.map((item, index) => {
      return (
        <View style={Styles.coTravelerContainer}>
          <FText style={Styles.coTravelerName}>{item.fullName}</FText>
          {/* <FTouchableOpacity onPress={() => props.removeItem(index)}>
            <Feather name="x" color={Color.DODGER_BLUE} size={DP._16} />
          </FTouchableOpacity> */}
        </View>
      );
    });
  }

  // function getHelperText() {
  //   if (props.data?.length) {
  //     return `${props.data.length} ${Utils.getPluralText(
  //       props.data.length,
  //       'co-traveler',
  //       false,
  //     )}`;
  //   }
  //   return props.error;
  // }

  return (
    <View style={Styles.container}>
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
          {!props.data?.length ? (
            <Entypo name={'plus'} size={DP._12} color={Color.DODGER_BLUE} />
          ) : (
            <Feather name="edit-2" size={DP._12} color={Color.DODGER_BLUE} />
          )}
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
