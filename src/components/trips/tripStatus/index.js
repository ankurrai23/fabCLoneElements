import React, {useEffect, useRef} from 'react';
import {View, Animated} from 'react-native';
import {Color} from '../../../utils/color';
import FText from '../../../common/rn/FText';
import Styles from './Styles';
import LinearGradient from 'react-native-linear-gradient';
import {TRIP_STATUS} from '../../../utils/Constants';

const AnimatedLinearGradient = Animated.createAnimatedComponent(LinearGradient);

const TripStatus = ({statusObj}) => {
  const transX = useRef(new Animated.Value(-100)).current;

  useEffect(() => {
    if (statusObj?.key === TRIP_STATUS.IN_SHORTLISTING) {
      Animated.loop(
        Animated.sequence([
          Animated.timing(transX, {
            toValue: 100,
            duration: 1000,
            useNativeDriver: true,
          }),
          Animated.timing(transX, {
            toValue: -50,
            duration: 0,
            delay: 0,
            useNativeDriver: true,
          }),
        ]),
      ).start();
    }
  }, [statusObj]); //eslint-disable-line react-hooks/exhaustive-deps

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
    <View style={Styles.wrap}>
      {statusObj?.key === TRIP_STATUS.IN_SHORTLISTING ? (
        <View style={Styles.shimmerContainer}>
          <Gradient />
          <FText style={Styles.text(Color.DARK_SEA_FOAM)}>
            {statusObj.value}
          </FText>
        </View>
      ) : (
        <FText
          style={[
            Styles.container(statusObj.bgColor),
            Styles.text(statusObj.textColor),
          ]}>
          {statusObj.value}
        </FText>
      )}
    </View>
  );
};

export default TripStatus;
