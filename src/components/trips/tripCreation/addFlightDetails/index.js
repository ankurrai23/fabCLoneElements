import React from 'react';
import {View, ScrollView} from 'react-native';
import moment from 'moment';

import {Button, FText, PickerField} from '../../../..';
import {formattedDate} from '../../../../utils/Utils';
import Styles from './Styles';
import {DP} from '../../../../utils/Dimen';

export default function AddFlightDetails(props) {
  const {flightDetails, errors} = props;

  function renderReturnForm() {
    if (props.tripType === 1) {
      return (
        <View style={[Styles.topContainer, Styles.separator]}>
          <FText type="medium" style={Styles.title}>
            Return flight
          </FText>
          <PickerField
            label="From"
            value={`${flightDetails[1]?.source} (${flightDetails[1]?.sourceAirportCode})`}
            error={errors.returnFrom}
            labelStyle={Styles.textFieldLabel}
            onPress={props.openGoogleSearchReturnFrom}
          />
          <PickerField
            label="To"
            value={`${flightDetails[1]?.destination} (${flightDetails[1]?.destinationAirportCode})`}
            error={errors.returnTo}
            labelStyle={Styles.textFieldLabel}
            onPress={props.openGoogleSearchReturnTo}
          />
          <PickerField
            label="Departure date"
            value={
              flightDetails[1]?.returnDate
                ? formattedDate(flightDetails[1]?.returnDate)
                : ''
            }
            error={errors.returnDepatureDate}
            labelStyle={Styles.textFieldLabel}
            onPress={props.openDatePickerreturn}
          />
          <FText style={Styles.timeSlotTitle}>Enter time slot</FText>
          <View style={Styles.datesContainer}>
            <PickerField
              label="From"
              value={
                flightDetails[1]?.startTime
                  ? moment(flightDetails[1]?.startTime).format('hh:mm A')
                  : ''
              }
              error={errors.returnFromTime}
              labelStyle={Styles.textFieldLabel}
              onPress={props.returnStartTimePicker}
              touchContainer={{flex: 0.5, marginRight: DP._8}}
            />
            <FText style={Styles.dash}>-</FText>
            <PickerField
              label="To"
              value={
                flightDetails[1]?.endTime
                  ? moment(flightDetails[1]?.endTime).format('hh:mm A')
                  : ''
              }
              error={errors.returnToTime}
              labelStyle={Styles.textFieldLabel}
              onPress={props.returnEndTimePicker}
              touchContainer={{flex: 0.5, marginLeft: DP._8}}
            />
          </View>
        </View>
      );
    }
  }
  return (
    <View style={Styles.fill}>
      <ScrollView contentContainerStyle={Styles.container}>
        <View style={Styles.topContainer}>
          {props.tripType === 1 && (
            <FText type="medium" style={Styles.title}>
              Onward flight
            </FText>
          )}
          <PickerField
            label="From"
            value={`${flightDetails[0]?.source} (${flightDetails[0]?.sourceAirportCode})`}
            error={errors.onwardFrom}
            labelStyle={Styles.textFieldLabel}
            onPress={props.openGoogleSearchOnwardFrom}
          />
          <PickerField
            label="To"
            value={`${flightDetails[0]?.destination} (${flightDetails[0]?.destinationAirportCode})`}
            error={errors.onwardTo}
            labelStyle={Styles.textFieldLabel}
            onPress={props.openGoogleSearchOnwardTo}
          />
          <PickerField
            label="Departure date"
            value={
              flightDetails[0]?.departureDate
                ? formattedDate(flightDetails[0]?.departureDate)
                : ''
            }
            error={errors.onwardDepatureDate}
            labelStyle={Styles.textFieldLabel}
            onPress={props.openDatePickeronWord}
          />
          <FText style={Styles.timeSlotTitle}>Enter time slot</FText>
          <View style={Styles.datesContainer}>
            <PickerField
              label="From"
              value={
                flightDetails[0]?.startTime
                  ? moment(flightDetails[0]?.startTime).format('hh:mm A')
                  : ''
              }
              error={errors.onwoardFromTime}
              labelStyle={Styles.textFieldLabel}
              onPress={props.onWardStartTimePicker}
              touchContainer={{flex: 0.5, marginRight: DP._8}}
            />
            <FText style={Styles.dash}>-</FText>
            <PickerField
              label="To"
              value={
                flightDetails[0]?.endTime
                  ? moment(flightDetails[0]?.endTime).format('hh:mm A')
                  : ''
              }
              error={errors.onwardToTime}
              labelStyle={Styles.textFieldLabel}
              onPress={props.onWardEndTimePicker}
              touchContainer={{flex: 0.5, marginLeft: DP._8}}
            />
          </View>
        </View>
        {renderReturnForm()}
        <Button style={Styles.button} onPress={props.onSubmit}>
          Done
        </Button>
      </ScrollView>
    </View>
  );
}
