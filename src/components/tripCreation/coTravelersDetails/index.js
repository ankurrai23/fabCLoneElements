import {View} from 'react-native';
import React from 'react';
import Feather from 'react-native-vector-icons/Feather';

import {FSwitch, FText, FTouchableOpacity, PickerField} from '../../..';
import Styles from './Styles';
import {Color} from '../../../utils/color/index.travelPlus';
import {DP} from '../../../utils/Dimen';

export default function CoTravelersDetails({
  isCoTravellersEnabled,
  onCoTravellersToggle,
  onPressCoTraveler,
  coTravellers,
  coTravelerError,
  removeItem,
  error,
}) {
  function getHelperText() {
    if (coTravellers?.length) {
      return `${coTravellers.length} co-travelers`;
    }
    return error;
  }

  function renderPickerChildren() {
    return coTravellers?.map((item, index) => {
      return (
        <View style={Styles.coTravelerContainer}>
          <FText style={Styles.coTravelerName}>{item.fullName}</FText>
          <FTouchableOpacity onPress={() => removeItem(index)}>
            <Feather name="x" color={Color.DODGER_BLUE} size={DP._16} />
          </FTouchableOpacity>
        </View>
      );
    });
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
          value={isCoTravellersEnabled}
          onChange={onCoTravellersToggle}
        />
      </View>
      {isCoTravellersEnabled && (
        <PickerField
          onPress={onPressCoTraveler}
          label="Enter co-travelers email IDs"
          value={coTravellers?.length}
          error={coTravelerError}
          helperText={getHelperText()}>
          {renderPickerChildren()}
        </PickerField>
      )}
    </View>
  );
}
