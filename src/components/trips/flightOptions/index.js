import React from 'react';
import {View, Dimensions} from 'react-native';
import {PanGestureHandler, State, FlatList} from 'react-native-gesture-handler';
import PropTypes from 'prop-types';
import FlightCard from '../flightCard';
import Styles from './Styles';
import {Data} from './data';
import {DP} from '../../../utils/Dimen';
import Animated, {Extrapolate, Value, Easing} from 'react-native-reanimated';
import {shadowObj} from '../../../utils/Utils';
const {width} = Dimensions.get('window');

let offset = 0;
const animatedValue = new Value(0);

const FlightOptions = (props) => {
  const handlePanGestureChange = (e) => {
    if (e.nativeEvent.state === State.END) {
      offset = e.nativeEvent.translationX < -50 ? -100 : 0;
      Animated.timing(animatedValue, {
        toValue: e.nativeEvent.translationX < -40 ? -100 : 0,
        duration: 300,
        easing: Easing.inOut(Easing.ease),
      }).start();
    }
    if (e.nativeEvent.state === State.ACTIVE) {
      animatedValue.setValue(e.nativeEvent.translationX + offset);
    }
  };

  const handleOnPressAnimation = (value) => {
    offset = value;
    Animated.timing(animatedValue, {
      toValue: value,
      duration: 300,
      easing: Easing.inOut(Easing.ease),
    }).start();
  };

  const cardHeight = animatedValue.interpolate({
    inputRange: [-100, 0],
    outputRange: [125, 185],
    extrapolate: Extrapolate.CLAMP,
  });

  const cardWidth = animatedValue.interpolate({
    inputRange: [-100, 0],
    outputRange: [0.19 * width, 0.8 * width - DP._12],
    extrapolate: Extrapolate.CLAMP,
  });

  const opacity = animatedValue.interpolate({
    inputRange: [-50, 0],
    outputRange: [0, 1],
    extrapolate: Extrapolate.CLAMP,
  });

  const cardHeight_2 = animatedValue.interpolate({
    inputRange: [-100, 0],
    outputRange: [185, 125],
    extrapolate: Extrapolate.CLAMP,
  });

  const cardWidth_2 = animatedValue.interpolate({
    inputRange: [-100, 0],
    outputRange: [0.8 * width - DP._12, 0.19 * width],
    extrapolate: Extrapolate.CLAMP,
  });

  const opacity_2 = animatedValue.interpolate({
    inputRange: [-50, -10],
    outputRange: [1, 0],
    extrapolate: Extrapolate.CLAMP,
  });

  const cardPaddingLeft = animatedValue.interpolate({
    inputRange: [-100, 0],
    outputRange: [0, 8],
    extrapolate: Extrapolate.CLAMP,
  });
  const cardPaddingRight = animatedValue.interpolate({
    inputRange: [-100, 0],
    outputRange: [8, 0],
    extrapolate: Extrapolate.CLAMP,
  });

  return (
    <>
      <PanGestureHandler
        onGestureEvent={handlePanGestureChange}
        onHandlerStateChange={handlePanGestureChange}>
        <View style={Styles.container}>
          <FlatList
            data={props.departFlightList}
            renderItem={() => (
              <Animated.View
                style={{
                  paddingBottom: DP._8,
                  ...shadowObj,
                  paddingLeft: cardPaddingLeft,
                  paddingRight: DP._4,
                }}>
                <FlightCard
                  height={cardHeight}
                  width={cardWidth}
                  opacity={opacity}
                  preference={3}
                  onPress={() => handleOnPressAnimation(0)}
                />
              </Animated.View>
            )}
            keyExtractor={(_, index) => `abc${index}`}
            showsVerticalScrollIndicator={false}
          />
          <FlatList
            data={props.departFlightList}
            renderItem={({index}) => (
              <Animated.View
                style={{
                  paddingRight: cardPaddingRight,
                  paddingBottom: DP._8,
                  ...shadowObj,
                  paddingLeft: DP._4,
                }}>
                <FlightCard
                  height={cardHeight_2}
                  width={cardWidth_2}
                  opacity={opacity_2}
                  onPress={() => handleOnPressAnimation(-100)}
                  onTapPrefrences={() => console.log(index, 'return')}
                />
              </Animated.View>
            )}
            keyExtractor={(_, index) => `abc${index}`}
            showsVerticalScrollIndicator={false}
          />
        </View>
      </PanGestureHandler>
    </>
  );
};

export default FlightOptions;

FlightOptions.propTypes = {
  departFlightList: PropTypes.array,
  returnFlightList: PropTypes.array,
};

FlightOptions.defaultProps = {
  departFlightList: Data.departFlightList,
  returnFlightList: Data.returnFlightList,
};
