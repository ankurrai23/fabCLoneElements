import React from 'react';
import {View} from 'react-native';
import MaterialCommunityIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import moment from 'moment';

import {FText, FTouchableOpacity, FImage} from '../../..';
import {Color} from '../../../utils/color/index.travelPlus';
import {DP} from '../../../utils/Dimen';
import Styles from './Styles';
import {ImageConst} from '../../../utils/imageConst/index.travelPlus';

export default function FlightDetails(props) {
  function renderRoute() {
    return props.data?.map((item, index) => {
      return (
        <View key={index} style={Styles.renderRoute}>
          <View style={Styles.flexDirectionRow}>
            <View style={Styles.Flex}>
              <FText type="medium" style={Styles.renderValue}>
                {moment(item.departureDate).format('DD') + ' '}
                <FText style={Styles.monthlabel}>
                  {moment(item.departureDate).format('MMM')}
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
            <View style={Styles.Flex}>
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
          <FImage
            source={props.data?.length ? ImageConst.edit2 : ImageConst.plus}
          />
          <FText type="medium" style={Styles.addDetails}>
            {props.data?.length > 0 ? 'Edit' : 'Add'}
          </FText>
        </FTouchableOpacity>
      </View>
      {!!props.error === true ? (
        <FText style={Styles.errorDetailTxt}>{props.error}</FText>
      ) : null}
      {props.data?.length > 0 ? (
        <View style={Styles.itemContainer}>{renderRoute()}</View>
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
