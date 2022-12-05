import {View} from 'react-native';
import React from 'react';
import Styles from './Styles';
import {Gesture, GestureDetector} from 'react-native-gesture-handler';
import Animated, {
  Extrapolation,
  interpolate,
  useAnimatedStyle,
  useSharedValue,
} from 'react-native-reanimated';
import {Color} from '../../../utils/color/index.travelPlus';

const LeftThumb = ({style, initialPosition, finalPosition, thumbPosition}) => {
  const offsetX = useSharedValue(0);
  const position = thumbPosition;
  const panGesture = Gesture.Pan()
    .onUpdate((e) => {
      position.value = offsetX.value + e.translationX;
    })
    .onEnd(() => {
      offsetX.value = position.value;
    });

  const animatedStyle = useAnimatedStyle(() => {
    const translateX = interpolate(
      position.value,
      [0, finalPosition.value],
      [0, finalPosition.value],
      {
        extrapolateLeft: Extrapolation.CLAMP,
        extrapolateRight: Extrapolation.CLAMP,
      },
    );
    return {
      transform: [
        {
          translateX: translateX,
        },
      ],
    };
  });

  return (
    <GestureDetector gesture={panGesture} require>
      <Animated.View style={[Styles.thumbStyle, animatedStyle, style]} />
    </GestureDetector>
  );
};

const RightThumb = ({style, viewWidth, thumbPosition, finalPosition}) => {
  const offsetX = useSharedValue(0);
  const position = thumbPosition;
  const panGesture = Gesture.Pan()
    .onStart((e) => {
      offsetX.value = position.value;
    })
    .onUpdate((e) => {
      position.value = offsetX.value + e.translationX;
    })
    .onEnd(() => {
      offsetX.value = position.value;
    });

  const animatedStyle = useAnimatedStyle(() => {
    const translateX = interpolate(
      position.value,
      [viewWidth.value + 48, finalPosition.value - 24],
      [viewWidth.value + 48, finalPosition.value - 24],
      {
        extrapolateLeft: Extrapolation.CLAMP,
        extrapolateRight: Extrapolation.CLAMP,
      },
    );
    return {
      transform: [
        {
          translateX: translateX,
        },
      ],
    };
  }, [viewWidth]);

  return (
    <GestureDetector gesture={panGesture} shouldCancelWhenOutside={true}>
      <Animated.View style={[Styles.thumbStyle, animatedStyle, style]} />
    </GestureDetector>
  );
};

const Slider = () => {
  const widthRef = useSharedValue(0);
  const leftThumbPosition = useSharedValue(0);
  const rightThumbPosition = useSharedValue(0);

  const filledPortionFromLeft = useAnimatedStyle(() => ({
    width: interpolate(
      leftThumbPosition.value,
      [0, rightThumbPosition.value],
      [0, rightThumbPosition.value],
      {
        extrapolateLeft: Extrapolation.CLAMP,
        extrapolateRight: Extrapolation.CLAMP,
      },
    ),
  }));

  const filledPortionFromRight = useAnimatedStyle(() => ({
    width: interpolate(
      rightThumbPosition.value,
      [leftThumbPosition.value + 48, widthRef.value],
      [leftThumbPosition.value + 48, widthRef.value],
      {
        extrapolateLeft: Extrapolation.CLAMP,
        extrapolateRight: Extrapolation.CLAMP,
      },
    ),
    transform: [{scaleX: -1}],
  }));

  return (
    <View style={Styles.container}>
      <View
        style={Styles.unfilledBar}
        onLayout={(e) => {
          console.log('size', e.nativeEvent.layout.width);
          widthRef.value = e.nativeEvent.layout.width;
          rightThumbPosition.value = e.nativeEvent.layout.width - 24;
        }}
      />
      <Animated.View
        style={[
          Styles.filledBarStyle,
          {backgroundColor: Color.TWILIGHT_BLUE},
          filledPortionFromRight,
        ]}
      />
      <Animated.View style={[Styles.filledBarStyle, filledPortionFromLeft]} />
      <LeftThumb
        style={Styles.leftThumbStyle}
        thumbPosition={leftThumbPosition}
        finalPosition={rightThumbPosition}
      />
      <RightThumb
        style={Styles.rightThumbStyle}
        thumbPosition={rightThumbPosition}
        viewWidth={leftThumbPosition}
        finalPosition={widthRef}
      />
    </View>
  );
};

export default Slider;
