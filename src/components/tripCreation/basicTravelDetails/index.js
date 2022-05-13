import React from 'react';
import {View} from 'react-native';
import {FText, PickerField} from '../../..';
import {DP} from '../../../utils/Dimen';
import {formattedDate} from '../../../utils/Utils';
import Styles from './Styles';

function BasicTravelDetails({
  errors,
  tripType,
  requestType,
  data,
  openSourceGoogleSearch,
  openDestinationGoogleSearch,
  openReturnDatePicker,
  openDepatureDatePicker,
}) {
  let roundTrip = tripType === 1;
  return (
    <View style={Styles.container}>
      {/* <FText type="medium" style={Styles.title}>
        Basic travel details
      </FText> */}
      {(errors?.sourceError ||
        errors?.destinationError ||
        errors?.defatureDateError ||
        (roundTrip === 1 ? errors?.returnDateError : '')) === true ? (
        <FText style={Styles.errorTitle}>
          {`Please enter basic travel details to add ${
            requestType === 'HOTEL'
              ? 'hotel'
              : requestType === 'FLIGHT'
              ? 'flight'
              : 'flight & hotel'
          } details`}
        </FText>
      ) : null}
      <View style={Styles.innerContainer}>
        <PickerField
          error={errors.sourceError}
          helperText={errors.sourceTextError}
          label="Departure city"
          value={data.source?.name}
          labelStyle={Styles.textFieldLabel}
          onPress={openSourceGoogleSearch}
        />
        <PickerField
          error={errors.destinationError}
          helperText={errors.DestinationTextError}
          label="Arrival city"
          value={data.destination?.name}
          labelStyle={Styles.textFieldLabel}
          onPress={openDestinationGoogleSearch}
        />
        <View style={Styles.datesContainer}>
          <PickerField
            error={errors.defatureDateError}
            label="Departure date"
            value={data.departureDate ? formattedDate(data.departureDate) : ''}
            labelStyle={Styles.textFieldLabel}
            onPress={openDepatureDatePicker}
            touchContainer={
              roundTrip ? {flex: 0.5, marginRight: DP._8} : {flex: 1}
            }
          />
          {roundTrip && (
            <PickerField
              label="Return date"
              value={data.returnDate ? formattedDate(data.returnDate) : ''}
              error={errors.returnDateError}
              labelStyle={Styles.textFieldLabel}
              onPress={openReturnDatePicker}
              touchContainer={{flex: 0.5, marginLeft: DP._8}}
            />
          )}
        </View>
      </View>
    </View>
  );
}

export default BasicTravelDetails;
