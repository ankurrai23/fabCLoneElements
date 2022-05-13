import React, {useRef} from 'react';
import {Animated, Dimensions} from 'react-native';
import {PinchGestureHandler, State} from 'react-native-gesture-handler';

const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;

export const ImageZoomViewer = ({item}) => {
  const scale = useRef(new Animated.Value(1)).current;

  const translateX = useRef(new Animated.Value(0)).current;
  const handlePinch = Animated.event([{nativeEvent: {scale: scale}}], {
    useNativeDriver: true,
  });

  const handleChange = (event) => {
    if (event.nativeEvent.oldState === State.ACTIVE) {
      Animated.spring(scale, {
        toValue: 1,
        useNativeDriver: true,
      }).start();
    }
  };

  return (
    <Animated.View>
      <PinchGestureHandler
        onGestureEvent={handlePinch}
        onHandlerStateChange={handleChange}>
        <Animated.Image
          style={[
            {
              height: screenHeight,
              width: screenWidth,
              transform: [{scale: scale}, {translateX: translateX}],
            },
          ]}
          source={{uri: item}}
          resizeMode={'contain'}
        />
      </PinchGestureHandler>
    </Animated.View>
  );
};
