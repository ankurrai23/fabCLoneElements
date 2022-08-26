import React from 'react';
import {View} from 'react-native';
import moment from 'moment';

import FText, {FONT_TYPE} from '../../../common/rn/FText';
import FTouchableOpacity from '../../../common/rn/FTouchableOpacity';
import {Color} from '../../../utils/color/index.travelPlus';
import {DP} from '../../../utils/Dimen';
import Styles from './Styles';
import {Strings} from '../../../utils/strings/index.travelPlus';
import {TRIP_TYPE} from '../../../utils/Constants';
import Icon from '../../../assets/icons/Icon';

const DATE = 'DD'; // 12, 13
const MONTH = 'MMM'; // Jan, Feb

export default function FlightDetails(props) {
  function renderRoute() {
    return props.data?.map((item, index) => {
      return (
        <View key={index} style={Styles.renderRoute}>
          <View style={Styles.flexDirectionRow}>
            <View style={Styles.Flex}>
              <FText type={FONT_TYPE.MEDIUM} style={Styles.renderValue}>
                {moment(item.departureDate).format(DATE) + ' '}
                <FText style={Styles.monthlabel}>
                  {moment(item.departureDate).format(MONTH)}
                </FText>
              </FText>
            </View>
            <View style={Styles.slotContainer}>
              <FText type={FONT_TYPE.MEDIUM} style={Styles.slotText}>
                {Strings.slotInfo(item.startTime, item.endTime)}
              </FText>
            </View>
          </View>
          <View style={Styles.routeContainer}>
            <View style={Styles.Flex}>
              <FText style={Styles.cityName}>{item.source}</FText>
            </View>
            <View style={Styles.iconView}>
              <Icon.Aeroplane
                width={DP._16}
                height={DP._16}
                fill={Color.GREY_PURPLE}
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
        <FText type={FONT_TYPE.MEDIUM} style={Styles.title}>
          {Strings.flights}
        </FText>
        <FTouchableOpacity
          style={Styles.flexRow}
          hitSlop={Styles.hitSlop}
          onPress={props.onPress}>
          {props.data?.length ? (
            <Icon.EditFilled width={DP._10} height={DP._10} />
          ) : (
            <Icon.Plus
              width={DP._16}
              height={DP._16}
              stroke={Color.DODGER_BLUE}
            />
          )}
          <FText type={FONT_TYPE.MEDIUM} style={Styles.addDetails}>
            {props.data?.length > 0 ? Strings.edit : Strings.add}
          </FText>
        </FTouchableOpacity>
      </View>
      {!!props.error === true ? (
        <FText style={Styles.errorDetailTxt}>{props.error}</FText>
      ) : null}
      {props.data?.length > 0 ? (
        <View style={Styles.itemContainer}>{renderRoute()}</View>
      ) : null}
      {props.data?.length === 1 && props.tripType === TRIP_TYPE.ROUND_TRIP ? (
        <FTouchableOpacity
          onPress={props.onPress}
          style={Styles.renderNewRoute}>
          <View style={Styles.innerViewFlight}>
            <FText style={Styles.addFlightTxt}>{Strings.addReturnFlight}</FText>
          </View>
        </FTouchableOpacity>
      ) : null}
    </View>
  );
}
