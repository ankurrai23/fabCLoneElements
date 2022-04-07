import React from 'react';
import {View} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import moment from 'moment';

import {FText, FTouchableOpacity} from '../../..';
import {Color} from '../../../utils/color/index.travelPlus';
import {DP} from '../../../utils/Dimen';
import Styles from './Styles';

export default function FlightDetails(props) {
  function renderRoute() {
    return props.data?.map((item, index) => {
      return (
        <View key={index} style={Styles.renderRoute}>
          <View style={Styles.flexDirectionRow}>
            <View style={{flex: 1}}>
              <FText type="medium" style={Styles.renderValue}>
                {moment(
                  item.departureDate ? item.departureDate : item.returnDate,
                ).format('DD') + ' '}
                <FText style={Styles.monthlabel}>
                  {moment(item.departureDate).format('MMM')}
                </FText>
              </FText>
            </View>
            <View style={Styles.slotContainer}>
              <FText type="medium" style={Styles.slotText}>{`Slot: ${moment(
                item.startTime,
              ).format('hA')} - ${moment(item.endTime).format('hA')}`}</FText>
            </View>
          </View>
          <View style={Styles.routeContainer}>
            <View style={{flex: 1}}>
              <FText style={Styles.cityName}>{item.source}</FText>
            </View>
            <View style={Styles.iconView}>
              <MaterialIcons
                name="flight-takeoff"
                size={DP._16}
                color={Color.GREY_PURPLE}
              />
            </View>
            <View style={Styles.slotContainer}>
              <FText style={Styles.cityName}>{item.destination}</FText>
            </View>
          </View>
          <View style={Styles.cityCodeContainer}>
            <View>
              <FText style={Styles.cityCodeLabel}>
                {item.sourceAirportCode}
              </FText>
            </View>
            <View>
              <FText style={Styles.cityCodeLabel}>
                {item.destinationAirportCode}
              </FText>
            </View>
          </View>
        </View>
      );
    });
  }

  //in case of hotel only return null
  if (props.requestType === 'HOTEL' || props.requestType === null) {
    return null;
  }

  return (
    <View style={Styles.container}>
      <View style={Styles.titleContainer}>
        <FText type="medium" style={Styles.title}>
          Flight(s)
        </FText>
        <FTouchableOpacity
          style={Styles.flexRow}
          hitSlop={Styles.hitSlop}
          onPress={
            props.data.length > 0
              ? props.goToEditFlightDetail
              : props.goToAddFlightDetails
          }>
          {props.data.length > 0 ? (
            <Feather name="edit-2" size={DP._12} color={Color.DODGER_BLUE} />
          ) : null}
          <FText type="medium" style={Styles.addDetails}>
            {props.data.length > 0 ? 'Edit' : 'Add details'}
          </FText>
        </FTouchableOpacity>
      </View>
      {props.flightError === true ? (
        <FText style={Styles.errorDetailTxt}>{'Enter flight details'}</FText>
      ) : null}
      {props.data.length > 0 ? (
        <View style={{marginTop: DP._12}}>{renderRoute()}</View>
      ) : null}
      {props.data.length === 1 && props.tripType === 1 ? (
        <FTouchableOpacity
          onPress={props.goToAddFlightDetails}
          style={Styles.renderNewRoute}>
          <View style={Styles.innerViewFlight}>
            <FText style={Styles.addFlightTxt}>
              {'Add return flight detail'}
            </FText>
          </View>
        </FTouchableOpacity>
      ) : null}
    </View>
  );
}
