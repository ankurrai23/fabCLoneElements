import {View, Modal, Pressable} from 'react-native';
import React, {useImperativeHandle, useRef, useState} from 'react';
import Button from '../button';
import Animated, {
  interpolate,
  runOnJS,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';
import Styles, {bottomSheetHeight} from './Styles';
import FText from '../../rn/FText';

const ANIMATION_DURATION = 400;

const AnimatedPressable = Animated.createAnimatedComponent(Pressable);

const BottomSheet = React.forwardRef(({title, children}, ref) => {
  const [visible, setVisible] = useState(false);
  const animatedValue = useSharedValue(0);
  const collapse = () => {
    console.log('before collapse', animatedValue.value);
    animatedValue.value = withTiming(0, {duration: ANIMATION_DURATION}, () => {
      runOnJS(setVisible)(false);
      console.log('before collapse', animatedValue.value);
    });
  };
  const expand = () => {
    setVisible(true);
    console.log('before expand', animatedValue.value);
    animatedValue.value = withTiming(1, {duration: ANIMATION_DURATION}, () => {
      console.log('after expand', animatedValue.value);
    });
  };
  useImperativeHandle(ref, () => ({
    collapse,
    expand,
  }));

  const backdropStyle = useAnimatedStyle(() => {
    const opacity = interpolate(animatedValue.value, [0, 1], [0, 1]);
    return {
      opacity,
    };
  });

  const viewStyle = useAnimatedStyle(() => {
    const translateY = interpolate(
      animatedValue.value,
      [0, 1],
      [2 * bottomSheetHeight, bottomSheetHeight],
    );
    return {
      transform: [{translateY}],
    };
  });

  return (
    <Modal visible={visible} transparent={true} animated={true}>
      <AnimatedPressable
        onPress={collapse}
        style={[Styles.backdrop, backdropStyle]}
      />
      <Animated.View style={[Styles.sheet, viewStyle]}>
        <View style={Styles.bar} />
        <FText style={Styles.titleText}>{title}</FText>
        {children}
      </Animated.View>
    </Modal>
  );
});

// const BottomSheet = (props) => {
//   const bottomSheetRef = useRef();
//   return (
//     <View>
//       <Button onPress={() => bottomSheetRef.current.expand()}>
//         Open Sheet
//       </Button>
//       <FBottomSheet ref={bottomSheetRef} {...props} />
//     </View>
//   );
// };

export default BottomSheet;
