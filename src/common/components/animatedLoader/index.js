import {View, StyleSheet} from 'react-native';
import React from 'react';
import {DP} from '../../../utils/Dimen';
import {Color} from '../../../utils/color/index.travelPlus';
import LinearGradient from 'react-native-linear-gradient';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withRepeat,
  withTiming,
} from 'react-native-reanimated';

const AnimatedLinearGradient = Animated.createAnimatedComponent(LinearGradient);

const DEFAULT_INDICATOR_WIDTH = DP._78;
const DEFAULT_ANIMATION_DURATION = 1200;

const AnimatedLoader = ({
  indicatorWidth = DEFAULT_INDICATOR_WIDTH,
  animationDuration = DEFAULT_ANIMATION_DURATION,
  loaderColor = Color.DODGER_BLUE,
  style,
}) => {
  const widthOfParent = useSharedValue(-indicatorWidth);
  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [
        {
          translateX: withRepeat(
            withTiming(widthOfParent.value, {
              duration: animationDuration ?? 1000,
            }),
            -1,
          ),
        },
      ],
    };
  }, []);

  return (
    <View
      onLayout={(e) => {
        widthOfParent.value = e.nativeEvent.layout.width;
      }}
      style={[styles.container(loaderColor), style]}>
      <AnimatedLinearGradient
        colors={[loaderColor + '33', loaderColor]}
        style={[styles.indicator(indicatorWidth), animatedStyle]}
        start={{x: 0, y: 0}}
        end={{x: 1, y: 0}}
        locations={[0, 0.4, 1]}
      />
    </View>
  );
};

export default AnimatedLoader;

const styles = StyleSheet.create({
  container: (backgroundColor) => ({
    height: DP._6,
    width: '100%',
    backgroundColor: backgroundColor + '33',
    borderRadius: DP._7,
    overflow: 'hidden',
  }),
  indicator: (indicatorWidth) => ({
    height: DP._6,
    width: indicatorWidth,
    borderRadius: DP._7,
  }),
});
