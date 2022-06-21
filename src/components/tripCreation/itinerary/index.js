import React  from 'react';
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
import { formattedDate } from '../../../utils/Utils';
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
              {`${props?.itinerary?.source?.name} to ${props?.itinerary?.destination?.name}`}
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
              {props?.itinerary?.departureDate ? formattedDate(props?.itinerary?.departureDate) : ""}
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
      <RemoveItinerary
        itinerary={props?.index + 1}
        _onPressRemove={() => props?.removeClicked(props?.index)}
        showRemove={props?.showRemove}
        showLabel={props?.showLabel}
      />

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
            value={props?.itinerary?.source?.name}
            labelStyle={Styles.textFieldLabel}
            onPress={() => {
              props?.pickerFieldClicked(props?.index, FieldNamesEnum.DEPARTURE_CITY);
            }}
          />
          <PickerField
            // error={arrivalCityError.error}
            // helperText={arrivalCityError.errorText}
            label={'Arrival city'}
            value={props?.itinerary?.destination?.name}
            labelStyle={Styles.textFieldLabel}
            onPress={() => {
              props?.pickerFieldClicked(props?.index, FieldNamesEnum.ARRIVAL_CITY);
            }}
          />
          <View style={Styles.datesContainer}>
            <PickerField
              // error={errors.defatureDateError}
              label={'Departure date'}
              value={props?.itinerary?.departureDate ? formattedDate(props?.itinerary?.departureDate) : null}
              labelStyle={Styles.textFieldLabel}
              onPress={() => {
                props?.pickerFieldClicked(props?.index, FieldNamesEnum.DEPARTURE_DATE);
              }}
              touchContainer={
                props?.showReturnDate
                  ? {flex: 0.5, marginRight: DP._8}
                  : {flex: 1}
              }
            />
            {props?.showReturnDate && (
              <PickerField
                label={'Return date'}
                value={props?.itinerary?.returnDate ? formattedDate(props?.itinerary?.returnDate) : null}
                // error={errors.returnDateError}
                labelStyle={Styles.textFieldLabel}
                onPress={() => {
                  props?.pickerFieldClicked(props?.index, FieldNamesEnum.RETURN_DATE);
                }}
                touchContainer={{flex: 0.5, marginLeft: DP._8}}
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
            props?.saveClicked(props?.index, {});
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
