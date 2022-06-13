import React from 'react';
import {View} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import MaterialCommunityIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import Entypo from 'react-native-vector-icons/Entypo';
import moment from 'moment';

import {FText, FTouchableOpacity} from '../../..';
import {Color} from '../../../utils/color/index.travelPlus';
import {DP} from '../../../utils/Dimen';
import Styles from './Styles';

export default function FlightDetails(props) {
  function renderRoute() {
    if (props.tripType === 1 || props.tripType === 2) {
      return props.data?.map((item, index) => {
        if (item.remove) return null;
        return (
          <View key={index} style={Styles.renderRoute}>
            <View style={Styles.flexDirectionRow}>
              <View style={{flex: 1}}>
                <FText type="medium" style={Styles.renderValue}>
                  {moment(
                    item.departureDate ? item.departureDate : item.returnDate,
                  ).format('DD') + ' '}
                  <FText style={Styles.monthlabel}>
                    {moment(
                      item.departureDate ? item.departureDate : item.returnDate,
                    ).format('MMM')}
                  </FText>
                </FText>
              </View>
              <View style={Styles.slotContainer}>
                <FText
                  type="medium"
                  style={
                    Styles.slotText
                  }>{`Slot: ${item.startTime} - ${item.endTime}`}</FText>
              </View>
            </View>
            <View style={Styles.routeContainer}>
              <View style={{flex: 1}}>
                <FText style={Styles.cityName}>{item.source}</FText>
              </View>
              <View style={Styles.iconView}>
                <MaterialCommunityIcon
                  name="airplane"
                  size={DP._16}
                  color={Color.GREY_PURPLE}
                  style={Styles.airplane}
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
    } else {
      return (
        <View style={Styles.renderRoute}>
          <View style={Styles.flexDirectionRow}>
            <View style={{flex: 1}}>
              <FText type="medium" style={Styles.renderValue}>
                {moment(props.data[0]?.departureDate).format('DD') + ' '}
                <FText style={Styles.monthlabel}>
                  {moment(props.data[0]?.departureDate).format('MMM')}
                </FText>
              </FText>
            </View>
            <View style={Styles.slotContainer}>
              <FText
                type="medium"
                style={
                  Styles.slotText
                }>{`Slot: ${props.data[0]?.startTime} - ${props.data[0]?.endTime}`}</FText>
            </View>
          </View>
          <View style={Styles.routeContainer}>
            <View style={{flex: 1}}>
              <FText style={Styles.cityName}>{props.data[0]?.source}</FText>
            </View>
            <View style={Styles.iconView}>
              <MaterialCommunityIcon
                name="airplane"
                size={DP._16}
                color={Color.GREY_PURPLE}
                style={Styles.airplane}
              />
            </View>
            <View style={Styles.slotContainer}>
              <FText style={Styles.cityName}>
                {props.data[0]?.destination}
              </FText>
            </View>
          </View>
          <View style={Styles.cityCodeContainer}>
            <View>
              <FText style={Styles.cityCodeLabel}>
                {props.data[0]?.sourceAirportCode}
              </FText>
            </View>
            <View>
              <FText style={Styles.cityCodeLabel}>
                {props.data[0]?.destinationAirportCode}
              </FText>
            </View>
          </View>
        </View>
      );
    }
  }

  //in case of hotel only return null
  if (props.requestType === 'HOTEL' || props.requestType === null) {
    return null;
  }

  return (
    <View
      onLayout={props.onLayout}
      style={[Styles.container, {...props.style}]}>
      <View style={Styles.titleContainer}>
        <FText type="medium" style={Styles.title}>
          Flight(s)
        </FText>
        <FTouchableOpacity
          style={Styles.flexRow}
          hitSlop={Styles.hitSlop}
          onPress={props.onPress}>
          {props.data?.length > 0 ? (
            <Feather name="edit-2" size={DP._12} color={Color.DODGER_BLUE} />
          ) : (
            <Entypo name="plus" size={DP._12} color={Color.DODGER_BLUE} />
          )}
          <FText type="medium" style={Styles.addDetails}>
            {props.data?.length > 0 ? 'Edit' : 'Add'}
          </FText>
        </FTouchableOpacity>
      </View>
      {props.flightError === true ? (
        <FText style={Styles.errorDetailTxt}>{'Enter flight details'}</FText>
      ) : null}
      {props.data?.length > 0 ? (
        <View style={{marginTop: DP._12}}>{renderRoute()}</View>
      ) : null}
      {props.data?.length === 1 && props.tripType === 1 ? (
        <FTouchableOpacity
          onPress={props.onPress}
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
