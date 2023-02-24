import React, {useImperativeHandle, useMemo, useRef} from 'react';
import {StyleSheet, Pressable} from 'react-native';
import BottomSheet, {
  BottomSheetView,
  useBottomSheetDynamicSnapPoints,
} from '@gorhom/bottom-sheet';
import Animated, {
  Extrapolate,
  interpolate,
  useAnimatedStyle,
} from 'react-native-reanimated';
import {Portal, PortalProvider} from '@gorhom/portal';

const AnimatedPressable = Animated.createAnimatedComponent(Pressable);

const CustomBackdrop = ({animatedIndex, style, onBackdropPress}) => {
  const containerAnimatedStyle = useAnimatedStyle(() => ({
    opacity: interpolate(
      animatedIndex.value,
      [-1, 0],
      [0, 0.8],
      Extrapolate.CLAMP,
    ),
    zIndex: interpolate(
      animatedIndex.value,
      [-1, 0],
      [-1, 0],
      Extrapolate.CLAMP,
    ),
  }));

  const containerStyle = useMemo(
    () => [
      style,
      {
        backgroundColor: '#000000',
      },
      containerAnimatedStyle,
    ],
    [style, containerAnimatedStyle],
  );

  return (
    <Animated.View style={containerStyle}>
      <AnimatedPressable
        onPress={onBackdropPress}
        style={{zIndex: 1, flex: 1}}
      />
    </Animated.View>
  );
};

const FBottomSheet = React.forwardRef(({children}, ref) => {
  const sheetRef = useRef(null);

  useImperativeHandle(
    ref,
    () => ({
      expand: () => {
        sheetRef.current.expand();
      },
      close: () => {
        sheetRef.current.close();
      },
    }),
    [],
  );
  const snapPoints = useMemo(() => ['CONTENT_HEIGHT'], []);
  const {
    animatedHandleHeight,
    animatedSnapPoints,
    animatedContentHeight,
    handleContentLayout,
  } = useBottomSheetDynamicSnapPoints(snapPoints);
  return (
    <Portal>
      <BottomSheet
        ref={sheetRef}
        handleHeight={animatedHandleHeight}
        contentHeight={animatedContentHeight}
        backdropComponent={({animatedIndex}) => (
          <CustomBackdrop
            animatedIndex={animatedIndex}
            style={StyleSheet.absoluteFill}
            onBackdropPress={() => sheetRef.current?.close()}
          />
        )}
        snapPoints={animatedSnapPoints}
        index={-1}
        enablePanDownToClose={true}>
        <BottomSheetView onLayout={handleContentLayout}>
          {children}
        </BottomSheetView>
      </BottomSheet>
    </Portal>
  );
});

export default FBottomSheet;
