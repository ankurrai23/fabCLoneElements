import React from 'react';
import {LayoutAnimation, View} from 'react-native';
import {Button, FText, FTouchableOpacity, PickerField} from '../../..';
import Styles from './styles';
import Feather from 'react-native-vector-icons/Feather';
import {DP} from '../../../utils/Dimen';
import {Color} from '../../../utils/color/index.fabhotel';

const ItineraryCard = (props) => {
  const onEditClicked = () => {
    props?.editClicked(props?.index);
    LayoutAnimation.easeInEaseOut();
  };

  if (props?.shouldCollapse) {
    return (
      <View style={Styles.briefCardStyle_container}>
        <View style={Styles.briefCardStyle_flexView()}>
          <View style={Styles.briefCardStyle_flex6}>
            <FText numberOfLines={1} type="medium" style={Styles.sourceTxt}>
              {`${props?.itinerary?.sourceCity} to ${props?.itinerary?.destinationCity}`}
            </FText>
          </View>
          <View style={Styles.briefCardStyle_iteneryView}>
            <FText style={Styles.briefCardStyle_itineraryTxt}>
              {props?.label}
            </FText>
          </View>
        </View>
        <View style={Styles.briefCardStyle_flexView('margin')}>
          <View style={Styles.briefCardStyle_flex6}>
            <FText style={Styles.briefCardStyle_dateTxt}>
              {props?.itinerary?.departureDate}
            </FText>
          </View>
          <FTouchableOpacity
            onPress={onEditClicked}
            hitSlop={Styles.briefCardStyle_touchView}
            style={Styles.briefCardStyle_flexView()}>
            <Feather name="edit-2" size={DP._15} color={Color.DODGER_BLUE} />
            <FText style={Styles.briefCardStyle_editTxt}>Edit</FText>
          </FTouchableOpacity>
        </View>
      </View>
    );
  }
  return (
    <>
      <View style={Styles.container}>
        {/* {(departureCityError.error ||
            arrivalCityError.error ||
            departureDateError.error ||
            (isRoundTrip ? returnDateError.error : '')) === true ? (
            <FText style={Styles.errorTitle}>
                {`Please enter basic travel details to add ${requestType === 'HOTEL'
                    ? 'hotel'
                    : requestType === 'FLIGHT'
                        ? 'flight'
                        : 'flight & hotel'
                    } details`}
            </FText>
            ) : null} */}
        <View style={Styles.innerContainer}>
          <PickerField
            // error={departureCityError.error}
            // helperText={departureCityError.errorText}
            label={'Departure city'}
            value={props?.itinerary?.sourceCity}
            labelStyle={Styles.textFieldLabel}
            onPress={() => {
              props?.pickerFieldClicked(props?.index, 'departure city');
            }}
          />
          <PickerField
            // error={arrivalCityError.error}
            // helperText={arrivalCityError.errorText}
            label={'Arrival city'}
            value={props?.itinerary?.destinationCity}
            labelStyle={Styles.textFieldLabel}
            onPress={() => {
              props?.pickerFieldClicked(props?.index, 'arrival city');
            }}
          />
          <View style={Styles.datesContainer}>
            <PickerField
              // error={errors.defatureDateError}
              label={'Departure date'}
              value={props?.itinerary?.departureDate}
              labelStyle={Styles.textFieldLabel}
              onPress={() => {
                props?.pickerFieldClicked(props?.index, 'departure date');
              }}
              // touchContainer={
              //   showReturnDate ? {flex: 0.5, marginRight: DP._8} : {flex: 1}
              // }
            />
            {props?.showReturnDate && (
              <PickerField
                label={'Return date'}
                value={props?.itinerary?.returnDate}
                // error={errors.returnDateError}
                labelStyle={Styles.textFieldLabel}
                onPress={() => {
                  props?.pickerFieldClicked(props?.index, 'return date');
                }}
                // touchContainer={{flex: 0.5, marginLeft: DP._8}}
              />
            )}
          </View>
        </View>
      </View>
      {props?.showSaveButton && (
        <Button
          // disabled={
          //   sourceCity === null ||
          //   destinationCity === null ||
          //   departureDate === null
          // }
          onPress={() => {
            props?.saveClicked(props?.index, {});
          }}
          type="SECONDARY"
          textFont={'medium'}
          style={Styles.btnStyle(
            props?.itinerary?.sourceCity,
            props?.itinerary?.destinationCity,
            props?.itinerary?.departureDate,
          )}
          textStyle={Styles.btnTextStyle(
            props?.itinerary?.sourceCity,
            props?.itinerary?.destinationCity,
            props?.itinerary?.departureDate,
          )}>
          Save
        </Button>
      )}
      {/*<DateTimePickerModal*/}
      {/*  isVisible={!!datePicker}*/}
      {/*  mode="date"*/}
      {/*  date={selectedDate}*/}
      {/*  minimumDate={minDate}*/}
      {/*  onConfirm={onDateSelect}*/}
      {/*  onCancel={onDateCancel}*/}
      {/*/>*/}
    </>
  );
};

export default ItineraryCard;
