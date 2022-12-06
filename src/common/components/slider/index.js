import {View} from 'react-native';
import React from 'react';
import Styles from './Styles';
import {Gesture, GestureDetector} from 'react-native-gesture-handler';
import Animated, {
  Extrapolation,
  interpolate,
  runOnJS,
  useAnimatedStyle,
  useDerivedValue,
  useSharedValue,
} from 'react-native-reanimated';
import {Color} from '../../../utils/color/index.travelPlus';

const getPositionFromValue = (initialLimit, value, valuePerPixel) => {
  'worklet';
  return (value - initialLimit) / valuePerPixel;
};

const getValueFromPosition = (
  position,
  initialLimit,
  granularity,
  pixelPerGranule,
) => {
  if (granularity > 0) {
    const numOfGranules = Math.round(position / pixelPerGranule);
    return numOfGranules * granularity + initialLimit;
  }
};

const Thumb = ({
  style,
  lowerLimit,
  upperLimit,
  currentPosition,
  finalOffset,
  onChange,
}) => {
  const offsetX = useSharedValue(0);
  const panGesture = Gesture.Pan()
    .onStart(() => {
      offsetX.value = currentPosition.value;
    })
    .onUpdate((e) => {
      let calculatedValue = offsetX.value + e.translationX;
      if (
        calculatedValue > lowerLimit.value &&
        calculatedValue < upperLimit.value
      ) {
        currentPosition.value = calculatedValue;
        runOnJS(onChange)();
      }
    })
    .onEnd(() => {
      finalOffset.value = currentPosition.value;
    });

  const animatedStyle = useAnimatedStyle(() => {
    const translateX = interpolate(
      currentPosition.value,
      [lowerLimit.value, upperLimit.value],
      [lowerLimit.value, upperLimit.value],
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
    <GestureDetector gesture={panGesture}>
      <Animated.View style={[Styles.thumbStyle, animatedStyle, style]} />
    </GestureDetector>
  );
};

const Slider = ({
  initialValue,
  finalValue,
  initialLimit,
  finalLimit,
  granularity,
  onChange,
}) => {
  const barWidth = useSharedValue(0);

  const valuePerPixel = useDerivedValue(() => {
    return (finalLimit - initialLimit) / barWidth.value;
  }, [barWidth]);

  const pixelCountPerGranularity = useDerivedValue(() => {
    return granularity / valuePerPixel.value;
  }, [valuePerPixel]);

  const leftThumbPosition = useDerivedValue(() => {
    return getPositionFromValue(
      initialLimit,
      initialValue,
      valuePerPixel.value,
    );
  });

  const leftThumbOffset = useDerivedValue(() => {
    return getPositionFromValue(
      initialLimit,
      initialValue,
      valuePerPixel.value,
    );
  });

  const rightThumbOffset = useDerivedValue(() => {
    return getPositionFromValue(initialLimit, finalValue, valuePerPixel.value);
  });

  const leftThumbLowerLimit = useSharedValue(0);

  const leftThumbUpperLimit = useDerivedValue(() => {
    return rightThumbOffset.value - 24;
  }, [rightThumbOffset]);

  const rightThumbPosition = useDerivedValue(() => {
    return getPositionFromValue(initialLimit, finalValue, valuePerPixel.value);
  });

  const rightThumbLowerLimit = useDerivedValue(() => {
    return leftThumbOffset.value + 24;
  }, [leftThumbOffset]);

  const rightThumbUpperLimit = useDerivedValue(() => {
    return barWidth.value;
  }, [barWidth]);

  const onThumbPositionChange = () => {
    let initialPosition = getValueFromPosition(
      leftThumbPosition.value,
      initialLimit,
      granularity,
      pixelCountPerGranularity.value,
    );
    let finalPosition = getValueFromPosition(
      rightThumbPosition.value,
      initialLimit,
      granularity,
      pixelCountPerGranularity.value,
    );
    onChange(initialPosition, finalPosition);
  };
  const filledPortionFromLeft = useAnimatedStyle(() => ({
    width: interpolate(
      leftThumbPosition.value,
      [0, rightThumbOffset.value],
      [0, rightThumbOffset.value],
      {
        extrapolateLeft: Extrapolation.CLAMP,
        extrapolateRight: Extrapolation.CLAMP,
      },
    ),
  }));

  const filledPortionFromRight = useAnimatedStyle(() => ({
    width: interpolate(
      rightThumbPosition.value,
      [leftThumbOffset.value, barWidth.value],
      [leftThumbOffset.value, barWidth.value],
      {
        extrapolateLeft: Extrapolation.CLAMP,
        extrapolateRight: Extrapolation.CLAMP,
      },
    ),
  }));

  return (
    <View style={Styles.container}>
      <View
        style={Styles.unfilledBar}
        onLayout={(e) => {
          barWidth.value = e.nativeEvent.layout.width - 24;
          rightThumbOffset.value = e.nativeEvent.layout.width - 12;
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
      <Thumb
        style={Styles.leftThumbStyle}
        currentPosition={leftThumbPosition}
        lowerLimit={leftThumbLowerLimit}
        upperLimit={leftThumbUpperLimit}
        finalOffset={leftThumbOffset}
        onChange={onThumbPositionChange}
      />
      <Thumb
        style={Styles.rightThumbStyle}
        lowerLimit={rightThumbLowerLimit}
        currentPosition={rightThumbPosition}
        upperLimit={rightThumbUpperLimit}
        finalOffset={rightThumbOffset}
        onChange={onThumbPositionChange}
      />
    </View>
  );
};

export default Slider;
