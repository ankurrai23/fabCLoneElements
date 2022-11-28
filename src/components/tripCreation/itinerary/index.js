import React from 'react';
import {View} from 'react-native';

import Button, {BUTTON_TYPE} from '../../../common/components/button';
import FText, {FONT_TYPE} from '../../../common/rn/FText';
import FTouchableOpacity from '../../../common/rn/FTouchableOpacity';
import PickerField from '../../../common/components/pickerField';
import RemoveItinerary from '../removeItinerary';

import Styles from './styles';
import {DP} from '../../../utils/Dimen';
import {Color} from '../../../utils/color/index.fabhotel';
import {formattedDate} from '../../../utils/Utils';
import {Strings} from '../../../utils/strings/index.travelPlus';
import Icon from '../../../assets/icons/Icon';

const DATE_FORMAT = "DD MMM'YY"; // 1 Aug'22
const DATE_WITH_DAY_FORMAT = 'ddd, DD MMM'; // Mon, 1 Aug

const ItineraryCard = (props) => {
  const onEditClicked = () => {
    props?.editClicked(props?.index);
  };
  const collapsedDateFormat = props?.collapsedDateFormat
    ? props?.collapsedDateFormat
    : DATE_FORMAT;
  const expandedDateFormat = props?.expandedDateFormat
    ? props?.expandedDateFormat
    : DATE_WITH_DAY_FORMAT;
  if (props?.shouldCollapse) {
    return (
      <View
        style={Styles.briefCardBottomMargin(
          props?.briefCardBottomMargin,
          props?.errors?.itineraryDetailsMissingError,
        )}>
        <View
          style={[
            Styles.briefCardStyle_container,
            props?.errors?.itineraryDetailsMissingError
              ? {borderColor: Color.PASTEL_RED}
              : {},
          ]}>
          <View style={Styles.briefCardStyle_flexView()}>
            <View style={Styles.briefCardStyle_flex6}>
              <FText
                numberOfLines={1}
                type={FONT_TYPE.MEDIUM}
                style={Styles.sourceTxt}>
                {Strings.sourcToDestination(
                  props?.itinerary?.source?.city,
                  props?.itinerary?.destination?.city,
                )}
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
              <Icon.EditFilled width={DP._12} height={DP._12} />
              <FText style={Styles.briefCardStyle_editTxt}>
                {Strings.edit}
              </FText>
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
      ? Strings.basicTravelDetails
      : '';

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
          margin={
            props?.showLabel
              ? props?.errors?.itinerarySameError
                ? DP._10
                : DP._24
              : ifEveryFieldisEmpty
              ? DP._10
              : 0
          }
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
            label={Strings.departureCity}
            value={props?.itinerary?.source?.city}
            labelStyle={Styles.textFieldLabel}
            onPress={() => {
              props?.pickerFieldClicked(
                props?.index,
                FieldNamesEnum.DEPARTURE_CITY,
              );
            }}
            bottomMargin={
              !ifEveryFieldisEmpty && props?.errors?.departureCityError
                ? 0
                : DP._6
            }
          />
          <PickerField
            topMargin={DP._18}
            error={
              props?.errors?.itinerarySameError ||
              props?.errors?.arrivalCityError
            }
            helperText={
              !ifEveryFieldisEmpty ? props?.errors?.arrivalCityError : ''
            }
            label={Strings.arrivalCity}
            value={props?.itinerary?.destination?.city}
            labelStyle={Styles.textFieldLabel}
            onPress={() => {
              props?.pickerFieldClicked(
                props?.index,
                FieldNamesEnum.ARRIVAL_CITY,
              );
            }}
            bottomMargin={
              !ifEveryFieldisEmpty && props?.errors?.arrivalCityError
                ? 0
                : DP._6
            }
          />
          <View style={Styles.datesContainer}>
            <PickerField
              topMargin={DP._18}
              error={
                props?.errors?.itinerarySameError ||
                props?.errors?.departureDateError
              }
              helperText={
                !ifEveryFieldisEmpty ? props?.errors?.departureDateError : ''
              }
              label={Strings.departureDate}
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
              bottomMargin={
                props?.showSaveButton
                  ? !ifEveryFieldisEmpty && props?.errors?.departureDateError
                    ? DP._18
                    : DP._24
                  : !ifEveryFieldisEmpty && props?.errors?.departureDateError
                  ? DP._18
                  : DP._32
              }
              touchContainer={{
                ...departureDateStyle,
              }}
            />
            {props?.showReturnDate && (
              <PickerField
                topMargin={DP._18}
                label={Strings.returnDate}
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
                bottomMargin={
                  props?.showSaveButton
                    ? !ifEveryFieldisEmpty && props?.errors?.returnDateError
                      ? DP._18
                      : DP._24
                    : !ifEveryFieldisEmpty && props?.errors?.returnDateError
                    ? DP._18
                    : DP._32
                }
                touchContainer={{
                  flex: 0.5,
                  marginLeft: DP._8,
                }}
              />
            )}
          </View>
        </View>
      </View>
      {props?.showSaveButton && (
        <Button
          // disabled={!props?.isDirty}
          onPress={() => {
            props?.saveClicked(props?.index);
          }}
          type={BUTTON_TYPE.SECONDARY}
          textFont={FONT_TYPE.MEDIUM}
          style={Styles.btnStyle(props?.expandedItineraryMargin)}
          textStyle={Styles.btnTextStyle}>
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
