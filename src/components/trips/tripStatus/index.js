import React, {useEffect, useRef} from 'react';
import {View, Animated, Easing} from 'react-native';
import {Color} from '../../../utils/color';
import FText from '../../../common/rn/FText';
import Styles from './Styles';
import LinearGradient from 'react-native-linear-gradient';

const AnimatedLinearGradient = Animated.createAnimatedComponent(LinearGradient);

const TripStatus = ({statusObj}) => {
  const transX = useRef(new Animated.Value(-100)).current;

  useEffect(() => {
    if (statusObj?.type === 'IN_SHORTLISTING') {
      Animated.loop(
        Animated.timing(transX, {
          toValue: 80,
          duration: 1000,
          useNativeDriver: true,
          easing: Easing.linear,
        }),
      ).start();
    }
  }, []); //eslint-disable-line react-hooks/exhaustive-deps

  const Gradient = () => (
    <AnimatedLinearGradient
      colors={[
        Color.PALE_TURQUOISE_76,
        Color.ICE + '82',
        Color.PALE_TURQUOISE_76,
      ]}
      start={{x: 0, y: 0}}
      end={{x: 1, y: 0}}
      style={[Styles.gradientStyle, {transform: [{translateX: transX}]}]}
    />
  );

  return (
    <View style={Styles.alignCenter}>
      {statusObj?.type === 'IN_SHORTLISTING' ? (
        <View style={Styles.shimmerContainer}>
          <Gradient />
          <FText style={Styles.text(Color.DARK_SEA_FOAM)}>
            In Shortlisting
          </FText>
        </View>
      ) : (
        <FText
          style={[
            Styles.container(statusObj.color),
            Styles.text(statusObj.color),
          ]}>
          {statusObj.text}
        </FText>
      )}
    </View>
  );
};

export default TripStatus;
