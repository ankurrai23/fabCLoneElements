import React from 'react';
import {View} from 'react-native';
import {PickerField} from '../../..';
import {DP} from '../../../utils/Dimen';
import {formattedDate} from '../../../utils/Utils';
import Styles from './Styles';

export default function AddHotelDetails({data, errors, ...props}) {
  console.log('add hotel detail', data);
  return (
    <View style={Styles.fill}>
      <View style={Styles.container}>
        <View style={Styles.topContainer}>
          <PickerField
            value={
              data.city?.cityPlaceId
                ? data.city?.city
                : data.preferredLocality?.locality
            }
            error={data.cityError}
            helperText={data.cityErrorString}
            label="Enter city/location"
            labelStyle={Styles.textFieldLabel}
            onPress={props.openGoogleSearch}
          />
          {data.showLocation && (
            <PickerField
              label="Enter preferred locality"
              value={data.preferredLocality.location}
              error={data.preferredLocalityError}
              helperText={data.localityError}
              labelStyle={Styles.textFieldLabel}
              onPress={props.openGoogleSearchLocality}
              topMargin={DP._8}
            />
          )}
          <View style={Styles.datesContainer}>
            <PickerField
              label="Check-in date"
              value={data.checkInDate ? formattedDate(data.checkInDate) : ''}
              error={errors.checkInDate}
              labelStyle={Styles.textFieldLabel}
              onPress={props.openCheckInDatePicker}
              touchContainer={{flex: 0.5, marginRight: DP._8}}
              topMargin={DP._8}
            />
            <PickerField
              label="Check-out date"
              value={data.checkOutDate ? formattedDate(data.checkOutDate) : ''}
              error={data.checkOutDateError}
              helperText={data.checkOutDateError && 'Enter check-out date'}
              labelStyle={Styles.textFieldLabel}
              onPress={props.openCheckOutDatePicker}
              touchContainer={{flex: 0.5, marginLeft: DP._8}}
              topMargin={DP._8}
            />
          </View>
        </View>
        {/* <Button onPress={props.onSubmit}>Done</Button> */}
      </View>
    </View>
  );
}
