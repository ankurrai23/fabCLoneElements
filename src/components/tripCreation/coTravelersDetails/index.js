import {View} from 'react-native';
import React from 'react';
import Feather from 'react-native-vector-icons/Feather';

import {FSwitch, FText, FTouchableOpacity, PickerField} from '../../..';
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
          <FTouchableOpacity onPress={() => props.removeItem(index)}>
            <Feather name="x" color={Color.DODGER_BLUE} size={DP._16} />
          </FTouchableOpacity>
        </View>
      );
    });
  }

  function getHelperText() {
    if (props.data?.length) {
      return `${props.data.length} ${Utils.getPluralText(
        props.data.length,
        'co-traveler',
        false,
      )}`;
    }
    return props.error;
  }

  return (
    <View style={Styles.container}>
      <View style={Styles.topContainer}>
        <View style={Styles.titleContainer}>
          <FText style={Styles.title}>Are there any co-travelers?</FText>
          <FText style={Styles.subText}>
            Same hotel and flight details as filled above shall be applicable to
            all travelers.
          </FText>
        </View>
        <FSwitch
          value={props.isCoTravellersEnabled}
          onChange={props.onCoTravellersToggle}
        />
      </View>
      {props.isCoTravellersEnabled && (
        <PickerField
          onPress={props.onPressCoTraveler}
          label="Select co-travelers"
          value={props.data?.length}
          error={props.coTravelerError}
          helperText={getHelperText()}>
          {renderPickerChildren()}
        </PickerField>
      )}
    </View>
  );
}
