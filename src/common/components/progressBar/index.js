import React, {useEffect, useRef} from 'react';
import {View, StyleSheet, Animated} from 'react-native';
import Styles from './Styles';
import {Color} from '../../../utils/color';

const ProgressBar = ({style, limit, current}) => {
  const counter = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    load(current);
  }, [current]);

  const load = (value) => {
    Animated.timing(counter, {
      toValue: value,
      duration: 300,
      useNativeDriver: false,
    }).start();
  };

  const width = counter.interpolate({
    inputRange: [0, limit ? limit : 2],
    outputRange: ['0%', '100%'],
    extrapolate: 'clamp',
  });

  return (
    <>
      <View style={Styles.progressBar(style)}>
        <Animated.View
          style={
            ([StyleSheet.absoluteFill],
            {
              backgroundColor: style?.fillColor
                ? style.fillColor
                : Color.TWILIGHT_BLUE,
              width,
            })
          }
        />
      </View>
    </>
  );
};

export default ProgressBar;
