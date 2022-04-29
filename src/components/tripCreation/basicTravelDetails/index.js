import React from 'react';
import {View} from 'react-native';
import {FText, PickerField} from '../../..';
import Button from '../../../common/components/button';
import {DP} from '../../../utils/Dimen';
import {formattedDate} from '../../../utils/Utils';
import Styles from './Styles';
import Feather from 'react-native-vector-icons/Feather';
import {Color} from '../../../utils/color/index.travelPlus';
import FTouchableOpacity from '../../../common/rn/FTouchableOpacity';
import AntDesign from 'react-native-vector-icons/AntDesign';

const BasicTravel = ({
  errors,
  data,
  roundTrip,
  openSourceGoogleSearch,
  openDestinationGoogleSearch,
  openDepatureDatePicker,
  openReturnDatePicker,
  multiCity,
}) => {
  return (
    <>
      <PickerField
        error={errors.sourceError}
        helperText={errors.sourceTextError}
        label="From"
        value={data.source?.name}
        labelStyle={Styles.textFieldLabel}
        onPress={openSourceGoogleSearch}
      />
      <PickerField
        error={errors.destinationError}
        helperText={errors.DestinationTextError}
        label="Destination"
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
      {multiCity && (
        <Button type="SECONDARY" style={Styles.btnStyle}>
          Save
        </Button>
      )}
    </>
  );
};

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
  let multiCity = tripType === 2;
  return (
    <View style={Styles.container}>
      <FText type="medium" style={Styles.title}>
        Basic travel details
      </FText>
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
        {/* <PickerField
          error={errors.sourceError}
          helperText={errors.sourceTextError}
          label="From"
          value={data.source?.name}
          labelStyle={Styles.textFieldLabel}
          onPress={openSourceGoogleSearch}
        />
        <PickerField
          error={errors.destinationError}
          helperText={errors.DestinationTextError}
          label="Destination"
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
        </View> */}

        {/* <BasicTravel
          errors={errors}
          data={data}
          roundTrip={roundTrip}
          openSourceGoogleSearch={openSourceGoogleSearch}
          openDestinationGoogleSearch={openDestinationGoogleSearch}
          openDepatureDatePicker={openDepatureDatePicker}
          openReturnDatePicker={openReturnDatePicker}
          multiCity={multiCity}
        /> */}

        <View style={Styles.removeItinarary}>
          <FText type="medium" style={[Styles.removeTxt, {color: Color.DARK}]}>
            Itinerary 1
          </FText>
          <FTouchableOpacity style={Styles.datesContainer}>
            <AntDesign name="delete" size={DP._16} color={Color.PASTEL_RED} />
            <FText
              type="medium"
              style={[Styles.removeTxt, {color: Color.PASTEL_RED}]}>
              Remove
            </FText>
          </FTouchableOpacity>
        </View>

        <View style={Styles.listContainer}>
          <View style={Styles.flexView()}>
            <View style={Styles.flex6}>
              <FText numberOfLines={1} type="medium" style={Styles.sourceTxt}>
                Delhi to Mumbai
              </FText>
            </View>
            <View style={Styles.iteneryView}>
              <FText style={Styles.itineraryTxt}>Itinerary 1</FText>
            </View>
          </View>
          <View style={Styles.flexView('margin')}>
            <View style={Styles.flex6}>
              <FText style={Styles.dateTxt}>Thu, 24 Nov</FText>
            </View>
            <FTouchableOpacity
              hitSlop={Styles.touchView}
              style={Styles.flexView()}>
              <Feather name="edit-2" size={DP._15} color={Color.DODGER_BLUE} />
              <FText style={Styles.editTxt}>Edit</FText>
            </FTouchableOpacity>
          </View>
        </View>
        <FTouchableOpacity style={Styles.addCityBtnView}>
          <FText style={Styles.addCityTxt}>+ Add a city</FText>
        </FTouchableOpacity>
      </View>
    </View>
  );
}

export default BasicTravelDetails;
