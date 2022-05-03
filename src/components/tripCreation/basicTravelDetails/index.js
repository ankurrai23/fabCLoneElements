import React, {useState} from 'react';
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
import moment from 'moment';

const BasicTravel = ({
  errors,
  data,
  roundTrip,
  openSourceGoogleSearch,
  openDestinationGoogleSearch,
  openDepatureDatePicker,
  openReturnDatePicker,
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
  saveBasicTravelData,
  basicTravelDetailsList,
  editBasicDetailData,
  editBasicDetailDataPosition,
}) {
  let roundTrip = tripType === 1;
  let multiCity = tripType === 2;
  const [showDetailFeilds, setShowDetailFeilds] = useState(true);
  const [editBasicDetailIndex, seteditBasicDetailIndex] = useState('');

  const basicTravelData = () => {
    saveBasicTravelData();
    setShowDetailFeilds(false);
  };

  const editBasicTravelData = (index) => {
    setShowDetailFeilds(false);
    editBasicDetailData(index);
  };

  const editBasicDetailPosition = (index) => {
    seteditBasicDetailIndex(index);
    editBasicDetailDataPosition(index);
  };

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
        {multiCity &&
          basicTravelDetailsList?.map((item, index) => {
            return (
              <>
                {index !== editBasicDetailIndex ? (
                  <View style={Styles.listContainer}>
                    <View style={Styles.flexView()}>
                      <View style={Styles.flex6}>
                        <FText
                          numberOfLines={1}
                          type="medium"
                          style={Styles.sourceTxt}>
                          {`${item.source.name} to ${item.destination.name}`}
                        </FText>
                      </View>
                      <View style={Styles.iteneryView}>
                        <FText style={Styles.itineraryTxt}>{`Itinerary ${
                          index + 1
                        }`}</FText>
                      </View>
                    </View>
                    <View style={Styles.flexView('margin')}>
                      <View style={Styles.flex6}>
                        <FText style={Styles.dateTxt}>
                          {moment(item.departureDate).format('ddd, DD MMM')}
                        </FText>
                      </View>
                      <FTouchableOpacity
                        onPress={() => editBasicDetailPosition(index)}
                        hitSlop={Styles.touchView}
                        style={Styles.flexView()}>
                        <Feather
                          name="edit-2"
                          size={DP._15}
                          color={Color.DODGER_BLUE}
                        />
                        <FText style={Styles.editTxt}>Edit</FText>
                      </FTouchableOpacity>
                    </View>
                  </View>
                ) : (
                  <>
                    <BasicTravel
                      errors={errors}
                      data={data}
                      roundTrip={roundTrip}
                      openSourceGoogleSearch={openSourceGoogleSearch}
                      openDestinationGoogleSearch={openDestinationGoogleSearch}
                      openDepatureDatePicker={openDepatureDatePicker}
                      openReturnDatePicker={openReturnDatePicker}
                    />
                    {/* {multiCity && index === basicTravelDetailsList.length - 1 && ( */}
                    <Button
                      disabled={
                        item.source.name === null ||
                        item.destination.name === null ||
                        item.departureDate === null
                      }
                      onPress={() => editBasicTravelData(index)}
                      type="SECONDARY"
                      textFont={'medium'}
                      style={Styles.btnStyle(item)}
                      textStyle={Styles.btnTextStyle(item)}>
                      Save
                    </Button>
                    {/* )} */}
                  </>
                )}
              </>
            );
          })}
        {multiCity && !showDetailFeilds && basicTravelDetailsList.length < 5 && (
          <FTouchableOpacity
            onPress={() => setShowDetailFeilds(true)}
            style={Styles.addCityBtnView}>
            <FText style={Styles.addCityTxt}>+ Add a city</FText>
          </FTouchableOpacity>
        )}
        {showDetailFeilds && multiCity && (
          <>
            <BasicTravel
              errors={errors}
              data={data}
              roundTrip={roundTrip}
              openSourceGoogleSearch={openSourceGoogleSearch}
              openDestinationGoogleSearch={openDestinationGoogleSearch}
              openDepatureDatePicker={openDepatureDatePicker}
              openReturnDatePicker={openReturnDatePicker}
            />
            <Button
              disabled={
                data.source.name === null ||
                data.destination.name === null ||
                data.departureDate === null
              }
              onPress={() => basicTravelData()}
              type="SECONDARY"
              textFont={'medium'}
              style={Styles.btnStyle(data)}
              textStyle={Styles.btnTextStyle(data)}>
              Save
            </Button>
          </>
        )}
        {tripType !== 2 ? (
          <BasicTravel
            errors={errors}
            data={data}
            roundTrip={roundTrip}
            openSourceGoogleSearch={openSourceGoogleSearch}
            openDestinationGoogleSearch={openDestinationGoogleSearch}
            openDepatureDatePicker={openDepatureDatePicker}
            openReturnDatePicker={openReturnDatePicker}
          />
        ) : null}
        {/* <View style={Styles.removeItinarary}>
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
        </View> */}
      </View>
    </View>
  );
}

export default BasicTravelDetails;
