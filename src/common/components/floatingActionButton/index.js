import React, {useState, useEffect} from 'react';
import {Animated, Easing, View, TouchableNativeFeedback} from 'react-native';

import {BlurView} from '@react-native-community/blur';
import Styles from './Styles';

import FText from '../../rn/FText';
import FTouchableOpacity from '../../rn/FTouchableOpacity';

import {DP} from '../../../utils/Dimen';
import Icon from '../../../assets/icons/Icon';

const FloatingAction = ({
  onPressTripRequest,
  onPressExpenseClaim,
  floatingAction,
  setFloatingAction,
}) => {
  const [isVisible, setIsVisible] = useState(floatingAction);
  const [animation] = useState(new Animated.Value(0));
  const spin = animation.interpolate({
    inputRange: [0, 1],
    outputRange: ['90deg', '45deg'],
  });

  useEffect(() => {
    toggleOpen(floatingAction);
  }, [floatingAction]);

  const toggleOpen = (val) => {
    if (val) {
      Animated.timing(animation, {
        toValue: 1,
        duration: 150,
        easing: Easing.linear,
        useNativeDriver: true,
      }).start();
      setIsVisible(true);
      setFloatingAction(true);
    } else {
      Animated.timing(animation, {
        toValue: 0,
        duration: 150,
        easing: Easing.linear,
        useNativeDriver: true,
      }).start();
      setIsVisible(false);
      setFloatingAction(false);
    }
  };

  const bagStyle = {
    zIndex: animation.interpolate({
      inputRange: [0, 1],
      outputRange: [-1, 1],
    }),
    transform: [
      {scale: animation},
      {
        translateY: animation.interpolate({
          inputRange: [0, 1],
          outputRange: [0, -120],
        }),
      },
    ],
  };

  const rupeesStyle = {
    zIndex: animation.interpolate({
      inputRange: [0, 1],
      outputRange: [-1, 1],
    }),
    transform: [
      {scale: animation},
      {
        translateY: animation.interpolate({
          inputRange: [0, 1],
          outputRange: [0, -60],
        }),
      },
    ],
  };

  function _onPressTripRequest() {
    toggleOpen(false);
    onPressTripRequest();
  }

  function _onPressExpenseClaim() {
    toggleOpen(false);
    onPressExpenseClaim();
  }

  return (
    <>
      {isVisible ? (
        <FTouchableOpacity
          onPress={() => toggleOpen(false)}
          style={Styles.absolute}>
          <BlurView
            style={Styles.absolute}
            blurType="light"
            blurAmount={5}
            reducedTransparencyFallbackColor="transparent"
          />
        </FTouchableOpacity>
      ) : null}
      <View style={Styles.container}>
        <TouchableNativeFeedback
          hitSlop={Styles.hitSlopTouchTrip}
          background={TouchableNativeFeedback.Ripple('#EEE')}
          onPress={_onPressTripRequest}>
          <Animated.View style={[Styles.newView, bagStyle]}>
            <Animated.View style={Styles.optionView}>
              <Icon.Briefcase width={DP._20} height={DP._20} />
            </Animated.View>
            <Animated.View style={Styles.textPosition}>
              <FText type="medium">{' Raise a trip request '}</FText>
            </Animated.View>
          </Animated.View>
        </TouchableNativeFeedback>
        <TouchableNativeFeedback
          hitSlop={Styles.hitSlopTouch}
          background={TouchableNativeFeedback.Ripple('#EEE')}
          onPress={_onPressExpenseClaim}>
          <Animated.View style={[Styles.newView, rupeesStyle]}>
            <Animated.View style={Styles.optionView}>
              <Icon.Rupee />
            </Animated.View>
            <Animated.View style={Styles.textPosition}>
              <FText type="medium">{' Add expense claim '}</FText>
            </Animated.View>
          </Animated.View>
        </TouchableNativeFeedback>
        <TouchableNativeFeedback
          useForeground={false}
          background={TouchableNativeFeedback.Ripple('#EEE')}
          onPress={() => toggleOpen(!isVisible)}>
          <Animated.View style={[Styles.button, Styles.addBtn]}>
            <Animated.View style={{transform: [{rotate: spin}]}}>
              <Icon.Plus />
            </Animated.View>
          </Animated.View>
        </TouchableNativeFeedback>
      </View>
    </>
  );
};

export default FloatingAction;
