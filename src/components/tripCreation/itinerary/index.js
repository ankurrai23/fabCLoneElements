import React from 'react';
import {LayoutAnimation, View} from 'react-native';
import {
  Button,
  FText,
  FTouchableOpacity,
  PickerField,
  RemoveItinerary,
} from '../../..';
import Styles from './styles';
import Feather from 'react-native-vector-icons/Feather';
import {DP} from '../../../utils/Dimen';
import {Color} from '../../../utils/color/index.fabhotel';
import {formattedDate} from '../../../utils/Utils';
const ItineraryCard = (props) => {
  const onEditClicked = () => {
    props?.editClicked(props?.index);
    LayoutAnimation.easeInEaseOut();
  };
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
                  ? formattedDate(props?.itinerary?.departureDate)
                  : ''}
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
            touchContainer={{marginBottom: DP._8}}
            bottomMargin={
              !ifEveryFieldisEmpty && props?.errors?.departureCityError
                ? DP._16
                : 0
            }
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
            touchContainer={{marginBottom: DP._8}}
            bottomMargin={
              !ifEveryFieldisEmpty && props?.errors?.arrivalCityError
                ? DP._16
                : 0
            }
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
                  ? formattedDate(props?.itinerary?.departureDate)
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
                marginBottom: props?.showSaveButton ? DP._8 : DP._16,
                ...departureDateStyle,
              }}
              bottomMargin={
                !ifEveryFieldisEmpty && props?.errors?.departureDateError
                  ? DP._16
                  : 0
              }
            />
            {props?.showReturnDate && (
              <PickerField
                label={'Return date'}
                value={
                  props?.itinerary?.returnDate
                    ? formattedDate(props?.itinerary?.returnDate)
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
                  marginBottom: props?.showSaveButton ? DP._8 : DP._16,
                }}
                bottomMargin={
                  !ifEveryFieldisEmpty && props?.errors?.returnDateError
                    ? DP._16
                    : 0
                }
              />
            )}
          </View>
        </View>
      </View>
      {props?.showSaveButton && (
        <Button
          disabled={
            props?.source?.name === null ||
            props?.destination?.name === null ||
            props?.departureDate === null
          }
          onPress={() => {
            props?.saveClicked(props?.index);
          }}
          type="SECONDARY"
          textFont={'medium'}
          style={Styles.btnStyle(
            props?.itinerary?.source?.name,
            props?.itinerary?.destination?.name,
            props?.itinerary?.departureDate,
          )}
          textStyle={Styles.btnTextStyle(
            props?.itinerary?.source?.name,
            props?.itinerary?.destination?.name,
            props?.itinerary?.departureDate,
          )}>
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
