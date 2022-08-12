import React from 'react';
import {View} from 'react-native';
import Styles from './Styles';
import Animated from 'react-native-reanimated';
import FText, {FONT_TYPE} from '../../../common/rn/FText';
import FImage from '../../../common/rn/FImage';
import FTouchableOpacity from '../../../common/rn/FTouchableOpacity';
import {DP} from '../../../utils/Dimen';
import {Color} from '../../../utils/color/index.fabhotel';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {Strings} from '../../../utils/strings/index.travelPlus';

const AnimatedMaterialCommunityIcon = Animated.createAnimatedComponent(
  MaterialCommunityIcons,
);

export default function FlightPreferenceCard({
  width,
  height,
  opacity,
  onPress,
  onTapToSetPreferences,
  flightInfo,
}) {
  return (
    <FTouchableOpacity onPress={onPress} style={Styles.container}>
      <Animated.View style={Styles.animatedContainer(width, height)}>
        <View style={Styles.flightLogoAndNameContainer}>
          <FImage
            style={Styles.imageStyle}
            source={{uri: flightInfo.airlineIcon}}
          />
          <FText style={Styles.flightName}>{flightInfo.airline}</FText>
          <FText style={Styles.flightNumber}>
            {' '}
            | {flightInfo.airlineCode}-{flightInfo.flightNumber}
          </FText>
          <View style={Styles.flexGrow_1} />
          <Animated.Text style={Styles.flightPrice(opacity)}>
            {flightInfo.price}
          </Animated.Text>
        </View>
        <View style={Styles.flightTimeContainer}>
          <FText style={{color: Color.GREY_PURPLE}}>
            {flightInfo.sourceAirportCode}
          </FText>
          {/*<Animated.View style={[Styles.dot, {opacity: opacity}]} />*/}
          {/*<Animated.View style={[Styles.line, {opacity: opacity}]} />*/}
          <AnimatedMaterialCommunityIcon
            name="airplane"
            size={DP._20}
            color={Color.LIGHT_BLUEY_GREY}
            style={[Styles.airplane, {opacity: opacity}]}
          />
          {/*<Animated.View style={[Styles.line, {opacity: opacity}]} />*/}
          {/*<Animated.View style={[Styles.whiteDot, {opacity: opacity}]} />*/}
          <Animated.Text
            type={FONT_TYPE.MEDIUM}
            style={Styles.destinationAirPortCode(opacity)}>
            {flightInfo.destinationAirportCode}
          </Animated.Text>
        </View>
        <View style={Styles.flightDurationContainer}>
          <View style={Styles.nameAndDurationContainer}>
            <FText style={Styles.flightTimeTextStyle}>
              {flightInfo.departureTime}
            </FText>
            <Animated.Text
              style={{
                fontSize: DP._10,
                color: Color.GREYISH_PURPLE,
                opacity: opacity,
              }}>
              {flightInfo.flightDuration}
            </Animated.Text>
          </View>
          <View style={Styles.dot_two} />
          <View style={Styles.nameAndDurationContainer}>
            <Animated.Text
              style={{
                fontSize: DP._10,
                color: Color.GREYISH_PURPLE,
                opacity: opacity,
              }}>
              {flightInfo.stops}
            </Animated.Text>

            <Animated.Text
              style={[Styles.flightTimeTextStyle, {opacity: opacity}]}>
              {flightInfo.arrivalTime}
            </Animated.Text>
          </View>
        </View>
        <Animated.View style={{opacity: opacity}}>
          <FTouchableOpacity
            onPress={onTapToSetPreferences}
            disabled={flightInfo.disablePref}
            style={Styles.buttonStyle(
              flightInfo.disablePref,
              flightInfo.preference,
            )}>
            <FText
              type={FONT_TYPE.MEDIUM}
              style={{
                color: flightInfo.disablePref
                  ? Color.WHITE
                  : flightInfo.preference
                  ? Color.DARK
                  : Color.TWILIGHT_BLUE,
              }}>
              {Strings.tapToSetPreference(flightInfo.preference)}
            </FText>
            <View style={Styles.preferenceContainer}>
              <FText
                type={FONT_TYPE.MEDIUM}
                style={{
                  fontSize: DP._18,
                  color: flightInfo.disablePref
                    ? Color.LIGHT_BLUEY_GREY
                    : Color.DARK,
                }}>
                {flightInfo.preference}
              </FText>
            </View>
          </FTouchableOpacity>
        </Animated.View>
      </Animated.View>
    </FTouchableOpacity>
  );
}
