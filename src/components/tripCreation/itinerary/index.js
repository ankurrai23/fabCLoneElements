import React from 'react';
import {LayoutAnimation, View} from 'react-native';
import {
  Button,
  FText,
  FTouchableOpacity,
  PickerField,
  RemoveItinerary,
  FImage,
} from '../../..';
import Styles from './styles';
import {DP} from '../../../utils/Dimen';
import {Color} from '../../../utils/color/index.fabhotel';
import {formattedDate} from '../../../utils/Utils';
import {ImageConst} from '../../../utils/imageConst/index.travelPlus';
const ItineraryCard = (props) => {
  const onEditClicked = () => {
    props?.editClicked(props?.index);
    LayoutAnimation.easeInEaseOut();
  };
  const collapsedDateFormat = props?.collapsedDateFormat
    ? props?.collapsedDateFormat
    : 'ddd, DD MMM';
  const expandedDateFormat = props?.expandedDateFormat
    ? props?.expandedDateFormat
    : "DD MMM'YY";
  if (props?.shouldCollapse) {
    return (
      <View style={Styles.briefCardBottomMargin(props?.bottomMargin)}>
        <View
          style={[
            Styles.briefCardStyle_container,
            props?.errors?.itineraryDetailsMissingError
              ? {borderColor: Color.PASTEL_RED}
              : {},
          ]}>
          <View style={Styles.briefCardStyle_flexView()}>
            <View style={Styles.briefCardStyle_flex6}>
              <FText numberOfLines={1} type="medium" style={Styles.sourceTxt}>
                {`${props?.itinerary?.source?.city} to ${props?.itinerary?.destination?.city}`}
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
                {props?.itinerary?.departureDate
                  ? formattedDate(
                      props?.itinerary?.departureDate,
                      collapsedDateFormat,
                    )
                  : ''}
              </FText>
            </View>
            <FTouchableOpacity
              onPress={onEditClicked}
              hitSlop={Styles.briefCardStyle_touchView}
              style={Styles.briefCardStyle_flexView()}>
              <FImage source={ImageConst.edit2} />
              <FText style={Styles.briefCardStyle_editTxt}>Edit</FText>
            </FTouchableOpacity>
          </View>
        </View>
        {props?.errors?.itineraryDetailsMissingError ? (
          <FText style={Styles.errorTxt}>
            {props?.errors?.itineraryDetailsMissingError}
          </FText>
        ) : null}
      </View>
    );
  }
  const ifCitiesAndDepartureDateNull =
    props?.errors?.departureCityError &&
    props?.errors?.arrivalCityError &&
    props?.errors?.departureDateError;

  const ifEveryFieldisEmpty =
    (props?.showReturnDate &&
      ifCitiesAndDepartureDateNull &&
      props?.errors.retureDateError) ||
    ifCitiesAndDepartureDateNull
      ? 'Enter basic travel details'
      : '';
  console.log({
    ifCitiesAndDepartureDateNull,
    ifEveryFieldisEmpty,
    showReturn: props?.showReturnDate,
  });

  const departureDateStyle = props?.showReturnDate
    ? {flex: 0.5, marginRight: DP._8}
    : {flex: 1};
  return (
    <>
      <View style={Styles.container}>
        <RemoveItinerary
          itinerary={props?.index + 1}
          _onPressRemove={() => props?.removeClicked(props?.index)}
          showRemove={props?.showRemove}
          showLabel={props?.showLabel}
          errorText={ifEveryFieldisEmpty || props?.errors?.itinerarySameError}
          margin={props?.showLabel || ifEveryFieldisEmpty ? DP._24 : 0}
        />

        <View style={Styles.innerContainer}>
          <PickerField
            error={
              props?.errors?.itinerarySameError ||
              props?.errors?.departureCityError
            }
            helperText={
              !ifEveryFieldisEmpty ? props?.errors?.departureCityError : ''
            }
            label={'Departure city'}
            value={props?.itinerary?.source?.city}
            labelStyle={Styles.textFieldLabel}
            onPress={() => {
              props?.pickerFieldClicked(
                props?.index,
                FieldNamesEnum.DEPARTURE_CITY,
              );
            }}
            touchContainer={{
              marginBottom:
                !ifEveryFieldisEmpty && props?.errors?.departureCityError
                  ? DP._24
                  : DP._8,
            }}
            // todo: For now let's revert this and wait for confirmation from design team
            // bottomMargin={
            //   !ifEveryFieldisEmpty && props?.errors?.departureCityError
            //     ? DP._16
            //     : 0
            // }
          />
          <PickerField
            error={
              props?.errors?.itinerarySameError ||
              props?.errors?.arrivalCityError
            }
            helperText={
              !ifEveryFieldisEmpty ? props?.errors?.arrivalCityError : ''
            }
            label={'Arrival city'}
            value={props?.itinerary?.destination?.city}
            labelStyle={Styles.textFieldLabel}
            onPress={() => {
              props?.pickerFieldClicked(
                props?.index,
                FieldNamesEnum.ARRIVAL_CITY,
              );
            }}
            touchContainer={{
              marginBottom:
                !ifEveryFieldisEmpty && props?.errors?.arrivalCityError
                  ? DP._24
                  : DP._8,
            }}
            // bottomMargin={
            //   !ifEveryFieldisEmpty && props?.errors?.arrivalCityError
            //     ? DP._16
            //     : 0
            // }
          />
          <View style={Styles.datesContainer}>
            <PickerField
              error={
                props?.errors?.itinerarySameError ||
                props?.errors?.departureDateError
              }
              helperText={
                !ifEveryFieldisEmpty ? props?.errors?.departureDateError : ''
              }
              label={'Departure date'}
              value={
                props?.itinerary?.departureDate
                  ? formattedDate(
                      props?.itinerary?.departureDate,
                      expandedDateFormat,
                    )
                  : null
              }
              labelStyle={Styles.textFieldLabel}
              onPress={() => {
                props?.pickerFieldClicked(
                  props?.index,
                  FieldNamesEnum.DEPARTURE_DATE,
                );
              }}
              touchContainer={{
                marginBottom: props?.showSaveButton
                  ? !ifEveryFieldisEmpty && props?.errors?.departureDateError
                    ? DP._24
                    : DP._8
                  : !ifEveryFieldisEmpty && props?.errors?.departureDateError
                  ? DP._24
                  : DP._16,
                ...departureDateStyle,
              }}
              // bottomMargin={
              //   !ifEveryFieldisEmpty && props?.errors?.departureDateError
              //     ? DP._16
              //     : 0
              // }
            />
            {props?.showReturnDate && (
              <PickerField
                label={'Return date'}
                value={
                  props?.itinerary?.returnDate
                    ? formattedDate(
                        props?.itinerary?.returnDate,
                        expandedDateFormat,
                      )
                    : null
                }
                error={props?.errors?.returnDateError}
                helperText={
                  !ifEveryFieldisEmpty ? props?.errors?.returnDateError : ''
                }
                labelStyle={Styles.textFieldLabel}
                onPress={() => {
                  props?.pickerFieldClicked(
                    props?.index,
                    FieldNamesEnum.RETURN_DATE,
                  );
                }}
                touchContainer={{
                  flex: 0.5,
                  marginLeft: DP._8,
                  marginBottom: props?.showSaveButton
                    ? !ifEveryFieldisEmpty && props?.errors?.returnDateError
                      ? DP._24
                      : DP._8
                    : !ifEveryFieldisEmpty && props?.errors?.returnDateError
                    ? DP._24
                    : DP._16,
                }}
                // bottomMargin={
                //   !ifEveryFieldisEmpty && props?.errors?.returnDateError
                //     ? DP._16
                //     : 0
                // }
              />
            )}
          </View>
        </View>
      </View>
      {props?.showSaveButton && (
        <Button
          disabled={!props?.isDirty}
          onPress={() => {
            props?.saveClicked(props?.index);
          }}
          type="SECONDARY"
          textFont={'medium'}
          style={Styles.btnStyle(
            props?.isDirty,
            props?.expandedItineraryMargin,
          )}
          textStyle={Styles.btnTextStyle(props?.isDirty)}>
          Save
        </Button>
      )}
    </>
  );
};

export const FieldNamesEnum = {
  DEPARTURE_CITY: 'DEPARTURE_CITY',
  ARRIVAL_CITY: 'ARRIVAL_CITY',
  DEPARTURE_DATE: 'DEPARTURE_DATE',
  RETURN_DATE: 'RETURN_DATE',
};

export default ItineraryCard;
