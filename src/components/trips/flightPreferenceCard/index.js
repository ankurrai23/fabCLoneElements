import React from 'react';
import {View} from 'react-native';
import Styles from './Styles';
import Animated from 'react-native-reanimated';
import FText from '../../../common/rn/FText';
import FImage from '../../../common/rn/FImage';
import FTouchableOpacity from '../../../common/rn/FTouchableOpacity';
import {DP} from '../../../utils/Dimen';
import {Color} from '../../../utils/color';
import {shadowObj} from '../../../utils/Utils';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

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
    <FTouchableOpacity onPress={onPress} style={{...shadowObj}}>
      <Animated.View style={[Styles.container, {width: width, height: height}]}>
        <View style={Styles.flightLogoAndNameContainer}>
          <FImage
            style={{
              width: DP._32,
              height: DP._32,
              backgroundColor: Color.DARK,
            }}
          />
          <FText style={Styles.flightName}>{flightInfo.carrier}</FText>
          <FText style={Styles.flightNumber}>
            {' '}
            | {flightInfo.airline}-{flightInfo.flightNumber}
          </FText>
          <View style={Styles.flexGrow_1} />
          <Animated.Text style={{opacity: opacity, fontFamily: 'Rubik-Bold'}}>
            {flightInfo.price}
          </Animated.Text>
        </View>
        <View style={Styles.flightTimeContainer}>
          <FText style={Styles.flightTimeTextStyle}>
            {flightInfo.departureTime}
          </FText>
          <Animated.View style={[Styles.dot, {opacity: opacity}]} />
          <Animated.View style={[Styles.line, {opacity: opacity}]} />
          <AnimatedMaterialCommunityIcon
            name="airplane"
            size={DP._20}
            color={Color.LIGHT_BLUEY_GREY}
            style={[Styles.airplane, {opacity: opacity}]}
          />
          <Animated.View style={[Styles.line, {opacity: opacity}]} />
          <Animated.View style={[Styles.whiteDot, {opacity: opacity}]} />
          <Animated.Text
            style={[Styles.flightTimeTextStyle, {opacity: opacity}]}>
            {flightInfo.arrivalTime}
          </Animated.Text>
        </View>
        <View style={Styles.flightDurationContainer}>
          <View style={Styles.nameAndDurationContainer}>
            <FText type="medium">{flightInfo.sourceAirportCode}</FText>
            <Animated.Text
              style={{
                fontSize: DP._12,
                color: Color.GREYISH_PURPLE,
                opacity: opacity,
              }}>
              {flightInfo.duration}
            </Animated.Text>
          </View>
          <View style={Styles.dot_two} />
          <View style={Styles.nameAndDurationContainer}>
            <Animated.Text
              style={{
                fontSize: DP._12,
                color: Color.GREYISH_PURPLE,
                opacity: opacity,
              }}>
              {flightInfo.journeyType}
            </Animated.Text>
            <Animated.Text
              type="medium"
              style={{opacity: opacity, fontFamily: 'Rubik-Medium'}}>
              {flightInfo.destinationAirportCode}
            </Animated.Text>
          </View>
        </View>
        <Animated.View style={{opacity: opacity}}>
          <FTouchableOpacity
            onPress={onTapToSetPreferences}
            style={Styles.buttonStyle(flightInfo.preference)}>
            <FText type="medium" style={{color: Color.TWILIGHT_BLUE}}>
              Tap to {flightInfo.preference ? 'reset' : 'set'} preference
            </FText>
            <View style={Styles.preferenceContainer}>
              <FText type="medium" style={{fontSize: DP._18}}>
                {flightInfo.preference}
              </FText>
            </View>
          </FTouchableOpacity>
        </Animated.View>
      </Animated.View>
    </FTouchableOpacity>
  );
}
